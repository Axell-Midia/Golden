import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  const [click, setClick] = useState(false as boolean);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <button
      onClick={handleClick}
      className={click ? "bg-green-500" : "bg-blue-500"}
    >
      {children}
    </button>
  );
};

export default Button;
