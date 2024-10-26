import {Dispatch, SetStateAction} from "react";

export interface ImageFile {
  id: number;
  file: File;
  title: string;
  size: number;
}

export interface ImageDropZoneProps {
  setImages: Dispatch<SetStateAction<ImageFile[]>>;
  images: ImageFile[];
}
