import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what OneGravity is and why RWA intelligence matters for tokenized asset discovery."
};

export default function AboutPage() {
  return (
    <TextPage
      eyebrow="About"
      title="RWA Intelligence for a market that needs trust signals."
      intro="OneGravity helps users discover, compare, and evaluate tokenized real-world assets through issuer transparency, reserve proof, redemption clarity, capital flow, and risk signals."
      sections={[
        {
          title: "What OneGravity is",
          body: "OneGravity is an analytics and reputation layer for tokenized real-world assets. It organizes protocol data into a clean intelligence terminal centered on the OneGravity Score."
        },
        {
          title: "Why RWA intelligence matters",
          body: "Tokenized asset markets blend onchain infrastructure with offchain issuers, custodians, borrowers, and legal structures. Discovery without trust context is incomplete."
        },
        {
          title: "The problem it solves",
          body: "RWA information is fragmented across issuer pages, governance forums, attestations, audits, and market dashboards. OneGravity brings those signals into a comparable interface."
        },
        {
          title: "How it helps",
          body: "Users can screen protocols, review yield quality, inspect redemption clarity, compare reserve proof posture, and identify risk signals before doing deeper research."
        }
      ]}
    />
  );
}
