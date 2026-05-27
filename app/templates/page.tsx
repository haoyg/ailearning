import { PromptBlock } from "@/components/PromptBlock";
import { SectionTitle } from "@/components/SectionTitle";
import { promptTemplates } from "@/data/templates";

export default function TemplatesPage() {
  return (
    <main className="container-shell py-10">
      <SectionTitle
        title="AI编程新手提示词包"
        description="把常见学习场景整理成可复制模板，新手可以直接替换括号里的内容。"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {promptTemplates.map((template) => (
          <PromptBlock key={template.name} title={template.name} content={template.content} />
        ))}
      </div>
    </main>
  );
}
