type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary";
};

const Button = ({ text, onClick, color = "primary" }: ButtonProps) => {
  const colorClasses =
    color === "secondary"
      ? "bg-gray-500 hover:bg-gray-700"
      : "bg-blue-500 hover:bg-blue-700";
  return (
    <button
      type="button"
      className={`${colorClasses} text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
