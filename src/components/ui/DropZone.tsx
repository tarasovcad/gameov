import {FileUp} from "lucide-react";
import Link from "next/link";
import React from "react";

const DropZone = () => {
  return (
    <div className="border border-[#535353] border-dashed h-[170px] w-[525px] rounded-[32px] p-6">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 bg-[#1E1E1E] flex items-center justify-center rounded-full">
          <FileUp className="text-[#D8FF2E]" />
        </div>
        <div className="flex flex-col items-center gap-2 font-medium">
          <h3 className="text-base text-white">
            <span className="text-[#D8FF2E]">
              <Link href={"/"}>Click here</Link>
            </span>
            &nbsp;to upload your file or drag.
          </h3>
          <p className="text-white/50 text-sm ">
            Supported Format: SVG, JPG, PNG (10mb each)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
