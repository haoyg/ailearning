import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut } from "@/app/login/actions";
import { courses } from "@/data/courses";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

type LessonProgress = {
  lesson_id: number;
  status: "completed" | "current" | "locked";
  xp_earned: number;
};

async function getProgress(userId: string): Promise<LessonProgress[]> {
  const supabase = createClient();
  const { data } = await supabase
    .from("lesson_progress")
    .select("lesson_id,status,xp_earned")
    .eq("user_id", userId)
    .order("lesson_id");

  return data ?? [];
}

export default async function DashboardPage() {
  if (!hasSupabaseEnv()) {
    return (
      <main className="container-shell py-10">
        <section className="rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-8">
          <h1 className="text-3xl font-black text-ink">学习后台</h1>
          <p className="mt-3 leading-7 text-muted">
            配置 Supabase 环境变量后，这里会显示真实用户、课程进度和 XP。
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-2xl bg-ink px-5 py-3 font-bold text-white"
          >
            去配置登录
          </Link>
        </section>
      </main>
    );
  }

  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const progress = await getProgress(user.id);
  const completedCount = progress.filter((item) => item.status === "completed").length;
  const totalXp = progress.reduce((sum, item) => sum + item.xp_earned, 0);

  return (
    <main className="container-shell py-10">
      <section className="mb-8 rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-black text-ink">学习后台</h1>
            <p className="mt-3 text-muted">{user.email}</p>
          </div>
          <form action={signOut}>
            <button className="rounded-2xl border border-line bg-white px-5 py-3 font-bold text-ink" type="submit">
              退出登录
            </button>
          </form>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl bg-village-sky p-5">
            <p className="text-sm font-semibold text-muted">已完成课程</p>
            <p className="mt-2 text-3xl font-black text-village-blue">{completedCount}</p>
          </div>
          <div className="rounded-3xl bg-village-mint p-5">
            <p className="text-sm font-semibold text-muted">累计 XP</p>
            <p className="mt-2 text-3xl font-black text-village-green">{totalXp}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-muted">当前关卡</p>
            <p className="mt-2 text-3xl font-black text-ink">第 1 课</p>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-line bg-white p-6 shadow-card">
        <h2 className="text-2xl font-bold text-ink">课程进度</h2>
        <div className="mt-5 divide-y divide-line">
          {courses.slice(0, 5).map((course) => {
            const item = progress.find((row) => row.lesson_id === course.id);
            return (
              <div key={course.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-ink">第 {course.id} 课：{course.title}</p>
                  <p className="mt-1 text-sm text-muted">{course.duration} · +{course.xp} XP</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-muted">
                  {item?.status ?? "locked"}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
