import Link from "next/link";
import React from "react";

import {UseFormRegisterReturn, UseFormRegister} from "react-hook-form";
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

type AgreementCheckboxProps = {
  register: UseFormRegister<FormData>;
};
const AgreementCheckbox: React.FC<AgreementCheckboxProps> = ({register}) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <input
        type="checkbox"
        id="agreement"
        {...register("agreement")}
        className="h-4 w-4 rounded border-gray-300 text-[#E4FF6D] focus:[#A0C111] accent-current"
      />
      <label htmlFor="agreement" className="text-sm text-white">
        I agree to all the
        <Link
          href="/terms"
          className="mx-1 text-[#E4FF6D] hover:text-[#A0C111] transition-colors duration-300">
          Term
        </Link>
        ,
        <Link
          href="/privacy"
          className="mx-1 text-[#E4FF6D] hover:text-[#A0C111] transition-colors duration-300">
          Privacy Policy
        </Link>
        and
        <Link
          href="/fees"
          className="ml-1 text-[#E4FF6D] hover:text-[#A0C111] transition-colors duration-300">
          Fees
        </Link>
        .
      </label>
    </div>
  );
};

export default AgreementCheckbox;
