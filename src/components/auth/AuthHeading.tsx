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
gap-2 max-[600px]:gap-1">
      <h1
        className={`${poppins.className} ${"text-white text-[40px] max-[600px]:text-[30px]"}`}>
        {title}
      </h1>
      <p className="text-white/50 text-[15px] max-[600px]:text-[14px] ">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeading;
