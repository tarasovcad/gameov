"use client";
import React, {useState} from "react";
import {InputLabel} from "../ui/InputLabel";
import DropZone from "../ui/DropZone";
import ProfileButton from "../ui/ProfileButton";
import toast from "react-hot-toast";
import uploadFileToS3 from "@/lib/upload/uploadFileToS3";
import {readFileAsDataURL} from "@/functions/readFileAsDataURL";
import Loader from "../ui/Loader";
import {useRouter} from "next/navigation";
import {updateUserImage} from "@/app/actions/profile/updateUserImage";
import {updateUserDescription} from "@/app/actions/profile/updateUserDescription";

export default function UserAccountFormSubmit({
  email,
  userDescription,
}: {
  email: string | null | undefined;
  userDescription: string | null;
}) {
  const [inputValue, setInputValue] = useState(userDescription || "");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isInputValueChanged = () => {
    return inputValue !== userDescription;
  };
  function clearData() {
    if (file) {
      setFile(null);
    }
    if (isInputValueChanged()) {
      setInputValue(userDescription || "");
    }
  }
  function clearFile() {
    if (file) {
      setFile(null);
    }
  }
  const isFormValid = () => {
    return file !== null || isInputValueChanged();
  };

  async function onSaveButton() {
    if (!isInputValueChanged() && !file) {
      toast.error("Nothing to submit");
      return;
    }
    setIsLoading(true);
    if (isInputValueChanged()) {
      try {
        await updateUserDescription(email, inputValue);
        toast.success("User description updated");
      } catch (error) {
        console.error("Failed to update description:", error);
      }
    }
    if (file) {
      try {
        const result = await readFileAsDataURL(file);
        if (typeof result === "string") {
          const base64Data = result?.split(",")[1];
          const s3Url = await uploadFileToS3(file.name, file.type, base64Data);
          try {
            await updateUserImage(email, s3Url);
            toast.success("User image updated");
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
    setIsLoading(false);
    setTimeout(() => {
      router.refresh();
    }, 1000);
    clearFile();
  }

  return (
    <>
      {isLoading && <Loader />}
      <div>
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
            <ProfileButton
              cancel
              clearData={clearData}
              disabled={!isFormValid()}
            />
            <ProfileButton
              save
              onSaveButton={onSaveButton}
              disabled={!isFormValid()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
