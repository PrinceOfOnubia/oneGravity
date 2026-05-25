import Link from "next/link";

export function TextPage({
  eyebrow,
  title,
  intro,
  sections
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
      <div className="mt-10 grid gap-4">
        {sections.map((section) => (
          <article key={section.title} className="glass-panel p-6">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{section.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/dashboard" className="bg-sky-300 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-200">
          Open Dashboard
        </Link>
        <Link href="/explore" className="border border-sky-200/20 px-5 py-3 font-semibold text-white hover:bg-white/[0.04]">
          Explore RWAs
        </Link>
      </div>
    </section>
  );
}
