
import Image from "next/image";
import image1 from "@/public/images/image1.png";
import Button from "@/components/common/Button";
import daily from "@/public/images/daily.png";
import highlow from "@/public/images/footer/highlow.png";
import book from "@/public/images/footer/book.png";
import CardSection from "@/components/ui/CardSection";
import predictor from "@/public/images/predictor.png";
import eleminator from "@/public/images/eleminator.png";
import mine  from "@/public/images/Slider/mine.png"
const quizzes = [
  {
    id: 1,
    image: daily,
    title: "Daily Quizzical",
    description: "One Quiz a Day, Endless Rewards",
    buttonType: "primary" as const,
  },
  {
    id: 2,
    image: highlow,
    title: "Higher or Lower",
    description: "More or Less? Take the Challenge!",
    buttonType: "secondary" as const,
  },
  {
    id: 3,
    image: book,
    title: "General Knowledge",
    description: "More or Less? Take the Challenge!",
    buttonType: "primary" as const,
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
const cardData = [
  {img : mine , title : 'Turbo Mines', desc : 'Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!'},
  {img : mine , title : 'Turbo Mines', desc : 'Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!'},
  {img : mine , title : 'Turbo Mines', desc : 'Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!'},
  {img : mine , title : 'Turbo Mines', desc : 'Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!'},
  {img : mine , title : 'Turbo Mines', desc : 'Turbo Mines is an adrenaline-pumping game of strategy and luck—uncover hidden gems while avoiding deadly mines!'},
]
export default function Home() {
  return (
    <main className="p-8">
      <section className="relative w-full">
        <Image
          src={image1}
          alt="Daily quiz banner background"
          className="w-full h-[470] object-fit opacity-30 rounded-2xl"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center px-28 gap-4">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            Daily Quiz. Daily Wins.
            <br />
            Play Smart, Win Big!
          </h1>

          <p className="text-gray-200 text-sm leading-relaxed max-w-[500] drop-shadow">
            Challenge yourself every day with fresh questions. Play smart, climb
            the leaderboard, and win exciting rewards!
          </p>
          <div className="w-1/4">
          <Button  type="primary" title="Start Now" />
          </div>
        </div>
      </section>
      <section>
        {/* Card Section */}
        <CardSection heading="Quizzess" quizzes={quizzes} />

        {/* Card */}
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">Sports</h1>
          <div className="grid grid-cols-2 gap-10 mt-5">
            {puzzles.map((puzzle) => (
              <div
                key={puzzle.id}
                className="flex shadow-md rounded-2xl shadow-cyan-600 bg-[#0E1012]"
              >
                <Image src={puzzle.image} alt="" width={220} />

                <div className="flex flex-col justify-between py-4 px-4  border-l border-[#0098FF]">
                  <h1 className="text-2xl font-semibold">{puzzle.title}</h1>
                  <p className="text-wrap text-sm leading-5">
                    {puzzle.description}
                  </p>

                  <Button
                    type={puzzle.buttonType}
                    title="Join Now"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-15">
          <h1 className="text-3xl font-bold">Games</h1>
          {/* Slider */}
          <div className="grid">
            {/* container */}
            <div className="space-y-2 bg-[#0E1012] w-1/4 gap-3 pb-2 rounded-2xl overflow-hidden mt-4">
              <div className="">
              <Image src={mine} alt='' className=""/>
              </div>
              <div className="px-4 flex flex-col gap-3">
              <h1 className="text-2xl font-bold tracking-wider">Turbo Mines</h1>
              <p className="text-sm text-zinc-200">
                Turbo Mines is an adrenaline-pumping game of strategy and
                luck—uncover hidden gems while avoiding deadly mines!
              </p>
              <Button  title="Join Now" type="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
