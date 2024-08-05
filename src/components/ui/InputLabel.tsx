import React from "react";

export const InputLabel = ({label}: {label: string}) => {
  return (
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
      {label}
    </label>
  );
};
