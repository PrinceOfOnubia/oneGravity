import Link from "next/link";
import { Badge } from "@/components/badge";
import { TableCard } from "@/components/card";
import type { Protocol } from "@/lib/rwa-data";

export function ProtocolTable({ protocols }: { protocols: Protocol[] }) {
  return (
    <TableCard>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
          <thead className="border-b border-sky-200/10 text-xs uppercase tracking-[0.18em] text-slate-500">
            <tr>
              <th className="px-5 py-4 font-medium">Protocol</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Chain</th>
              <th className="px-5 py-4 font-medium">TVL</th>
              <th className="px-5 py-4 font-medium">Yield</th>
              <th className="px-5 py-4 font-medium">Score</th>
              <th className="px-5 py-4 font-medium">Risk Tier</th>
              <th className="px-5 py-4 font-medium">7D Change</th>
            </tr>
          </thead>
          <tbody>
            {protocols.map((protocol) => (
              <tr key={protocol.slug} className="border-b border-sky-200/10 transition last:border-0 hover:bg-sky-300/[0.045]">
                <td className="px-5 py-4 font-semibold text-white">
                  <Link href={`/protocol/${protocol.slug}`} className="hover:text-teal-200">
                    {protocol.name}
                  </Link>
                </td>
                <td className="px-5 py-4 text-slate-300">{protocol.category}</td>
                <td className="px-5 py-4 text-slate-400">{protocol.chain}</td>
                <td className="px-5 py-4 text-slate-200">{protocol.tvl}</td>
                <td className="px-5 py-4 text-slate-200">{protocol.avgYield}</td>
                <td className="px-5 py-4 text-teal-100">{protocol.oneGravityScore}</td>
                <td className="px-5 py-4">
                  <Badge tone={protocol.riskTier === "Prime" ? "teal" : protocol.riskTier === "Strong" ? "blue" : "amber"}>{protocol.riskTier}</Badge>
                </td>
                <td className={`px-5 py-4 ${protocol.sevenDayChange.startsWith("-") ? "text-rose-300" : "text-teal-300"}`}>
                  {protocol.sevenDayChange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableCard>
  );
}
