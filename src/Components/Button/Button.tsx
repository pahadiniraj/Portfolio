import React from "react";

interface buttonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode;
  text?: string;
  
}

const Button: React.FC<buttonProps> = ({
  onClick,
  className,
  children,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  transition duration-300 ease-linear active:scale-90  hover:shadow-custom`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
