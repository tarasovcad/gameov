import AgreementCheckbox from "@/components/auth/AgreementCheckbox";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import {InputFocusBlur} from "@/components/ui/InputFoculesBlur";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="p-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-5 max-w-[448px] w-full">
        <AuthHeading
          title="Create an account"
          subtitle="New here? Sign up and begin your journey"
        />
        <form className="flex flex-col">
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Username" />
            <InputFocusBlur placeholder="Enter your username" />
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Email" />
            <InputFocusBlur placeholder="Enter your mail address" />
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Password" />
            <InputFocusBlur placeholder="Enter your password" />
          </div>
          <div className="flex flex-col w-full gap-2 mb-3">
            <InputLabel label="Confirm Password" />
            <InputFocusBlur placeholder="Confirm your password" />
          </div>
          <AgreementCheckbox />
          <AuthMainButton buttonTitle="Sign Up" />
        </form>
        <AuthSeparator />
        <div className="flex flex-col gap-4">
          <ProviderButton google />
          <ProviderButton />
        </div>
        <h3 className="text-white/50 text-sm font-medium text-center">
          Already have an account?{" "}
          <Link href={"/signin"} className="underline">
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
