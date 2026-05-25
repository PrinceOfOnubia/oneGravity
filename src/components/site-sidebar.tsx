"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell, BookOpen, FileText, Gauge, Info, LineChart, Percent, Search, Star } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/rankings", label: "Rankings", icon: LineChart },
  { href: "/yields", label: "Yields", icon: Percent },
  { href: "/watchlist", label: "Watchlist", icon: Star },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/methodology", label: "Methodology", icon: Info },
  { href: "/docs", label: "Docs", icon: BookOpen }
];

export function SiteSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[220px] shrink-0 border-r border-white/[0.06] bg-[#03050A]/92 lg:sticky lg:top-0 lg:block lg:h-screen">
      <Link href="/" className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-5">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/30 bg-blue-500/10 text-cyan-200 shadow-[0_0_24px_rgba(37,99,255,0.32)]">
          <Activity size={20} />
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.32em] text-white">OneGravity</span>
          <span className="text-xs text-slate-500">One Signal. Infinite Gravity.</span>
        </span>
      </Link>
      <nav className="space-y-2 px-3 py-7">
        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-[8px] border px-3 py-2.5 text-sm transition ${
                active
                  ? "border-blue-400/35 bg-blue-600/20 text-white shadow-[0_0_24px_rgba(37,99,255,0.28)]"
                  : "border-transparent text-slate-400 hover:border-white/[0.06] hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <Icon size={17} />
              {item.label}
              {active ? <span className="ml-auto text-cyan-300">›</span> : null}
            </Link>
          );
        })}
      </nav>
      <div className="mx-4 rounded-[12px] border border-blue-400/15 bg-[#08111F]/80 p-5 text-center">
        <p className="text-sm font-semibold text-white">OneGravity Score</p>
        <p className="mt-1 text-xs text-slate-500">Intelligence Framework</p>
        <div className="mx-auto my-5 grid h-28 w-28 place-items-center rounded-full border border-cyan-300/20 bg-blue-500/10 shadow-[0_0_42px_rgba(37,99,255,0.22)]">
          <span className="text-4xl font-semibold text-white">6</span>
        </div>
        <Link href="/methodology" className="inline-flex w-full justify-center rounded-[8px] border border-white/[0.08] px-3 py-2 text-sm text-white hover:bg-white/[0.04]">
          View Methodology →
        </Link>
      </div>
    </aside>
  );
}
