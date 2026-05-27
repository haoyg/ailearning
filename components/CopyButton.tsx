"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-village-blue transition hover:border-village-blue hover:bg-village-sky"
    >
      {copied ? "已复制" : "复制"}
    </button>
  );
}
