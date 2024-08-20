"use client";
import React, {useState} from "react";
import {InputLabel} from "../ui/InputLabel";
import DropZone from "../ui/DropZone";
import ProfileButton from "../ui/ProfileButton";
import toast from "react-hot-toast";
import uploadFileToS3 from "@/lib/upload/uploadFileToS3";
import {updateUserImage} from "@/app/actions/updateUserImage";
import {readFileAsDataURL} from "@/functions/readFileAsDataURL";

export default function UserAccountFormSubmit() {
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  function clearData() {
    if (file) {
      setFile(null);
    }
    if (inputValue) {
      setInputValue("");
    }
  }

  async function onSaveButton() {
    if (!file) return;
    try {
      const result = await readFileAsDataURL(file);
      if (typeof result === "string") {
        const base64Data = result?.split(",")[1];
        const s3Url = await uploadFileToS3(file.name, file.type, base64Data);

        try {
          await updateUserImage("tarasovcad@gmail.com", s3Url);
          toast.success("User image updated:");
        } catch (error) {
          console.error("Failed to update image:", error);
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error in onSaveButton:", err);
      toast.error("Something went wrong. Please try again.");
    }
  }
  return (
    <>
      <div className="flex flex-col justify-end">
        <div className="flex flex-col gap-[10px] mt-5">
          <InputLabel label="About me" className="!text-lg" />
          <textarea
            value={inputValue}
            placeholder="Write your bio..."
            onChange={(e) => setInputValue(e.target.value)}
            className="border-2 w-fullborder-[#3C3C3C]placeholder:text-white/70 rounded-[8px] font-normal min-h-[100px] border-white/10 bg-[#1A1A1A] text-white/70 p-3 transition-colors duration-500 placeholder:text-white/40 placeholder:select-none focus:text-gray-100"
          />
        </div>
        <DropZone setFile={setFile} file={file} />
        <div className="flex mt-5 justify-self-end gap-2 self-end">
          <ProfileButton cancel clearData={clearData} />
          <ProfileButton save onSaveButton={onSaveButton} />
        </div>
      </div>
    </>
  );
}
