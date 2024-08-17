import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: VoidFunction;
}

export const Button = ({ className = "", text, onClick }: ButtonProps) => {
  return (
    <button className={`p-2 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
