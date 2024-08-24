import {ArrowRight, Check, Share2, X} from "lucide-react";
import Link from "next/link";
import React from "react";
import ShareButton from "../userProfile/ShareButton";

interface ProfileButtonProps {
  share?: boolean;
  viewProfile?: boolean;
  cancel?: boolean;
  save?: boolean;
  clearData?: () => void;
  onSaveButton?: () => void;
  disabled?: boolean;
  profileLink?: string;
  shareLink?: string;
}

const ProfileButton = ({
  share,
  viewProfile,
  cancel,
  save,
  clearData,
  onSaveButton,
  disabled,
  profileLink,
  shareLink,
  ...props
}: ProfileButtonProps) => {
  if (share) {
    return <ShareButton shareLink={shareLink} />;
  }
  if (viewProfile) {
    return (
      <div>
        <Link
          href={profileLink || "/profile"}
          className="bg-[#E4FF6D] p-[10px] px-[16px] rounded-full flex items-center gap-2 font-bold text-sm border border-[#A0C111] text-[#2F370A] cursor-pointer">
          View Profile
          <ArrowRight className="w-[20px] h-[20px]" />
        </Link>
      </div>
    );
  }

  if (save) {
    return (
      <div>
        <button
          className={`transition-colors duration-100 ease-in-out bg-[#E4FF6D] p-[10px] px-[16px] rounded-full flex items-center gap-2 font-bold text-sm border border-[#A0C111] text-[#2F370A] disabled:bg-[#e4ff6d9f] disabled:cursor-not-allowed`}
          onClick={onSaveButton}
          disabled={disabled}>
          Save
          <Check className="w-[20px] h-[20px]" />
        </button>
      </div>
    );
  }
  if (cancel) {
    return (
      <div>
        <button
          className="transition-colors duration-100 ease-in-out bg-white p-[10px] px-[16px] rounded-full flex items-center gap-2 font-bold text-sm border border-[#999aa0] text-black disabled:cursor-not-allowed disabled:bg-white/70"
          onClick={clearData}
          disabled={disabled}>
          Cancel
          <X className="w-[20px] h-[20px]" />
        </button>
      </div>
    );
  }
};

export default ProfileButton;
