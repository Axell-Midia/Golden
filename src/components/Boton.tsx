import { useState } from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <button
      onClick={handleClick}
      className={click ? "bg-green-500" : "bg-blue-500"}
    >
      {text}
    </button>
  );
};

export default Button;
