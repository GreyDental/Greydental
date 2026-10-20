-- ============================================================
-- GREY DENTAL — MASTER DATABASE SETUP (PLUG & PLAY)
-- Run once in Supabase → SQL Editor → New query → Run
-- Safe to re-run. Combines: schema, schema_lms, schema_lms_v2,
-- schema_assessments_mcq, schema_checkout, schema_rls_fixes,
-- seed_content.
-- ============================================================

-- ------------------------------------------------------------
-- 0. Tables
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text not null default 'student'
    check (role in ('student', 'instructor', 'admin')),
  institution text,
  specialty text,
  license_number text,
  avatar_url text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  subtitle text,
  instructor_name text,
  image_url text,
  module_count integer not null default 0,
  price_cents integer not null default 0,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  progress integer not null default 0
    check (progress >= 0 and progress <= 100),
  status text not null default 'active'
    check (status in ('active', 'completed', 'cancelled')),
  enrolled_at timestamptz not null default now(),
  unique (user_id, course_id)
);

create table if not exists public.workshops (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  image_url text,
  location text,
  starts_at timestamptz,
  ends_at timestamptz,
  capacity integer,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workshop_registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  workshop_id uuid not null references public.workshops (id) on delete cascade,
  registered_at timestamptz not null default now(),
  unique (user_id, workshop_id)
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_url text,
  resource_type text not null default 'document'
    check (resource_type in ('document', 'video', 'link', 'other')),
  category text,
  file_size text,
  course_id uuid references public.courses (id) on delete set null,
  uploaded_by uuid references public.profiles (id) on delete set null,
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  stripe_session_id text unique,
  amount_cents integer not null default 0,
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'failed', 'refunded')),
  created_at timestamptz not null default now()
);

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses (id) on delete set null,
  title text not null,
  assessment_type text not null default 'quiz'
    check (assessment_type in ('quiz', 'assignment', 'exam')),
  due_at timestamptz,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assessment_submissions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  score integer check (score is null or (score >= 0 and score <= 100)),
  status text not null default 'submitted'
    check (status in ('submitted', 'graded', 'late')),
  answers jsonb,
  cheated boolean not null default false,
  started_at timestamptz default now(),
  submitted_at timestamptz not null default now(),
  unique (assessment_id, user_id)
);

create table if not exists public.assessment_questions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments (id) on delete cascade,
  prompt text not null,
  options jsonb not null,
  correct_index integer not null check (correct_index >= 0),
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.certificate_templates (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references public.courses (id) on delete set null,
  title text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  template_id uuid references public.certificate_templates (id) on delete set null,
  status text not null default 'issued'
    check (status in ('issued', 'revoked')),
  issued_at timestamptz not null default now(),
  unique (user_id, course_id)
);

-- ------------------------------------------------------------
-- 2. Helper function
-- ------------------------------------------------------------
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ------------------------------------------------------------
-- 3. Auth trigger: auto-create profile on signup
-- ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (
    id, full_name, role, institution, specialty, license_number
  )
  values (
    new.id,
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'role', ''), 'student'),
    nullif(new.raw_user_meta_data ->> 'institution', ''),
    nullif(new.raw_user_meta_data ->> 'specialty', ''),
    nullif(new.raw_user_meta_data ->> 'license_number', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------
-- 4. Row Level Security
-- ------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.workshops enable row level security;
alter table public.workshop_registrations enable row level security;
alter table public.resources enable row level security;
alter table public.orders enable row level security;
alter table public.assessments enable row level security;
alter table public.assessment_submissions enable row level security;
alter table public.assessment_questions enable row level security;
alter table public.certificate_templates enable row level security;
alter table public.certificates enable row level security;

-- Profiles
drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Admins can read all profiles" on public.profiles;
create policy "Admins can read all profiles"
  on public.profiles for select
  using (public.is_admin() or auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Courses
drop policy if exists "Anyone can read published courses" on public.courses;
create policy "Anyone can read published courses"
  on public.courses for select
  using (status = 'published' or public.is_admin());

drop policy if exists "Admins manage courses" on public.courses;
create policy "Admins manage courses"
  on public.courses for all
  using (public.is_admin())
  with check (public.is_admin());

-- Enrollments
drop policy if exists "Users read own enrollments" on public.enrollments;
create policy "Users read own enrollments"
  on public.enrollments for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Users create own enrollments" on public.enrollments;
create policy "Users create own enrollments"
  on public.enrollments for insert
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "Users update own enrollments" on public.enrollments;
create policy "Users update own enrollments"
  on public.enrollments for update
  using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "Admins delete enrollments" on public.enrollments;
create policy "Admins delete enrollments"
  on public.enrollments for delete
  using (public.is_admin());

-- Workshops
drop policy if exists "Anyone can read published workshops" on public.workshops;
create policy "Anyone can read published workshops"
  on public.workshops for select
  using (status = 'published' or public.is_admin());

drop policy if exists "Admins manage workshops" on public.workshops;
create policy "Admins manage workshops"
  on public.workshops for all
  using (public.is_admin())
  with check (public.is_admin());

-- Workshop registrations
drop policy if exists "Users read own workshop regs" on public.workshop_registrations;
create policy "Users read own workshop regs"
  on public.workshop_registrations for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Anyone can count workshop regs" on public.workshop_registrations;
create policy "Anyone can count workshop regs"
  on public.workshop_registrations for select
  using (true);

drop policy if exists "Users register for workshops" on public.workshop_registrations;
create policy "Users register for workshops"
  on public.workshop_registrations for insert
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "Admins manage workshop regs" on public.workshop_registrations;
create policy "Admins manage workshop regs"
  on public.workshop_registrations for all
  using (public.is_admin())
  with check (public.is_admin());

-- Resources
drop policy if exists "Read public or enrolled resources" on public.resources;
create policy "Read public or enrolled resources"
  on public.resources for select
  using (
    is_public = true
    or public.is_admin()
    or (
      course_id is not null
      and exists (
        select 1 from public.enrollments e
        where e.course_id = resources.course_id
          and e.user_id = auth.uid()
          and e.status in ('active', 'completed')
      )
    )
  );

drop policy if exists "Admins manage resources" on public.resources;
create policy "Admins manage resources"
  on public.resources for all
  using (public.is_admin())
  with check (public.is_admin());

-- Orders
drop policy if exists "Users read own orders" on public.orders;
create policy "Users read own orders"
  on public.orders for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Users create own orders" on public.orders;
create policy "Users create own orders"
  on public.orders for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own pending orders" on public.orders;
create policy "Users update own pending orders"
  on public.orders for update
  using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "Admins manage orders" on public.orders;
create policy "Admins manage orders"
  on public.orders for all
  using (public.is_admin())
  with check (public.is_admin());

-- Assessments
drop policy if exists "Read published assessments" on public.assessments;
create policy "Read published assessments"
  on public.assessments for select
  using (status = 'published' or public.is_admin());

drop policy if exists "Admins manage assessments" on public.assessments;
create policy "Admins manage assessments"
  on public.assessments for all
  using (public.is_admin())
  with check (public.is_admin());

-- Assessment submissions
drop policy if exists "Users read own submissions" on public.assessment_submissions;
create policy "Users read own submissions"
  on public.assessment_submissions for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Users submit assessments" on public.assessment_submissions;
create policy "Users submit assessments"
  on public.assessment_submissions for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own submissions" on public.assessment_submissions;
create policy "Users update own submissions"
  on public.assessment_submissions for update
  using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "Admins update submissions" on public.assessment_submissions;
create policy "Admins update submissions"
  on public.assessment_submissions for update
  using (public.is_admin())
  with check (public.is_admin());

-- Assessment questions
drop policy if exists "Read questions for published assessments" on public.assessment_questions;
create policy "Read questions for published assessments"
  on public.assessment_questions for select
  using (
    public.is_admin()
    or exists (
      select 1 from public.assessments a
      where a.id = assessment_questions.assessment_id
        and a.status = 'published'
    )
  );

drop policy if exists "Admins manage questions" on public.assessment_questions;
create policy "Admins manage questions"
  on public.assessment_questions for all
  using (public.is_admin())
  with check (public.is_admin());

-- Certificate templates
drop policy if exists "Anyone read cert templates" on public.certificate_templates;
create policy "Anyone read cert templates"
  on public.certificate_templates for select
  using (true);

drop policy if exists "Admins manage cert templates" on public.certificate_templates;
create policy "Admins manage cert templates"
  on public.certificate_templates for all
  using (public.is_admin())
  with check (public.is_admin());

-- Certificates
drop policy if exists "Users read own certificates" on public.certificates;
create policy "Users read own certificates"
  on public.certificates for select
  using (auth.uid() = user_id or public.is_admin());

drop policy if exists "Admins manage certificates" on public.certificates;
create policy "Admins manage certificates"
  on public.certificates for all
  using (public.is_admin())
  with check (public.is_admin());

-- ------------------------------------------------------------
-- 5. Seed: courses
-- ------------------------------------------------------------
insert into public.courses (slug, title, description, image_url, module_count, price_cents, status, instructor_name, subtitle)
values
  (
    'endodontics-remote',
    'Foundations of Endodontics - Remote',
    'Remote learning track covering canal anatomy and clinical fundamentals.',
    '/main-page-featured/feature-1.jpg',
    10,
    26900,
    'published',
    'Grey Dental Faculty',
    'Remote learning track covering canal anatomy and clinical fundamentals.'
  ),
  (
    'endodontics-residency',
    'Foundations of Endodontics - Immersive',
    'Immersive residency-style endodontics training.',
    '/main-page-featured/feature-2.jpg',
    12,
    0,
    'published',
    'Grey Dental Faculty',
    'Immersive residency-style endodontics training.'
  ),
  (
    'implants-bootcamp',
    'Dental Implants Bootcamp',
    'Practical implant foundations for general practitioners.',
    '/main-page-featured/feature-3.jpg',
    8,
    0,
    'published',
    'Grey Dental Faculty',
    'Practical implant foundations for general practitioners.'
  )
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  image_url = excluded.image_url,
  module_count = excluded.module_count,
  status = excluded.status,
  instructor_name = coalesce(public.courses.instructor_name, excluded.instructor_name),
  subtitle = coalesce(public.courses.subtitle, excluded.subtitle),
  updated_at = now();

-- Demo price for the remote endodontics course ($269.00)
update public.courses
set price_cents = 26900,
    updated_at = now()
where slug = 'endodontics-remote' and price_cents = 0;

-- ------------------------------------------------------------
-- 6. Seed: workshops
-- ------------------------------------------------------------
insert into public.workshops (
  slug, title, description, image_url, location, starts_at, ends_at, capacity, status
)
values
  (
    'endo-access-live',
    'Endo Access & Canal Shaping — Live Demo',
    'Live clinical demo covering access cavity design and rotary shaping fundamentals.',
    '/Student-Workshop/f6a4a7f5cf7d4c7df0030029ed6e95e90deddb96.png',
    'Online',
    '2026-09-03 14:00:00+00',
    '2026-09-03 16:00:00+00',
    50,
    'published'
  ),
  (
    'obturation-hands-on',
    'Hands-On Obturation Techniques',
    'Warm vertical and carrier-based obturation practice session.',
    '/Student-Workshop/bdd0321b287978f43523bf5a82582c77b5261ac4.png',
    'Online',
    '2026-09-17 13:00:00+00',
    '2026-09-17 16:00:00+00',
    40,
    'published'
  ),
  (
    'implant-site-prep',
    'Implant Site Preparation & Placement',
    'Surgical site prep, osteotomy sequence, and placement fundamentals.',
    '/Student-Workshop/c040503634ac81f55fa0eec351fcfac433e9f782.png',
    'Online',
    '2026-09-10 12:00:00+00',
    '2026-09-10 16:00:00+00',
    45,
    'published'
  )
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description,
  image_url = excluded.image_url,
  starts_at = excluded.starts_at,
  ends_at = excluded.ends_at,
  capacity = excluded.capacity,
  status = excluded.status,
  updated_at = now();

-- ------------------------------------------------------------
-- 7. Seed: public resources
-- ------------------------------------------------------------
insert into public.resources (
  title, description, file_url, resource_type, category, is_public, file_size
)
select 'Endodontic Tray Setup Guide',
  'Complete instrument checklist and tray organization for rotary and hand instrumentation.',
  '/Student-Resources/Uploaded Image.png', 'document', 'Clinical Handbooks', true, '2.4 MB'
where not exists (select 1 from public.resources where title = 'Endodontic Tray Setup Guide');

insert into public.resources (
  title, description, file_url, resource_type, category, is_public, file_size
)
select 'Implant Site Checklist',
  'Bone density evaluation, soft tissue depth, and anatomical boundary mapping template.',
  '/Student-Resources/Uploaded Image.png', 'document', 'Clinical Handbooks', true, '1.1 MB'
where not exists (select 1 from public.resources where title = 'Implant Site Checklist');

insert into public.resources (
  title, description, file_url, resource_type, category, is_public, file_size
)
select 'Foundations of Endodontics',
  'Core textbook excerpt covering diagnosis, access, and canal preparation fundamentals.',
  '/Student-Resources/cb432d0245436669e60e63d4c22ad9490e7cb6a2.png', 'document', 'Comprehensive Textbooks', true, '8.6 MB'
where not exists (select 1 from public.resources where title = 'Foundations of Endodontics');

insert into public.resources (
  title, description, file_url, resource_type, category, is_public, file_size
)
select 'Post-Operative Care Guide',
  'Patient instructions and follow-up checklist after endodontic treatment.',
  '/Student-Resources/FileIcon.png', 'document', 'Clinical Handbooks', true, '0.8 MB'
where not exists (select 1 from public.resources where title = 'Post-Operative Care Guide');

-- ------------------------------------------------------------
-- 8. Seed: published MCQ exam + questions
-- ------------------------------------------------------------
insert into public.assessments (course_id, title, assessment_type, status, due_at)
select c.id, 'Module 3 Quiz — Canal Anatomy', 'exam', 'published', now() + interval '14 days'
from public.courses c
where c.slug = 'endodontics-remote'
  and not exists (
    select 1 from public.assessments a
    where a.title = 'Module 3 Quiz — Canal Anatomy' and a.course_id = c.id
  );

delete from public.assessment_questions q
using public.assessments a
where q.assessment_id = a.id
  and a.title = 'Module 3 Quiz — Canal Anatomy';

insert into public.assessment_questions (assessment_id, prompt, options, correct_index, sort_order)
select a.id, v.prompt, v.options::jsonb, v.correct_index, v.sort_order
from public.assessments a
cross join (
  values
    ('How many canals are most commonly found in a maxillary first molar?', '["1","2","3","4"]', 3, 1),
    ('Which canal is most often missed in maxillary first molars?', '["Palatal","MB1","MB2","Distobuccal"]', 2, 2),
    ('Working length is ideally measured to:', '["Radiographic apex","0.5–1 mm short of the apex","2 mm beyond the apex","Cementoenamel junction"]', 1, 3),
    ('The apical constriction is typically located:', '["At the radiographic apex","Slightly short of the anatomic apex","In the pulp chamber","At the CEJ"]', 1, 4),
    ('A continuous tapering funnel shape in canal prep helps primarily with:', '["Tooth whitening","Irrigation and obturation","Enamel bonding","Periodontal probing"]', 1, 5)
) as v(prompt, options, correct_index, sort_order)
where a.title = 'Module 3 Quiz — Canal Anatomy';

-- Done. All tables, RLS policies, trigger, and seed content are in place.
