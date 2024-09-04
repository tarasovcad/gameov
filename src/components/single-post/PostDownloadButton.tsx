import React from "react";

const PostDownloadButton = ({password}: {password?: boolean}) => {
  return (
    <div>
      <div className="w-full rounded-[8px] flex border border-[#4e4e4e] items-center justify-between bg-white/5">
        <div className="w-full p-3">
          <h2 className="text-base font-semibold">
            Download the Cyberpunk 2077
          </h2>
          <p className="text-[#A3A3A3] text-sm">Basic x32/x64 (18.97 МБ)</p>
        </div>
        <div className=" bg-[#00AB00] flex items-stretch justify-center font-semibold text-white text-base px-[35px] self-stretch transition-all duration-300 hover:bg-[#007E00]">
          <button className="underline">Download</button>
        </div>
      </div>
      {password && (
        <p className="text-[#A3A3A3] text-sm text-center mt-4">
          Password to all archives:{" "}
          <span className="font-semibold text-white">gameov</span>
        </p>
      )}
    </div>
  );
};

export default PostDownloadButton;
