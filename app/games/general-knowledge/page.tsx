"use client";

import { useState } from "react";
import comingsoon from "@/public/images/comingsoon.png";
import daily from "@/public/images/daily.png";
import highlow from "@/public/images/footer/highlow.png";
import predictor from "@/public/images/predictor.png";
import eleminator from "@/public/images/eleminator.png";
import coach from "@/public/images/Slider/coach.png"
import trophy from "@/public/images/Slider/trophy.jpg"
import stadium from "@/public/images/Slider/stadium.jpg"
import quiz from "@/public/images/Slider/quiz.png"
import player from "@/public/images/Slider/players.png"
import Image from "next/image";
import CardSection from "@/components/ui/CardSection";
import { CardLayout } from "@/components/ui/CardLayout";
import Button from "@/components/common/Button";
import ChallengeModal from "@/components/ui/ChallengeModal";
import CentreCarousel from "@/components/ui/CentreCarousel";

const carouselItems = [
  { id: 3, title: "Football Trophy",   bg: trophy },
  { id: 4, title: "Football Players",  bg: player},
  { id: 5, title: "Topic of the Day",  bg: quiz},
  { id: 1, title: "Football Coaches",  bg: coach },
  { id: 2, title: "Football Stadium",  bg: stadium },
];

const quizzes = [
  {
    id: 1,
    image: daily,
    title: "Daily Quizzical",
    description: "One Quiz a Day, Endless Rewards",
    buttonType: "primary" as const,
    buttonLabel: "Join Now",
  },
  {
    id: 2,
    image: highlow,
    title: "Higher or Lower",
    description: "More or Less? Take the Challenge!",
    buttonType: "secondary" as const,
    buttonLabel: "Join Now",
  },
];

const puzzles = [
  {
    id: 1,
    image: predictor,
    title: "Predicator",
    description:
      "Join the Predictor challenge and put your sports knowledge to the test! Make the right calls, score big, and climb the leaderboard with every correct prediction.",
    buttonType: "primary" as const,
  },
  {
    id: 2,
    image: eleminator,
    title: "Eleminator",
    description:
      "In Eliminator, every question is a knockout. Keep your streak alive, survive each round, and become the last one standing. Do you have what it takes?",
    buttonType: "secondary" as const,
  },
];

export default function GeneralKnowledgePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="pb-4">
      {/* Hero + Carousel */}
      <div className="relative">
        {/* Hero banner */}
        <div className="bg-linear-to-br to-[#00233B] from-[#0098FF] w-10/12 md:w-1/2 h-62 md:h-150 p-4 [clip-path:polygon(0%_0%,60%_0%,100%_50%,60%_100%,0%_100%)]">
          <h1 className="text-xl md:text-3xl font-bold text-white">General Knowledge</h1>
          <p className="text-zinc-300 text-xs md:text-base mt-1 md:mt-2">
            Test your knowledge across all topics.
          </p>
        </div>

        {/* Carousel — overlaps banner on desktop, sits below on mobile */}
        <div className="mt-4 absolute w-full md:top-24 top-4 md:mt-0">
          <CentreCarousel
            items={carouselItems}
            onChallenge={() => setModalOpen(true)}
          />
        </div>

        <ChallengeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      {/* Coming soon */}
      <div className="w-4/5 md:w-1/2 mx-auto p-2 mt-8">
        <Image src={comingsoon} alt="coming soon" />
      </div>

      {/* Quizzes */}
      <CardSection heading="Quizzes" quizzes={quizzes} />

      {/* Sports */}
      <div className="my-8 md:my-10 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold">Sports</h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 mt-4 md:mt-5">
          {puzzles.map((puzzle) => (
            <CardLayout key={puzzle.id} className="flex">
              <Image
                src={puzzle.image}
                alt=""
                className="w-24 h-24 md:w-60 md:h-auto object-cover shrink-0"
              />
              <div className="space-y-2 md:space-y-3 py-3 px-3 md:py-4 md:px-4 border-l border-[#0098FF]">
                <h1 className="text-lg md:text-2xl font-semibold">{puzzle.title}</h1>
                <p className="text-xs md:text-sm leading-5">{puzzle.description}</p>
                <div className="flex gap-6 md:gap-10">
                  <div>
                    <h1 className="font-bold">5</h1>
                    <p className="text-xs text-zinc-400">League</p>
                  </div>
                  <div>
                    <h1 className="font-bold">10</h1>
                    <p className="text-xs text-zinc-400">Sports</p>
                  </div>
                </div>
                <Button type={puzzle.buttonType} title="Join Now" />
              </div>
            </CardLayout>
          ))}
        </div>
      </div>
    </main>
  );
}
