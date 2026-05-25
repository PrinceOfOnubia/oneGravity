import { yieldHeatmap } from "@/lib/rwa-data";

export function YieldHeatmap() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-white/[0.06]">
      <div className="grid grid-cols-4 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">
        <span>Category</span>
        <span>Low Risk</span>
        <span>Medium Risk</span>
        <span>High Risk</span>
      </div>
      {yieldHeatmap.map((row, index) => (
        <div key={row.sector} className="grid grid-cols-4 border-t border-white/[0.06] px-3 py-2 text-xs text-slate-300">
          <span>{row.sector}</span>
          <span className="bg-emerald-500/10 px-2 py-1 text-emerald-200">{(Number.parseFloat(row.yield) * 0.82).toFixed(2)}%</span>
          <span className="bg-cyan-500/10 px-2 py-1 text-cyan-200">{row.yield}</span>
          <span className="bg-red-500/10 px-2 py-1 text-red-200">{(Number.parseFloat(row.yield) + 0.45 + index).toFixed(2)}%</span>
        </div>
      ))}
    </div>
  );
}
