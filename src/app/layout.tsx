import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://onegravity.xyz"),
  title: {
    default: "OneGravity | RWA Intelligence",
    template: "%s | OneGravity"
  },
  description:
    "OneGravity is the intelligence layer for tokenized real-world assets, combining RWA discovery, issuer transparency, reserve proof, redemption clarity, and risk signals.",
  openGraph: {
    title: "OneGravity | One Signal. Infinite Gravity.",
    description: "The intelligence layer for tokenized real-world assets.",
    url: "https://onegravity.xyz",
    siteName: "OneGravity",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OneGravity | RWA Intelligence",
    description: "The intelligence layer for tokenized real-world assets."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PageShell>
          <AppShell>{children}</AppShell>
        </PageShell>
      </body>
    </html>
  );
}
