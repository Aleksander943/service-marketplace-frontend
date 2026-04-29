import type { ReactNode } from "react";

type BadgeColor = "blue" | "green";

type BadgeProps = {
  children: ReactNode;
  color?: BadgeColor;
};

const Badge = ({ children, color = "blue" }: BadgeProps) => {
  const colors: Record<BadgeColor, { bg: string; text: string }> = {
    blue: { bg: "#eef1fc", text: "#2350d4" },
    green: { bg: "#e8f5ee", text: "#1a6e3c" },
  };

  return (
    <span
      className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold"
      style={{ background: colors[color].bg, color: colors[color].text }}
    >
      {children}
    </span>
  );
};

export default Badge;