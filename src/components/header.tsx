"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/explore", label: "Explore" },
  { href: "/rankings", label: "Rankings" },
  { href: "/yields", label: "Yields" },
  { href: "/methodology", label: "Methodology" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/10 bg-[#03060d]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-teal-300/30 bg-teal-300/10 text-teal-100">
            <Activity size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">OneGravity</span>
            <span className="hidden text-xs text-slate-400 sm:block">RWA Intelligence Terminal</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-white ${pathname === item.href ? "text-teal-200" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/explore"
          className="hidden items-center gap-2 border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-200/50 hover:bg-sky-300/15 sm:flex"
        >
          Open Terminal
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-sky-200/10 px-4 py-2 text-sm text-slate-300 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 px-3 py-2 transition hover:text-white ${pathname === item.href ? "text-teal-200" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
