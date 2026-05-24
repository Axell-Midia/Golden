import { useState } from "react";

type BotProps = {
  children: React.ReactNode;
};

const Botone = ({ children }: BotProps) => {
  const [hidden, setHidden] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => {
    setHidden(true);
    setColor(!color);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-4 py-2 min-w-32 text-white ${
        color ? "bg-green-500" : "bg-blue-500"
      }`}
    >
      {hidden ? "\u00A0" : children}
    </button>
  );
};

export default Botone;
