import Link from "next/link";
import { PlayerStatus } from "@/components/PlayerStatus";
import { SectionTitle } from "@/components/SectionTitle";
import { courses } from "@/data/courses";

const pathPreview = [
  "认识AI编程",
  "做出个人主页",
  "看懂基础代码",
  "完成三个小工具",
  "部署上线"
];

export default function HomePage() {
  return (
    <main>
      <section className="container-shell grid gap-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-16">
        <div>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-ink md:text-7xl">
            <span className="bg-gradient-to-r from-village-blue to-village-violet bg-clip-text text-transparent">
              AI
            </span>
            编程新手村
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            不会编程，也能用AI一步步做出你的第一个网站。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses/1"
              className="rounded-2xl bg-gradient-to-r from-village-violet to-village-blue px-6 py-4 text-center font-bold text-white shadow-soft"
            >
              开始第一课
            </Link>
            <Link
              href="/courses"
              className="rounded-2xl border border-line bg-white px-6 py-4 text-center font-bold text-ink shadow-card"
            >
              查看课程路线
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["小白友好", "每课一个任务", "最终完成作品"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white p-4 shadow-card">
                <div className="mb-2 h-2 w-10 rounded-full bg-gradient-to-r from-village-blue to-village-violet" />
                <p className="font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <PlayerStatus />
      </section>

      <section className="border-y border-line bg-white/70 py-10">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-village-violet/25 bg-white p-6 shadow-card">
            <p className="mb-3 text-sm font-bold text-village-blue">当前课程</p>
            <h2 className="text-2xl font-bold text-ink">从0做出第一个网站</h2>
            <p className="mt-3 leading-7 text-muted">
              跟着 15 节闯关课程，从“完全不会写代码”到完成一个可部署的小网站。
            </p>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm text-muted">
                <span>学习进度</span>
                <span>1 / 15课</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[7%] rounded-full bg-gradient-to-r from-village-violet to-village-blue" />
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-ink">学习路径预览</h2>
              <Link href="/courses" className="text-sm font-semibold text-village-blue">
                查看完整路线
              </Link>
            </div>
            <ol className="space-y-3">
              {pathPreview.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-village-sky text-sm font-bold text-village-blue">
                    {index + 1}
                  </span>
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="container-shell py-12">
        <SectionTitle title="最终作品" description="完成课程后，你会做出一个能复用、能分享、能继续扩展的小工具。" />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-village-green/30 bg-village-mint p-6 shadow-card">
            <p className="text-sm font-bold text-village-green">AI提示词生成器</p>
            <h3 className="mt-3 text-3xl font-bold text-ink">把需求变成可复制的AI指令</h3>
            <ul className="mt-5 space-y-3 text-muted">
              <li>多种场景模板</li>
              <li>一键生成优质提示词</li>
              <li>支持复制、收藏和继续优化</li>
            </ul>
          </div>
          <div className="grid-paper rounded-3xl border border-line bg-white p-6 shadow-card">
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <p className="text-sm font-semibold text-muted">生成结果</p>
              <p className="mt-3 rounded-2xl bg-slate-50 p-4 leading-7 text-ink">
                请帮我生成一个适合新手学习的网页，包含标题、介绍、按钮和清晰中文注释……
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pb-14">
        <SectionTitle title="继续学习" description="先从当前关卡开始，后续课程会逐步解锁。" />
        <div className="grid gap-4 md:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <Link key={course.id} href={course.id === 1 ? "/courses/1" : "/courses"} className="rounded-3xl border border-line bg-white p-5 shadow-card">
              <p className="text-sm font-bold text-village-blue">第 {course.id} 课</p>
              <h3 className="mt-2 font-bold text-ink">{course.title}</h3>
              <p className="mt-2 text-sm text-muted">{course.duration} · +{course.xp} XP</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
