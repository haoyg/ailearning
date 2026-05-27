type SectionTitleProps = {
  title: string;
  description?: string;
};

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-muted">{description}</p> : null}
    </div>
  );
}
