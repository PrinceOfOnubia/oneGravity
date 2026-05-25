"use client";

import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { sectorComposition, tvlOverview } from "@/lib/rwa-data";

const colors = ["#38bdf8", "#2dd4bf", "#8b5cf6", "#f59e0b", "#64748b"];

export function MarketOverviewChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <AreaChart data={tvlOverview} margin={{ top: 20, right: 12, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="tvlGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="#8195aa" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#8195aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}B`} />
          <Tooltip
            contentStyle={{ background: "#07111f", border: "1px solid rgba(125, 211, 252, 0.22)", color: "#fff" }}
            formatter={(value) => [`$${value}B`, "TVL"]}
          />
          <Area type="monotone" dataKey="tvl" stroke="#38bdf8" strokeWidth={2} fill="url(#tvlGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SectorCompositionChart() {
  return (
    <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <PieChart>
            <Pie data={sectorComposition} dataKey="value" nameKey="name" innerRadius={58} outerRadius={86} paddingAngle={2}>
              {sectorComposition.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "#07111f", border: "1px solid rgba(125, 211, 252, 0.22)", color: "#fff" }}
              formatter={(value) => [`${value}%`, "Share"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3 self-center">
        {sectorComposition.map((sector, index) => (
          <div key={sector.name} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="h-2.5 w-2.5" style={{ backgroundColor: colors[index % colors.length] }} />
              {sector.name}
            </span>
            <span className="font-mono text-slate-200">{sector.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
