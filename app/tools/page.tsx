import { SectionTitle } from "@/components/SectionTitle";
import { tools } from "@/data/tools";

export default function ToolsPage() {
  return (
    <main className="container-shell py-10">
      <SectionTitle
        title="工具推荐"
        description="先选最少工具跑通流程，再逐步升级。新手阶段不要被工具数量分散注意力。"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <article key={tool.name} className="rounded-3xl border border-line bg-white p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-ink">{tool.name}</h2>
              <span className="rounded-full bg-village-sky px-3 py-1 text-xs font-bold text-village-blue">
                {tool.rating}
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold text-ink">用途：</span>
                <span className="text-muted">{tool.usage}</span>
              </p>
              <p>
                <span className="font-semibold text-ink">适合阶段：</span>
                <span className="text-muted">{tool.stage}</span>
              </p>
              <p className="leading-6 text-muted">{tool.note}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
