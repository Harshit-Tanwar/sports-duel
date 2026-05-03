"use client"
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import Image from "next/image";
import Button from "@/components/common/Button";
import quiztime from "@/public/images/Slider/quiztime.png";
import football from "@/public/images/Slider/football.png";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRef } from "react";
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
    buttonType : 'secondary' as const
  },
  {
    title: "Hunting Shadows",
    img: football,
    desc: "Hunting the places to get the rewards",
    prize: "4000",
    bonus: "300",
    buttonType : 'secondary' as const
  },
];
const HotcontestSlider = () => {
      const swiperRef = useRef<SwiperInstance | null>(null);
  return (
    <div className="px-8 w-7xl mb-5 ">
          <h1 className="text-3xl font-bold">Hot Contest</h1>
          <Swiper
           onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={2}
            className="mt-4 mx-3">
            {Contests.map((contest)=>(
            <SwiperSlide>
            <CardLayout className="flex overflow-hidden m-2">
              {/* Left — image */}
              <div className="w-75 h-70">
                <Image
                  src={contest.img}
                  alt="Haunting Shadows contest"
                  className="w-full h-full"
                />
              </div>
              {/* Right — content */}
              <div className="flex flex-col w-fit justify-between px-3 py-5 flex-1">
                {/* Title */}
                <h2 className="text-xl font-bold text-white">
                  {contest.title}
                </h2>

                {/* Divider */}
                <hr className="border-[#2a2a2a] mt-2" />

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                  {contest.desc}
                </p>

                {/* Prize & Bonus */}
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🏆</span>
                    <span className="text-white text-md">
                      Prize: <span className="font-bold text-lg">${contest.prize}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">💎</span>
                    <span className="text-white text-md">
                      Bonus:{" "}
                      <span className="font-bold text-lg">+{contest.bonus} Gems</span>
                    </span>
                  </div>
                </div>

                {/* Join Now button */}
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
              className="left-btn bg-white text-black p-2 rounded-full"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="right-btn bg-white text-black p-2 rounded-full"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
  )
}

export default HotcontestSlider