import React, {ReactNode} from "react";

const Tooltip = ({children, text}: {children: ReactNode; text: string}) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-fit whitespace-nowrap">
        <div className="bg-[#2D2D2D] text-white text-sm rounded-md px-3 py-2 shadow-lg relative z-[9999]">
          {text}
          <div className="absolute w-2 h-2 bg-[#2D2D2D] transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
