import { CourseCard } from "@/components/CourseCard";
import { SectionTitle } from "@/components/SectionTitle";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="container-shell py-10">
      <SectionTitle
        title="课程路线"
        description="15 节课按闯关顺序推进。每一关只解决一个核心问题，避免一开始就被复杂概念劝退。"
      />
      <div className="relative">
        <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-village-blue via-village-violet to-village-green opacity-20 lg:block" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
