import type { Metadata } from "next";
import { TextPage } from "@/components/text-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "OneGravity privacy summary for analytics, cookies, and social contact links."
};

export default function PrivacyPage() {
  return (
    <TextPage
      eyebrow="Privacy"
      title="Privacy policy."
      intro="OneGravity keeps privacy simple: collect only what is useful for operating and improving the analytics experience."
      sections={[
        { title: "Basic analytics", body: "We may use basic analytics and cookies to understand aggregate usage, improve page performance, and identify product issues." },
        { title: "No sale of personal data", body: "OneGravity does not sell personal data. Future account features, if added, will describe any new data practices clearly." },
        { title: "External links", body: "Social links such as X / Twitter and Telegram may be governed by their own privacy practices." },
        { title: "Contact", body: "For now, reach OneGravity through https://x.com/onegravity or https://t.me/onegravity." }
      ]}
    />
  );
}
