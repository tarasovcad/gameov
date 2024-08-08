import React from "react";

const AuthMainButton = ({
  buttonTitle,
  className,
}: {
  buttonTitle: string;
  className?: string;
}) => {
  return (
    <button
      type="submit"
      className={`text-black rounded-md text-sm font-medium transition-all h-10 px-4 py-2 w-full bg-[#E4FF6D] border border-[#A0C111] hover:bg-[#daf369] hover:border-[#A0C111] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 ${className || ""}`}>
      {buttonTitle}
    </button>
  );
};

export default AuthMainButton;
