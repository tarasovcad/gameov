"use client";
import React from "react";
import {toast, Toast} from "react-hot-toast";

interface ToastProps {
  type: "success" | "error" | "custom";
  message: string;
  customData?: {
    name: string;
    imageUrl: string;
  };
}

const CustomToast: React.FC<ToastProps> = ({type, message, customData}) => {
  const renderToast = () => {
    switch (type) {
      case "success":
        return toast.success(message);
      case "error":
        return toast.error(message);
      default:
        return null;
    }
  };

  return <>{renderToast()}</>;
};

export const ShowToast = (props: ToastProps) => {
  return <CustomToast {...props} />;
};
