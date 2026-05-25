"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Activity, Bell, BookOpen, Gauge, LineChart, Menu, Search, Shield, Star, X } from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/rankings", label: "Rankings", icon: LineChart },
  { href: "/yields", label: "Yields", icon: Activity },
  { href: "/watchlist", label: "Watchlist", icon: Star },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/methodology", label: "Methodology", icon: Shield },
  { href: "/reports", label: "Reports", icon: BookOpen }
];

export function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = (
    <div className="flex h-full flex-col">
      <Link href="/dashboard" className="flex items-center gap-3 px-5 py-6">
        <span className="grid h-10 w-10 place-items-center border border-sky-300/25 bg-sky-300/10 text-sky-100">
          <Activity size={19} />
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">OneGravity</span>
          <span className="text-xs text-slate-500">One Signal. Infinite Gravity.</span>
        </span>
      </Link>
      <nav className="mt-3 space-y-1 px-3">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 border px-4 py-3 text-sm transition ${
                active
                  ? "border-sky-300/35 bg-sky-400/15 text-white shadow-[0_0_28px_rgba(56,189,248,0.18)]"
                  : "border-transparent text-slate-400 hover:border-sky-200/15 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mx-5 mt-auto mb-5 border border-sky-200/12 bg-white/[0.025] p-5">
        <p className="text-sm font-semibold text-white">OneGravity Score Framework</p>
        <div className="my-5 grid h-28 place-items-center rounded-full border border-sky-300/20 bg-sky-300/10 text-4xl text-sky-200">
          ◌
        </div>
        <Link href="/methodology" className="inline-flex w-full items-center justify-center border border-sky-200/20 px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.04]">
          Learn more
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-[70] border border-sky-200/15 bg-[#07101d] p-3 text-white lg:hidden"
        aria-label="Open dashboard menu"
      >
        <Menu size={18} />
      </button>
      <aside className="hidden h-screen w-64 shrink-0 border-r border-sky-200/10 bg-[#030813]/94 lg:sticky lg:top-0 lg:block">
        {nav}
      </aside>
      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button className="absolute inset-0 bg-black/70" aria-label="Close dashboard menu" onClick={() => setOpen(false)} />
          <aside className="relative h-full w-[82vw] max-w-sm border-r border-sky-200/10 bg-[#030813]">
            <button className="absolute right-4 top-4 text-slate-300" onClick={() => setOpen(false)} aria-label="Close dashboard menu">
              <X size={20} />
            </button>
            {nav}
          </aside>
        </div>
      ) : null}
    </>
  );
}
