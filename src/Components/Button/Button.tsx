import React from "react";

interface buttonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode;
  text?: string;
}

const Button: React.FC<buttonProps> = ({ onClick, className, text }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  transition-transform duration-300 ease-in-out active:scale-90`}
    >
      {text}
    </button>
  );
};

export default Button;
