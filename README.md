# Grey Dental

Continuing-education platform for dental professionals. Marketing site plus student and admin dashboards, built with Next.js 16, React 19, Supabase, and Stripe (demo mode until live keys are set).

> Full standards-compliant documentation lives in [`docs/TECHNICAL_DOCUMENTATION.md`](docs/TECHNICAL_DOCUMENTATION.md). This README is the short version.

## What it does

- Students browse courses, enroll, register for workshops, take MCQ assessments, and download resources.
- Admins manage learners, courses, workshops, resources, certificates, and analytics.
- Auth via Supabase (email/password + Google OAuth); purchases via Stripe Checkout with webhook confirmation.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4, framer-motion, lucide-react |
| Backend | Next.js API routes + Supabase (Postgres, Auth, RLS) |
| Payments | Stripe (`demo mode` until real keys) |
| Tests | Playwright (`e2e/`), backend verify script |

## Repository layout

```
src/app/          routes + API handlers
src/components/   React components
src/lib/          supabase/stripe/data helpers
src/hooks/        shared hooks
supabase/         schema + seed SQL
scripts/          setup/verify/provision scripts
e2e/              Playwright tests
docs/             technical documentation
```

## Configuration

Copy `.env.example` to `.env.local` and set at minimum:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Webhooks + E2E provisioning (optional) |
| `STRIPE_SECRET_KEY` | `sk_test_dummy` keeps demo mode |
| `STRIPE_WEBHOOK_SECRET` | Required for live webhooks |
| `E2E_*` | Playwright account/target overrides |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase values
npm run dev                  # http://localhost:3000
```

Before first use, run the SQL files in `supabase/` in Supabase SQL Editor (order listed in `USER_TODO.md`), and disable "Confirm email" in Supabase Auth for local development.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | ESLint |
| `npm run test:backend` | Verify Supabase connectivity |
| `npm run test:e2e` | Run Playwright tests |
| `npm run setup:supabase` | Apply schema setup |
| `npm run test:e2e:provision` | Create E2E test users |

## Known state

- Checkout runs in Stripe demo mode: `POST /api/checkout` creates order + enrollment directly without calling Stripe.
- Authenticated E2E tests require `E2E_*` credentials or `SUPABASE_SERVICE_ROLE_KEY`.
- See `USER_TODO.md` for the operational checklist and `docs/TECHNICAL_DOCUMENTATION.md` for the full standard-compliant reference.
