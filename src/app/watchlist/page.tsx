import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProtocolTable } from "@/components/protocol-table";
import { SectionShell } from "@/components/section-shell";
import { rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Watchlist",
  description: "OneGravity watchlist for tracked RWA protocols."
};

export default function WatchlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Watchlist"
        title="Tracked protocols."
        text="A starter watchlist of high-signal RWA protocols. Personalized watchlists are coming soon."
      />
      <SectionShell compact>
      <div className="mt-10">
        <ProtocolTable protocols={rankedProtocols.slice(0, 5)} />
      </div>
      </SectionShell>
    </>
  );
}
