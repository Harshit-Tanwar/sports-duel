export default function QuestionAreaPage() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-8">
      <div className="flex items-stretch gap-3 w-full">

        {/* Left stat cards */}
        <div className="flex flex-col gap-3 shrink-0">
          {/* Streak */}
          <div className="bg-[#0E1012] rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-4 min-w-[90px]">
            <div>
              <p className="text-white text-2xl font-bold leading-none">2</p>
              <p className="text-zinc-400 text-xs mt-1">Streak</p>
            </div>
            <span className="text-yellow-400 text-2xl">⚡</span>
          </div>

          {/* Gems */}
          <div className="bg-[#0E1012] rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-4 min-w-[90px]">
            <div>
              <p className="text-white text-2xl font-bold leading-none">20</p>
              <p className="text-zinc-400 text-xs mt-1">Gems</p>
            </div>
            <span className="text-blue-400 text-2xl">💎</span>
          </div>
        </div>

        {/* Centre — question banner */}
        <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-[200px] bg-gradient-to-br from-[#0d2a6e] via-[#1a3a8a] to-[#0a1a4a]">
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Question text bar */}
          <div className="relative z-10 bg-black/40 backdrop-blur-sm px-4 py-2 border-b border-[#0098FF]/40">
            <p className="text-white text-sm md:text-base font-medium">
              Q.1 Which team did Pep Guardiola manage before joining Manchester City?
            </p>
          </div>

          {/* Silhouette placeholder — 5 person shapes */}
          <div className="relative z-10 flex items-end justify-center h-full pb-2 gap-1 px-4 pt-4">
            {[
              { h: "h-24 md:h-32", bg: "bg-blue-900/60" },
              { h: "h-28 md:h-36", bg: "bg-blue-800/60" },
              { h: "h-32 md:h-40", bg: "bg-blue-700/60" },
              { h: "h-28 md:h-36", bg: "bg-blue-800/60" },
              { h: "h-24 md:h-32", bg: "bg-blue-900/60" },
            ].map((p, i) => (
              <div
                key={i}
                className={`${p.h} ${p.bg} w-16 md:w-24 rounded-t-full flex-1 max-w-[80px] md:max-w-[110px]`}
              />
            ))}
          </div>
        </div>

        {/* Right stat card — Score */}
        <div className="bg-[#0E1012] rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-4 shrink-0 min-w-[90px] self-start">
          <div>
            <p className="text-white text-2xl font-bold leading-none">10</p>
            <p className="text-zinc-400 text-xs mt-1">Score</p>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-red-400 text-lg">🎯</span>
          </div>
        </div>

      </div>
    </main>
  );
}
