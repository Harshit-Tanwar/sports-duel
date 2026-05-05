"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import Image, { StaticImageData } from "next/image";

interface CarouselItem {
  id: number;
  title: string;
  bg: StaticImageData;
}

interface CentreCarouselProps {
  items: CarouselItem[];
  onChallenge?: (item: CarouselItem) => void;
}

export default function CentreCarousel({
  items,
  onChallenge,
}: CentreCarouselProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Active slide title */}
     
      <div className="relative">
        <Swiper
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          loop
          loopAdditionalSlides={items.length}
          centeredSlides
          initialSlide={0}
          slidesPerView={2}
          spaceBetween={5}
          allowTouchMove
          className="w-full overflow-hidden"
          breakpoints={{
            // 480 :{slidesPerView :2 , spaceBetween :1},
            640: { slidesPerView: 4, spaceBetween: 16  },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {[...items, ...items, ...items].map((item, idx) => {
            return (
              <SwiperSlide key={idx} style={{ overflow: "visible" }}>
                {({ isActive }) => (
                  <div
                    className={`
                       rounded-2xl transition-all overflow-hidden rounded-b-2xl duration-300 cursor-pointer mx-1 mt-10 lg:mb-2
                      ${
                        isActive
                          ? "lg:h-68 h-44 ring-2 ring-[#0098FF] lg:-top-8 absolute shadow-[0_0_24px_rgba(0,152,255,0.5)]"
                          : "lg:h-68 h-44"
                      } 
                    `}
                  >
                    <Image src={item.bg} alt="" className="w-full h-full object-cover" />
                    {/* Button — center card only */}
                    {isActive && (
                      <div className="absolute bottom-1 left-0 right-0 lg:px-4 pb-2">
                        <button
                          onClick={() => onChallenge?.(item)}
                          className="w-full  lg:py-2 border border-white text-white lg:text-sm text-xs font-semibold rounded-lg bg-black/40 hover:bg-white hover:text-black transition-colors backdrop-blur-sm"
                        >
                          Take The Challenge
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Prev / Next */}
        <div className="flex items-center px-4 mt-4 gap-3">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors shrink-0"
            aria-label="Previous"
          >
            <FiChevronLeft size={16} />
          </button>
          <hr className="flex-1 border-zinc-600" />
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors shrink-0"
            aria-label="Next"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
