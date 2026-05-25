import type { ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`og-page min-h-screen ${className}`}>{children}</div>;
}
