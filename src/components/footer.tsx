import Link from "next/link";

const footerLinks = [
  ["Explore", "/explore"],
  ["Dashboard", "/dashboard"],
  ["Rankings", "/rankings"],
  ["Yields", "/yields"],
  ["Methodology", "/methodology"],
  ["About", "/about"],
  ["Docs", "/docs"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"]
];

export function Footer() {
  return (
    <footer className="border-t border-sky-200/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-400 sm:px-6 md:grid-cols-[1fr_1.4fr_0.6fr] lg:px-8">
        <div>
          <p className="font-semibold text-white">One Signal. Infinite Gravity.</p>
          <p className="mt-1 max-w-xl">
            OneGravity is an RWA Intelligence layer for discovery, issuer transparency, reserve proof, and risk signals.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 md:justify-end">
          <a href="https://x.com/onegravity" className="hover:text-white" target="_blank" rel="noreferrer">
            X / Twitter
          </a>
          <a href="https://t.me/onegravity" className="hover:text-white" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
