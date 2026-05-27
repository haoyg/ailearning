import { CopyButton } from "@/components/CopyButton";

type PromptBlockProps = {
  title?: string;
  content: string;
};

export function PromptBlock({ title, content }: PromptBlockProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-slate-50 px-4 py-3">
        <p className="text-sm font-semibold text-ink">{title ?? "推荐提示词"}</p>
        <CopyButton text={content} />
      </div>
      <pre className="whitespace-pre-wrap p-4 text-sm leading-7 text-ink">{content}</pre>
    </div>
  );
}
