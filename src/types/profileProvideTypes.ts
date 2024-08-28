import {Dispatch, SetStateAction} from "react";

export type SetFileType = Dispatch<SetStateAction<File | null>>;
export type SetInputValueType = Dispatch<SetStateAction<string>>;

export type ContextType = {
  clearData: (
    setFile: SetFileType,
    setInputValue: SetInputValueType,
    userDescription: string | null,
  ) => void;
  backgroundImage: string;
  setBackgroundImage: React.Dispatch<React.SetStateAction<string>>;
};
