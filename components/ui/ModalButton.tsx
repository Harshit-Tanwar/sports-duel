interface ModalButtonProps {
  title: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
  fullWidth?: boolean;
}

const ModalButton = ({ title, onClick, type = "secondary", fullWidth = true }: ModalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-xl border border-white/40 text-white font-bold text-sm hover:opacity-90 transition-opacity bg-linear-to-br from-[#0098FF] to-[#000407]
        ${fullWidth ? "w-full" : ""}
       `}
    >
      {title}
    </button>
  );
};

export default ModalButton;
