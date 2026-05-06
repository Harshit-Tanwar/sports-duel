"use client";
import Link from "next/link";
import ModalButton from "@/components/ui/ModalButton";
import { Gem } from "lucide-react";

interface ChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChallengeModal({ isOpen, onClose }: ChallengeModalProps) {
  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="absolute top-50 lg:top-20 inset-0 z-50 flex items-center justify-center "
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="relative lg:w-100 w-80 rounded-2xl p-4 bg-linear-to-br from-[#0098FF] to-[#000d24]  border-5 border-blue-400 "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-6 w-10 h-10 rounded-lg bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center text-white font-bold text-lg shadow-lg"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-4xl text-blue-200"><Gem/></span>
          <h2 className="text-xl font-extrabold text-white">Use 2 Gems For Entry</h2>
        </div>

        {/* Description */}
        <p className="text-blue-100 text-sm leading-relaxed mb-3">
          Enter the game using 2 gems and win exciting rewards! Play now!
        </p>

        {/* Try More section */}
        <p className="text-white font-semibold text-sm mb-3">🎮 Try More While You Wait:</p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <ModalButton title="See Rules" />
          <ModalButton title="Leaderboards" />
        </div>
        <div className="mb-3">
          <ModalButton title="Promotional Quiz" />
        </div>

        {/* Quick Links section */}
        <p className="text-white font-semibold text-sm mb-3">ℹ️ Quick Links:</p>
        <div className="grid grid-cols-2 gap-3">
          <ModalButton title="Get More Gems" />
          <Link href="/games/general-knowledge/question-area" className="w-full">
            <ModalButton title="Pay & Enter Contest" type="primary" fullWidth />
          </Link>
        </div>
      </div>
    </div>
  );
}
