"use client";
import Link from "next/link";
import React, {useState} from "react";

const PostDownloadButton = ({password}: {password?: boolean}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <Link href={"/"}>
        <div
          className="w-full rounded-[8px] flex border border-border/90 hover:border-border bg-bg hover:bg-bg/80 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          <div className="w-full p-4">
            <h2 className="text-base font-semibold">
              Download the Cyberpunk 2077
            </h2>
            <p className="text-secondary_text text-sm">
              Basic x32/x64 (18.97 МБ)
            </p>
          </div>
          <div
            className={` bg-[#00AB00] flex items-stretch justify-center font-semibold text-white text-base px-[35px] self-stretch transition-all duration-300 ${isHover && "bg-[#007E00]"} `}>
            <button className="underline">Download</button>
          </div>
        </div>
      </Link>
      <div>
        {password && (
          <p className="text-secondary_text text-sm text-center mt-2">
            Password to all archives:{" "}
            <span className="font-semibold text-white">gameov</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PostDownloadButton;
