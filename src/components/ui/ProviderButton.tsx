import {Apple, ChromeIcon} from "lucide-react";
import React from "react";

interface ProviderButtonProps {
  google?: boolean;
  signin?: boolean;
}

const ProviderButton = ({google, signin}: ProviderButtonProps) => {
  const provider = google ? "Google" : "Apple";
  const action = signin ? "Sign In" : "Sign Up";
  const Icon = google ? ChromeIcon : Apple;

  return (
    <button
      type="submit"
      className="text-white rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full bg-[#262626] border border-[#3C3C3C] flex items-center justify-center gap-2">
      <Icon size={16} />
      {`${action} with ${provider}`}
    </button>
  );
};

export default ProviderButton;
