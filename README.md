# Grey Dental 



## 1. Project Overview

Grey Dental is a continuing-education and community platform for dental professionals. It is a marketing site plus two role-based dashboards: students enroll in courses, register for workshops, take assessments, and download resources; admins manage learners, courses, workshops, resources, certificates, and analytics.

What it is:

- A Next.js App Router web application served on Vercel (production: `https://grey-coral.vercel.app`).
- A Supabase-hosted backend (Postgres + Auth + Row Level Security).
- A Stripe-integrated checkout that currently runs in a demo mode until real keys are supplied.

What it is not:

- A native mobile app.
- A live payments system (Stripe keys are placeholders today).
- A complete LMS: no video hosting, grading workflow, or progress tracking beyond an integer percentage.

## 2. System Architecture

The system is a single Next.js 16 application. Browsers talk to:

1. **Next.js pages/components** (React 19, server + client components).
2. **Supabase** directly from the browser for auth (sign-up, login, OAuth).
3. **Next.js API routes** (`/api/*`) for all data mutations/reads that need server-side secrets; these call Supabase with the user's session cookies.
4. **Stripe** via `/api/checkout` and `/api/webhooks/stripe` when real keys are configured.

Main workflows:

- **Sign up / log in:** email+password or Google OAuth via Supabase Auth → middleware refreshes the session cookie → redirect to `/student-dashboard`.
- **Purchase:** `/checkout?course=<slug>` → `POST /api/checkout` → in demo mode, `orders.ts` creates the order and enrollment directly; with live keys, Stripe Checkout Session → webhook `checkout.session.completed` → enrollment.
- **Content access:** student dashboard pages call `/api/courses`, `/api/workshops`, `/api/resources` and render seeded data.
- **Assessment:** student opens `/student-dashboard/assessments/[id]` → MCQ questions loaded from Supabase → on submit, score stored; leaving the tab auto-scores 0 (anti-cheat).

Generated architecture diagrams live in [`docs/diagrams/`](docs/diagrams/): system context, request lifecycle, purchase/enrollment flow, and data model. Rebuild them with `npm run docs:build`.

## 3. Technology Stack

| Technology | Why it is used |
|------------|----------------|
| Next.js 16 (App Router, Turbopack) | Routing, server/client rendering, API routes, deployment target on Vercel |
| React 19 | UI component model |
| TypeScript | Static typing across app, lib, and tests |
| Tailwind CSS v4 | Styling (via `@tailwindcss/postcss`) |
| Supabase (`@supabase/ssr`, `@supabase/supabase-js`) | Postgres database, auth, RLS, storage |
| Stripe (`stripe` SDK) | Checkout sessions and webhooks (demo mode until keys are real) |
| framer-motion | Animations on landing pages |
| lucide-react | Icons |
| Playwright | End-to-end browser tests |
| Vitest | Unit tests for pure logic in `src/lib/` |
| HTML5 `<video>` | Lecture playback from `public/videos/`; no third-party hosting or DRM |
| ESLint + eslint-config-next | Linting |
| `pg` | Direct Postgres access used by setup scripts |
| Python (`python-docx`, Pillow) | Generates the architecture diagrams and the Word document |

## 4. Repository Structure

```
Greydental/
├── src/
│   ├── app/                    # App Router pages and API routes
│   │   ├── api/                # Route handlers (checkout, courses, …)
│   │   ├── admin-dashboard/    # Admin pages
│   │   ├── student-dashboard/  # Student pages
│   │   ├── auth/callback/      # OAuth/email callback handler
│   │   └── …                   # Marketing pages (about, courses, …)
│   ├── components/             # All React UI components (one per file)
│   ├── hooks/                  # useCurrentUser
│   ├── lib/                    # Server/client utilities (see Section 6)
│   └── middleware.ts           # Session refresh + route protection
├── supabase/                   # SQL schemas and seed data
├── scripts/                    # Node scripts + build-docs.py
├── e2e/                        # Playwright specs and global setup
├── public/                     # Static assets
│   └── videos/                 # Lecture video (lecture.mp4)
├── docs/                       # Documentation and generated diagrams
│   └── diagrams/               # PNG architecture diagrams
├── .env.example                # Template for environment variables
├── USER_TODO.md                # Manual Supabase/env steps (human-owned)
└── playwright.config.ts
```

## 5. Configuration

Environment variables (copy `.env.example` to `.env.local`):

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL (no `/rest/v1` suffix) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon public key |
| `SUPABASE_SERVICE_ROLE_KEY` | For webhooks/E2E | Service role key; enables confirmed-user registration, Stripe webhooks, E2E provisioning |
| `STRIPE_SECRET_KEY` | No (demo if dummy) | Stripe secret key; `*_dummy` triggers demo mode |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | For live webhooks | Signing secret for `/api/webhooks/stripe` |
| `E2E_BASE_URL` | No | Playwright target (defaults to production URL) |
| `E2E_STUDENT_EMAIL` / `E2E_STUDENT_PASSWORD` | For auth E2E | Student test account |
| `E2E_ADMIN_EMAIL` / `E2E_ADMIN_PASSWORD` | For auth E2E | Admin test account |

`next.config.ts` only pins the Turbopack root to `process.cwd()`. `tsconfig.json` uses `@/*` → `./src/*` path aliasing.

## 6. Shared Infrastructure

### Core types (`src/lib/supabase/types.ts`)

| Field | Type | Description |
|-------|------|-------------|
| UserRole | `"student" \| "instructor" \| "admin"` | Role enum on profiles |
| Profile | object | `id`, `full_name`, `role`, `institution`, `specialty`, `license_number`, `avatar_url`, `phone`, timestamps |
| Course | object | `slug`, `title`, `subtitle`, `instructor_name`, `image_url`, `module_count`, `price_cents`, `status` |
| Enrollment | object | `user_id`, `course_id`, `progress` (0–100), `status` |
| Workshop | object | `slug`, `title`, `location`, `starts_at`, `ends_at`, `capacity`, plus `WorkshopWithMeta` adds `registered_count`, `registered_by_me` |
| Resource | object | `title`, `file_url`, `resource_type`, `category`, `is_public` |
| Order / Assessment / Certificate … | objects | See `schema_lms_v2.sql` |

### Shared utilities (`src/lib/`)

- `supabase/client.ts` — browser Supabase client; throws if env is missing.
- `supabase/server.ts` — server client bound to Next.js cookies.
- `supabase/middleware.ts` — session refresh + redirects unauthenticated users away from `/student-dashboard`, `/admin-dashboard`, `/checkout`.
- `stripe.ts` — `isStripeDemoMode()` / `getStripe()` guard.
- `money.ts` — `formatUsd(cents)`.
- `orders.ts` — `completeEnrollmentPurchase` used by checkout and webhook.
- `courses.ts`, `workshops.ts`, `resources.ts`, `learners.ts`, `assessments.ts` — data access helpers for API routes.
- `auth-errors.ts`, `auth-navigation.ts` — shared auth helpers.

## 7. Core Component

The core of the system is the request path through **middleware → Supabase session → API routes → RLS-protected tables**. Middleware refreshes the auth cookie on every request, guards protected paths, and all mutations funnel through `/api/*` handlers that rely on Row Level Security policies defined in the SQL files under `supabase/`. If Supabase env vars are missing, middleware refuses access to protected paths (fail-closed).

## 8. Components

### Component: Middleware / session guard

- **Location:** `src/middleware.ts`, `src/lib/supabase/middleware.ts`
- **Role:** Intercepts all non-static requests; refreshes Supabase auth cookies; redirects anonymous users from protected paths to `/login?next=…`.
- **Inputs:**

  | Field | Type | Description |
  |-------|------|-------------|
  | request | `NextRequest` | Incoming request with cookies |
  | env | strings | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` |

- **Processing:**
  1. Read env vars; if missing, log an error and fail closed on protected paths.
  2. Create a server Supabase client bound to request cookies.
  3. Call `getUser()` to refresh the session.
  4. If no user and path is protected, redirect to `/login` with `next` param.
  5. Otherwise pass through with refreshed cookies.
- **Outputs:** `NextResponse` (redirect or passthrough with `Set-Cookie`).
- **Artifacts:** None.

### Component: Auth pages

- **Location:** `src/app/login/page.tsx`, `src/app/signup/page.tsx`, `src/app/forgot-password/page.tsx`, `src/components/LoginPage.tsx`, `src/components/SignupPage.tsx`, `src/components/ForgotPasswordPage.tsx`
- **Role:** Email/password and Google OAuth sign-in; password reset.
- **Inputs:** user credentials; `next` query param.
- **Processing:** Supabase Auth `signInWithPassword` / `signUp` / `signInWithOAuth` / `resetPasswordForEmail`; on Google, redirect through Supabase callback `/auth/callback`.
- **Outputs:** redirect to `/student-dashboard` or OAuth consent.
- **Artifacts:** Supabase auth session cookies.

### Component: Checkout

- **Location:** `src/app/checkout/page.tsx`, `src/components/CheckoutPage.tsx`, `src/app/api/checkout/route.ts`, `src/app/api/checkout/session/route.ts`, `src/components/PaymentSuccess.tsx`
- **Role:** Create an order for a course and grant enrollment.
- **Inputs:**

  | Field | Type | Description |
  |-------|------|-------------|
  | course | string | Course slug from query string |
  | user | session | Must be signed in |

- **Processing:**
  1. `POST /api/checkout` validates session and course.
  2. If Stripe is in demo mode, `completeEnrollmentPurchase` inserts order + enrollment directly.
  3. Otherwise create a Stripe Checkout Session and return its URL.
  4. On success page or webhook, mark order paid and upsert enrollment.
- **Outputs:** `{ url }` or purchase confirmation.
- **Artifacts:** `orders` and `enrollments` rows in Postgres.

### Component: Stripe webhook

- **Location:** `src/app/api/webhooks/stripe/route.ts`
- **Role:** Finalize purchases when Stripe reports `checkout.session.completed`.
- **Inputs:** raw body, `stripe-signature` header, `STRIPE_WEBHOOK_SECRET`.
- **Processing:**
  1. If demo mode, return `{ demo: true }`.
  2. Verify signature; reject on failure.
  3. On `checkout.session.completed`, read `userId`/`courseId` metadata.
  4. Call `completeEnrollmentPurchase` with the service role key.
- **Outputs:** JSON acknowledgement.
- **Artifacts:** `orders.status = 'paid'`, enrollment row.

### Component: Student dashboard

- **Location:** `src/app/student-dashboard/**`, `src/components/Student*.tsx`, `src/components/StudentDashboardShell.tsx`
- **Role:** Course list, progress, assessments, assignments, certificates, workshops, resources, profile, settings, community, help.
- **Inputs:** session user; API responses.
- **Processing:** fetch via `/api/courses`, `/api/enrollments`, `/api/workshops`, `/api/resources`; render tables/cards; `useCurrentUser` hook supplies the signed-in profile.
- **Outputs:** UI pages.
- **Artifacts:** React Query-style fetch state only; all persistence via Supabase.

### Component: Lecture video

- **Location:** `src/components/LectureVideo.tsx`, `src/lib/video.ts`, `public/videos/lecture.mp4`
- **Role:** Plays the lecture recording inline on the course detail page and gives the student and admin dashboards one shared link to the same recording.
- **Inputs:**
  - `src` (optional) — video URL; defaults to `/videos/lecture.mp4`.
  - `poster`, `title`, `className`, `priority` — preview image, accessible name, layout classes, and poster preload flag.
- **Processing:** resolve the URL with `lectureVideoUrl()` → render poster + play button → on click, swap in `<video controls autoplay playsinline>` → stream the static MP4 from `public/`.
- **Outputs:** inline player on the course page; `/videos/lecture.mp4` links from the student dashboard and admin on-demand cards.
- **Artifacts:** none. The MP4 is a static input supplied manually (see `public/videos/README.md`).

### Component: Take assessment

- **Location:** `src/components/TakeAssessmentPage.tsx`, `src/app/student-dashboard/assessments/[id]/page.tsx`, `src/app/api/assessments/route.ts`, `src/app/api/assessments/[id]/route.ts`
- **Role:** Run MCQ assessments with anti-cheat.
- **Inputs:** assessment id; question bank from Supabase.
- **Processing:** load questions → render one at a time → on submit upsert `assessment_submissions` → leaving/hiding the tab records score 0 and sets the cheat flag.
- **Outputs:** score page / submission row.
- **Artifacts:** `assessment_submissions` row, cheat flag column.

### Component: Admin dashboard

- **Location:** `src/app/admin-dashboard/**`, `src/components/Admin*.tsx`
- **Role:** Manage learners, courses, workshops (edit), resources (upload/edit), certificates, assessments, analytics.
- **Inputs:** requests authenticated as `role = 'admin'` (enforced by RLS and UI shell).
- **Processing:** tables/forms hitting `/api/learners`, `/api/courses`, `/api/workshops`, `/api/resources`, `/api/assessments`.
- **Outputs:** CRUD updates in Supabase.
- **Artifacts:** Audio/video/files referenced from `resources.file_url` (storage links).

### Component: Data access layer

- **Location:** `src/lib/courses.ts`, `workshops.ts`, `resources.ts`, `learners.ts`, `assessments.ts`, `orders.ts`
- **Role:** Single place where API routes read/write Supabase.
- **Inputs:** Supabase client + validated params.
- **Processing:** typed queries against tables defined in `supabase/*.sql`.
- **Outputs:** typed rows/inserts.
- **Artifacts:** None directly.

### Component: Database schema

- **Location:** `supabase/schema.sql`, `schema_lms.sql`, `schema_lms_v2.sql`, `schema_checkout.sql`, `schema_rls_fixes.sql`, `schema_assessments_mcq.sql`, `seed_content.sql`
- **Role:** Define tables, policies, and seed content.
- **Inputs:** run manually in Supabase SQL Editor in the order listed in `USER_TODO.md`.
- **Processing:** creates tables: `profiles`, `courses`, `enrollments`, `workshops`, `workshop_registrations`, `resources`, `orders`, `assessments`, `assessment_questions`, `assessment_submissions`, `certificate_templates`, `certificates`.
- **Outputs:** schema + RLS policies + seed rows.
- **Artifacts:** Database objects in the Supabase project.

### Component: Verification scripts

- **Location:** `scripts/verify-backend.mjs`, `check-keys.mjs`, `apply-supabase-setup.mjs`, `provision-e2e-user.mjs`
- **Role:** Backend health checks, env key validation, schema application, E2E user provisioning.
- **Inputs:** `.env.local` values (service role key for some).
- **Processing:** hit Supabase REST endpoints and report pass/fail.
- **Outputs:** console report; exit codes.
- **Artifacts:** none.

### Component: E2E tests

- **Location:** `e2e/smoke.spec.ts`, `e2e/global-setup.ts`, `playwright.config.ts`
- **Role:** Browser-level smoke tests against a deployed or local instance.
- **Inputs:** `E2E_BASE_URL`, optional `E2E_*` credentials.
- **Processing:** launch Chromium, visit public pages, optionally log in as student/admin.
- **Outputs:** Playwright report in `test-results/`.
- **Artifacts:** `test-results/` output directory.

## 9. Data Layer

- **Source of truth:** Supabase Postgres, project referenced by `NEXT_PUBLIC_SUPABASE_URL`.
- **Format:** Postgres rows typed in `src/lib/supabase/types.ts`.
- **Access:** browser (auth only), Next.js server via `@supabase/ssr` with RLS; scripts via `pg` / service role.
- **Tables:** see Section 6 type list; relationships: `enrollments.user_id → profiles.id`, `enrollments.course_id → courses.id`, `orders.user_id → profiles.id`, `workshop_registrations` join table, `assessments → courses`, `certificates → enrollments/profiles`.
- **RLS:** students read their own rows; admins can list learners (added in `schema_rls_fixes.sql`).
- **Foreign keys:** `enrollments.user_id → profiles.id`, `enrollments.course_id → courses.id`, `orders.user_id → profiles.id`, `orders.course_id → courses.id`, `resources.course_id → courses.id`, `workshop_registrations.workshop_id → workshops.id`, `workshop_registrations.user_id → profiles.id`, `assessments.course_id → courses.id`, `assessment_questions.assessment_id → assessments.id`, `assessment_submissions.assessment_id → assessments.id`, `assessment_submissions.user_id → profiles.id`, `certificates.user_id → profiles.id`, `certificates.course_id → courses.id`.

## 10. Frontend / Entry Points

How to run the system, in order:

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in Supabase values.
3. Run the SQL files in `supabase/` in order (see `USER_TODO.md`).
4. `npm run dev` and open `http://localhost:3000`.
5. `npm run build` / `npm start` for a production build.
6. `npm run lint` for linting.
7. `npm run test:backend` to verify Supabase connectivity.
8. `npm run test:unit` for Vitest unit tests.
9. `npm run test:e2e` for Playwright browser tests (`E2E_BASE_URL` controls the target).
10. `npm run setup:supabase` and `npm run test:e2e:provision` are helper scripts for schema setup and test-user provisioning.

Key entry files:

- `src/app/layout.tsx` — root layout, fonts (Inter), metadata.
- `src/app/page.tsx` — landing page.
- `src/middleware.ts` — request interception.

## 11. Logging & Artifacts

| Artifact | Location | Retention |
|----------|----------|-----------|
| Playwright traces/screenshots | `test-results/` | Until next run overwrites or manual cleanup |
| Build output | `.next/` | Regenerated per build |
| `tsconfig.tsbuildinfo` | repo root | Incremental compiler cache |
| Server logs | Vercel function logs / local stdout | Per platform retention |
| Uploaded files | External storage (`resources.file_url`) | Managed in Supabase storage |
| Architecture diagrams | `docs/diagrams/*.png` | Committed; regenerated by `scripts/build-docs.py` |
| Word documentation | `docs/Grey_Dental_Technical_Documentation.docx` | Committed; regenerated from the Markdown |
| Lecture video | `public/videos/lecture.mp4` | Supplied manually and served as a static asset |

Nothing is written to disk by API routes themselves.

## 12. Data Flow

1. **Auth flow:** browser → Supabase Auth → session cookie → middleware refreshes → `useCurrentUser` reads profile from `profiles`.
2. **Catalog read:** student dashboard page → `GET /api/courses` → `courses.ts` queries `courses` table → React renders cards (`CoursesListing`, `CourseDetailLanding`).
3. **Purchase flow:** `/checkout` → `POST /api/checkout` → (demo) `completeEnrollmentPurchase` inserts `orders` + `enrollments` → student sees enrollment at `/student-dashboard/courses`; (live) Stripe session → webhook → same function.
4. **Assessment flow:** `/student-dashboard/assessments/[id]` → GET assessment + questions → submit → POST result → `assessment_submissions` row; tab-hide event sets score 0 + cheat flag.
5. **Admin flow:** admin pages → `/api/learners`, `/api/resources` POST, etc. → RLS checks `role='admin'` → table updates.
6. **Lecture playback:** course detail page or dashboard link → Next.js static file handler → `public/videos/lecture.mp4` → native HTML5 player. No API route is involved.

## 13. Remaining Work

- Real Stripe keys are not configured; checkout runs in demo mode and the webhook ignores events until `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` are real.
- "Confirm email" in Supabase is recommended off during development; must be re-enabled for production.
- Google OAuth client must be created in Google Cloud Console and added to Supabase before the Google button works.
- E2E credentials (`E2E_*`) are blank; authenticated dashboard tests only run once accounts exist or `SUPABASE_SERVICE_ROLE_KEY` provisioning is run.
- Certificate generation templates exist (`certificate_templates`) but the issuance UI is minimal.
- No video upload pipeline. Every lecture surface points at one manually supplied file, `public/videos/lecture.mp4`; there is no per-module mapping, transcoding, or streaming service.
- The Word document and diagrams are generated by `scripts/build-docs.py`. Rerun it after structural changes, then run `npm run docs:toc` (Windows with Word installed) or update the table-of-contents field manually in Word.

## 14. Known Limitations

- Stripe webhook cannot be exercised until real keys + deployed webhook URL (`/api/webhooks/stripe`) are configured.
- If Supabase env vars are missing in production, `MIDDLEWARE_INVOCATION_FAILED`-class errors can occur; middleware is designed to fail closed on protected paths but public pages degrade.
- Assessment anti-cheat (tab-hide = score 0) is client-enforced and can be bypassed.
- Courses are currently a single catalog (`endodontics-remote` demo data); multi-course purchasing is untested.
- The app is deployed at a hardcoded Vercel URL (`grey-coral.vercel.app`) in defaults and `USER_TODO.md`; changing the domain requires updating Site URL/redirects in Supabase.
- `.env.local` is present in the working tree; ensure it is never committed (covered by `.gitignore` — verify before publishing).
- All lecture links share the single file `/videos/lecture.mp4`. Courses and modules cannot select different recordings yet.
- The generated Word file contains a Word field for the table of contents; run `npm run docs:toc` (Windows + Word) after regenerating, or update the field manually, to populate the page numbers.

## 15. Getting Started

Goal: a new developer installs and runs the system on their own.

1. Prerequisites: Node.js 20+, npm, a Supabase project, (optional) a Stripe account.
2. `git clone` the repo; `cd Greydental`; `npm install`.
3. `cp .env.example .env.local`; fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. In the Supabase SQL Editor, run the files from `supabase/` in the order given in `USER_TODO.md`.
5. In Supabase Auth, disable "Confirm email" for local development.
6. Set your account's `profiles.role = 'admin'` if you need admin access.
7. `npm run dev` → open `http://localhost:3000` → create an account → visit `/student-dashboard`.
8. Put the lecture recording at `public/videos/lecture.mp4` (see `public/videos/README.md`).
9. Verify: `npm run test:backend`, `npm run lint`, `npm run test:unit`, `npm run test:e2e`.
10. Optional: `npm run docs:build` regenerates `docs/diagrams/*.png` and the Word document; `npm run docs:toc` refreshes its table of contents.

Read the source in this order to learn the system:

1. `src/middleware.ts` and `src/lib/supabase/middleware.ts` — how requests are guarded.
2. `src/lib/supabase/types.ts` — the data model.
3. `supabase/schema_lms_v2.sql` — tables and policies.
4. `src/app/api/checkout/route.ts` + `src/lib/orders.ts` — purchase/enrollment path.
5. `src/app/api/courses/route.ts` + `src/lib/courses.ts` — a representative read endpoint.
6. `src/components/CheckoutPage.tsx` and `src/app/checkout/page.tsx` — page wiring.
7. `src/app/admin-dashboard/page.tsx` + `src/components/AdminDashboard.tsx` — admin surface.
8. `src/components/TakeAssessmentPage.tsx` — assessment + anti-cheat logic.
9. `src/components/LectureVideo.tsx` + `src/lib/video.ts` — lecture playback wiring.
10. `e2e/smoke.spec.ts` — what is considered working.
11. `USER_TODO.md` — operational checklist.
