import Image from "next/image";

export function GlobeHero({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`relative ${compact ? "h-56" : "h-[420px]"} ${className}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
      <Image
        src="/onegravity-globe.jpg"
        alt=""
        fill
        sizes={compact ? "420px" : "640px"}
        priority={!compact}
        className="object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_55px_rgba(37,99,255,0.45)]"
      />
    </div>
  );
}
