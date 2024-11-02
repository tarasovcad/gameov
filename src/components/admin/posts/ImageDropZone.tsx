import {ImageIcon, Trash2Icon} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, {useCallback, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {ImageDropZoneProps, ImageFile} from "@/types/types";
import {toast} from "sonner";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/heif",
  "image/heic",
];
const ALLOWED_FILE_EXTENSIONS = [
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".heif",
  ".heic",
];
const MAX_NAME_LENGTH = 50;
const MAX_IMAGES = 10;

const ImageDropZone = ({setImages, images, error}: ImageDropZoneProps) => {
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

  const validateFile = (file: File): string | null => {
    const fileType = file.type;
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
    const numberOfSymbols = file.name.split(".")[0].length;

    if (
      !ALLOWED_FILE_TYPES.includes(fileType) &&
      !ALLOWED_FILE_EXTENSIONS.includes(fileExtension)
    ) {
      return "File type is not supported";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "File size exceeds 5MB limit";
    }

    if (numberOfSymbols > MAX_NAME_LENGTH) {
      return "File name exceeds 50 characters";
    }

    return null;
  };

  const handleFiles = useCallback(
    (files: FileList) => {
      if (images.length + files.length > MAX_IMAGES) {
        toast.error(`You can only upload up to ${MAX_IMAGES} images`);
        return;
      }

      const newImages: ImageFile[] = [];

      Array.from(files).forEach((file) => {
        const error = validateFile(file);
        if (error) {
          toast.error("Error uploading image", {
            description: error,
          });
          return;
        }

        newImages.push({
          id: Date.now() + Math.random(),
          file,
          title: file.name,
          size: file.size,
        });
      });

      setImages((prev) => [...prev, ...newImages]);
    },
    [images, setImages],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      dragCounter.current = 0;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    },
    [handleFiles],
  );

  const handleBrowseFiles = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
      handleFiles(files);
    }

    e.target.value = "";
  };

  //   ----

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleResize = (id: number) => {
    console.log(id);
  };

  const handleDelete = (id: number) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <div className="flex flex-col gap-[10px] mt-1">
      <div
        className={`w-full border border-dashed p-5 py-6 rounded-md ${
          isDragging
            ? "border-white bg-[#222222]"
            : error
              ? "border-[#F31260]"
              : "border-[#535353]"
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
        <div className="text-secondary_text text-sm font-medium text-center">
          <div className="flex items-center gap-4">
            <ImageIcon size={22} />
            <div>
              <button
                className="text-blue-500 cursor-pointer "
                onClick={handleBrowseFiles}>
                Upload a file
              </button>{" "}
              or drag and drop it here
            </div>
          </div>
        </div>
      </div>

      {images.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Preview</TableHead>
              <TableHead>File Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <AnimatePresence mode="popLayout">
              {images.map((image) => (
                <motion.tr
                  key={image.id}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -20}}
                  transition={{duration: 0.3}}
                  className="border-b transition-colors  data-[state=selected]:bg-muted">
                  <TableCell>
                    <motion.div
                      initial={{scale: 0.8}}
                      animate={{scale: 1}}
                      className="w-[60px] h-[60px] bg-muted flex items-center justify-center overflow-hidden rounded relative">
                      <Image
                        src={URL.createObjectURL(image.file)}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </motion.div>
                  </TableCell>
                  <TableCell className="font-medium">{image.title}</TableCell>
                  <TableCell>{formatSize(image.size)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2 h-full">
                      <Button
                        onClick={() => handleResize(image.id)}
                        variant="secondary"
                        className="px-7">
                        Resize
                      </Button>
                      <button
                        className="bg-red-500 hover:bg-red-800 transition-colors duration-300 ease-in-out p-2.5 rounded-md"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(image.id);
                        }}>
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ImageDropZone;
