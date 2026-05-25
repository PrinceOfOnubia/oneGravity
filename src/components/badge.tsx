import type { ReactNode } from "react";

export function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "blue" | "teal" | "green" | "amber" | "red" }) {
  const tones = {
    cyan: "border-cyan-300/15 bg-cyan-300/5 text-cyan-200",
    blue: "border-blue-400/20 bg-blue-500/10 text-blue-200",
    teal: "border-teal-300/15 bg-teal-300/5 text-teal-200",
    green: "border-green-400/15 bg-green-400/5 text-green-300",
    amber: "border-amber-400/15 bg-amber-400/5 text-amber-300",
    red: "border-red-400/15 bg-red-400/5 text-red-300"
  };

  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
