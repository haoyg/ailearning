import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "课程路线", href: "/courses" },
  { label: "项目实战", href: "/projects" },
  { label: "模板包", href: "/templates" },
  { label: "工具推荐", href: "/tools" },
  { label: "学习后台", href: "/dashboard" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/85 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-village-blue to-village-violet text-white shadow-soft">
            AI
          </span>
          <span className="text-lg">AI编程新手村</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-village-sky hover:text-village-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card sm:block"
        >
          登录
        </Link>
      </div>
      <nav className="container-shell flex gap-2 overflow-x-auto pb-3 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
