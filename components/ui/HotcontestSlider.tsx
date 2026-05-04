"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import Image from "next/image";
import Button from "@/components/common/Button";
import quiztime from "@/public/images/Slider/quiztime.png";
import football from "@/public/images/Slider/football.png";
import "swiper/css";
import { CardLayout } from "./CardLayout";

const Contests = [
  {
    title: "Hunting Shadows",
    img: football,
    desc: "Gaming isn't just a pastime, it's a culture and community that spans continents and transcends barriers.",
    prize: "10000",
    bonus: "500",
    buttonType: "primary" as const,
  },
  {
    title: "Contest",
    img: quiztime,
    desc: "Answer daily questions and win exciting rewards and gems.",
    prize: "5000",
    bonus: "100",
    buttonType: "secondary" as const,
  },
  {
    title: "Hunting Shadows",
    img: football,
    desc: "Hunting the places to get the rewards",
    prize: "4000",
    bonus: "300",
    buttonType: "secondary" as const,
  },
];

const HotcontestSlider = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="px-4 md:px-8 mb-5 mt-8 md:mt-5">
      <h1 className="text-2xl md:text-3xl font-bold">Hot Contest</h1>
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          640:  { slidesPerView: 1.2, spaceBetween: 16 },
          768:  { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 2,   spaceBetween: 20 },
        }}
        className="mt-4"
      >
        {Contests.map((contest, idx) => (
          <SwiperSlide key={idx}>
            <CardLayout className="flex overflow-hidden mb-2">
              {/* Left — image */}
              <div className="w-34 md:w-64 lg:w-75 shrink-0">
                <Image
                  src={contest.img}
                  alt={contest.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right — content */}
              <div className="flex flex-col justify-between px-3 md:px-4 py-3 md:py-5 flex-1 min-w-0">
                <h2 className="text-base md:text-xl font-bold text-white truncate">
                  {contest.title}
                </h2>

                <hr className="border-[#2a2a2a] mt-2" />

                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mt-2 line-clamp-3">
                  {contest.desc}
                </p>

                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg">🏆</span>
                    <span className="text-white text-xs md:text-sm">
                      Prize: <span className="font-bold text-sm md:text-lg">${contest.prize}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg">💎</span>
                    <span className="text-white text-xs md:text-sm">
                      Bonus: <span className="font-bold text-sm md:text-lg">+{contest.bonus} Gems</span>
                    </span>
                  </div>
                </div>

                <Button title="Join Now" type={contest.buttonType} />
              </div>
            </CardLayout>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center mt-4 gap-2">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Previous"
        >
          <FiChevronLeft />
        </button>
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
  );
};

export default HotcontestSlider;
