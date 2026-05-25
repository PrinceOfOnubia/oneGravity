import type { Metadata } from "next";
import { ProtocolCard } from "@/components/protocol-card";
import { ProtocolTable } from "@/components/protocol-table";
import { SectionHeading } from "@/components/section-heading";
import { protocols } from "@/lib/rwa-data";

export const metadata: Metadata = {
  title: "Explore RWAs",
  description: "Explore tokenized asset protocols by category, chain, yield, liquidity, OneGravity Score, and risk tier."
};

export default function ExplorePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tokenized Asset Discovery"
        title="Explore the RWA protocol universe."
        text="Compare treasury, credit, stablecoin yield, and emerging tokenized asset protocols using normalized placeholder intelligence."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {protocols.map((protocol) => (
          <ProtocolCard key={protocol.slug} protocol={protocol} />
        ))}
      </div>
      <div className="mt-12">
        <ProtocolTable protocols={protocols} />
      </div>
    </section>
  );
}
