import {Apple, ChromeIcon} from "lucide-react";
import React from "react";

interface ProviderButtonProps {
  google?: boolean;
  apple?: boolean;
}

const ProviderButton = ({google, apple}: ProviderButtonProps) => {
  return (
    <button
      type="submit"
      className="text-white rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-[#262626] border border-[#3C3C3C] flex items-center justify-center gap-2">
      {google && (
        <>
          <ChromeIcon size={16} />
          Sign In with Google
        </>
      )}
      {apple && (
        <>
          <Apple size={16} />
          Sign In with Apple
        </>
      )}
    </button>
  );
};

export default ProviderButton;
