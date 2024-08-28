import {
  ALLOWED_FILE_EXTENSIONS,
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  MAX_NAME_LENGTH,
} from "@/data/dropZoneLimits";
import {formatFileSize} from "@/functions/formatFileSize";
import {CloudAdd, TickCircle} from "iconsax-react";
import {CircleCheck, FileUp, Trash2, File, Loader2} from "lucide-react";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

const DropZone = ({
  setFile,
  file,
}: {
  setFile: Dispatch<SetStateAction<File | null>>;
  file: File | null;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const [isLoading, setIsLoading] = useState(true);

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
    const selectedFile = files[0];
    const fileType = selectedFile.type;
    const fileExtension =
      "." + selectedFile.name.split(".").pop()?.toLowerCase();

    const numberOfSymbols = selectedFile.name.split(".")[0].length;

    if (
      !ALLOWED_FILE_TYPES.includes(fileType) &&
      !ALLOWED_FILE_EXTENSIONS.includes(fileExtension)
    ) {
      toast.error("You cannot upload this file. File type is not supported");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      toast.error("You cannot upload this file. File size exceeds 5MB limit");
      return;
    }
    if (numberOfSymbols > MAX_NAME_LENGTH) {
      toast.error(
        "You cannot upload this file. File name exceeds 50 characters",
      );
      return;
    }
    setFile(selectedFile);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

  const handleDeleteFile = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col gap-[10px] mt-5 ">
      <div className="flex gap-2 mb-3">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-white/50">
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
          accept=".jpeg,.png,.svg,.heif,.jpg"
        />
        <div className="flex flex-col items-center gap-3">
          <CloudAdd size="30" color="#fff" />
          <div className="flex flex-col items-center gap-2 font-medium mb-1">
            <h3 className="text-base text-white">
              Choose a file or drag & drop it here
            </h3>
            <p className="text-white/50 text-sm ">
              JPEG, PNG, SVG, and HEIF formats, up to 5MB
            </p>
          </div>
          <button
            className="cursor-pointer border-2 rounded-2xl py-2 px-4 text-white/80 text-sm border-white/60 transition-colors duration-300 ease-in-out hover:bg-[#1A1A1A] hover:text-white"
            onClick={handleBrowseFiles}>
            Browse File
          </button>
        </div>
      </div>
      {file && (
        <div className="p-8 bg-[#131313] rounded-[20px] text-white mt-3 relative">
          <div className="flex items-center gap-2">
            <div className="relative">
              <File size={35} />
            </div>
            <div>
              <h2 className="font-medium">{file.name}</h2>
              <div className="flex gap-3">
                <p className="text-[#A9ACB4]">
                  {formatFileSize(file.size)} out of 5 MB
                </p>
                <span className="text-[#A9ACB4]">•</span>
                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2
                        className="animate-spin"
                        size={18}
                        color="#375EF9"
                      />
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <TickCircle size="18" color="#3EBF8F" variant="Bold" />
                      <span>Completed</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            className="cursor-pointer transition-colors duration-300 ease-in-out p-2 rounded-full hover:bg-[#1A1A1A] absolute top-6 right-6"
            onClick={handleDeleteFile}>
            <Trash2 size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DropZone;
