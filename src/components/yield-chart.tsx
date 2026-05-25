"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { Protocol } from "@/lib/rwa-data";

export function YieldChart({ protocols }: { protocols: Protocol[] }) {
  const chartData = protocols.map((protocol) => ({
    name: protocol.name,
    apy: Number.parseFloat(protocol.avgYield),
    score: protocol.oneGravityScore
  }));

  return (
    <div className="glass-panel h-[360px] p-4">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <BarChart data={chartData} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid stroke="rgba(148, 184, 213, 0.12)" vertical={false} />
          <XAxis dataKey="name" stroke="#8ea3b7" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#8ea3b7" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(56, 189, 248, 0.08)" }}
            contentStyle={{
              background: "#07111f",
              border: "1px solid rgba(125, 211, 252, 0.22)",
              color: "#f8fafc"
            }}
          />
          <Bar dataKey="apy" name="APY" fill="#38bdf8" radius={[3, 3, 0, 0]} />
          <Bar dataKey="score" name="Score" fill="#2dd4bf" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
