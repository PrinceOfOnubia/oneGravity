import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { ProtocolTable } from "@/components/protocol-table";
import { SectionHeading } from "@/components/section-heading";
import { categories, rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "RWA Rankings",
  description: "Leaderboard of tokenized real-world asset protocols ranked by OneGravity Score."
};

export default function RankingsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Rankings"
          title="Leaderboard by OneGravity Score."
          text="A trust-first view of RWA protocols, ranked by transparency, reserve proof, redemption clarity, liquidity, and risk signals."
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="border border-sky-200/15 bg-white/[0.025] px-3 py-2 text-sm text-slate-300">
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {rankedProtocols.slice(0, 3).map((protocol, index) => (
          <div key={protocol.slug} className="glass-panel p-5">
            <div className="flex items-center gap-3 text-teal-200">
              <Trophy size={20} />
              <span className="text-sm font-semibold">Rank #{index + 1}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">{protocol.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{protocol.verdict}</p>
            <div className="mt-5 text-4xl font-semibold text-white">{protocol.oneGravityScore}</div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <ProtocolTable protocols={rankedProtocols} />
      </div>
    </section>
  );
}
