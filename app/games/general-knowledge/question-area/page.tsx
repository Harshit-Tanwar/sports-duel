"use client";
import { useEffect, useState, useRef } from "react";
import QuizButton from "@/components/ui/QuizButton";
import star from "@/public/images/icons/star.png";
import zap from "@/public/images/icons/zap.png";
import diamond from "@/public/images/icons/diamond.png";
import checkBox from "@/public/images/icons/check-box.png";
import freeze from "@/public/images/icons/freeze.png"
import pass from "@/public/images/icons/pass.png"
import pause from "@/public/images/icons/pause.png"
import Image from "next/image";
import coach from "@/public/images/Slider/coach.png";
import { Questions } from "@/utils/dummyQuizData";

const Duration = 60;

export default function QuestionAreaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(Duration);
  const [score, setScore] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gems, setGems] = useState(20);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = Questions[currentIndex];
  const totalQuestions = Questions.length;

  // Ref to block double-advances (timer + click racing each other)
  const Ref = useRef(false);

  // Go to next question — guarded so it can only fire once per question
  const goToNext = () => {
    if (Ref.current) return;
    Ref.current = true;

    setCurrentIndex((prev) => {
      if (prev + 1 >= totalQuestions) {
        setIsFinished(true);
        return prev;
      }
      return prev + 1;
    });
    setSelectedOption(null);
    setTimeLeft(Duration);
  };

  // Reset the guard whenever the question changes
  useEffect(() => {
    Ref.current = false;
  }, [currentIndex]);

  // Timer — uses a plain ref for countdown so it never causes stale-closure issues
  useEffect(() => {
    if (isFinished) return;

    // Local mutable counter — no state reads inside the interval
    let remaining = Duration;
    setTimeLeft(Duration);

    const interval = setInterval(() => {
      remaining -= 1;
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeout(() => goToNext(), 500);
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isFinished]);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return; // already answered

    setSelectedOption(option);

    if (option === currentQuestion.correctAnswer) {
      setRightAnswer((prev) => prev + 1);
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
      setGems((prev) => prev + 2);
    } else {
      setStreak(0);
    }
    // Auto-advance after 1.5s so user can see green/red
    setTimeout(() => goToNext(), 1500);
  };
  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setTimeLeft(Duration);
    setScore(0);
    setStreak(0);
    setGems(20);
    setIsFinished(false);
  };

  // Option color
  const getOptionStyle = (option: string): string => {
    if (selectedOption === null) return ""; // no selection yet — default style

    if (option === currentQuestion.correctAnswer) {
      return "!bg-green-600 !border-green-400";
    }
    if (option === selectedOption) {
      return "!bg-red-600 !border-red-400";
    }
    return "opacity-50";
  };

  // Timer color
  const timerColor =
    timeLeft > 30
      ? "bg-green-500"
      : timeLeft > 10
        ? "bg-yellow-500"
        : "bg-red-500";

  const results = [
    { id: 1, icon: star, name: "Final Score", entry: score },
    { id: 2, icon: zap, name: "Longest Streak", entry: streak },
    { id: 4, icon: diamond, name: "Gems", entry: gems },
    { id: 5, icon: checkBox, name: "Correct Answer", entry: rightAnswer },
  ];

  return (
    <>
      {/* Modal */}
      {isFinished && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xs p-2">
          <div className="bg-primary-gradient rounded-2xl border-4 border-blue-500 p-4 text-center max-w-xl w-full shadow-2xl">
            <h1 className="text-white text-3xl  mb-2">Quiz Summary</h1>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center border-3 border-white justify-between gap-5 bg-primary-gradient px-3 py-1  rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <Image src={result.icon} width={26} preload alt="" />
                    <p className="text-nowrap"> {result.name}</p>
                  </div>
                  <p className="text-xl font-bold">{result.entry}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
            <button
              className="bg-blue-500  hover:bg-[#0060cc] border border-white text-white font-semibold py-2 px-10 rounded-xl transition-all w-full"
            >
              LeaderBoeard
            </button>
            <button
              onClick={handlePlayAgain}
              className="bg-blue-500  hover:bg-[#0060cc] border border-white text-white font-semibold py-2 px-10 rounded-xl transition-all w-full"
            >
              Play Again
            </button>
            </div>
          </div>
        </div>
      )}
      <main className="min-h-screen bg-black md:px-20 p-2">
        {/* Question progress */}
        <p className="text-zinc-400 text-xs text-center mb-3">
          Question {currentIndex + 1} / {totalQuestions}
        </p>

        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {/* Left cards */}
          <div className="flex flex-col gap-3 shrink-0">
            {/* Streak */}
            <div className="rounded-xl border border-[#1e3a6e] bg-primary-gradient px-4 py-3 flex items-center justify-between gap-10 min-w-22.5">
              <div>
                <p className="text-white text-2xl font-bold leading-none">
                  {streak}
                </p>
                <p className="text-zinc-400 text-xs mt-1">Streak</p>
              </div>
              <Image src={zap} width={40} alt="" />
            </div>

            {/* Gems */}
            <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 min-w-22.5">
              <div>
                <p className="text-white text-2xl font-bold leading-none">
                  {gems}
                </p>
                <p className="text-zinc-400 text-xs mt-1">Gems</p>
              </div>
              <span className="text-blue-400 text-2xl">
                <Image src={diamond} width={40} alt="" />
              </span>
            </div>
          </div>

          {/* Centre */}
          <div className="flex-1 rounded-2xl overflow-hidden relative min-h-50 md:min-h-65">
            {/* Question text */}
            <div className="relative z-10 bg-blue-800/40 px-4 py-2 border-b border-[#0098FF]/40">
              <p className="text-white text-sm md:text-base font-medium">
                Q.{currentIndex + 1} {currentQuestion.question}
              </p>
            </div>

            {/* Image + Timer */}
            <div className="relative h-80 bg-zinc-500">
              <Image
                src={coach}
                alt=""
                priority
                className="h-full w-full object-cover"
              />
              {/* Timer badge */}
              <div
                className={`absolute bottom-2 right-3 z-30 w-16 h-16 rounded-full ${timerColor} flex items-center justify-center shadow-lg transition-colors duration-500`}
              >
                <span className="text-white text-xs font-bold">
                  {timeLeft}s
                </span>
              </div>
            </div>
          </div>

          {/* Right card — Score */}
          <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 shrink-0 min-w-22.5 self-start">
            <div>
              <p className="text-white text-2xl font-bold leading-none">
                {score}
              </p>
              <p className="text-zinc-400 text-xs mt-1">Score</p>
            </div>
            <div>
              <Image src={star} width={40} alt="" />
            </div>
          </div>
        </div>
        {/* Answer buttons */}
        <div className="lg:px-50">
          <div className="grid lg:grid-cols-2 gap-3 mt-5">
            {currentQuestion.options.map((option) => (
              <QuizButton
                key={option}
                title={option}
                variant="answer"
                icon={""}
                onClick={() => handleOptionClick(option)}
                className={`transition-all duration-300 ${getOptionStyle(option)} ${
                  selectedOption !== null
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              />
            ))}
          </div>

          {/* Tokens row */}
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-white text-sm font-semibold">
              Tokens (10){" "}
              <span className="text-zinc-400 text-xs font-normal ml-1">
                Max One Token Can Be Used
              </span>
            </p>
            <QuizButton title="Get More Tokens" variant="token" icon={""} />
          </div>

          {/* Power-up buttons */}
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap ">
            <QuizButton title="Streak Freeze" variant="freeze" icon={freeze}/>
            <QuizButton title="Pass" variant="pass" icon={pass}  />
            <QuizButton title="5-Second Pause" variant="pause" icon={pause}/>
          </div>
        </div>
      </main>
    </>
  );
}
