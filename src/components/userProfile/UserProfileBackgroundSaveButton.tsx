"use client";

import {useState} from "react";
import Image from "next/image";
import toast from "react-hot-toast";

function UserProfileBackgroundSaveButton({
  setBackgroundImage,
}: {
  setBackgroundImage: (image: string) => void;
}) {
  const [showModal, setShowModal] = useState(false);

  const handleChangePicture = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    setBackgroundImage("/bg.jpg");
    toast.success("Picture changed");
    console.log("Picture changed");
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleChangePicture}
        className="cursor-pointer w-[30px] h-[30px] bg-white/20 z-10 rounded-full flex justify-center items-center hover:rotate-12 transition-all duration-300 ease-in-ou">
        <Image src="/svg/pen.svg" alt="pencil" width={18} height={18} />
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
          <div className="bg-white p-6 rounded-lg text-black">
            <h2 className="text-xl font-bold mb-4">Change Picture</h2>
            <p className="mb-4">Are you sure you want to change the picture?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default UserProfileBackgroundSaveButton;
