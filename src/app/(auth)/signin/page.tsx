"use client";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import {InputFocusBlur} from "@/components/ui/InputFoculesBlur";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import {signIn} from "next-auth/react";
import Link from "next/link";
import React, {FormEvent} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

const SignIn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid email or password");
        console.log(result?.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("An error occurred during sign in");
    }
  };
  return (
    <div className="p-[40px] flex flex-col items-center">
      <div className="flex flex-col gap-5 max-w-[448px] w-full">
        <AuthHeading
          title=" Welcome back!"
          subtitle=" We are happy to see you again! Sign in to your account to continue"
        />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Email" />
            <InputFocusBlur
              placeholder="Enter your mail address"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full gap-2 mb-2">
            <InputLabel label="Password" />
            <InputFocusBlur
              placeholder="Enter your password"
              id="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link href={"/"} className="text-white text-xs text-right mb-6">
            Forgot your password?
          </Link>
          <AuthMainButton buttonTitle="Sign In" />
        </form>
        <AuthSeparator />
        <div className="flex flex-col gap-4">
          <ProviderButton
            google
            signin
            onClick={() => signIn("google", {callbackUrl})}
          />
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
