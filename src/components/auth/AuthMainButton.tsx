import React from "react";

const AuthMainButton = ({
  buttonTitle,
  className,
  isLoading,
}: {
  buttonTitle: string;
  className?: string;
  isLoading?: boolean;
}) => {
  return (
    <>
      <button
        type="submit"
        disabled={isLoading}
        className={`text-black rounded-md text-sm font-medium transition-all h-10 px-4 py-2 w-full bg-[#E4FF6D] border border-[#A0C111] hover:bg-[#daf369] hover:border-[#A0C111] duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center justify-center disabled:cursor-not-allowed disabled:hover:border-[#A0C111] disabled:bg-[#A0C111]  disabled:hover:bg-[#A0C111] disabled:active:translate-y-0 disabled:active:scale-100 ${className || ""}`}>
        {isLoading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
            <span className="ml-2">Loading... </span>
          </>
        ) : (
          buttonTitle
        )}
      </button>
    </>
  );
};

export default AuthMainButton;
