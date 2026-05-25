import { GlassCard } from "@/components/card";
import { Badge } from "@/components/badge";

export function FilterPanel() {
  const categories = ["Treasuries", "Private Credit", "Real Estate", "Commodities", "Stablecoin Yield", "All Categories"];
  const tiers = ["Prime", "Strong", "Watch", "High Risk"];

  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Filters</h2>
        <button type="button" className="text-xs text-blue-300">Reset</button>
      </div>
      <div className="mt-5 border-t border-white/[0.06] pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Category</p>
        <div className="mt-3 grid gap-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 text-sm text-slate-400">
              <input type="checkbox" defaultChecked={category === "All Categories"} className="accent-blue-500" />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Chain</p>
        <select className="mt-3 h-10 w-full rounded-[8px] border border-white/[0.08] bg-[#05070B] px-3 text-sm text-slate-300">
          <option>All Chains</option>
          <option>Ethereum</option>
          <option>Solana</option>
          <option>Stellar</option>
        </select>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Risk Tier</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tiers.map((tier) => <Badge key={tier}>{tier}</Badge>)}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">OneGravity Score</p>
        <input type="range" min="0" max="100" defaultValue="86" className="mt-3 w-full accent-blue-500" />
        <div className="mt-2 flex justify-between text-xs text-slate-500"><span>0</span><span>100</span></div>
      </div>
      <button type="button" className="mt-5 w-full rounded-[8px] bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,255,0.28)]">
        Apply Filters
      </button>
    </GlassCard>
  );
}
