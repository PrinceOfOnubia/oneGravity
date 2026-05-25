import type { ComponentType } from "react";
import { GlassCard } from "@/components/card";

export function MetricCard({
  label,
  value,
  detail,
  icon: Icon
}: {
  label: string;
  value: string;
  detail?: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <GlassCard className="p-4">
      <div className="flex items-start justify-between gap-3">
        {Icon ? <Icon className="text-cyan-300" size={20} /> : null}
        <span className="sparkline ml-auto" />
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p>
      {detail ? <p className="mt-1 text-xs text-emerald-300">{detail}</p> : null}
    </GlassCard>
  );
}
