"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { useRef, useState, useEffect } from "react";
import { EffectCoverflow } from "swiper/modules";
import quiz from "@/public/images/Slider/quiz.png";
import coach from "@/public/images/Slider/coach.png";
import stadium from "@/public/images/Slider/stadium.jpg";
import trophy from "@/public/images/Slider/trophy.jpg";
import player from "@/public/images/Slider/players.png";
import comingsoon from "@/public/images/comingsoon.png";
import daily from "@/public/images/daily.png";
import highlow from "@/public/images/footer/highlow.png";
import predictor from "@/public/images/predictor.png";
import eleminator from "@/public/images/eleminator.png";
import Image from "next/image";
import CardSection from "@/components/ui/CardSection";
import { CardLayout } from "@/components/ui/CardLayout";
import Button from "@/components/common/Button";
import ChallengeModal from "@/components/ui/ChallengeModal";

const dummy = [
  { id: 1, image: coach },
  { id: 2, image: stadium },
  { id: 3, image: trophy},
  { id: 4, image: coach },
  { id: 5, image: stadium },
  { id: 6, image:  trophy },
  { id: 7, image: player},
  { id: 8, image:  quiz },
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
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sharedSwiperProps = {
    onSwiper: (swiper: SwiperInstance) => { swiperRef.current = swiper; },
    onSlideChange: (swiper: SwiperInstance) => setActiveIndex(swiper.realIndex),
    loop: true,
    loopAdditionalSlides: 5,
    centeredSlides: true,
    initialSlide: 3,
    spaceBetween: 10,
    className: "w-full py-4",
  };

  const slides = dummy.map((item, idx) => (
    <SwiperSlide key={idx}>
      {({ isActive }) => (
        <div
          className={`rounded-2xl overflow-hidden relative transition-all duration-300
            h-40 md:h-74
            ${isActive ? "ring-2 ring-[#0098FF] shadow-[0_0_20px_rgba(0,152,255,0.4)]" : "opacity-70"}
          `}
        >
          <Image src={''} className="w-full h-full object-cover bg-amber-800" alt="" />
          {isActive && (
            <div className="absolute bottom-2 md:bottom-3 w-full px-3 md:px-5">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2 md:py-2.5 border border-white text-white text-xs md:text-sm font-semibold rounded-lg bg-linear-to-br from-[#0098FF] to-[#00233B] transition-colors"
              >
                Take The Challenge
              </button>
            </div>
          )}
        </div>
      )}
    </SwiperSlide>
  ));

  return (
    <main className="pb-4">
      {/* Hero + Slider */}
      <div className="relative">
        {/* Hero banner */}
        <div className="bg-linear-to-br to-[#00233B] from-[#0098FF] w-10/12 md:w-1/2 h-80 md:h-150 p-4 md:p-1 [clip-path:polygon(0%_0%,60%_0%,100%_50%,60%_100%,0%_100%)]">
          <h1 className="text-xl md:text-3xl font-bold text-white">General Knowledge</h1>
          <p className="text-zinc-300 text-xs md:text-base mt-1 md:mt-2">
            Test your knowledge across all topics.
          </p>
        </div>

        {/* Slider — positioned over the banner on desktop, below on mobile */}
        <div className="md:absolute md:w-full md:top-30  mt-4 md:mt-0">
          {isMobile ? (
            /* Mobile — plain slider, no coverflow */
            <Swiper
              {...sharedSwiperProps}
              slidesPerView={2}
            >
              {slides}
            </Swiper>
          ) : (
            /* Desktop — coverflow */
            <Swiper
              {...sharedSwiperProps}
              modules={[EffectCoverflow]}
              effect="coverflow"
              slidesPerView={5}
              coverflowEffect={{
                rotate: 0,
                stretch: 30,
                depth: 80,
                scale: 0.85,
                modifier: 1,
                slideShadows: false,
              }}
            >
              {slides}
            </Swiper>
          )}

          <div className="flex px-4 md:px-5 items-center justify-between mt-3 md:mt-4">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>
            <hr className="w-full mx-2 border border-zinc-600" />
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <ChallengeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
      {/* Coming soon */}
      <div className="w-4/5 md:w-1/2 mx-auto p-2 md:p-1 mt-48 md:mt-0">
        <Image src={comingsoon} alt="coming soon" />
      </div>

      <CardSection heading="Quizzes" quizzes={quizzes} />

      {/* Sports */}
      <div className="my-8 md:my-10 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold">Sports</h1>
        <div className="flex lg:flex-nowrap flex-wrap gap-5 md:gap-10 mt-4 md:mt-5">
          {puzzles.map((puzzle) => (
            <CardLayout key={puzzle.id} className="flex flex-col lg:flex-row">
              <Image src={puzzle.image} alt="" className="w-24 h-24 md:w-60 md:h-auto object-cover shrink-0" />
              <div className="space-y-2 md:space-y-3 py-3 px-3 md:py-4 md:px-4 border-l border-[#0098FF]">
                <h1 className="text-lg md:text-2xl font-semibold">{puzzle.title}</h1>
                <p className="text-xs md:text-sm leading-5">{puzzle.description}</p>
                <div className="flex gap-6 md:gap-10">
                  <div>
                    <h1 className="font-bold">5</h1>
                    <h1 className="text-xs text-zinc-400">League</h1>
                  </div>
                  <div>
                    <h1 className="font-bold">10</h1>
                    <h1 className="text-xs text-zinc-400">Sports</h1>
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
