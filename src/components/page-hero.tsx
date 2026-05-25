import type { ReactNode } from "react";
import { Badge } from "@/components/badge";
import { GlobeBackground } from "@/components/globe-background";
import { SectionShell } from "@/components/section-shell";

export function PageHero({
  eyebrow = "OneGravity Terminal",
  title,
  text,
  children,
  globe = true
}: {
  eyebrow?: string;
  title: string;
  text: string;
  children?: ReactNode;
  globe?: boolean;
}) {
  return (
    <SectionShell className="relative overflow-hidden" compact>
      {globe ? <GlobeBackground className="right-[-12%] top-[-28%] h-[340px] w-[560px]" opacity="opacity-35 sm:opacity-50" /> : null}
      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_0.7fr]">
        <div className="relative z-10">
          <Badge tone="cyan">{eyebrow}</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">{text}</p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
        <div />
      </div>
    </SectionShell>
  );
}
