"use client";

import { useEffect, useState, useCallback } from "react";
import QuizButton from "@/components/ui/QuizButton";
import { Gem } from "lucide-react";
import star from "@/public/images/icons/star.png";
import zap from "@/public/images/icons/zap.png";
import Image from "next/image";
import coach from "@/public/images/Slider/coach.png";
import { Questions } from "@/utils/dummyQuizData";

const Duration = 60;

export default function QuestionAreaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(Duration);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gems, setGems] = useState(20);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = Questions[currentIndex];
  const totalQuestions = Questions.length;

  const goToNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setTimeLeft(Duration);
  }, [currentIndex, totalQuestions]);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(() => goToNext(), 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, isFinished, goToNext]);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
      setGems((prev) => prev + 2);
    } else {
      setStreak(0);
    }
    setTimeout(() => goToNext(), 1500);
  };

  const getOptionBg = (option: string): string | undefined => {
    if (selectedOption === null) return undefined;
    if (option === currentQuestion.correctAnswer) return "#16a34a";
    if (option === selectedOption) return "#dc2626";
    return "opacity-50";
  };


  const timerColor =
    timeLeft > 30 ? "bg-green-500" : timeLeft > 10 ? "bg-yellow-500" : "bg-red-500";

  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setTimeLeft(Duration);
    setScore(0);
    setStreak(0);
    setGems(20);
    setIsFinished(false);
  };

  const results = [
    { name : "Final Score" ,  entry : score},
    { name : "Streak" , entry : streak},
    { name : "Gems" , entry : gems},
  ]

  return (
    <>
      {/* Modal */}
      {isFinished && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xs p-4">
          <div className="bg-blue-600 rounded-2xl border-4 border-blue-500 p-6 text-center max-w-md w-full shadow-2xl">
            <h1 className="text-white text-3xl  mb-2">Quiz Summary</h1>
            {/* <p className="text-zinc-400 text-sm mb-8">
              You answered all {totalQuestions} questions
            </p> */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {results.map((result)=>(
              <div key={result.entry} className="flex items-center justify-between gap-5 bg-primary-gradient px-3 py-1 rounded-sm">
                <p className="">{result.name}</p>
                <p className="text-xl font-bold">{result.entry}</p>
              </div>
              ))}
            </div>
            <button
              onClick={handlePlayAgain}
              className="bg-[#0098FF] hover:bg-[#0060cc] text-white font-semibold py-3 px-10 rounded-xl transition-all w-full"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* ── Quiz Page ── */}
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
                <p className="text-white text-2xl font-bold leading-none">{streak}</p>
                <p className="text-zinc-400 text-xs mt-1">Streak</p>
              </div>
              <span className="text-yellow-400 text-2xl">
                <Image src={zap} width={40} alt="" />
              </span>
            </div>

            {/* Gems */}
            <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 min-w-22.5">
              <div>
                <p className="text-white text-2xl font-bold leading-none">{gems}</p>
                <p className="text-zinc-400 text-xs mt-1">Gems</p>
              </div>
              <span className="text-blue-400 text-2xl">
                <Gem />
              </span>
            </div>
          </div>

          {/* Center */}
          <div className="flex-1 rounded-2xl overflow-hidden relative min-h-50 md:min-h-65">
            {/* Question text */}
            <div className="relative z-10 bg-blue-800/40 px-4 py-2 border-b border-[#0098FF]/40">
              <p className="text-white text-sm md:text-base font-medium">
                Q.{currentIndex + 1} {currentQuestion.question}
              </p>
            </div>

            {/* Image + Timer */}
            <div className="relative h-80 bg-zinc-500">
              <Image src={coach} alt="" priority className="h-full w-full object-cover" />
              <div
                className={`absolute bottom-2 right-3 z-30 w-16 h-16 rounded-full ${timerColor} flex items-center justify-center shadow-lg transition-colors duration-500`}
              >
                <span className="text-white text-xs font-bold">{timeLeft}s</span>
              </div>
            </div>
          </div>

          {/* Right card — Score */}
          <div className="bg-primary-gradient rounded-xl border border-[#1e3a6e] px-4 py-3 flex items-center justify-between gap-10 shrink-0 min-w-22.5 self-start">
            <div>
              <p className="text-white text-2xl font-bold leading-none">{score}</p>
              <p className="text-zinc-400 text-xs mt-1">Score</p>
            </div>
            <span className="text-yellow-400 text-base">
              <Image src={star} width={40} alt="" />
            </span>
          </div>
        </div>

        {/* Answer + controls */}
        <div className="lg:px-50">
          {/* Answer buttons */}
          <div className="grid lg:grid-cols-2 gap-3 mt-5">
            {currentQuestion.options.map((option) => (
              <QuizButton
                key={option}
                title={option}
                variant="answer"
                onClick={() => handleOptionClick(option)}
                bgColor={getOptionBg(option)}
                className={`transition-all duration-300 ${getOptionBg(option)} ${
                  selectedOption !== null ? "cursor-not-allowed" : "cursor-pointer"
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
            <QuizButton title="Get More Tokens" variant="token" />
          </div>

          {/* Power-up buttons */}
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <QuizButton title="Streak Freeze" variant="freeze" icon="" />
            <QuizButton title="Pass" variant="pass" icon="" />
            <QuizButton title="5-Second Pause" variant="pause" icon="" />
          </div>
        </div>
      </main>
    </>
  );
}
