import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type ReviewCardProps = {
  title: string;
  onEdit?: () => void;
  children: ReactNode;
};

const ReviewCard = ({ title, onEdit, children }: ReviewCardProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`rounded-xl border border-[#dedad0] bg-white p-5 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <div className="mb-4 flex items-center justify-between border-b border-[#efeadf] pb-3">
        <span className="text-sm font-semibold text-[#1a1a18]">{title}</span>
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-medium text-[#2350d4] transition-colors hover:text-[#1a6e3c]"
        >
          Editar
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
};

export default ReviewCard;