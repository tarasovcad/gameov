import {ChromeIcon} from "lucide-react";
import React from "react";

const AuthProviderButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-bg rounded-lg w-fit gap-2 px-9 py-2.5 flex items-center justify-center border border-border  hover:border-white/50 transition-colors duration-300">
      {children}
    </button>
  );
};

export default AuthProviderButton;
