import Link from "next/link";
import { signInWithEmail } from "@/app/login/actions";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export default function LoginPage({
  searchParams
}: {
  searchParams: { message?: string };
}) {
  const enabled = hasSupabaseEnv();

  return (
    <main className="container-shell grid min-h-[calc(100vh-8rem)] place-items-center py-10">
      <section className="w-full max-w-lg rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-8">
        <Link href="/" className="text-sm font-semibold text-village-blue">
          返回首页
        </Link>
        <h1 className="mt-5 text-3xl font-black text-ink">登录学习账号</h1>
        <p className="mt-3 leading-7 text-muted">
          使用邮箱登录后，系统可以记录你的课程进度、XP 和当前关卡。
        </p>

        {!enabled ? (
          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-800">
            Supabase 环境变量还没有配置。复制 `.env.example` 为 `.env.local`，填入项目的
            `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 后即可启用登录。
          </div>
        ) : (
          <form action={signInWithEmail} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-ink">邮箱</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-village-blue focus:ring-4 focus:ring-village-blue/10"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-village-violet to-village-blue px-5 py-3 font-bold text-white shadow-soft"
            >
              发送登录链接
            </button>
          </form>
        )}

        {searchParams.message ? (
          <p className="mt-5 rounded-2xl bg-village-sky px-4 py-3 text-sm font-medium text-village-blue">
            {searchParams.message}
          </p>
        ) : null}
      </section>
    </main>
  );
}
