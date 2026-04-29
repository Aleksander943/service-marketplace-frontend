import { useEffect, useState } from "react";

type WarningMessageProps = {
  message: string;
};

const WarningMessage = ({ message }: WarningMessageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`rounded-xl border border-[#f2cd69] bg-[#fff6d9] p-3 text-sm leading-relaxed text-[#875b09] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default WarningMessage;