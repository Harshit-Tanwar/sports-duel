import QuizCard from "@/components/ui/Card";
import { StaticImageData } from "next/image";

export interface Quiz {
  id: string | number;
  image: StaticImageData | string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonType : 'primary' | 'secondary'
}

interface QuizSectionProps {
  heading?: string;
  quizzes: Quiz[];
}

export default function QuizSection({ heading = "Quizzes", quizzes }: QuizSectionProps) {
  return (
    <div className="mt-5 shadow-lg px-8">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            image={quiz.image}
            imageAlt={quiz.imageAlt}
            title={quiz.title}
            description={quiz.description}
            buttonLabel={quiz.buttonLabel}
            buttonType={quiz.buttonType}
          />
        ))}
      </div>
    </div>
  );
}