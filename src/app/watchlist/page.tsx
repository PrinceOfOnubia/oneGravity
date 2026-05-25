import type { Metadata } from "next";
import { ProtocolTable } from "@/components/protocol-table";
import { SectionHeading } from "@/components/section-heading";
import { rankedProtocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Watchlist",
  description: "OneGravity watchlist for tracked RWA protocols."
};

export default function WatchlistPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Watchlist"
        title="Tracked protocols."
        text="A starter watchlist of high-signal RWA protocols. Personalized watchlists are coming soon."
      />
      <div className="mt-10">
        <ProtocolTable protocols={rankedProtocols.slice(0, 5)} />
      </div>
    </section>
  );
}
