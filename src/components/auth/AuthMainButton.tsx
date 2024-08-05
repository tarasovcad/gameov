import React from "react";

const AuthMainButton = ({buttonTitle}: {buttonTitle: string}) => {
  return (
    <button
      type="submit"
      className="text-black rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-[#E4FF6D] border border-[#A0C111] hover:bg-[#D8FF2E] hover:border-[#7D941C] duration-300">
      {buttonTitle}
    </button>
  );
};

export default AuthMainButton;
