import React from "react";

interface InputLabelProps {
  label: string;
  className?: string;
}

export const InputLabel = ({label, ...props}: InputLabelProps) => {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white ${props.className || ""}`}>
      {label}
    </label>
  );
};
