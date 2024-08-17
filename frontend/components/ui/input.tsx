import { ChangeEvent, FocusEvent, useState } from "react";

interface InputProps {
  className?: string;
  name: string;
  type: string;
  placeholder: string;
  autocomplete?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className = "",
  name,
  type,
  placeholder,
  value = "",
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
