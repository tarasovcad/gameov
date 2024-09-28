"use client";
import AgreementCheckbox from "@/components/auth/AgreementCheckbox";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";

import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type SignUpFormData, signUpSchema} from "@/validation/signUpValidation";
import AuthSignUpFooter from "@/components/auth/AuthSignUpFooter";
import Logo from "@/components/logo/Logo";
import InputSpotlight from "@/components/ui/InputSpotlight";
import UnderlineLink from "@/components/ui/UnderlineLink";
import toast from "react-hot-toast";
import {ShowToast} from "@/components/ui/CustomToast";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    const {confirmPassword, ...apiData} = data;
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });
      if (response.ok) {
        toast.success(
          "Temperaly account created successfully. Please verify your email.",
        );
        localStorage.setItem("userEmail", apiData.email);
        router.push("/verify-request");
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message);
        toast.error(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-[30px] flex flex-col items-center h-[100svh]">
      <Logo />
      <div className="flex flex-col gap-5 max-w-[448px] w-full mt-[70px] z-50">
        <AuthHeading
          title="Create an account"
          subtitle="New here? Sign up and begin your journey"
        />
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-2 mb-[18px]">
            <InputLabel label="Username" />

            <InputSpotlight
              placeholder="Enter your username"
              id="username"
              type="username"
              register={register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-[18px]">
            <InputLabel label="Email" />
            <InputSpotlight
              placeholder="Enter your mail address"
              id="email"
              type="email"
              register={register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-[18px]">
            <InputLabel label="Password" />
            <InputSpotlight
              placeholder="Enter your password"
              id="password"
              type="password"
              register={register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-[20px]">
            <InputLabel label="Confirm Password" />
            <InputSpotlight
              placeholder="Confirm your password"
              id="confirm-password"
              type="password"
              register={register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mb-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <AgreementCheckbox register={register} />
          {errors.agreement && (
            <p className="text-red-500 text-sm">{errors.agreement.message}</p>
          )}

          <AuthMainButton
            buttonTitle="Sign Up"
            className="mt-6"
            isLoading={isLoading}
          />
        </form>
        <AuthSeparator />
        <div className="flex flex-col gap-4">
          <ProviderButton google />
          <ProviderButton />
        </div>
        <h3 className="text-white/50 text-sm font-medium text-center">
          Already have an account?{" "}
          <UnderlineLink link={"/signin"} title="Sign in" />
        </h3>
      </div>
      <AuthSignUpFooter />
    </div>
  );
};

export default SignUp;
