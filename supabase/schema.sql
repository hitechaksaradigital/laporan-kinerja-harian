-- ============================================================================
-- Employee Daily Activity Dashboard — Supabase schema
-- Run this in the Supabase SQL Editor (Project: rcrfxjejpjgxwrfmnnxu)
-- ============================================================================

create table if not exists public.daily_tasks (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  subtitle    text default ''::text,
  duration    text default '0h 0m'::text,
  status      text default 'In Progress'::text,
  task_date   date default current_date,
  created_at  timestamptz default now()
);

create index if not exists daily_tasks_created_at_idx
  on public.daily_tasks (created_at desc);

-- Enable Row Level Security
alter table public.daily_tasks enable row level security;

-- NOTE: This policy grants full access to the anon/public role so the app can
-- read and write using the anon key (VITE_SUPABASE_ANON_KEY). For a real,
-- multi-user deployment, replace this with authenticated-user policies that
-- scope rows by auth.uid().
drop policy if exists "anon full access" on public.daily_tasks;
create policy "anon full access"
  on public.daily_tasks
  for all
  to anon
  using (true)
  with check (true);

-- Optional starter rows (remove if you want the table empty)
insert into public.daily_tasks (title, subtitle, duration, status)
values
  ('Project Sync Call', 'Internal coordination for Q4 roadmap', '1h 30m', 'Approved'),
  ('Email Communications', 'Follow-up with vendor support', '0h 45m', 'Pending');
