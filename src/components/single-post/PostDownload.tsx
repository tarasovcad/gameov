import React from "react";
import PostDownloadButton from "./PostDownloadButton";
import {Lock, Share2} from "lucide-react";
import Link from "next/link";
const PostDownload = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-[22px] font-semibold ">Download</h2>
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <div className="w-6 h-6 border border-[#A3A3A3] flex items-center justify-center rounded-full">
              <Lock className="h-[13px] text-[#A3A3A3]" />
            </div>
          </Link>
          <Link href={"/"}>
            {" "}
            <div className="w-6 h-6 border border-[#A3A3A3] flex items-center justify-center rounded-full">
              <Share2 className="h-[13px] text-[#A3A3A3]" />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="w-6 h-6 border border-[#A3A3A3] flex items-center justify-center rounded-full">
              <span className="text-[#A3A3A3]">?</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full border-t border-t-[#2E2E2E] font-medium text-sm flex flex-col gap-6">
        <div className="mt-6">
          <h2 className="text-[15px] font-semibold mb-2">
            How To Install Grand Theft Auto V For Free
          </h2>

          <ul className="text-[#A3A3A3]">
            <li>1. Download The Game.</li>
            <li>2. Extract with WinRAR</li>
            <li>3. Run the game</li>
            <li>4. Enjoy</li>
          </ul>
        </div>
        <PostDownloadButton password={true} />
      </div>
    </div>
  );
};

export default PostDownload;
