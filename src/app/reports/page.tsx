import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "Reports",
  description: "OneGravity market reports are coming soon."
};

export default function ReportsPage() {
  return (
    <TextPage
      eyebrow="Coming Soon"
      title="Reports"
      intro="OneGravity reports will package RWA market signals, issuer transparency trends, reserve proof changes, and capital flow observations."
      sections={[
        { title: "Weekly intelligence", body: "Planned reports will summarize key protocol movements, sector composition, risk signals, and yield quality changes." },
        { title: "Research workflow", body: "Reports will connect back to dashboard views, protocol pages, and methodology notes for transparent interpretation." }
      ]}
    />
  );
}
