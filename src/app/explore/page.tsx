import type { Metadata } from "next";
import { Download, Search, TrendingUp, Database, Gauge, ShieldCheck, WalletCards } from "lucide-react";
import { GlassCard } from "@/components/card";
import { DataCard } from "@/components/card";
import { FilterPanel } from "@/components/filter-panel";
import { MetricCard } from "@/components/metric-card";
import { PageHero } from "@/components/page-hero";
import { ProtocolDataTable } from "@/components/data-table";
import { SectionShell } from "@/components/section-shell";
import { marketStats, protocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Explore RWAs",
  description: "Explore tokenized asset protocols by category, chain, yield, liquidity, OneGravity Score, and risk tier."
};

const icons = [TrendingUp, Gauge, Database, ShieldCheck, WalletCards];

export default function ExplorePage() {
  return (
    <>
      <PageHero
        eyebrow="Explore"
        title="Explore RWA Protocols"
        text="Discover and compare the most trusted tokenized real-world asset protocols."
      />
      <SectionShell compact>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {marketStats.map((stat, index) => (
            <MetricCard key={stat.label} label={stat.label} value={stat.value} detail={stat.delta} icon={icons[index]} />
          ))}
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[220px_1fr_220px]">
          <GlassCard className="hidden p-5 xl:block">
            <p className="text-sm font-semibold text-white">OneGravity Score</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">Six pillars of trust for RWA intelligence.</p>
            <div className="mx-auto my-7 grid h-32 w-32 place-items-center rounded-full border border-cyan-300/20 bg-blue-500/10 shadow-[0_0_42px_rgba(37,99,255,0.25)]">
              <span className="text-4xl font-semibold text-white">6</span>
            </div>
            <DataCard label="Avg. OneGravity Score" value="74.6" detail="Strong" />
          </GlassCard>

          <GlassCard className="p-4">
            <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <input className="h-10 w-full rounded-[8px] border border-white/[0.08] bg-[#05070B] pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-600" placeholder="Search protocols..." />
              </div>
              {["All Categories", "All Chains", "All Risk Tiers"].map((label) => (
                <select key={label} className="h-10 rounded-[8px] border border-white/[0.08] bg-[#05070B] px-3 text-sm text-slate-300">
                  <option>{label}</option>
                </select>
              ))}
              <span className="text-xs text-slate-500">183 protocols</span>
              <button type="button" className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-white/[0.08] px-3 text-sm text-white">
                Export <Download size={14} />
              </button>
            </div>
            <ProtocolDataTable protocols={protocols} />
          </GlassCard>

          <FilterPanel />
        </div>
      </SectionShell>
    </>
  );
}
