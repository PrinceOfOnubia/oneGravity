import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "Alerts",
  description: "OneGravity alerts are coming soon."
};

export default function AlertsPage() {
  return (
    <TextPage
      eyebrow="Coming Soon"
      title="Alerts"
      intro="Alerts will help users monitor score changes, reserve proof updates, redemption changes, and market signal movements."
      sections={[
        { title: "Planned alert types", body: "Score threshold changes, risk tier changes, issuer transparency updates, yield quality moves, and capital flow spikes." },
        { title: "Current status", body: "Alerts are not live yet, but the route is ready and connected from the dashboard interface." }
      ]}
    />
  );
}
