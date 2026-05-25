import Link from "next/link";
import { GlassCard } from "@/components/card";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";

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
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} />
      <SectionShell className="max-w-5xl" compact>
        <div className="grid gap-4">
        {sections.map((section) => (
          <GlassCard key={section.title} className="p-6">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">{section.body}</p>
          </GlassCard>
        ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/dashboard" className="rounded-[8px] bg-blue-600 px-5 py-3 font-semibold text-white shadow-[0_0_28px_rgba(37,99,255,0.28)] hover:bg-blue-500">
          Open Dashboard
        </Link>
        <Link href="/explore" className="rounded-[8px] border border-white/[0.08] px-5 py-3 font-semibold text-white hover:bg-white/[0.04]">
          Explore RWAs
        </Link>
        </div>
      </SectionShell>
    </>
  );
}
