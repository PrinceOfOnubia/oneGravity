import { Badge } from "@/components/badge";
import type { RiskTier } from "@/lib/scoring";

export function StatusBadge({ value }: { value: RiskTier | string }) {
  const tone = value === "Prime" ? "teal" : value === "Strong" ? "blue" : value === "Watch" ? "amber" : value === "High Risk" ? "red" : "cyan";
  return <Badge tone={tone}>{value}</Badge>;
}
