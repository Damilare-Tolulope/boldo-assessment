import { ButtonProps } from "@/utils/types";

const Button = ({
  children,
  className,
  onClick,
  isSecondary = false,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-white font-bold border-2 border-transparent text-xl rounded-full px-14 py-4 bg-white transition-all ease-linear duration-300 cursor-pointer md:hover:scale-105 ${
        isSecondary ? "!bg-transparent border-white" : ""
      } ${
        isDisabled
          ? "!cursor-not-allowed !shadow-none opacity-50 !border-[#FF9D57]/50"
          : ""
      }  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
