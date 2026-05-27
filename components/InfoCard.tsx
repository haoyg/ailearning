type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  tone?: "blue" | "green" | "white";
};

const tones = {
  blue: "border-village-blue/20 bg-village-sky",
  green: "border-village-green/20 bg-village-mint",
  white: "border-line bg-white"
};

export function InfoCard({ title, children, tone = "white" }: InfoCardProps) {
  return (
    <section className={`rounded-3xl border p-5 shadow-card ${tones[tone]}`}>
      <h2 className="mb-3 text-lg font-bold text-ink">{title}</h2>
      <div className="text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}
