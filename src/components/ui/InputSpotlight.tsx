"use client";
import {Eye, EyeOff, Github} from "lucide-react";
import React, {useCallback, useRef, useState} from "react";

interface InputSpotlightProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name?: string;
  type: string;
  id: string;
  icon?: React.ReactNode;
  register?: any;
}

const InputSpotlight = ({
  placeholder,
  name,
  type,
  id,
  register,
  icon,
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
          className={`pl-[38px] h-12 w-full cursor-default rounded-md border border-border bg-bg p-3.5  transition-colors duration-500 placeholder:text-secondary_text placeholder:select-none  focus:border-white focus:outline-none text-[15px] max-[600px]:text-[14px] font-normal ${props.className || ""}`}
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

        <div className="absolute top-1/2 -translate-y-1/2 left-3 text-white focus:outline-none">
          {icon}
        </div>
        <input
          ref={divRef}
          disabled
          style={{
            border: "1.5px solid #fff",
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-white bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
        />
      </div>
    </>
  );
};

export default InputSpotlight;
