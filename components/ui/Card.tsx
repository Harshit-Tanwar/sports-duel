import Image, { StaticImageData } from "next/image";
import Button from "../common/Button";

interface QuizCardProps {
  image: StaticImageData | string;
  imageAlt?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonType : "primary" | "secondary"
}

export default function QuizCard({
  image,
  imageAlt = "",
  title,
  description,
  buttonType ,
  buttonLabel = "Start Now",
}: QuizCardProps) {
  return (
    <div
      className={`flex items-center bg-[#0E1012] rounded-2xl px-3 py-2 shadow-lg shadow-cyan-600`}
    >
      <div className="w-32 h-32 shrink-0">
        <Image src={image} alt={imageAlt} className="w-full h-full object-contain" />
      </div>

      <div className="space-y-2 pl-2 border-l border-blue-800">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm text-zinc-300">{description}</p>
        <Button width={48} type={buttonType} title={buttonLabel} />
      </div>
    </div>
  );
}