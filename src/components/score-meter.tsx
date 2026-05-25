export function ScoreMeter({ score = 74.6 }: { score?: number }) {
  return (
    <div className="grid place-items-center">
      <div className="relative h-44 w-44">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#22d3ee 0deg, #2563ff ${score * 3.6}deg, rgba(80,120,255,0.16) ${score * 3.6}deg)`
          }}
        />
        <div className="absolute inset-4 grid place-items-center rounded-full bg-[#05070B]">
          <div className="text-center">
            <p className="text-4xl font-semibold text-white">{score}</p>
            <p className="text-sm text-slate-500">/100</p>
            <p className="mt-2 text-xs text-cyan-300">Example Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
