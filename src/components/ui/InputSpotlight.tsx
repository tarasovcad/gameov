"use client";
import {Eye, EyeOff} from "lucide-react";
import React, {useCallback, useRef, useState} from "react";

interface InputSpotlightProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name?: string;
  type: string;
  id: string;
  register?: any;
}

const InputSpotlight = ({
  placeholder,
  name,
  type,
  id,
  register,
  ...props
}: InputSpotlightProps) => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [opacity, setOpacity] = useState(0);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top});
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setIsFocused(false);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;
  return (
    <>
      <div className="relative w-full">
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete="off"
          placeholder={placeholder}
          id={id}
          name={name}
          type={inputType}
          {...register}
          {...props}
          className={`h-12 w-full cursor-default rounded-md border border-white/10 bg-[#1A1A1A] p-3.5 text-gray-100 transition-colors duration-500 placeholder:text-white/40 placeholder:select-none  focus:border-[#A0C111] focus:outline-none text-[15px] font-normal ${props.className || ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-white focus:outline-none"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}>
            {isPasswordVisible ? <EyeOff size={23} /> : <Eye size={23} />}
          </button>
        )}
        <input
          ref={divRef}
          disabled
          style={{
            border: "1.5px solid #A0C111",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#A0C111] bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
        />
      </div>
    </>
  );
};

export default InputSpotlight;
