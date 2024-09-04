import React from "react";
import PostDownloadButton from "./PostDownloadButton";

const PostDownload = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold mb-4 mt-1">Download</h2>
        <p className="text-[#A3A3A3]">ADD HERE ICONS</p>
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
