"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { useRef, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import quiztime from "@/public/images/Slider/quiztime.png";
import Image from "next/image";

const dummy = [
  { id: 1, name: "1", image: quiztime },
  { id: 2, name: "2", image: quiztime },
  { id: 3, name: "3", image: quiztime },
  { id: 4, name: "4", image: quiztime },
  { id: 5, name: "5", image: quiztime },
  { id: 6, name: "6", image: quiztime },
  { id: 7, name: "7", image: quiztime },
  { id: 8, name: "8", image: quiztime },
  { id: 9, name: "9", image: quiztime },
];

export default function GeneralKnowledgePage() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <main className="">
      <div className="relative">
        <div className="bg-linear-to-br to-[#00233B]  from-[#0098FF]  w-1/2 h-150 p-1  [clip-path:polygon(0%_0%,60%_0%,100%_50%,60%_100%,0%_100%)]">
          <h1 className="text-3xl font-bold text-white">General Knowledge</h1>
          <p className="text-zinc-400 mt-2">
            Test your knowledge across all topics.
          </p>
        </div>
        <div className="absolute w-full top-30 ">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            pagination
            parallax
            loop
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              depth: 5,
              scale: 0.8,
              modifier: 0.5,
              slideShadows: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            centeredSlides
            initialSlide={4}
            spaceBetween={5}
            slidesPerView={5}
            className="w-full"
          >
            {dummy.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <div
                    className={`w-74 h-74 rounded-2xl overflow-hidden relative transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-[#0098FF] shadow-[0_0_30px_rgba(0,152,255,0.4)]"
                        : "opacity-70"
                    }`}
                  >
                    <Image src={item.image} className="w-full h-full object-cover" alt="" />
                    {isActive && (
                      <div className="absolute bottom-3 w-full px-5">
                        <button className="w-full py-2.5 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
                          Take The Challenge
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex px-5 items-center justify-between mt-4 ">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white text-black p-2 rounded-full"
            >
              <FiChevronLeft />
            </button>
            <hr className="w-full mx-2 border border-white" />
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white text-black p-2 rounded-full"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-zinc-800"></div>
    </main>
  );
}

//  <Swiper
//             onSwiper={(swiper) => { swiperRef.current = swiper; }}
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             modules={[EffectCoverflow]}
//             effect="coverflow"
//             grabCursor
//             centeredSlides
//             loop
//             slidesPerView={5}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 20,
//               depth: 20,
//               scale: 0.82,
//               modifier: 1,
//               slideShadows: false,
//             }}
//             className="w-full py-8"
//           >
//             {slides.map((slide, idx) => (
//               <SwiperSlide key={slide.id}>
//                 {({ isActive }) => (
//                   <div
//                     className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
//                       isActive
//                         ? "ring-2 ring-[#0098FF] shadow-[0_0_30px_rgba(0,152,255,0.4)]"
//                         : "opacity-80"
//                     }`}
//                     style={{ aspectRatio: "3/4" }}
//                   >
//                     <Image
//                       src={slide.image}
//                       alt={slide.title}
//                       fill
//                       className="object-cover"
//                     />

//                     {/* Active card overlay with button */}
//                     {isActive && (
//                       <div className="absolute inset-0 flex flex-col justify-end  p-4">
//                         <button className="w-full py-2.5 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
//                           Take The Challenge
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>
