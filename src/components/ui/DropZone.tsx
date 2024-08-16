"use client";
import {CloudAdd} from "iconsax-react";
import {CircleCheck, FileUp, Trash2, File} from "lucide-react";
import React, {useCallback, useRef, useState} from "react";

const DropZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleFiles = (files: FileList) => {
    console.log(files);
    //  TODO ADD LOGIC HERE
  };

  const handleBrowseFiles = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      handleFiles(files);
    }
  };

  return (
    // max-w-[525px] w-full
    <div className="flex flex-col gap-[10px] mt-5 ">
      <div className="flex gap-2 mb-3">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border ">
          <CloudAdd size="25" color="#fff" />
        </div>
        <div>
          <label className="text-white text-lg">Change Avatar</label>
          <p className="text-white/50 text-sm">
            Select and upload the picture file of your choice
          </p>
        </div>
      </div>
      <div
        className={`border border-dashed  rounded-[32px] p-6 ${
          isDragging ? "border-white bg-[#222222] " : "border-[#535353]"
        }`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".jpeg,.png,.svg,.heif"
        />
        <div className="flex flex-col items-center gap-3">
          <CloudAdd size="30" color="#fff" />
          <div className="flex flex-col items-center gap-2 font-medium mb-1">
            <h3 className="text-base text-white">
              Choose a file or drag & drop it here
            </h3>
            <p className="text-white/50 text-sm ">
              JPEG, PNG, SVG, and HEIF formats, up to 50MB
            </p>
          </div>
          <button
            className="cursor-pointer border-2 rounded-2xl py-2 px-4 text-white/80 text-sm border-white/60 transition-colors duration-300 ease-in-out hover:bg-[#1A1A1A] hover:text-white"
            onClick={handleBrowseFiles}>
            Browse File
          </button>
        </div>
      </div>
      <div className="p-8 bg-[#1A1A1A] rounded-[32px] text-white">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div>
              <File size={40} />
            </div>
            <div>
              <h2>Google-certificate.pdf</h2>
              <div className="flex">
                <p>94 KB of 94 KB •</p>
                <div className="flex items-center">
                  <CircleCheck fill="#3EBF8F" className="border-0" size={18} />
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer">
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
