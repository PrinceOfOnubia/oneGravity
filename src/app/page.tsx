import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CircleDot,
  DatabaseZap,
  Eye,
  Layers,
  LineChart,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { GlassCard } from "@/components/card";
import { DashboardProtocolTable } from "@/components/dashboard-protocol-table";
import { GlobeBackground } from "@/components/globe-background";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { marketStats, rankedProtocols } from "@/lib/rwa-data";

const processCards = [
  {
    icon: Search,
    step: "01",
    title: "Discover Protocols",
    text: "Explore tokenized real-world asset protocols by category, issuer, chain, liquidity, and market signal."
  },
  {
    icon: Radar,
    step: "02",
    title: "Read Trust Signals",
    text: "Review issuer transparency, reserve proof, redemption clarity, and protocol-level risk signals in one place."
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Compare Quality",
    text: "Rank protocols by OneGravity Score, yield quality, liquidity strength, and capital-flow confidence."
  }
];

const scorePillars = [
  { icon: Eye, title: "Issuer Transparency", text: "Disclosure depth, reporting cadence, product structure, and counterparty visibility." },
  { icon: ShieldCheck, title: "Reserve Proof", text: "Audit posture, attestation quality, custodian clarity, and reserve verification signals." },
  { icon: DatabaseZap, title: "Redemption Clarity", text: "How clearly users can understand liquidity windows, settlement, and redemption constraints." },
  { icon: LineChart, title: "Yield Quality", text: "Risk-adjusted interpretation of yield source, liquidity, and offchain exposure." }
];

const advantages = [
  ["RWA Discovery", "A clean protocol universe for tokenized treasuries, credit, commodities, and stablecoin yield."],
  ["Trust Scoring", "A comparable OneGravity Score built from transparency, reserves, liquidity, redemption, and risk."],
  ["Market Signals", "Capital flow, TVL movement, yield dispersion, and risk-tier movement across the RWA market."],
  ["Institutional Lens", "A terminal-style interface designed for serious research, not hype or investment prompts."]
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-74px)] overflow-hidden border-b border-white/[0.06] bg-[#020208]">
        <div className="landing-beam landing-beam-left" />
        <div className="landing-beam landing-beam-right" />
        <div className="landing-ring landing-ring-a" />
        <div className="landing-ring landing-ring-b" />
        <GlobeBackground className="left-1/2 top-[7%] h-[620px] w-[820px] -translate-x-1/2 opacity-30 sm:opacity-45" opacity="opacity-80" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-74px)] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <MotionReveal>
            <p className="inline-flex items-center gap-3 rounded-full border border-blue-400/10 bg-blue-500/[0.035] px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(34,197,94,0.65)]" />
              RWA Intelligence Layer
            </p>
            <h1 className="mt-10 text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.07em] text-white">
              One Signal.
              <span className="block bg-gradient-to-br from-sky-300 via-blue-500 to-violet-400 bg-clip-text text-transparent">
                Infinite Gravity.
              </span>
            </h1>
            <p className="mt-8 text-xs font-light uppercase tracking-[0.48em] text-slate-600 sm:text-sm">
              Discover · Compare · Evaluate
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[15px] font-light leading-8 text-slate-500">
              OneGravity transforms fragmented tokenized real-world asset data into issuer transparency, reserve proof,
              redemption clarity, yield quality, and risk signals you can compare.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/explore" className="landing-primary-btn">
                Explore RWAs <ArrowRight size={17} />
              </Link>
              <Link href="/methodology" className="landing-ghost-btn">
                Learn Methodology
              </Link>
            </div>
          </MotionReveal>
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-slate-700 md:flex">
            Scroll to explore
            <span className="h-8 w-5 rounded-full border border-slate-800 before:mx-auto before:mt-1 before:block before:h-2 before:w-0.5 before:rounded-full before:bg-blue-500" />
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/[0.06] bg-[#06060E] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl divide-y divide-white/[0.06] overflow-hidden md:grid-cols-5 md:divide-x md:divide-y-0">
          {marketStats.map((stat) => (
            <div key={stat.label} className="px-5 py-7 text-center">
              <p className="text-4xl font-extrabold tracking-[-0.06em] text-white">{stat.value}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-600">{stat.label}</p>
              <p className="mt-2 text-xs text-emerald-400">{stat.delta}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionShell className="py-28">
        <div className="max-w-3xl">
          <p className="landing-section-label">Process</p>
          <h2 className="landing-section-title">How OneGravity Works</h2>
          <p className="landing-section-copy">
            Three research steps from tokenized asset discovery to a comparable protocol trust signal.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {processCards.map((card) => {
            const Icon = card.icon;
            return (
              <GlassCard key={card.title} className="group relative overflow-hidden p-8 transition hover:-translate-y-1 hover:border-blue-400/20">
                <span className="absolute right-5 top-3 text-6xl font-extrabold tracking-[-0.08em] text-blue-500/[0.055]">{card.step}</span>
                <div className="grid h-12 w-12 place-items-center rounded-[12px] border border-blue-400/10 bg-blue-500/[0.05] text-blue-300 transition group-hover:shadow-[0_0_24px_rgba(37,99,255,0.22)]">
                  <Icon size={21} />
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-[-0.03em] text-white">{card.title}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-slate-500">{card.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#06060E]">
        <SectionShell className="grid items-center gap-16 py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="landing-section-label">Terminal Preview</p>
            <h2 className="landing-section-title">Protocol intelligence, not market noise.</h2>
            <p className="landing-section-copy">
              OneGravity turns RWA protocol data into a structured terminal for rankings, yield quality, capital flow,
              issuer transparency, and risk signals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="landing-chip">Treasuries</span>
              <span className="landing-chip">Private Credit</span>
              <span className="landing-chip">Stablecoin Yield</span>
            </div>
          </div>
          <GlassCard className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-blue-300">Live Mock</p>
                <h3 className="mt-2 text-xl font-bold text-white">Top RWA Protocols</h3>
              </div>
              <Link href="/rankings" className="landing-mini-btn">View rankings</Link>
            </div>
            <DashboardProtocolTable protocols={rankedProtocols.slice(0, 5)} />
          </GlassCard>
        </SectionShell>
      </section>

      <SectionShell className="py-28">
        <div className="text-center">
          <p className="landing-section-label justify-center">OneGravity Score</p>
          <h2 className="landing-section-title mx-auto max-w-3xl text-center">Turning complexity into clarity.</h2>
          <p className="landing-section-copy mx-auto">
            A proprietary trust framework for evaluating tokenized real-world asset protocols across transparency,
            reserves, redemption, liquidity, and risk.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scorePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlassCard key={pillar.title} className="p-7">
                <div className="grid h-11 w-11 place-items-center rounded-[12px] border border-blue-400/10 bg-blue-500/[0.05] text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-7 text-lg font-bold tracking-[-0.03em] text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-slate-500">{pillar.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#06060E]">
        <SectionShell className="py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {advantages.map(([title, text]) => (
              <GlassCard key={title} className="p-8">
                <div className="grid h-10 w-10 place-items-center rounded-[12px] border border-blue-400/10 bg-blue-500/[0.05] text-blue-300">
                  <Layers size={18} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-slate-500">{text}</p>
              </GlassCard>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative overflow-hidden px-4 py-28 text-center sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <CircleDot className="mx-auto mb-8 text-blue-400" size={34} />
          <h2 className="text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.07em] text-white">
            Intelligence for the
            <span className="block bg-gradient-to-br from-sky-300 via-blue-500 to-violet-400 bg-clip-text text-transparent">
              Tokenized Economy.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-7 text-slate-500">
            One Signal. Infinite Gravity. Discover the protocols shaping real-world asset markets.
          </p>
          <Link href="/explore" className="landing-primary-btn mt-10">
            Open Terminal <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
