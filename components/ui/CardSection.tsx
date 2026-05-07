import Image, { StaticImageData } from "next/image";
import { CardLayout } from "./CardLayout";
import Button from "../common/Button";

export interface Quiz {
  id: string | number;
  image: StaticImageData | string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonType: "primary" | "secondary";
}

interface QuizSectionProps {
  heading?: string;
  quizzes : Quiz[];
}

export default function CardSection({
  heading = "Quizzes",
  quizzes,
}: QuizSectionProps) {
  return (
    <div className="mt-5 shadow-lg px-8">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {quizzes.map((quiz) => (
          <CardLayout key={quiz.id} className={`flex items-center px-3 py-2 `}>
            <div className="w-32 h-32 shrink-0">
              <Image
                src={quiz.image}
                alt='Image not found'
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <div className="space-y-2 pl-2 border-l border-blue-800">
              <h2 className="font-bold">{quiz.title}</h2>
              <p className="text-sm text-zinc-300">{quiz.description}</p>
              <Button type={quiz.buttonType} title={quiz.buttonLabel} />
            </div>
          </CardLayout>
        ))}
      </div>
    </div>
  );
}
