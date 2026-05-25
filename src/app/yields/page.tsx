import type { Metadata } from "next";
import { Shield, Sparkles, TrendingUp, Waves } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { YieldChart } from "@/components/yield-chart";
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

const yieldCards = [
  { label: "Safest Yield", protocol: safestYield, icon: Shield },
  { label: "Highest Yield", protocol: highestYield, icon: TrendingUp },
  { label: "Treasury-Backed Yield", protocol: treasuryBacked, icon: Waves },
  { label: "Risk-Adjusted Yield", protocol: riskAdjusted, icon: Sparkles }
];

export default function YieldsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Yield Quality"
        title="Stablecoin and RWA yield board."
        text="Compare yield signals through a trust lens, separating headline APY from reserve proof, liquidity, and counterparty quality."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {yieldCards.map(({ label, protocol, icon: Icon }) => (
          <div key={label} className="glass-panel p-5">
            <Icon className="text-teal-200" size={22} />
            <p className="mt-5 text-sm text-slate-400">{label}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{protocol.name}</h3>
            <div className="mt-5 flex items-end justify-between">
              <span className="text-4xl font-semibold text-white">{protocol.avgYield}</span>
              <span className="text-sm text-teal-200">Score {protocol.oneGravityScore}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <YieldChart protocols={protocols} />
      </div>
    </section>
  );
}
