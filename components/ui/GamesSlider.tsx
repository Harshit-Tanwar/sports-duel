"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SwiperSlide, Swiper } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import mine from "@/public/images/Slider/mine.png";
import Image from "next/image";
import Button from "@/components/common/Button";
import { CardLayout } from "./CardLayout";
import "swiper/css";

const cardData = [
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
  {
    img: mine,
    title: "Turbo Mines",
    desc: "Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!",
  },
];

const GamesSlider = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="px-4 md:px-8 mt-8 md:mt-5 overflow-hidden">
      <h1 className="text-2xl md:text-3xl font-bold">Games</h1>
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1280: { slidesPerView: 5, spaceBetween: 10 },
        }}
        className="mt-4"
      >
        {cardData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <CardLayout className="overflow-hidden mb-2 w-55 ">
              <Image src={card.img} alt={card.title} className="w-full" />
              <div className="px-3 md:px-4 py-3 flex flex-col gap-2 md:gap-3">
                <h1 className="text-lg md:text-2xl font-bold tracking-wider">{card.title}</h1>
                <p className="text-xs md:text-sm text-zinc-200 ">{card.desc}</p>
                <div className="pb-2 md:pb-3">
                  <Button title="Join Now" type="primary" />
                </div>
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

export default GamesSlider;
