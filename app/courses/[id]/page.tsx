import Link from "next/link";
import { InfoCard } from "@/components/InfoCard";
import { PromptBlock } from "@/components/PromptBlock";
import { courses, lessonOnePrompt } from "@/data/courses";

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((item) => item.id === Number(params.id)) ?? courses[0];

  return (
    <main className="container-shell py-10">
      <section className="mb-8 rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-village-sky px-4 py-2 text-sm font-bold text-village-blue">
            第 {course.id} 课
          </span>
          <span className="rounded-full bg-village-mint px-4 py-2 text-sm font-bold text-village-green">
            +{course.xp} XP
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-muted">{course.duration}</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-ink md:text-5xl">{course.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          这是一份任务说明书。你只需要理解目标、复制推荐提示词、完成实操任务，再按通关标准检查结果。
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <InfoCard title="本课目标" tone="blue">
            <ul className="list-inside list-disc space-y-2">
              <li>知道AI编程不是魔法，而是一种更高效的表达和协作方式。</li>
              <li>理解你需要负责“说清楚目标”，AI负责帮你生成和修改代码。</li>
              <li>用一段提示词生成第一个最简单网页。</li>
            </ul>
          </InfoCard>

          <InfoCard title="核心概念">
            <p>
              AI编程是“你描述想要什么，AI帮你写出第一版代码，你再根据结果继续提要求”的过程。
              对新手来说，最重要的不是一开始背语法，而是学会描述需求、观察结果、提出修改。
            </p>
          </InfoCard>

          <InfoCard title="小白解释">
            <p>
              你可以把AI当作一位会写代码的搭档。你告诉它：“我要一个网页，里面有标题、介绍和按钮。”
              它会先给你一版代码。你觉得颜色不好看、文字不对、按钮太小，都可以继续让它修改。
            </p>
          </InfoCard>
        </div>

        <div className="space-y-6">
          <PromptBlock content={lessonOnePrompt} />

          <InfoCard title="实操任务" tone="green">
            <ol className="list-inside list-decimal space-y-2">
              <li>复制上方推荐提示词。</li>
              <li>粘贴到你常用的AI工具里。</li>
              <li>把AI生成的代码保存成一个 HTML 文件。</li>
              <li>用浏览器打开，确认标题、介绍和按钮都能显示。</li>
            </ol>
          </InfoCard>

          <InfoCard title="通关标准">
            <ul className="list-inside list-disc space-y-2">
              <li>页面能在浏览器中正常打开。</li>
              <li>你能指出标题、介绍文字、按钮分别在哪一段代码里。</li>
              <li>你至少让AI帮你修改过一次页面文案或颜色。</li>
            </ul>
          </InfoCard>

          <Link
            href="/courses"
            className="block rounded-2xl bg-gradient-to-r from-village-violet to-village-blue px-6 py-4 text-center font-bold text-white shadow-soft"
          >
            下一课：网页由哪三部分组成？
          </Link>
        </div>
      </div>
    </main>
  );
}
