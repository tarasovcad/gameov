"use client";

import {
  ContextType,
  SetFileType,
  SetInputValueType,
} from "@/types/profileProvideTypes";
import React, {createContext, useContext, useState} from "react";

const ProfileContext = createContext<ContextType | undefined>(undefined);

export function ProfileProvider({children}: {children: React.ReactNode}) {
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
  };

  const clearFile = (setFile: SetFileType) => {
    if (setFile) {
      setFile(null);
    }
  };

  return (
    <ProfileContext.Provider value={{clearData, clearFile}}>
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
