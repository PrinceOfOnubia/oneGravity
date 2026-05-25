import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Methodology",
  description: "How the OneGravity Score evaluates RWA transparency, liquidity, reserve proof, redemption clarity, and risk."
};

const weights = [
  ["Issuer Transparency", "25%", "Disclosure depth, reporting cadence, legal structure, and counterparty visibility."],
  ["Liquidity", "20%", "Market depth, exit clarity, liquidity concentration, and observable trading conditions."],
  ["Audit / Reserve Proof", "20%", "Audit coverage, attestation quality, custodian clarity, and reserve verification."],
  ["Redemption Clarity", "15%", "How clearly redemption eligibility, timing, constraints, and settlement are explained."],
  ["Smart Contract Risk", "10%", "Protocol complexity, audit posture, upgrade risk, and onchain operational exposure."],
  ["Counterparty Risk", "10%", "Issuer, custodian, borrower, governance, and offchain service-provider dependency."]
];

export default function MethodologyPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Methodology"
        title="A simple trust score for tokenized real-world assets."
        text="The OneGravity Score is a 0-100 signal designed to make RWA protocols easier to compare. It is not a recommendation; it is a structured intelligence layer for discovery and risk review."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {weights.map(([name, weight, text]) => (
          <div key={name} className="glass-panel p-5">
            <div className="flex items-start justify-between gap-5">
              <h2 className="text-xl font-semibold text-white">{name}</h2>
              <span className="border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-sm font-semibold text-teal-100">{weight}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel mt-10 p-6">
        <h2 className="text-2xl font-semibold text-white">Risk tiers</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["85-100", "Prime"],
            ["70-84", "Strong"],
            ["55-69", "Watch"],
            ["0-54", "High Risk"]
          ].map(([range, tier]) => (
            <div key={tier} className="border border-sky-200/10 bg-white/[0.025] p-4">
              <p className="text-sm text-slate-500">{range}</p>
              <p className="mt-2 text-xl font-semibold text-white">{tier}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
