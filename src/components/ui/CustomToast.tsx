import {CheckCircleIcon, XCircleIcon} from "lucide-react";
import {Toast, toast} from "react-hot-toast";

interface CustomToastProps {
  t: Toast;
  message: string;
  type: "success" | "error";
}

const CustomToast: React.FC<CustomToastProps> = ({t, message, type}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    toast.dismiss(t.id);
  };

  if (type === "error") {
    return (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-[346px] w-full shadow-lg rounded-md overflow-hidden cursor-pointer opacity-[96%] transition-opacity duration-300 ease-in-out`}
        onClick={handleClick}
        style={{pointerEvents: "auto"}}>
        <div className="bg-[#7E120D] border border-[#CF291B] text-white hover:bg-[#4D110E] transition-colors duration-300 rounded-md">
          <div className="flex flex-col p-4">
            <div className="flex items-center gap-[5px] text-[#ffffff92]">
              <XCircleIcon size={18} />
              <p className="text-sm font-medium">Error</p>
            </div>
            <p className="mt-[8px] text-[15px]">{message}</p>
          </div>
        </div>
      </div>
    );
  } else if (type === "success") {
    return (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-[346px] w-full shadow-lg rounded-md overflow-hidden cursor-pointer opacity-[96%] transition-opacity duration-300 ease-in-out`}
        onClick={handleClick}
        style={{pointerEvents: "auto"}}>
        <div className="bg-[#0D7E1B] border border-[#1BCF2B] text-white hover:bg-[#0E4D11] transition-colors duration-300 rounded-md">
          <div className="flex flex-col p-4">
            <div className="flex items-center gap-[5px] text-[#ffffff92]">
              <CheckCircleIcon size={18} />
              <p className="text-sm font-medium">Success</p>
            </div>
            <p className="mt-[8px] text-[15px]">{message}</p>
          </div>
        </div>
      </div>
    );
  }
};
export default CustomToast;
