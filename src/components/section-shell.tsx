import type { ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
  compact = false
}: {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? "py-8" : "py-14"} ${className}`}>
      {children}
    </section>
  );
}
