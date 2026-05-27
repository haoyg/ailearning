import Link from "next/link";
import type { Course } from "@/data/courses";

const statusStyles = {
  已完成: "border-village-green bg-village-mint text-village-green",
  当前: "border-village-violet bg-village-sky text-village-blue",
  未解锁: "border-line bg-slate-50 text-muted"
};

export function CourseCard({ course }: { course: Course }) {
  const isLocked = course.status === "未解锁";

  return (
    <article className="relative rounded-3xl border border-line bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-village-blue to-village-violet text-sm font-bold text-white">
          {String(course.id).padStart(2, "0")}
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[course.status]}`}>
          {course.status}
        </span>
      </div>
      <h3 className="min-h-14 text-lg font-bold leading-snug text-ink">{course.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{course.description}</p>
      <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
        <span className="rounded-2xl bg-slate-50 p-2 text-center text-muted">{course.difficulty}</span>
        <span className="rounded-2xl bg-slate-50 p-2 text-center text-muted">{course.duration}</span>
        <span className="rounded-2xl bg-village-mint p-2 text-center font-semibold text-village-green">
          +{course.xp} XP
        </span>
      </div>
      <Link
        href={isLocked ? "/courses" : `/courses/${course.id}`}
        className={`mt-5 block rounded-2xl px-4 py-3 text-center text-sm font-semibold ${
          isLocked
            ? "cursor-not-allowed bg-slate-100 text-muted"
            : "bg-gradient-to-r from-village-violet to-village-blue text-white shadow-soft"
        }`}
      >
        {isLocked ? "完成前置课程解锁" : "进入本课"}
      </Link>
    </article>
  );
}
