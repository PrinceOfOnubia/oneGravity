type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300">{text}</p> : null}
    </div>
  );
}
