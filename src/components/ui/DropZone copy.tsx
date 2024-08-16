"use client";
import {FileUp} from "lucide-react";
import React, {useCallback, useRef, useState} from "react";

const DropZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const dragCounter = useRef(0);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleFiles = (files) => {
    console.log(files);
    //  TODO ADD LOGIC HERE
  };

  const handleBrowseFiles = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  return (
    <div
      className={`border border-dashed max-w-[525px] w-full rounded-[32px] p-6 ${
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
      <div className="flex flex-col items-center gap-4">
        <FileUp className="text-[#fff]" size={30} />
        <div className="flex flex-col items-center gap-2 font-medium mb-2">
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
  );
};

export default DropZone;
