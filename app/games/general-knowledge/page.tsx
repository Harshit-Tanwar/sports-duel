"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import { useRef, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import quiztime from "@/public/images/Slider/quiztime.png";
import comingsoon from "@/public/images/comingsoon.png"
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
  { id: 1, image: quiztime },
  { id: 2, image: quiztime },
  { id: 3, image: quiztime },
  { id: 4, image: quiztime },
  { id: 5, image: quiztime },
  { id: 6, image: quiztime },
  { id: 7, image: quiztime },
  { id: 8, image: quiztime },
];

const quizzes = [
  {
    id: 1,
    image: daily,
    title: "Daily Quizzical",
    description: "One Quiz a Day, Endless Rewards",
    buttonType: "primary" as const,
    buttonLabel : "Join Now",
  },
  {
    id: 2,
    image: highlow,
    title: "Higher or Lower",
    description: "More or Less? Take the Challenge!",
    buttonType: "secondary" as const,
    buttonLabel : "Join Now",
  },
]
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
                    className="w-74 h-74 rounded-2xl overflow-hidden relative transition-all duration-300 "
                  >
                    <Image src={item.image} className="w-full h-full object-cover" alt="" />
                    {isActive && (
                      <div className="absolute bottom-3 w-full px-5">
                        <button
                          onClick={() => setModalOpen(true)}
                          className="w-full py-2.5 border border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
                        >
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
          <ChallengeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
      <div className="w-1/2 inset-0 m-auto p-1">
        <Image src={comingsoon}  alt="coming soon" />
      </div>

      <CardSection heading="Quizzess" quizzes={quizzes}/>

      {/* Sports */}
        <div className="my-10 px-8">
          <h1 className="text-3xl font-bold">Sports</h1>
          <div className="flex  gap-10 mt-5">
            {puzzles.map((puzzle) => (
              <CardLayout key={puzzle.id} className="flex">
                <Image src={puzzle.image} alt="" className="w-60" />
                <div className="space-y-3 py-4 px-4 border-l border-[#0098FF]">
                  <h1 className="text-2xl font-semibold">{puzzle.title}</h1>
                  <p className="text-wrap text-sm leading-5">{puzzle.description}</p>
                  <div className="flex gap-10">
                     <div>
                      <h1>5</h1>
                      <h1>Leauge</h1>
                     </div>
                     <div>
                      <h1>10</h1>
                     <h1>Sports</h1>
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
