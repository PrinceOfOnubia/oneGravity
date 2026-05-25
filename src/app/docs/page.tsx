import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "Docs",
  description: "OneGravity product documentation for the RWA Explorer, OneGravity Score, Yield Board, Risk Signals, and methodology."
};

export default function DocsPage() {
  return (
    <TextPage
      eyebrow="Documentation"
      title="OneGravity product docs."
      intro="Use these docs as a quick guide to the RWA Intelligence terminal and its core workflows."
      sections={[
        { title: "Getting Started", body: "Start with the Dashboard for a market overview, then move into Explore, Rankings, and Yields for protocol-level analysis." },
        { title: "RWA Explorer", body: "The explorer lists tokenized asset protocols by category, chain, TVL, average yield, OneGravity Score, and risk tier." },
        { title: "OneGravity Score", body: "The score combines transparency, liquidity, reserve proof, redemption clarity, smart contract risk, and counterparty risk into one comparable signal." },
        { title: "Yield Board", body: "The yield board separates headline yield from yield quality, safest yield, treasury-backed yield, and risk-adjusted yield." },
        { title: "Risk Signals", body: "Risk signals highlight offchain dependencies, redemption limits, governance exposure, issuer concentration, and audit or reserve proof gaps." },
        { title: "API Access: Coming Soon", body: "Programmatic access is planned. The API page is available as a coming soon route for future documentation." },
        { title: "Methodology", body: "The Methodology page explains score weights, tier thresholds, and how each trust dimension is interpreted." }
      ]}
    />
  );
}
