
import QuizButton from "@/components/ui/QuizButton";
import { Gem, Star, Zap } from "lucide-react";

const answers = [
  "Bayern Munich",
  "FC Porto",
  "Paris Saint-Germain",
  "Juventus",
];

export default function QuestionAreaPage() {
  return (
    <main className="min-h-screen bg-black md:px-20 p-2">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {/* Left  cards */}
        <div className="flex flex-col gap-3 shrink-0">
           {/* streak */}
          <div className="rounded-xl border border-[#1e3a6e] bg-primary-gradient px-4 py-3 flex items-center justify-between gap-10 min-w-22.5">
            <div>
              <p className="text-white text-2xl font-bold leading-none">2</p>
              <p className="text-zinc-400 text-xs mt-1">Streak</p>
            </div>
            <span className="text-yellow-400 text-2xl">
              <Zap />
            </span>
          </div>

             {/* gems */}
          <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 min-w-22.5">
            <div>
              <p className="text-white text-2xl font-bold leading-none">20</p>
              <p className="text-zinc-400 text-xs mt-1">Gems</p>
            </div>
            <span className="text-blue-400 text-2xl">
              <Gem />
            </span>
          </div>
        </div>

        {/* Centre */}
        <div className="flex-1 rounded-2xl overflow-hidden relative  min-h-50 md:min-h-65">
          <div className="relative z-10 bg-blue-800/40  px-4 py-2 border-b border-[#0098FF]/40">
            <p className="text-white text-sm md:text-base font-medium">
              Q.1 Which team did Pep Guardiola manage before joining Manchester
              City?
            </p>
          </div>
          <div className="relative h-80 bg-zinc-500">
            {/* Timer badge */}
            <div className="absolute bottom-3 right-3 z-20 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">60s</span>
            </div>
          </div>
          <div className="lg:px-20">
          {/*Answer buttons*/}
          <div className="grid lg:grid-cols-2 gap-3 mt-5">
            {answers.map((answer) => (
              <QuizButton key={answer} title={answer} variant="answer" />
            ))}
          </div>

          {/*Tokens row*/}
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-white text-sm font-semibold">
              Tokens (10){" "}
              <span className="text-zinc-400 text-xs font-normal ml-1">
                Max One Token Can Be Used
              </span>
            </p>
            <QuizButton title="Get More Tokens" variant="token" />
          </div>

          {/* Power-up buttons*/}
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <QuizButton title="Streak Freeze" variant="freeze" icon="" />
            <QuizButton title="Pass" variant="pass" icon="" />
            <QuizButton title="5-Second Pause" variant="pause" icon="" />
          </div>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 shrink-0 min-w-22.5 self-start">
          <div>
            <p className="text-white text-2xl font-bold leading-none">10</p>
            <p className="text-zinc-400 text-xs mt-1">Score</p>
          </div>
          <div>
            <span className="text-yellow-400 text-base">
              <Star />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
