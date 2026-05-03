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
import "swiper/css/scrollbar";

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
    <div className="w-7xl p-8 mt-5 overflow-hidden">
      <h1 className="text-3xl font-bold">Games</h1>
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={20}
        slidesPerView={4}
        className="mt-4 mx-3"
      >
        {cardData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <CardLayout className="space-y-2 m-2 overflow-hidden">
              <Image src={card.img} alt="" className="" />
              <div className="px-4 flex flex-col gap-3">
                <h1 className="text-2xl font-bold tracking-wider">{card.title}</h1>
                <p className="text-sm text-zinc-200">{card.desc}</p>
                <div className="pb-3">
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
          className="bg-white text-black p-2 rounded-full"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white text-black p-2 rounded-full"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GamesSlider;
