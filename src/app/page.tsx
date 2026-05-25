import Link from "next/link";
import { ArrowRight, DatabaseZap, Eye, LineChart, Percent, ShieldCheck, TrendingUp } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { DashboardProtocolTable } from "@/components/dashboard-protocol-table";
import { GlobeBackground } from "@/components/globe-background";
import { SectionShell } from "@/components/section-shell";
import { marketStats, rankedProtocols } from "@/lib/rwa-data";

const scorePillars = [
  { icon: Eye, title: "Issuer Transparency", text: "Disclosure depth, reporting cadence, product structure, and counterparty visibility." },
  { icon: ShieldCheck, title: "Reserve Proof", text: "Audit posture, attestation quality, custodian clarity, and reserve verification signals." },
  { icon: DatabaseZap, title: "Redemption Clarity", text: "How clearly participants can understand liquidity windows, settlement, and constraints." },
  { icon: LineChart, title: "Yield Quality", text: "Risk-adjusted interpretation of yield source, liquidity, and offchain exposure." }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-sky-200/10 bg-[#02050b]">
        <GlobeBackground className="right-[-14%] top-[-18%] h-[620px] w-[760px] opacity-40 sm:opacity-75" />
        <SectionShell className="grid min-h-[520px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionReveal>
            <p className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
              RWA Intelligence Layer
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl">
              One Signal.
              <span className="block bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Infinite Gravity.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white">The intelligence layer for tokenized real-world assets.</p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400">
              Discover, compare, and evaluate RWA protocols with unmatched transparency. OneGravity transforms on-chain and off-chain data into clear signals you can trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.45)] transition hover:bg-blue-500">
                Explore RWAs
                <ArrowRight size={18} />
              </Link>
              <Link href="/rankings" className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-sky-200/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-200/40 hover:bg-white/[0.04]">
                View Rankings
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="relative min-h-[390px]">
            <FloatingStat className="left-[5%] top-[28%]" value="183" label="Protocols Tracked" />
            <FloatingStat className="right-[22%] top-[5%]" value="$4.21B" label="Total RWA TVL" />
            <FloatingStat className="right-[6%] top-[42%]" value="12" label="Chains" />
            <FloatingStat className="bottom-[9%] left-[16%]" value="$1.02B" label="7D Net Inflow" />
            <FloatingStat className="bottom-[16%] right-[8%]" value="7.38%" label="Avg. Yield (USD)" />
          </MotionReveal>
        </SectionShell>
      </section>

      <SectionShell compact>
        <div className="grid overflow-hidden rounded-[14px] border border-[#152541] bg-[#07101f]/80 md:grid-cols-5">
          {marketStats.map((stat, index) => {
            const Icon = [TrendingUp, Percent, DatabaseZap, LineChart, ShieldCheck][index] ?? TrendingUp;
            return (
              <div key={stat.label} className="border-b border-[#152541] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <Icon className="text-sky-300" size={22} />
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs text-emerald-300">{stat.delta}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell compact>
        <div className="rounded-[14px] border border-[#152541] bg-[#07101f]/80 p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Top RWA Protocols</h2>
            <Link href="/rankings" className="rounded-[8px] border border-sky-200/15 px-3 py-2 text-sm text-white hover:bg-white/[0.04]">View All</Link>
          </div>
          <DashboardProtocolTable protocols={rankedProtocols.slice(0, 5)} />
          <Link href="/explore" className="mt-3 flex h-10 items-center justify-center text-sm text-sky-200 hover:text-white">Explore all 183 protocols →</Link>
        </div>
      </SectionShell>

      <section className="border-y border-sky-200/10 bg-[#02050b]">
        <SectionShell className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">The OneGravity Score</h2>
            <p className="mt-3 text-lg text-white">Turning complexity into clarity.</p>
            <p className="mt-5 text-sm leading-7 text-slate-400">Our proprietary scoring model evaluates RWAs across six key pillars to deliver a single, reliable trust score.</p>
            <Link href="/methodology" className="mt-7 inline-flex rounded-[8px] border border-sky-200/15 px-5 py-3 text-sm text-white hover:bg-white/[0.04]">
              View Methodology →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {scorePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <MotionReveal key={pillar.title} className="rounded-[10px] border border-[#152541] bg-[#07101f]/90 p-5">
                  <Icon className="text-teal-200" size={24} />
                  <h3 className="mt-5 text-base font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.text}</p>
                </MotionReveal>
              );
            })}
          </div>
        </SectionShell>
      </section>
    </>
  );
}

function FloatingStat({ value, label, className }: { value: string; label: string; className: string }) {
  return (
    <div className={`absolute hidden rounded-[8px] border border-sky-300/15 bg-[#07101f]/80 px-4 py-3 shadow-[0_0_28px_rgba(37,99,235,0.16)] backdrop-blur lg:block ${className}`}>
      <p className="text-base font-semibold text-sky-200">{value}</p>
      <p className="text-[11px] text-slate-400">{label}</p>
    </div>
  );
}
