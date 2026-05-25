import { riskTierTone, type RiskTier } from "@/lib/scoring";

type ScoreRingProps = {
  score: number;
  tier: RiskTier;
  size?: "sm" | "lg";
};

export function ScoreRing({ score, tier, size = "lg" }: ScoreRingProps) {
  const compact = size === "sm";
  return (
    <div className="flex items-center gap-4">
      <div
        className={`grid shrink-0 place-items-center rounded-full border border-sky-200/15 bg-[#06111f] ${
          compact ? "h-16 w-16" : "h-28 w-28"
        }`}
        style={{
          background: `conic-gradient(#27e0c3 ${score * 3.6}deg, rgba(113, 143, 171, 0.18) 0deg)`
        }}
      >
        <div className={`grid place-items-center rounded-full bg-[#030912] ${compact ? "h-12 w-12" : "h-20 w-20"}`}>
          <span className={`font-semibold text-white ${compact ? "text-xl" : "text-3xl"}`}>{score}</span>
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">OneGravity Score</p>
        <span className={`mt-2 inline-flex border px-3 py-1 text-xs font-semibold ${riskTierTone(tier)}`}>{tier}</span>
      </div>
    </div>
  );
}
