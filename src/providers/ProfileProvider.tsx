"use client";

import {
  ContextType,
  SetFileType,
  SetInputValueType,
} from "@/types/profileProvideTypes";

import React, {createContext, useContext, useState} from "react";

const ProfileContext = createContext<ContextType | undefined>(undefined);

export function ProfileProvider({
  children,
  initialBackgroundImage = "",
}: {
  children: React.ReactNode;
  initialBackgroundImage?: string;
}) {
  const [backgroundImage, setBackgroundImage] = useState(
    initialBackgroundImage,
  );

  function isBackgroundImageChanged() {
    return backgroundImage !== initialBackgroundImage;
  }

  const clearBackgroundImage = () => {
    setBackgroundImage(initialBackgroundImage);
    console.log("Background image reset to initial state");
  };

  const clearData = (
    setFile: SetFileType,
    setInputValue: SetInputValueType,
    userDescription: string | null,
  ) => {
    if (setFile) {
      setFile(null);
      console.log("file cleared at profile provider");
    }
    if (setInputValue) {
      setInputValue(userDescription || "");
    }
    clearBackgroundImage();
  };

  return (
    <ProfileContext.Provider
      value={{
        clearData,
        backgroundImage,
        setBackgroundImage,
        isBackgroundImageChanged,
      }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileProvider() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
