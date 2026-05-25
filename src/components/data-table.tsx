import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import type { Protocol } from "@/lib/rwa-data";

export function ProtocolDataTable({ protocols, yieldMode = false }: { protocols: Protocol[]; yieldMode?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[980px] border-collapse text-left text-xs">
        <thead className="border-b border-white/[0.06] text-[10px] uppercase tracking-[0.16em] text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">{yieldMode ? "Protocol / Asset" : "Protocol"}</th>
            <th className="px-4 py-3 font-medium">Category</th>
            {yieldMode ? <th className="px-4 py-3 font-medium">Underlying Asset</th> : null}
            <th className="px-4 py-3 font-medium">Chain</th>
            <th className="px-4 py-3 font-medium">{yieldMode ? "Yield APY" : "TVL"}</th>
            <th className="px-4 py-3 font-medium">{yieldMode ? "Yield Quality" : "Avg. Yield"}</th>
            <th className="px-4 py-3 font-medium">OneGravity Score</th>
            <th className="px-4 py-3 font-medium">Risk Tier</th>
            <th className="px-4 py-3 font-medium">7D Change</th>
            <th className="px-4 py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol, index) => (
            <tr key={protocol.slug} className="border-b border-white/[0.045] last:border-0 hover:bg-white/[0.025]">
              <td className="px-4 py-3 text-slate-400">{index + 1}</td>
              <td className="px-4 py-3">
                <Link href={`/protocol/${protocol.slug}`} className="flex items-center gap-3 font-medium text-white hover:text-cyan-200">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan-300/20 bg-white text-[10px] font-bold text-[#08111F]">
                    {protocol.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                  </span>
                  <span>
                    {protocol.name}
                    {yieldMode ? <span className="block text-[10px] text-slate-500">{protocol.slug.toUpperCase()}</span> : null}
                  </span>
                </Link>
              </td>
              <td className="px-4 py-3">
                <span className="rounded bg-blue-500/10 px-2 py-1 text-[11px] text-cyan-200">{protocol.category}</span>
              </td>
              {yieldMode ? <td className="px-4 py-3 text-slate-300">{protocol.category === "Private Credit" ? "Corporate Credit" : "US Treasuries"}</td> : null}
              <td className="px-4 py-3 text-slate-300">{protocol.chain.split(",")[0]}</td>
              <td className="px-4 py-3 text-white">{yieldMode ? protocol.avgYield : protocol.tvl}</td>
              <td className="px-4 py-3">
                {yieldMode ? (
                  <div className="flex items-center gap-2">
                    <ScoreBars score={protocol.oneGravityScore} />
                    <span className="text-slate-300">{protocol.oneGravityScore}</span>
                  </div>
                ) : (
                  <span className="text-white">{protocol.avgYield}</span>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <ScoreBars score={protocol.oneGravityScore} />
                  <span className="font-mono text-white">{protocol.oneGravityScore}</span>
                </div>
              </td>
              <td className="px-4 py-3"><StatusBadge value={protocol.riskTier} /></td>
              <td className={`px-4 py-3 font-mono ${protocol.sevenDayChange.startsWith("-") ? "text-red-300" : "text-emerald-300"}`}>{protocol.sevenDayChange}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <Star size={15} />
                  <ChevronRight size={15} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScoreBars({ score }: { score: number }) {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((bar) => (
        <span key={bar} className="h-1.5 w-6 rounded-full bg-cyan-400" style={{ opacity: Math.max(0.18, score / 100 - bar * 0.1) }} />
      ))}
    </div>
  );
}
