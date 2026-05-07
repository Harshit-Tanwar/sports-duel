import { ReactNode } from "react";

type QuizButtonVariant = "answer" | "freeze" | "pass" | "pause" | "token";

interface QuizButtonProps {
  title: string;
  variant?: QuizButtonVariant;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
}

const variantStyles: Record<QuizButtonVariant, string> = {
  answer:
    "bg-blue-500 rounded-xl py-4 px-6 w-full",
  freeze:
    "bg-linear-to-br from-[#018488] to-[#00B2A9] text-sm rounded-full py-2.5 px-5",
  pass:
    "bg-gradient-to-r from-[#9C5AFF] to-[#6400FF] text-sm rounded-full py-2.5 px-5",
  pause:
    "bg-gradient-to-r from-[#F7971E] to-[#FFD200] text-sm rounded-full py-2.5 px-5",
  token:
    "bg-gradient-to-r from-[#0098FF] to-[#0060cc] text-xs rounded-full py-1.5 px-4",
};

export default function QuizButton({
  title,
  variant = "answer",
  icon,
  onClick,
  className = "",
  bgColor,
}: QuizButtonProps) {
  return (
    <button
      onClick={onClick}
      style={bgColor ? { background: bgColor } : undefined}
      className={`flex items-center border border-white hover:brightness-110 text-white font-semibold  justify-center gap-2 transition-all ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {title}
    </button>
  );
}
