"use client";

import {Share2} from "lucide-react";
import toast from "react-hot-toast";

const ShareButton = ({shareLink}: {shareLink: string | undefined}) => {
  const copyToClipboard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      console.log("Text copied to clipboard");
      toast.success("Link copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy link to clipboard");
    }
  };

  return (
    <button
      onClick={() => copyToClipboard(shareLink || "")}
      className="bg-white p-[10px] px-[16px] rounded-full flex items-center gap-2 font-bold text-sm border border-[#999aa0] text-black cursor-pointer transition-colors duration-300 hover:bg-white/90">
      Share
      <Share2 className="w-[20px] h-[20px]" />
    </button>
  );
};

export default ShareButton;
