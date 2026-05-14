"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Flame } from "lucide-react";
import Image from "next/image";
import star1 from "@/public/images/star1.png";
import star2 from "@/public/images/star2.png";
import star3 from "@/public/images/star3.png";
import victorycup from "@/public/images/victorycup.png"
const players = [
  { rank: 1, name: "Arjun Mehra", score: 1000, streak: 12 },
  { rank: 2, name: "Priya K.", score: 900, streak: 8 },
  { rank: 3, name: "Imran Shah", score: 800, streak: 5 },
  { rank: 4, name: "Ritu Verma", score: 950, streak: 1 },
  { rank: 5, name: "Vivek Singh", score: 940, streak: 3 },
  { rank: 6, name: "Ayushi Jain", score: 930, streak: 4 },
  { rank: 7, name: "Manav Patil", score: 920, streak: 2 },
  { rank: 8, name: "Kavita Rao", score: 910, streak: 1 },
  { rank: 9, name: "Manav Patil", score: 920, streak: 2 },
  { rank: 50, name: "Manav Patil", score: 920, streak: 2 },
];

// Top-3 podium order: 2nd | 1st | 3rd
const podium = [players[1], players[0], players[2]];

// Badge using shield PNG with rank overlay
function PodiumBadge({
  rank,
  name,
  score,
}: {
  rank: number;
  name: string;
  score: number;
}) {
  const size =
    rank === 1
      ? " w-28 h-28 md:w-36 md:h-36 lg:w-64 lg:h-64 mb-2 md:mb-4"
      : " w-22 h-22 md:w-28 md:h-28 lg:w-52 lg:h-52";
  const stars = rank === 1 ? star1 : rank === 2 ? star2 : star3;
  return (
    <div className={`${size} flex items-center justify-center`}>
      <div className="flex flex-col items-center">
        <Image
          src={stars}
          alt={`Rank ${rank} shield`}
          className="object-contain drop-shadow-[0_0_16px_rgba(160,100,255,0.7)]"
        />
        {/* Name chip */}
        <div className="flex items-center gap-1 md:gap-2 bg-black border border-amber-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full mt-2 md:mt-4 max-w-[120px] md:max-w-none">
          <Avatar />
          <span className="text-white font-semibold text-[10px] md:text-sm truncate">{name}</span>
          <span className="bg-secondary-gradient text-white text-[9px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 rounded-full shrink-0">
            {score}
          </span>
        </div>
      </div>
    </div>
  );
}

// Avatar placeholder circle
function Avatar() {
  return (
    <div
      className={`w-8 h-8 rounded-full bg-linear-to-br from-[#0098FF] to-[#6d28d9] flex items-center justify-center font-bold text-white shrink-0`}
    ></div>
  );
}

export default function LeaderboardPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-4 md:px-10 lg:px-16 py-8">
      {/* Back + Title */}
      <div  className="flex items-center  mb-1">
        <button
          onClick={() => router.push("/games/general-knowledge")}
          className="text-zinc-400 hover:text-white transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft size={20} />
        </button>
        <span
          className="text-zinc-400 text-sm">
          Back
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-10">
        {/* Left — heading */}
        <div className="lg:w-74 shrink-0">
          <h1 className="text-3xl tracking-tight font-bold text-white">Leaderboard</h1>
          <p className="text-sm ">
            Earn points and rank higher by playing daily. Top performers win
            rewards every month!
          </p>
        </div>

        {/* Right — hero banner (image area intentionally blank) */}
        <div className="flex-1 rounded-2xl overflow-hidden bg-linear-to-r from-[#0098FF] to-[#000d24] border border-[#1e3a6e] lg:min-h-34 flex items-center py-2 gap-6 relative">
          {/* Blank image placeholder area */}
          <div className="lg:w-32 lg:h-28 w-12  shrink-0">
            <Image src={victorycup} alt=""/>
          </div>
          <div>
            <h2 className="lg:text-3xl text-lg text-nowrap  font-extrabold text-white">
              GK Quizzical Leaderboard
            </h2>
            <p className="text-blue-100 lg:text-sm text-[10px] max-w-lg ">
              Track your ranking, see how you stack up against other players,
              and stay in the race for daily rewards! Play consistently, score
              high, and claim your spot among the top winners!
            </p>
          </div>
        </div>
      </div>

      {/* Podium — top 3 */}
      <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mb-10">
        {podium.map((player) => {
          return (
            <div key={player.rank} className="">
              <PodiumBadge
                rank={player.rank}
                name={player.name}
                score={player.score}
              />
            </div>
          );
        })}
      </div>

      {/* Leaderboard table */}
      <div className="rounded-2xl overflow-hidden border border-[#1e3a6e] shadow-[0_0_20px_rgba(0,152,255,0.15)]">
        {/* Table header */}
        <div className="grid grid-cols-4 bg-linear-to-r from-[#0098FF] to-[#0060cc] lg:px-22 px-6 py-2 text-white text-sm">
          <span>Rank</span>
          <span>Player Name</span>
          <span className="text-center">Point Score</span>
          <span className="text-right flex items-center justify-end gap-1">
            Longest Streak <Flame size={14} className="text-orange-400" />
          </span>
        </div>

        {/* Rows */}
        {players.map((player, i) => {
          const isTop3 = player.rank <= 3;
          const isEven = player.rank % 2 === 0;
          return (
            <div
              key={i}
              className={`grid grid-cols-4 lg:px-26 px-6 py-3 items-center text-white text-sm border-b border-[#0d1a2e] transition-colors hover:bg-linear-to-br from-[#0098FF] to-[#00233B]
                ${isEven ? "bg-transparent" : "bg-[#0A1330]"}
              `}
            >
              {/* Rank */}
              <span className=" flex items-center gap-1">
                {isTop3 && <Flame size={13} className="text-orange-400" />}
                {player.rank}
              </span>

              {/* Player */}
              <span className="">{player.name}</span>

              {/* Score */}
              <span className=" text-center">
                {player.score}
              </span>

              {/* Streak */}
              <div className="flex items-center justify-end gap-1">
                <Flame size={14} className="text-orange-400" />
                {player.streak}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
