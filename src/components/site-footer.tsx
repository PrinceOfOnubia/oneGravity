"use client";

import Link from "next/link";

const product = [
  ["Explore", "/explore"],
  ["Dashboard", "/dashboard"],
  ["Rankings", "/rankings"],
  ["Yields", "/yields"],
  ["Reports", "/reports"],
  ["Methodology", "/methodology"]
];

const company = [
  ["About", "/about"],
  ["Docs", "/docs"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"]
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#03050A]">
      <div className="border-b border-white/[0.06] bg-[#08111F]/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-8 text-sm font-semibold uppercase tracking-[0.22em] text-slate-600 sm:px-6 lg:px-8">
          <span>a16z</span>
          <span>coinbase</span>
          <span>Wintermute</span>
          <span>Circle</span>
          <span>Ledger</span>
          <span>rwa.xyz</span>
          <span>Messari</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-400 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.34em] text-white">OneGravity</p>
          <p className="mt-4 max-w-xs text-xs leading-6">Financial intelligence infrastructure for the tokenized economy.</p>
        </div>
        <FooterColumn title="Product" links={product} />
        <FooterColumn title="Company" links={company} />
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Stay in the loop</p>
          <p className="mt-4 text-xs leading-6">Get the latest RWA insights and market signals.</p>
          <Link href="/docs" className="mt-4 flex h-10 items-center justify-between rounded-[8px] border border-white/[0.06] px-3 text-xs text-slate-500">
            API and reports coming soon <span>↗</span>
          </Link>
          <div className="mt-4 flex gap-4">
            <a href="https://x.com/onegravity" className="hover:text-white" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="https://t.me/onegravity" className="hover:text-white" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-slate-600">{title}</p>
      <div className="mt-4 grid gap-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
