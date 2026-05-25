"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Bell, Circle, Search } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/explore", label: "Explore" },
  { href: "/rankings", label: "Rankings" },
  { href: "/yields", label: "Yields" },
  { href: "/methodology", label: "Methodology" },
  { href: "/reports", label: "Reports" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#03050A]/86 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-5 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 lg:hidden">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-blue-400/35 bg-blue-500/10 text-cyan-100 shadow-[0_0_22px_rgba(37,99,255,0.3)]">
            <Activity size={18} />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-slate-50">OneGravity</span>
            <span className="hidden text-xs text-slate-500 sm:block">One Signal. Infinite Gravity.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`transition hover:text-white ${pathname === item.href ? "text-cyan-200" : ""}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <div className="relative w-[340px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={15} />
            <input className="h-9 w-full rounded-[8px] border border-white/[0.06] bg-[#05070B] pl-9 pr-12 text-xs text-white outline-none placeholder:text-slate-600" placeholder="Search protocols, issuers, assets..." />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-white/[0.06] px-1.5 py-0.5 text-[10px] text-slate-500">⌘ K</span>
          </div>
          <Link href="/alerts" className="relative grid h-9 w-9 place-items-center rounded-[8px] border border-white/[0.06] bg-[#05070B] text-slate-300">
            <Bell size={15} />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-blue-600 text-[10px] text-white">3</span>
          </Link>
          <Link href="/dashboard" className="grid h-9 w-9 place-items-center rounded-[8px] border border-white/[0.06] bg-[#05070B] text-slate-300">
            <Circle size={15} />
          </Link>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-white/[0.06] px-4 py-2 text-sm text-slate-400 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`shrink-0 px-3 py-2 transition hover:text-white ${pathname === item.href ? "text-cyan-200" : ""}`}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
