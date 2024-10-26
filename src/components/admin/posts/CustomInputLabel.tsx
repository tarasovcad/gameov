import {InputLabel} from "@/components/ui/InputLabel";
import {CircleHelp} from "lucide-react";
import React from "react";

const InfoTooltip = ({text}: {text: string}) => (
  <div className="group relative flex items-center">
    <CircleHelp className=" text-secondary_text " size={16} />
    <span className="absolute left-full ml-2 w-48 rounded-sm bg-black p-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
      {text}
    </span>
  </div>
);

const CustomInputLabel = ({
  label,
  required = true,
}: {
  label: string;
  required?: boolean;
}) => {
  return (
    <div className="flex gap-3 items-center">
      <InputLabel
        label={
          <>
            {label}
            {required && <span className="text-red-500">*</span>}
          </>
        }
      />
      <InfoTooltip text="The main title of your post. This will be displayed prominently." />
    </div>
  );
};

export default CustomInputLabel;
