import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, Database, Gauge, Moon, Search, ShieldCheck, TrendingUp, WalletCards } from "lucide-react";
import { SectorCompositionChart } from "@/components/dashboard-charts";
import { DashboardProtocolTable } from "@/components/dashboard-protocol-table";
import { GlassCard } from "@/components/card";
import { GlobeHero } from "@/components/globe-hero";
import { SectionShell } from "@/components/section-shell";
import { latestInsights, marketSignals, marketStats, rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "OneGravity RWA intelligence dashboard with market signals, protocol rankings, yield heatmap, and trust scoring."
};

const statIcons = [TrendingUp, Gauge, Database, WalletCards, ShieldCheck];

export default function DashboardPage() {
  return (
    <SectionShell compact>
      <div className="text-white">
          <div className="grid gap-5 xl:grid-cols-[1fr_260px]">
            <div className="min-w-0">
              <div className="flex items-center gap-4">
                <div className="relative max-w-[350px] flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input
                    aria-label="Search protocols"
                    placeholder="Search protocols, assets, issuers..."
                    className="h-9 w-full rounded-[9px] border border-[#152541] bg-[#050a14]/95 pl-10 pr-12 text-[13px] text-white outline-none placeholder:text-slate-600 focus:border-blue-400/50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500">⌘ K</span>
                </div>
                <div className="ml-auto hidden gap-3 xl:flex">
                  <Link href="/alerts" className="relative grid h-10 w-10 place-items-center rounded-[10px] border border-[#152541] bg-[#050a14] text-slate-300">
                    <Bell size={16} />
                    <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-blue-600 text-[10px] text-white">3</span>
                  </Link>
                  <Link href="/methodology" className="grid h-10 w-10 place-items-center rounded-[10px] border border-[#152541] bg-[#050a14] text-slate-300">
                    <Moon size={16} />
                  </Link>
                </div>
              </div>

              <section className="og-card relative mt-4 min-h-[180px] overflow-hidden p-6">
                <div className="relative z-10 max-w-xl py-3">
                  <p className="text-[18px] text-slate-200">Welcome back,</p>
                  <h1 className="mt-1 text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
                    Here&apos;s your <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">RWA universe.</span>
                  </h1>
                  <p className="mt-3 text-[15px] text-slate-300">Real-time intelligence on tokenized real-world assets.</p>
                </div>
                <div className="absolute -right-4 -top-10 hidden w-[430px] xl:block">
                  <GlobeHero compact />
                </div>
              </section>

              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {marketStats.map((stat, index) => {
                  const Icon = statIcons[index] ?? Gauge;
                  return (
                    <GlassCard key={stat.label} className="p-3">
                      <div className="flex items-center justify-between">
                        <Icon className={index === 1 ? "text-lime-300" : "text-sky-300"} size={18} />
                        {index === 0 || index === 3 ? <span className="sparkline" /> : null}
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">{stat.label}</p>
                      <p className="mt-1 text-[22px] font-semibold tracking-tight text-white">{stat.value}</p>
                      <p className="mt-1 text-[11px] text-emerald-300">{stat.delta}</p>
                    </GlassCard>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_0.75fr]">
                <GlassCard className="p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-[18px] font-semibold text-white">RWA TVL Overview</h2>
                      <p className="mt-2 text-[28px] font-semibold text-white">$4.21B <span className="align-middle text-[14px] text-emerald-300">+8.41% (7D)</span></p>
                    </div>
                    <div className="flex rounded-[8px] border border-[#152541] bg-[#040914] p-1 text-[11px] text-slate-400">
                      {["7D", "30D", "90D", "1Y", "All"].map((period) => (
                        <span key={period} className={`rounded px-2 py-1 ${period === "30D" ? "bg-blue-600/35 text-white" : ""}`}>{period}</span>
                      ))}
                    </div>
                  </div>
                  <StaticTvlChart />
                </GlassCard>
                <GlassCard className="p-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold text-white">TVL by Category</h2>
                    <Link href="/explore" className="text-xs text-blue-300 hover:text-blue-200">View all</Link>
                  </div>
                  <div className="mt-3">
                    <SectorCompositionChart />
                  </div>
                </GlassCard>
              </div>

              <GlassCard className="mt-3 p-4">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h2 className="mr-auto text-[20px] font-semibold text-white">Top RWA Protocols</h2>
                  {["All", "Treasuries", "Private Credit", "Real Estate", "Commodities"].map((filter) => (
                    <span key={filter} className={`rounded-[7px] border border-[#172845] px-3 py-1.5 text-xs ${filter === "All" ? "bg-blue-600/25 text-white" : "text-slate-400"}`}>
                      {filter}
                    </span>
                  ))}
                  <Link href="/rankings" className="text-xs text-blue-300 hover:text-blue-200">View all</Link>
                </div>
                <DashboardProtocolTable protocols={rankedProtocols.slice(0, 5)} />
                <Link href="/explore" className="mt-3 flex h-10 items-center justify-center rounded-[8px] border border-[#11213a] bg-[#061121] text-sm text-sky-300 hover:bg-[#08182e]">
                  Explore all 183 protocols →
                </Link>
              </GlassCard>
            </div>

            <aside className="space-y-4">
              <Panel title="Top Movers (7D)" href="/rankings">
                {rankedProtocols.slice(1, 6).map((protocol, index) => (
                  <Link key={protocol.slug} href={`/protocol/${protocol.slug}`} className="grid grid-cols-[18px_1fr_auto] items-center gap-3 py-2.5 text-[12px]">
                    <span className="text-slate-500">{index + 1}</span>
                    <span className="flex items-center gap-2 text-white">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[10px] font-bold text-[#07111f]">
                        {protocol.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                      </span>
                      {protocol.name}
                    </span>
                    <span className={protocol.sevenDayChange.startsWith("-") ? "font-mono text-rose-300" : "font-mono text-emerald-300"}>{protocol.sevenDayChange}</span>
                  </Link>
                ))}
              </Panel>

              <Panel title="Market Pulse" href="/reports">
                {marketSignals.map((signal, index) => (
                  <div key={signal.label} className="grid grid-cols-[1fr_auto] items-center border-b border-[#13233b] py-3 last:border-0">
                    <div>
                      <p className="flex items-center gap-2 text-[12px] text-slate-300">
                        <span className={`h-2 w-2 rounded-full ${["bg-emerald-400", "bg-amber-400", "bg-sky-400", "bg-violet-400"][index]}`} />
                        {signal.label}
                      </p>
                      <p className="mt-1 text-[19px] font-semibold text-white">{signal.value} <span className={signal.delta.startsWith("-") ? "text-xs text-rose-300" : "text-xs text-emerald-300"}>{signal.delta}</span></p>
                    </div>
                    <span className="sparkline" />
                  </div>
                ))}
              </Panel>

              <Panel title="Insights" href="/reports" badge="AI">
                <div className="rounded-[10px] border border-blue-400/15 bg-blue-500/5 p-4">
                  <p className="text-sm leading-6 text-slate-200">{latestInsights[0]}</p>
                  <p className="mt-3 text-xs font-medium text-emerald-300">Net inflow: $642M (+14.2%) <span className="float-right text-slate-500">2h ago</span></p>
                </div>
              </Panel>
            </aside>
          </div>
      </div>
    </SectionShell>
  );
}

function StaticTvlChart() {
  const points = "0,118 34,108 70,86 105,96 142,116 178,105 214,82 250,65 286,74 322,54 358,43";

  return (
    <div className="mt-2 h-32">
      <svg viewBox="0 0 430 160" className="h-full w-full" role="img" aria-label="RWA TVL overview line chart">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[28, 58, 88, 118].map((y) => (
          <line key={y} x1="38" x2="382" y1={y} y2={y} stroke="rgba(148,163,184,0.12)" />
        ))}
        {[44, 128, 212, 296, 380].map((x) => (
          <line key={x} x1={x} x2={x} y1="18" y2="128" stroke="rgba(148,163,184,0.07)" />
        ))}
        <polygon points={`38,132 ${points} 358,132`} fill="url(#areaFill)" transform="translate(38 0)" />
        <polyline points={points} fill="none" stroke="#20b7ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#lineGlow)" transform="translate(38 0)" />
        <circle cx="396" cy="43" r="4" fill="#7dd3fc" filter="url(#lineGlow)" />
        {["$4.4B", "$4.0B", "$3.6B", "$3.2B", "$2.8B"].map((label, index) => (
          <text key={label} x="0" y={24 + index * 28} fill="#94a3b8" fontSize="11">{label}</text>
        ))}
        {["Apr 20", "Apr 24", "Apr 28", "May 2", "May 6", "May 10", "May 14", "May 18"].map((label, index) => (
          <text key={label} x={38 + index * 46} y="154" fill="#94a3b8" fontSize="10">{label}</text>
        ))}
      </svg>
    </div>
  );
}

function Panel({ title, href, children, badge }: { title: string; href: string; children: ReactNode; badge?: string }) {
  return (
    <GlassCard className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-white">
          {title} {badge ? <span className="ml-2 rounded bg-blue-500/15 px-2 py-0.5 text-xs text-blue-300">{badge}</span> : null}
        </h2>
        <Link href={href} className="text-xs text-blue-300 hover:text-blue-200">View all</Link>
      </div>
      {children}
    </GlassCard>
  );
}
