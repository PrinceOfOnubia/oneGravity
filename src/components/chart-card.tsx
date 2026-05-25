import type { ReactNode } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/card";

export function ChartCard({ title, href, children }: { title: string; href?: string; children: ReactNode }) {
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {href ? <Link href={href} className="text-xs text-blue-300 hover:text-cyan-200">View all</Link> : null}
      </div>
      {children}
    </GlassCard>
  );
}
