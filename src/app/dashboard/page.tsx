import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, Database, Gauge, Search, ShieldCheck, TrendingUp, WalletCards } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { MarketOverviewChart, SectorCompositionChart } from "@/components/dashboard-charts";
import { ProtocolTable } from "@/components/protocol-table";
import { latestInsights, marketSignals, marketStats, rankedProtocols, yieldHeatmap } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "OneGravity RWA intelligence dashboard with market signals, protocol rankings, yield heatmap, and trust scoring."
};

const statIcons = [Database, TrendingUp, Gauge, WalletCards, ShieldCheck];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#020610]/80 lg:flex">
      <DashboardSidebar />
      <section className="min-w-0 flex-1 px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div className="min-w-0">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative max-w-xl flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    aria-label="Search protocols"
                    placeholder="Search protocols, assets, issuers..."
                    className="w-full border border-sky-200/12 bg-white/[0.035] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-sky-300/40"
                  />
                </div>
                <Link href="/alerts" className="inline-flex items-center justify-center gap-2 border border-sky-200/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 hover:bg-white/[0.06]">
                  <Bell size={17} />
                  Alerts
                </Link>
              </div>

              <div className="mt-8 overflow-hidden border border-sky-200/10 bg-[#06101d] px-6 py-8">
                <div className="relative">
                  <div className="absolute right-0 top-0 hidden h-56 w-56 rounded-full border border-sky-300/25 bg-sky-400/10 shadow-[0_0_80px_rgba(59,130,246,0.28)] lg:block" />
                  <p className="text-sm text-slate-300">Welcome back,</p>
                  <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Here&apos;s your <span className="text-sky-300">RWA universe.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-slate-400">
                    Real-time intelligence on tokenized real-world assets, issuer transparency, reserve proof, and capital flow.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {marketStats.map((stat, index) => {
                  const Icon = statIcons[index] ?? Gauge;
                  return (
                    <div key={stat.label} className="glass-panel p-4">
                      <Icon className="text-teal-200" size={19} />
                      <p className="mt-4 text-xs text-slate-500">{stat.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-xs text-teal-300">{stat.delta}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.85fr]">
                <div className="glass-panel p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-white">RWA TVL Overview</h2>
                      <p className="mt-2 text-3xl font-semibold text-white">$4.21B <span className="text-base text-teal-300">+8.41% (7D)</span></p>
                    </div>
                    <Link href="/reports" className="text-sm text-sky-300 hover:text-sky-200">View report</Link>
                  </div>
                  <MarketOverviewChart />
                </div>
                <div className="glass-panel p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">TVL by Category</h2>
                    <Link href="/explore" className="text-sm text-sky-300 hover:text-sky-200">View all</Link>
                  </div>
                  <div className="mt-6">
                    <SectorCompositionChart />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Top protocols by OneGravity Score</h2>
                  <Link href="/rankings" className="text-sm text-sky-300 hover:text-sky-200">View all</Link>
                </div>
                <ProtocolTable protocols={rankedProtocols.slice(0, 6)} />
              </div>

              <div className="mt-4 glass-panel p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Yield heatmap</h2>
                  <Link href="/yields" className="text-sm text-sky-300 hover:text-sky-200">Open yield board</Link>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-5">
                  {yieldHeatmap.map((cell) => (
                    <div
                      key={cell.sector}
                      className="border border-sky-200/10 p-4"
                      style={{ background: `rgba(45, 212, 191, ${cell.intensity / 420})` }}
                    >
                      <p className="text-sm font-semibold text-white">{cell.sector}</p>
                      <p className="mt-4 text-2xl font-semibold text-white">{cell.yield}</p>
                      <p className="mt-1 text-xs text-slate-300">{cell.quality} quality</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <Panel title="Market Signals" href="/reports">
                {marketSignals.map((signal) => (
                  <div key={signal.label} className="flex items-center justify-between border-b border-sky-200/10 py-3 last:border-0">
                    <div>
                      <p className="text-sm text-slate-300">{signal.label}</p>
                      <p className="mt-1 text-xl font-semibold text-white">{signal.value}</p>
                    </div>
                    <span className={signal.delta.startsWith("-") ? "text-rose-300" : "text-teal-300"}>{signal.delta}</span>
                  </div>
                ))}
              </Panel>
              <Panel title="Watchlist" href="/watchlist">
                {rankedProtocols.slice(0, 4).map((protocol) => (
                  <Link key={protocol.slug} href={`/protocol/${protocol.slug}`} className="flex items-center justify-between border-b border-sky-200/10 py-3 last:border-0">
                    <span className="text-sm text-slate-300">{protocol.name}</span>
                    <span className="font-mono text-teal-200">{protocol.oneGravityScore}</span>
                  </Link>
                ))}
              </Panel>
              <Panel title="Latest Insights" href="/reports">
                {latestInsights.map((insight) => (
                  <p key={insight} className="border-b border-sky-200/10 py-3 text-sm leading-6 text-slate-300 last:border-0">
                    {insight}
                  </p>
                ))}
              </Panel>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Panel({ title, href, children }: { title: string; href: string; children: ReactNode }) {
  return (
    <div className="glass-panel p-5">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <Link href={href} className="text-sm text-sky-300 hover:text-sky-200">View all</Link>
      </div>
      {children}
    </div>
  );
}
