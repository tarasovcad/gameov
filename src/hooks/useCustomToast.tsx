import CustomToast from "@/components/ui/CustomToast";
import {toast} from "react-hot-toast";

const useCustomToast = () => {
  const showToast = (message: string, type: "success" | "error") => {
    toast.custom((t) => <CustomToast t={t} message={message} type={type} />, {
      duration: 2000,
      position: "bottom-right",
    });
  };

  return {
    success: (message: string) => showToast(message, "success"),
    error: (message: string) => showToast(message, "error"),
  };
};

export default useCustomToast;
