import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import {InputFocusBlur} from "@/components/ui/InputFoculesBlur";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="p-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-5 max-w-[448px] w-full">
        <AuthHeading
          title=" Welcome back!"
          subtitle=" We are happy to see you again! Sign in to your account to continue"
        />
        <form className="flex flex-col">
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Email" />
            <InputFocusBlur placeholder="Enter your mail address" />
          </div>
          <div className="flex flex-col w-full gap-2 mb-2">
            <InputLabel label="Password" />
            <InputFocusBlur placeholder="Enter your password" />
          </div>
          <Link href={"/"} className="text-white text-xs text-right mb-6">
            Forgot your password?
          </Link>
          <AuthMainButton buttonTitle="Sign In" />
        </form>
        <AuthSeparator />
        <div className="flex flex-col gap-4">
          <ProviderButton google signin />
          <ProviderButton signin />
        </div>
        <h3 className="text-white/50 text-sm font-medium text-center">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="underline">
            Sign up
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
