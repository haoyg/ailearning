create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  total_xp integer not null default 0,
  current_lesson_id integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lessons (
  id integer primary key,
  title text not null,
  description text not null,
  difficulty text not null,
  duration_minutes integer not null,
  xp_reward integer not null default 0,
  sort_order integer not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id integer not null references public.lessons(id) on delete cascade,
  status text not null default 'locked' check (status in ('locked', 'current', 'completed')),
  xp_earned integer not null default 0,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create index if not exists lesson_progress_user_id_idx on public.lesson_progress(user_id);
create index if not exists lesson_progress_lesson_id_idx on public.lesson_progress(lesson_id);

alter table public.profiles enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_progress enable row level security;

create policy "Users can view their own profile"
on public.profiles for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id);

create policy "Users can update their own profile"
on public.profiles for update
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = id)
with check ((select auth.uid()) is not null and (select auth.uid()) = id);

create policy "Authenticated users can read lessons"
on public.lessons for select
to authenticated
using (true);

create policy "Users can view their own lesson progress"
on public.lesson_progress for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "Users can insert their own lesson progress"
on public.lesson_progress for insert
to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "Users can update their own lesson progress"
on public.lesson_progress for update
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

insert into public.lessons (id, title, description, difficulty, duration_minutes, xp_reward, sort_order)
values
  (1, 'AI编程到底是什么？', '先建立正确认知：AI不是替你学习，而是陪你把想法变成页面。', '入门', 12, 30, 1),
  (2, '网页由哪三部分组成？', '理解HTML、CSS、JavaScript分别负责什么。', '入门', 15, 25, 2),
  (3, '如何把需求说清楚？', '学会把模糊想法变成AI能执行的清晰指令。', '入门', 18, 30, 3),
  (4, '做出你的第一个个人主页', '从标题、介绍、按钮开始，完成第一个可见作品。', '简单', 25, 45, 4),
  (5, '如何让AI帮你修改页面？', '把“想改哪里”说清楚，逐步优化页面。', '简单', 20, 35, 5),
  (6, 'HTML基础：看懂页面结构', '认识常见标签，能读懂页面骨架。', '简单', 22, 35, 6),
  (7, 'CSS基础：让页面变好看', '学习颜色、间距、圆角和布局的基础写法。', '简单', 24, 40, 7),
  (8, 'JavaScript基础：让页面动起来', '理解点击按钮、读取输入和更新文字。', '简单', 26, 45, 8),
  (9, '如何让AI解释代码？', '让AI逐行讲解，建立自己的代码理解方式。', '入门', 16, 30, 9),
  (10, '如何让AI修Bug？', '学会描述现象、提供代码、复现问题。', '简单', 20, 40, 10),
  (11, '做一个标题生成器', '完成第一个输入输出型小工具。', '进阶', 30, 60, 11),
  (12, '做一个字数统计器', '读取用户输入，实时统计文本字数。', '进阶', 32, 65, 12),
  (13, '做一个AI提示词生成器', '把多个选项组合成一段可复用提示词。', '进阶', 40, 80, 13),
  (14, '如何优化一个小工具？', '从可用到好用，优化结构、样式和交互。', '进阶', 28, 55, 14),
  (15, '如何把网页部署上线？', '把作品发布到互联网上，拿到可分享链接。', '简单', 35, 70, 15)
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  difficulty = excluded.difficulty,
  duration_minutes = excluded.duration_minutes,
  xp_reward = excluded.xp_reward,
  sort_order = excluded.sort_order;
