import type { Metadata } from "next";
import { Banknote, Shield, Sparkles, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/badge";
import { ChartCard } from "@/components/chart-card";
import { GlassCard } from "@/components/card";
import { MetricCard } from "@/components/metric-card";
import { PageHero } from "@/components/page-hero";
import { ProtocolDataTable } from "@/components/data-table";
import { SectionShell } from "@/components/section-shell";
import { YieldChart } from "@/components/yield-chart";
import { YieldHeatmap } from "@/components/yield-heatmap";
import { protocols, rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "RWA Yields",
  description: "Stablecoin and RWA yield board focused on yield quality and risk-adjusted signals."
};

const highestYield = [...protocols].sort((a, b) => Number.parseFloat(b.avgYield) - Number.parseFloat(a.avgYield))[0];
const safestYield = rankedProtocols[0];
const treasuryBacked = rankedProtocols.find((protocol) => protocol.category === "Treasuries") ?? rankedProtocols[0];
const riskAdjusted = [...protocols].sort(
  (a, b) => Number.parseFloat(b.avgYield) * b.oneGravityScore - Number.parseFloat(a.avgYield) * a.oneGravityScore
)[0];

const yieldMetrics = [
  ["Avg. Stablecoin Yield", "7.38%", "+0.56% 7D", Banknote],
  ["Safest Yield", safestYield.avgYield, safestYield.name, Shield],
  ["Highest Yield", highestYield.avgYield, highestYield.name, TrendingUp],
  ["Treasury-Backed Yield", treasuryBacked.avgYield, treasuryBacked.name, Target],
  ["Risk-Adjusted Yield", riskAdjusted.avgYield, riskAdjusted.name, Sparkles]
] as const;

export default function YieldsPage() {
  return (
    <>
      <PageHero
        eyebrow="Yield Intelligence"
        title="RWA Yield Intelligence"
        text="Real-time stablecoin and RWA yields with risk-adjusted quality metrics."
      />
      <SectionShell compact>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {yieldMetrics.map(([label, value, detail, Icon]) => (
            <MetricCard key={label} label={label} value={value} detail={detail} icon={Icon} />
          ))}
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <GlassCard className="p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {["All Yields", "Stablecoin Yield", "Treasury-Backed", "Private Credit", "Real Estate", "Commodities"].map((tab, index) => (
                  <Badge key={tab} tone={index === 0 ? "blue" : "cyan"}>{tab}</Badge>
                ))}
                <select className="ml-auto h-9 rounded-[8px] border border-white/[0.08] bg-[#05070B] px-3 text-sm text-slate-300">
                  <option>All Chains</option>
                </select>
              </div>
              <ProtocolDataTable protocols={rankedProtocols} yieldMode />
              <p className="mt-4 text-center text-sm text-cyan-300">View all yield opportunities →</p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">Yield Quality</span> - Risk-adjusted assessment across liquidity, counterparty risk, transparency, redemption clarity, and reserve proof.
              </p>
            </GlassCard>
          </div>
          <aside className="space-y-4">
            <ChartCard title="Yield Highlights" href="/yields">
              {[safestYield, highestYield, treasuryBacked, riskAdjusted].map((protocol) => (
                <div key={protocol.slug} className="flex items-center justify-between border-b border-white/[0.06] py-3 last:border-0">
                  <span className="text-sm text-slate-300">{protocol.name}<span className="block text-xs text-slate-500">OneGravity Score: {protocol.oneGravityScore}</span></span>
                  <span className="text-lg font-semibold text-emerald-300">{protocol.avgYield}</span>
                </div>
              ))}
            </ChartCard>
            <ChartCard title="Yield Curve (Treasuries)" href="/reports">
              <YieldChart protocols={rankedProtocols.slice(0, 5)} />
            </ChartCard>
            <ChartCard title="Yield Heatmap" href="/reports">
              <YieldHeatmap />
            </ChartCard>
          </aside>
        </div>

        <GlassCard className="mt-5 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Stay informed</h2>
            <p className="mt-2 text-sm text-slate-400">Get the latest RWA intelligence and yield insights delivered to your inbox.</p>
          </div>
          <div className="flex gap-2">
            <input className="h-10 rounded-[8px] border border-white/[0.08] bg-[#05070B] px-3 text-sm text-white" placeholder="Enter your email" />
            <button className="rounded-[8px] bg-blue-600 px-4 text-sm font-semibold text-white">Subscribe</button>
          </div>
        </GlassCard>
      </SectionShell>
    </>
  );
}
