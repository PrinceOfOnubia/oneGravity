import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "API Access",
  description: "OneGravity API access is coming soon."
};

export default function ApiPage() {
  return (
    <TextPage
      eyebrow="Coming Soon"
      title="API Access"
      intro="Programmatic access to RWA Intelligence, OneGravity Scores, market signals, and protocol metadata is planned."
      sections={[
        { title: "Planned coverage", body: "Future endpoints may include protocol profiles, score components, rankings, yield quality, and market signal snapshots." },
        { title: "Current status", body: "The API is not live yet. The dashboard and local mock data define the first version of the information model." }
      ]}
    />
  );
}
