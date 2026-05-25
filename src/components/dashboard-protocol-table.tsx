import Link from "next/link";
import { CircleDollarSign } from "lucide-react";
import type { Protocol } from "@/lib/rwa-data";
import { riskTierTone } from "@/lib/scoring";

export function DashboardProtocolTable({ protocols }: { protocols: Protocol[] }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#14233d] bg-[#050b16]/92">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-[12px]">
          <thead className="border-b border-[#14233d] text-[10px] uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Protocol</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Chain</th>
              <th className="px-4 py-3 font-medium">TVL</th>
              <th className="px-4 py-3 font-medium">Avg. Yield</th>
              <th className="px-4 py-3 font-medium">OneGravity Score</th>
              <th className="px-4 py-3 font-medium">Risk Tier</th>
              <th className="px-4 py-3 font-medium">7D Change</th>
            </tr>
          </thead>
          <tbody>
            {protocols.map((protocol, index) => (
              <tr key={protocol.slug} className="border-b border-[#111d32] last:border-0">
                <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                <td className="px-4 py-3">
                  <Link href={`/protocol/${protocol.slug}`} className="flex items-center gap-3 font-medium text-white hover:text-sky-200">
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-sky-200/20 bg-white text-[11px] font-bold text-[#07111f]">
                      {protocol.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                    </span>
                    {protocol.name}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300">{protocol.category}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <CircleDollarSign size={14} className="text-sky-300" />
                    ETH
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-200">{protocol.tvl}</td>
                <td className="px-4 py-3 text-slate-200">{protocol.avgYield}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[0, 1, 2, 3].map((bar) => (
                        <span
                          key={bar}
                          className="h-1.5 w-7 rounded-full bg-sky-400"
                          style={{ opacity: protocol.oneGravityScore / 110 - bar * 0.08 }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-white">{protocol.oneGravityScore}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-1 text-[11px] ${riskTierTone(protocol.riskTier)}`}>{protocol.riskTier}</span>
                </td>
                <td className={`px-4 py-3 font-mono ${protocol.sevenDayChange.startsWith("-") ? "text-rose-300" : "text-emerald-300"}`}>
                  {protocol.sevenDayChange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
