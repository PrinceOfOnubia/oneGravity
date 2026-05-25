import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "OneGravity terms for an informational RWA analytics platform."
};

export default function TermsPage() {
  return (
    <TextPage
      eyebrow="Terms"
      title="Terms of use."
      intro="OneGravity is an informational analytics platform. It does not provide financial, legal, tax, or investment advice."
      sections={[
        { title: "Informational only", body: "Content, scores, dashboards, and mock data are provided for research and discovery. They should not be treated as recommendations or guarantees." },
        { title: "No financial advice", body: "OneGravity does not advise users to buy, sell, hold, or transact in any asset, protocol, token, or yield product." },
        { title: "Data limitations", body: "Protocol data may be incomplete, delayed, estimated, or based on placeholders while the product is under development." },
        { title: "User responsibility", body: "Users are responsible for their own diligence and for consulting qualified professionals where appropriate." }
      ]}
    />
  );
}
