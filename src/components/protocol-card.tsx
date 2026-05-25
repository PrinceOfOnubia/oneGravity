import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Gauge, Layers, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/card";
import { Badge } from "@/components/badge";
import type { Protocol } from "@/lib/rwa-data";

export function ProtocolCard({ protocol }: { protocol: Protocol }) {
  return (
    <Link href={`/protocol/${protocol.slug}`} className="group block transition hover:-translate-y-1">
      <GlassCard className="h-full p-5 transition group-hover:border-cyan-300/25">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{protocol.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{protocol.name}</h3>
        </div>
        <ArrowUpRight className="text-slate-500 transition group-hover:text-teal-200" size={18} />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
        <Metric icon={<Layers size={15} />} label="TVL" value={protocol.tvl} />
        <Metric icon={<Gauge size={15} />} label="Yield" value={protocol.avgYield} />
        <Metric icon={<ShieldCheck size={15} />} label="Score" value={String(protocol.oneGravityScore)} />
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-sky-200/10 pt-4">
        <span className="text-sm text-slate-400">{protocol.chain}</span>
        <Badge tone={protocol.riskTier === "Prime" ? "teal" : protocol.riskTier === "Strong" ? "blue" : "amber"}>{protocol.riskTier}</Badge>
      </div>
      </GlassCard>
    </Link>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="border border-sky-200/10 bg-white/[0.025] p-3">
      <div className="flex items-center gap-2 text-slate-500">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  );
}
