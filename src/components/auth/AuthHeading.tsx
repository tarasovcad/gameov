import poppins from "@/fonts/poppins";
import React from "react";

interface AuthHeadingProps {
  title: string;
  subtitle: string;
}

const AuthHeading = ({title, subtitle}: AuthHeadingProps) => {
  return (
    <div
      className="flex flex-col items-center text-center
gap-2">
      <h1 className={`${poppins.className} ${"text-white text-4xl"}`}>
        {title}
      </h1>
      <p className="text-white/50 text-[15px]">{subtitle}</p>
    </div>
  );
};

export default AuthHeading;
