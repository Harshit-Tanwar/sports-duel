import Image from "next/image";
import image1 from "@/public/images/image1.png";
import Button from "@/components/common/Button";
import daily from "@/public/images/daily.png";
import highlow from "@/public/images/footer/highlow.png";
import book from "@/public/images/footer/book.png";
import CardSection from "@/components/ui/CardSection";
import predictor from "@/public/images/predictor.png";
import eleminator from "@/public/images/eleminator.png";
import { CardLayout } from "@/components/ui/CardLayout";
import GamesSlider from "@/components/ui/GamesSlider";
import HotcontestSlider from "@/components/ui/HotcontestSlider";
import Sidebar from "@/components/common/Sidebar";


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
  {
    id: 3,
    image: book,
    title: "General Knowledge",
    description: "More or Less? Take the Challenge!",
    buttonType: "primary" as const,
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

export default function Home() {

  
  return (
    <main className="flex">
     <Sidebar/>
      <section className="flex-1 min-w-0">
        {/* Hero banner */}
        <div className="relative w-full p-4 md:p-8">
          <Image
            src={image1}
            alt="Daily quiz banner background"
            className="w-full h-50 md:h-[470px] object-cover opacity-30 rounded-2xl"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-28 gap-2 md:gap-4">
            <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
              Daily Quiz. Daily Wins.
              <br />
              Play Smart, Win Big!
            </h1>
            <p className="hidden md:block text-gray-200 text-sm leading-relaxed max-w-125 drop-shadow">
              Challenge yourself every day with fresh questions. Play smart,
              climb the leaderboard, and win exciting rewards!
            </p>
            <p className="md:hidden text-gray-200 text-xs leading-relaxed max-w-65 drop-shadow">
              Challenge yourself every day with fresh questions. Play smart, climb
              the leaderboard, and win exciting rewards!
            </p>
            <div className="w-1/2 md:w-1/4">
              <Button type="primary" title="Start Now" />
            </div>
          </div>
        </div>

        {/* Quizzes */}
        <CardSection heading="Quizzes" quizzes={quizzes} />

        {/* Sports */}
        <div className="mt-8 md:mt-10 px-4 md:px-8">
          <h1 className="text-2xl md:text-3xl font-bold">Sports</h1>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-4 md:mt-5">
            {puzzles.map((puzzle) => (
              <CardLayout key={puzzle.id} className="flex">
                <Image
                  src={puzzle.image}
                  alt=""
                  className="w-24 h-24 md:w-55 md:h-52 object-cover shrink-0"
                  priority
                />
                <div className="space-y-2 md:space-y-3 py-3 px-3 md:py-4 md:px-4 border-l border-[#0098FF]">
                  <h1 className="text-lg md:text-2xl font-semibold">{puzzle.title}</h1>
                  <p className="text-xs md:text-sm leading-5">{puzzle.description}</p>
                  <Button type={puzzle.buttonType} title="Join Now" />
                </div>
              </CardLayout>
            ))}
          </div>
        </div>

        {/* Games carousel */}
        <GamesSlider />

        {/* Hot Contest */}
        <HotcontestSlider />
      </section>
    </main>
  );
}
