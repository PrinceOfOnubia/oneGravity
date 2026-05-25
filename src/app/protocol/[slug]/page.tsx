import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, Landmark, LineChart, RefreshCcw, ShieldCheck } from "lucide-react";
import { ScoreRing } from "@/components/score-ring";
import { SectionHeading } from "@/components/section-heading";
import { getProtocolBySlug, protocols } from "@/lib/rwa-data";

type ProtocolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return protocols.map((protocol) => ({ slug: protocol.slug }));
}

export async function generateMetadata({ params }: ProtocolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);
  if (!protocol) return {};

  return {
    title: `${protocol.name} Intelligence`,
    description: `${protocol.name} RWA intelligence profile with OneGravity Score, trust tier, reserve proof, redemption clarity, and risk signals.`
  };
}

export default async function ProtocolPage({ params }: ProtocolPageProps) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);

  if (!protocol) notFound();

  const metrics = [
    ["TVL", protocol.tvl],
    ["Yield", protocol.apy],
    ["Liquidity", protocol.liquidity],
    ["Chain", protocol.chain]
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.55fr]">
        <div>
          <SectionHeading
            eyebrow="Protocol Intelligence"
            title={protocol.name}
            text={protocol.verdict}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([label, value]) => (
              <div key={label} className="glass-panel p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel p-6">
          <ScoreRing score={protocol.oneGravityScore} tier={protocol.riskTier} />
          <p className="mt-6 text-sm leading-6 text-slate-400">
            Trust tier reflects weighted RWA Intelligence signals across issuer transparency, reserve proof, redemption clarity,
            liquidity, smart contract risk, and counterparty risk.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <InsightCard icon={Landmark} title="Issuer Transparency" text={protocol.issuerTransparency} score={protocol.transparencyScore} />
        <InsightCard icon={RefreshCcw} title="Redemption Model" text={protocol.redemptionModel} score={protocol.redemptionScore} />
        <InsightCard icon={ShieldCheck} title="Audit / Reserve Proof" text={protocol.auditReserveStatus} score={protocol.auditScore} />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.7fr_0.3fr]">
        <div className="glass-panel p-6">
          <div className="flex items-center gap-3 text-teal-200">
            <LineChart size={22} />
            <h2 className="text-xl font-semibold text-white">AI-style verdict</h2>
          </div>
          <p className="mt-5 text-lg leading-8 text-slate-300">{protocol.verdict}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-sky-200/10 bg-white/[0.025] p-4">
              <p className="text-sm font-semibold text-white">Capital Flow</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{protocol.capitalFlow}</p>
            </div>
            <div className="border border-sky-200/10 bg-white/[0.025] p-4">
              <p className="text-sm font-semibold text-white">Yield Quality</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{protocol.yieldQuality}</p>
            </div>
          </div>
        </div>
        <div className="glass-panel p-6">
          <div className="flex items-center gap-3 text-amber-200">
            <AlertTriangle size={20} />
            <h2 className="text-xl font-semibold text-white">Risk Signals</h2>
          </div>
          <ul className="mt-5 space-y-3">
            {protocol.riskSignals.map((signal) => (
              <li key={signal} className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-teal-200" size={16} />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function InsightCard({
  icon: Icon,
  title,
  text,
  score
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
  score: number;
}) {
  return (
    <div className="glass-panel p-5">
      <div className="flex items-center justify-between gap-4">
        <Icon className="text-teal-200" size={22} />
        <span className="font-mono text-sm text-slate-300">{score}/100</span>
      </div>
      <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
