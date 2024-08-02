import Image from "next/image";
import React from "react";

const LanguageChoice = () => {
  return (
    <div className="flex gap-[2px]">
      <Image
        className="cursor-pointer rounded-full mr-2"
        src="/flags/england.png"
        alt="Flag"
        width={25}
        height={25}
      />
      <Image
        className="cursor-pointer"
        src="/navbar/arrow-down.svg"
        alt="Arrow Down"
        width={20}
        height={20}
      />
    </div>
  );
};

export default LanguageChoice;
