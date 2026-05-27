export type CourseStatus = "已完成" | "当前" | "未解锁";

export type Course = {
  id: number;
  title: string;
  description: string;
  difficulty: "入门" | "简单" | "进阶";
  duration: string;
  xp: number;
  status: CourseStatus;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "AI编程到底是什么？",
    description: "先建立正确认知：AI不是替你学习，而是陪你把想法变成页面。",
    difficulty: "入门",
    duration: "12分钟",
    xp: 30,
    status: "当前"
  },
  {
    id: 2,
    title: "网页由哪三部分组成？",
    description: "理解HTML、CSS、JavaScript分别负责什么。",
    difficulty: "入门",
    duration: "15分钟",
    xp: 25,
    status: "未解锁"
  },
  {
    id: 3,
    title: "如何把需求说清楚？",
    description: "学会把模糊想法变成AI能执行的清晰指令。",
    difficulty: "入门",
    duration: "18分钟",
    xp: 30,
    status: "未解锁"
  },
  {
    id: 4,
    title: "做出你的第一个个人主页",
    description: "从标题、介绍、按钮开始，完成第一个可见作品。",
    difficulty: "简单",
    duration: "25分钟",
    xp: 45,
    status: "未解锁"
  },
  {
    id: 5,
    title: "如何让AI帮你修改页面？",
    description: "把“想改哪里”说清楚，逐步优化页面。",
    difficulty: "简单",
    duration: "20分钟",
    xp: 35,
    status: "未解锁"
  },
  {
    id: 6,
    title: "HTML基础：看懂页面结构",
    description: "认识常见标签，能读懂页面骨架。",
    difficulty: "简单",
    duration: "22分钟",
    xp: 35,
    status: "未解锁"
  },
  {
    id: 7,
    title: "CSS基础：让页面变好看",
    description: "学习颜色、间距、圆角和布局的基础写法。",
    difficulty: "简单",
    duration: "24分钟",
    xp: 40,
    status: "未解锁"
  },
  {
    id: 8,
    title: "JavaScript基础：让页面动起来",
    description: "理解点击按钮、读取输入和更新文字。",
    difficulty: "简单",
    duration: "26分钟",
    xp: 45,
    status: "未解锁"
  },
  {
    id: 9,
    title: "如何让AI解释代码？",
    description: "让AI逐行讲解，建立自己的代码理解方式。",
    difficulty: "入门",
    duration: "16分钟",
    xp: 30,
    status: "未解锁"
  },
  {
    id: 10,
    title: "如何让AI修Bug？",
    description: "学会描述现象、提供代码、复现问题。",
    difficulty: "简单",
    duration: "20分钟",
    xp: 40,
    status: "未解锁"
  },
  {
    id: 11,
    title: "做一个标题生成器",
    description: "完成第一个输入输出型小工具。",
    difficulty: "进阶",
    duration: "30分钟",
    xp: 60,
    status: "未解锁"
  },
  {
    id: 12,
    title: "做一个字数统计器",
    description: "读取用户输入，实时统计文本字数。",
    difficulty: "进阶",
    duration: "32分钟",
    xp: 65,
    status: "未解锁"
  },
  {
    id: 13,
    title: "做一个AI提示词生成器",
    description: "把多个选项组合成一段可复用提示词。",
    difficulty: "进阶",
    duration: "40分钟",
    xp: 80,
    status: "未解锁"
  },
  {
    id: 14,
    title: "如何优化一个小工具？",
    description: "从可用到好用，优化结构、样式和交互。",
    difficulty: "进阶",
    duration: "28分钟",
    xp: 55,
    status: "未解锁"
  },
  {
    id: 15,
    title: "如何把网页部署上线？",
    description: "把作品发布到互联网上，拿到可分享链接。",
    difficulty: "简单",
    duration: "35分钟",
    xp: 70,
    status: "未解锁"
  }
];

export const lessonOnePrompt = `你是一名前端开发老师，请帮我生成一个最简单的网页。
要求：
1. 使用 HTML、CSS、JavaScript 写在一个文件里
2. 页面包含一个标题、一段介绍文字、一个按钮
3. 代码里加入中文注释
4. 适合完全不懂编程的新手学习`;
