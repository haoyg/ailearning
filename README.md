# AI编程新手村

一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的 AI 编程入门课程网站 MVP。

## 页面

- 首页：课程介绍、玩家状态面板、学习路径预览、最终作品预览
- 课程路线页：15 节课闯关地图
- 课程详情页：第 1 课任务说明书
- 项目实战页：个人主页、字数统计器、AI提示词生成器
- 模板包页：AI编程新手提示词包，支持复制
- 工具推荐页：常用 AI 编程与部署工具

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看网站。

## Supabase 配置

后续产品后台、登录和用户进度使用 Supabase Auth + Supabase Postgres。

1. 在 Supabase 创建项目。
2. 复制 `.env.example` 为 `.env.local`。
3. 填入项目配置：

```bash
NEXT_PUBLIC_SUPABASE_URL=你的 Supabase Project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的 Supabase anon/public key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. 在 Supabase SQL Editor 里执行 `supabase/schema.sql`。
5. 在 Authentication 的 URL 配置里加入：

```text
http://localhost:3000/auth/callback
```

部署后再加入线上域名的 callback URL。

## 核心目录

```text
app/                 Next.js App Router 页面
components/          可复用 UI 组件
data/                本地静态 mock 数据
lib/supabase/        Supabase SSR/Auth 客户端封装
supabase/schema.sql  数据库表结构、RLS 策略和课程初始数据
app/globals.css      Tailwind 全局样式
tailwind.config.ts   Tailwind 主题配置
```

## 后续扩展方向

- 数据库：逐步把 `data/` 里的静态数组迁移到 Supabase Postgres。
- 登录：当前已预留 Supabase Auth 邮箱 magic link 登录。
- 进度系统：当前已预留 `lesson_progress` 表，记录完成状态、XP 和当前关卡。
- 模板收藏：新增 user_templates 表，支持用户收藏和自定义提示词。
