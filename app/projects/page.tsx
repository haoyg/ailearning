import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="container-shell py-10">
      <SectionTitle
        title="项目实战"
        description="用作品倒逼学习。每个项目都能对应到课程中的具体能力点。"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className="rounded-3xl border border-line bg-white p-6 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-village-blue to-village-violet font-bold text-white">
              P{index + 1}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink">{project.title}</h2>
            <p className="mt-3 text-sm font-semibold text-village-blue">项目目标</p>
            <p className="mt-2 leading-7 text-muted">{project.goal}</p>
            <p className="mt-4 text-sm font-semibold text-village-blue">学完能做什么</p>
            <p className="mt-2 leading-7 text-muted">{project.outcome}</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              <span className="rounded-2xl bg-slate-50 p-3 text-muted">难度：{project.difficulty}</span>
              <span className="rounded-2xl bg-slate-50 p-3 text-muted">时间：{project.duration}</span>
              <span className="col-span-2 rounded-2xl bg-village-mint p-3 font-semibold text-village-green">
                涉及课程：{project.lessons}
              </span>
            </div>
            <button className="mt-6 w-full rounded-2xl bg-ink px-5 py-3 font-bold text-white" type="button">
              开始项目
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
