import React from "react";

interface InputLabelProps {
  label: string;
  className?: string;
}

export const InputLabel = ({label, ...props}: InputLabelProps) => {
  return (
    <label
      className={`text-[15px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white max-[600px]:text-[14px] ${props.className || ""}`}>
      {label}
    </label>
  );
};
