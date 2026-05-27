export function PlayerStatus() {
  return (
    <aside className="rounded-[28px] border border-line bg-white p-5 shadow-soft md:p-6">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-muted">玩家状态面板</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Lv.1 AI编程新手</h2>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-village-sky text-2xl">🤖</span>
      </div>
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-muted">XP：30 / 100</span>
          <span className="font-semibold text-village-green">+10 XP</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-village-violet to-village-blue" />
        </div>
      </div>
      <div className="space-y-3 rounded-2xl border border-line bg-slate-50 p-4">
        <div className="flex justify-between gap-4 text-sm">
          <span className="text-muted">当前关卡</span>
          <span className="font-semibold text-ink">第1课</span>
        </div>
        <div className="flex justify-between gap-4 text-sm">
          <span className="text-muted">最终目标</span>
          <span className="font-semibold text-ink">上线第一个网站</span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
        {["小白友好", "任务闯关", "完成作品"].map((item) => (
          <span key={item} className="rounded-full bg-village-mint px-2 py-2 font-semibold text-village-green">
            {item}
          </span>
        ))}
      </div>
    </aside>
  );
}
