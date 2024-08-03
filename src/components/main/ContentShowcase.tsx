import React from "react";
import BorderGlowButton from "../buttons/ContentShowcaseButton";

const ContentShowcase = () => {
  return (
    <div className="text-white flex items-center justify-between mb-8">
      <h2 className="font-semibold text-[32px]">Latest Games</h2>
      <BorderGlowButton />
    </div>
  );
};

export default ContentShowcase;
