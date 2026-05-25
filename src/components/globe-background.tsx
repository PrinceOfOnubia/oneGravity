import Image from "next/image";

export function GlobeBackground({
  className = "",
  opacity = "opacity-70"
}: {
  className?: string;
  opacity?: string;
}) {
  return (
    <div className={`pointer-events-none absolute z-0 select-none ${className}`} aria-hidden="true">
      <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-cyan-300/10 blur-[80px]" />
      <Image
        src="/onegravity-globe.jpg"
        alt=""
        fill
        sizes="760px"
        priority
        className={`object-contain mix-blend-screen ${opacity} [mask-image:radial-gradient(circle_at_center,black_44%,transparent_78%)]`}
      />
    </div>
  );
}
