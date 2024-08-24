import {descriptionSchema} from "@/validation/descriptionValidation";
import React, {useState} from "react";
import {z} from "zod";

const DescriptionInput = ({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    try {
      descriptionSchema.parse(value);
      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };
  return (
    <>
      <textarea
        value={inputValue}
        placeholder="Write your bio..."
        onChange={(e) => handleInputChange(e.target.value)}
        className="border-2 w-fullborder-[#3C3C3C]placeholder:text-white/70 rounded-[8px] font-normal min-h-[100px] border-white/10 bg-[#1A1A1A] text-white/70 p-3 transition-colors duration-500 placeholder:text-white/40 placeholder:select-none focus:text-gray-100"
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </>
  );
};

export default DescriptionInput;
