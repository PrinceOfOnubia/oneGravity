import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Droplets, RefreshCcw, Scale, Shield, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/badge";
import { GlassCard } from "@/components/card";
import { PageHero } from "@/components/page-hero";
import { ScoreMeter } from "@/components/score-meter";
import { SectionShell } from "@/components/section-shell";

export const metadata: Metadata = {
  title: "Methodology",
  description: "How the OneGravity Score evaluates RWA transparency, liquidity, reserve proof, redemption clarity, and risk."
};

const pillars = [
  ["Issuer Transparency", "25%", "Evaluates the clarity and openness of the issuer's identity, structure, and governance.", ShieldCheck],
  ["Reserve Proof", "20%", "Assesses the quality, frequency, and verifiability of on-chain or third-party reserve attestations and audits.", Droplets],
  ["Redemption Clarity", "15%", "Measures how clearly redemptions are defined, processed, and communicated to holders.", RefreshCcw],
  ["Liquidity Quality", "10%", "Analyzes depth, secondary market quality, and capital efficiency of the asset or token.", TrendingUp],
  ["Smart Contract Risk", "10%", "Evaluates smart contract security, upgradeability, and historical risk events.", Code2],
  ["Counterparty Risk", "10%", "Assesses exposure to third parties, custodians, service providers, and credit risk.", Users],
  ["Market & Capital Flow", "5%", "Looks at TVL trend, net flows, adoption velocity, and on-chain activity quality.", TrendingUp],
  ["Regulatory & Legal", "5%", "Considers regulatory compliance, legal structure, and jurisdictional risk.", Shield]
] as const;

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="The OneGravity Score"
        text="A proprietary intelligence framework that evaluates real-world asset protocols across 8 pillars to deliver a single, comparable trust score."
      >
        <p className="text-sm text-slate-500">Last updated: May 18, 2024</p>
      </PageHero>

      <SectionShell compact>
        <GlassCard className="p-5">
          <h2 className="text-xl font-semibold text-white">How It Works</h2>
          <p className="mt-2 text-sm text-slate-400">The OneGravity Score is a weighted composite of 8 pillars that reflect the core dimensions of trust and quality in RWA protocols.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(([name, weight, text, Icon], index) => (
              <GlassCard key={name} className="p-5">
                <div className="flex items-start justify-between">
                  <Icon className="text-cyan-300" size={24} />
                  <span className="text-sm font-semibold text-white">{weight}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{index + 1}. {name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </GlassCard>
            ))}
          </div>
          <p className="mt-5 rounded-[10px] border border-white/[0.06] bg-white/[0.025] p-4 text-sm text-slate-500">
            Weights are set based on extensive research and may evolve as the RWA market matures.
          </p>
        </GlassCard>

        <GlassCard className="mt-5 grid gap-6 p-6 lg:grid-cols-[1fr_260px]">
          <div>
            <h2 className="text-xl font-semibold text-white">Score Calculation</h2>
            <p className="mt-2 text-sm text-slate-400">Each pillar is scored on a 0-100 scale. The final OneGravity Score is a weighted average.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-lg text-slate-200">
              <span className="text-blue-300">OneGravity Score</span>
              <span>=</span>
              <span className="text-3xl">Σ</span>
              <span>( Pillar Score × Weight )</span>
            </div>
          </div>
          <ScoreMeter score={74.6} />
        </GlassCard>

        <GlassCard className="mt-5 p-5">
          <h2 className="text-xl font-semibold text-white">Score Interpretation</h2>
          <p className="mt-2 text-sm text-slate-400">Protocols are classified into risk tiers based on their total score.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              ["Prime", "85-100", "Strong fundamentals across most pillars with low inherent risk.", "teal"],
              ["Strong", "70-84", "Solid overall quality with acceptable risk factors.", "blue"],
              ["Watch", "55-69", "Elevated risk in one or more areas. Proceed with additional diligence.", "amber"],
              ["High Risk", "0-54", "Material risks detected across multiple pillars. High caution advised.", "red"]
            ].map(([tier, range, text, tone]) => (
              <GlassCard key={tier} className="p-5">
                <Badge tone={tone as "teal" | "blue" | "amber" | "red"}>{tier}</Badge>
                <p className="mt-3 text-lg font-semibold text-white">{range}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </GlassCard>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mt-5 flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Continuous Improvement</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">The RWA landscape evolves quickly. Our methodology is continuously refined with new data, market feedback, and risk intelligence to ensure the OneGravity Score remains accurate, relevant, and forward-looking.</p>
          </div>
          <Link href="/reports" className="rounded-[8px] border border-white/[0.08] px-4 py-2 text-sm text-white">View Changelog →</Link>
        </GlassCard>

        <GlassCard className="mt-5 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">One Signal. Infinite Gravity.</h2>
            <p className="mt-2 text-sm text-slate-400">Empowering you to evaluate and navigate the tokenized real-world economy with clarity and confidence.</p>
          </div>
          <Link href="/rankings" className="rounded-[8px] bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,255,0.28)]">Explore Rankings →</Link>
        </GlassCard>
      </SectionShell>
    </>
  );
}
