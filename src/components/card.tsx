import type { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`og-card ${className}`}>{children}</div>;
}

export function DataCard({
  label,
  value,
  detail,
  className = ""
}: {
  label: string;
  value: string;
  detail?: string;
  className?: string;
}) {
  return (
    <GlassCard className={`p-5 ${className}`}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">{value}</p>
      {detail ? <p className="mt-2 text-xs text-teal-300">{detail}</p> : null}
    </GlassCard>
  );
}

export function TableCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <GlassCard className={`overflow-hidden ${className}`}>{children}</GlassCard>;
}
