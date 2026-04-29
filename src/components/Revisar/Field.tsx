import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  children: ReactNode;
  className?: string; // Adicionando suporte para classes personalizadas
};

const Field = ({ label, children, className }: FieldProps) => (
  <div className={`space-y-1.5 ${className || ""}`}>
    <div className="text-[11px] uppercase tracking-wider text-[#8a8a82]">{label}</div>
    <div className="text-sm leading-relaxed text-[#1a1a18]">{children}</div>
  </div>
);

export default Field;