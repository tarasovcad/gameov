"use client";
import React, {ReactNode, useState} from "react";
import {createPortal} from "react-dom";

const CustomTooltip = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({top: 0, left: 0});

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY + rect.height / 2,
      left: rect.right + window.scrollX + 8,
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isVisible &&
        createPortal(
          <div
            className="fixed z-50 transition-all duration-300 ease-in-out"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: "translateY(-50%)",
            }}>
            <div className="bg-[#2D2D2D] text-white text-sm rounded-md px-3 py-2 shadow-lg relative">
              {text}
              <div className="absolute w-2 h-2 bg-[#2D2D2D] transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default CustomTooltip;
