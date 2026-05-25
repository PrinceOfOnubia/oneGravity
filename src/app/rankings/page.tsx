import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/badge";
import { ChartCard } from "@/components/chart-card";
import { GlassCard } from "@/components/card";
import { PageHero } from "@/components/page-hero";
import { ProtocolDataTable } from "@/components/data-table";
import { SectionShell } from "@/components/section-shell";
import { StatusBadge } from "@/components/status-badge";
import { categories, rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "RWA Rankings",
  description: "Leaderboard of tokenized real-world asset protocols ranked by OneGravity Score."
};

const factors = [
  ["25%", "Issuer Transparency"],
  ["20%", "Liquidity Quality"],
  ["20%", "Audit & Reserve Proof"],
  ["15%", "Redemption Clarity"],
  ["10%", "Smart Contract Risk"],
  ["10%", "Counterparty Risk"]
];

export default function RankingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rankings"
        title="RWA Protocol Rankings"
        text="The definitive leaderboard of tokenized real-world asset protocols ranked by the OneGravity Score."
      />
      <SectionShell compact>
        <div className="mb-5 flex flex-wrap gap-2">
          {["All Categories", ...categories.filter((c) => c !== "All")].map((category, index) => (
            <Badge key={category} tone={index === 0 ? "blue" : "cyan"}>{category}</Badge>
          ))}
          <Badge tone="blue">How Rankings Work</Badge>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_270px]">
          <GlassCard className="p-4">
            <ProtocolDataTable protocols={rankedProtocols} />
            <p className="mt-4 text-center text-xs text-slate-500">Showing 1 to 8 of 8 protocols</p>
          </GlassCard>
          <aside className="space-y-4">
            <ChartCard title="Ranking Overview">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["183", "Protocols Ranked"],
                  ["$4.21B", "Total RWA TVL"],
                  ["74.6", "Avg. OneGravity Score"],
                  ["$1.02B", "7D Net Inflow"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[10px] border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </ChartCard>
            <ChartCard title="Score Distribution" href="/methodology">
              <div className="grid grid-cols-[110px_1fr] items-center gap-4">
                <div className="h-28 w-28 rounded-full" style={{ background: "conic-gradient(#22c55e 0 65deg,#3b82f6 65deg 198deg,#f59e0b 198deg 288deg,#ef4444 288deg)" }} />
                <div className="space-y-2 text-sm">
                  {["Prime (85-100)", "Strong (70-84)", "Watch (55-69)", "High Risk (0-54)"].map((tier) => (
                    <div key={tier} className="flex justify-between text-slate-400"><span>{tier}</span><span>25%</span></div>
                  ))}
                </div>
              </div>
            </ChartCard>
            <ChartCard title="Top Movers (7D)" href="/rankings">
              {rankedProtocols.slice(1, 4).map((protocol, index) => (
                <div key={protocol.slug} className="flex items-center justify-between border-b border-white/[0.06] py-3 last:border-0">
                  <span className="flex items-center gap-3 text-sm text-white"><Trophy size={15} className="text-cyan-300" />{index + 1}. {protocol.name}</span>
                  <span className="text-sm text-emerald-300">{protocol.sevenDayChange}</span>
                </div>
              ))}
            </ChartCard>
          </aside>
        </div>

        <GlassCard className="mt-5 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.6fr]">
            <div>
              <h2 className="text-lg font-semibold text-white">About OneGravity Rankings</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">Rankings are based on the OneGravity Score, a proprietary framework that evaluates protocols across six key pillars to deliver a single, reliable trust score.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {factors.map(([weight, label]) => (
                <div key={label} className="rounded-[10px] border border-white/[0.06] bg-white/[0.025] p-3">
                  <p className="text-lg font-semibold text-white">{weight}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionShell>
    </>
  );
}
