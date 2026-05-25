export type ScoreInputs = {
  transparencyScore: number;
  auditScore: number;
  redemptionScore: number;
  liquidityScore: number;
  counterpartyRisk: number;
  smartContractRisk: number;
};

export type RiskTier = "Prime" | "Strong" | "Watch" | "High Risk";

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export function calculateOneGravityScore(inputs: ScoreInputs) {
  const score =
    inputs.transparencyScore * 0.25 +
    inputs.liquidityScore * 0.2 +
    inputs.auditScore * 0.2 +
    inputs.redemptionScore * 0.15 +
    (100 - inputs.smartContractRisk) * 0.1 +
    (100 - inputs.counterpartyRisk) * 0.1;

  return Math.round(clamp(score));
}

export function getRiskTier(score: number): RiskTier {
  if (score >= 85) return "Prime";
  if (score >= 70) return "Strong";
  if (score >= 55) return "Watch";
  return "High Risk";
}

export function riskTierTone(tier: RiskTier) {
  switch (tier) {
    case "Prime":
      return "text-teal-200 border-teal-300/35 bg-teal-300/10";
    case "Strong":
      return "text-sky-200 border-sky-300/35 bg-sky-300/10";
    case "Watch":
      return "text-amber-200 border-amber-300/35 bg-amber-300/10";
    case "High Risk":
      return "text-rose-200 border-rose-300/35 bg-rose-300/10";
  }
}
