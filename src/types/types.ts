import {Dispatch, SetStateAction} from "react";
import {FieldError} from "react-hook-form";

export interface ImageFile {
  id: number;
  file: File;
  title: string;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface ImageDropZoneProps {
  setImages: (
    images: ImageFile[] | ((prev: ImageFile[]) => ImageFile[]),
  ) => void;
  images: ImageFile[];
  error?: FieldError;
}
