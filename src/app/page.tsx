import Link from "next/link";
import { ArrowRight, DatabaseZap, Eye, LineChart, ShieldCheck } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { ProtocolTable } from "@/components/protocol-table";
import { SectionHeading } from "@/components/section-heading";
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
      <section className="relative overflow-hidden border-b border-sky-200/10">
        <div className="mx-auto grid min-h-[calc(100vh-132px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <MotionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-200">One Signal. Infinite Gravity.</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              The intelligence layer for tokenized real-world assets.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover tokenized asset markets, compare yield signals, evaluate issuer transparency, and monitor the
              OneGravity Score across the emerging RWA landscape.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore" className="inline-flex items-center justify-center gap-2 bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-200">
                Explore RWAs
                <ArrowRight size={18} />
              </Link>
              <Link href="/rankings" className="inline-flex items-center justify-center border border-sky-200/25 px-5 py-3 font-semibold text-white transition hover:border-sky-200/50 hover:bg-white/[0.04]">
                View Rankings
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="glass-panel scanline p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-sky-200/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">RWA Signal Console</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Market Integrity Snapshot</h2>
              </div>
              <span className="border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">LIVE MOCK</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {marketStats.map((stat) => (
                <div key={stat.label} className="border border-sky-200/10 bg-white/[0.025] p-4">
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-teal-200">{stat.delta}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Protocol Preview"
          title="Discovery built around trust, not noise."
          text="OneGravity turns raw RWA protocol information into comparable intelligence for capital flow, yield quality, reserve proof, and risk signals."
        />
        <div className="mt-8">
          <ProtocolTable protocols={rankedProtocols.slice(0, 6)} />
        </div>
      </section>

      <section className="border-y border-sky-200/10 bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Scoring"
            title="The OneGravity Score distills trust into one comparable signal."
            text="The model weights issuer transparency, liquidity, audit and reserve proof posture, redemption clarity, smart contract risk, and counterparty risk into a 0-100 trust score."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {scorePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <MotionReveal key={pillar.title} className="glass-panel p-5">
                  <Icon className="text-teal-200" size={24} />
                  <h3 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.text}</p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
