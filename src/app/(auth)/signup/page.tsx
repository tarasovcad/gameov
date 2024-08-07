"use client";
import AgreementCheckbox from "@/components/auth/AgreementCheckbox";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import {InputFocusBlur} from "@/components/ui/InputFoculesBlur";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type SignUpFormData, signUpSchema} from "@/validation/signUpValidation";
import AuthSignInFooter from "@/components/auth/AuthSignInFooter";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    const {confirmPassword, ...apiData} = data;
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    });
    if (response.ok) {
      router.push("/signin");
    } else {
      console.error("Registration failed");
    }
  };
  return (
    <div className="p-[100px] flex flex-col items-center">
      <div className="flex flex-col gap-5 max-w-[448px] w-full">
        <AuthHeading
          title="Create an account"
          subtitle="New here? Sign up and begin your journey"
        />
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Username" />
            <InputFocusBlur
              placeholder="Enter your username"
              id="username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Email" />
            <InputFocusBlur
              placeholder="Enter your mail address"
              id="email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <InputLabel label="Password" />
            <InputFocusBlur
              placeholder="Enter your password"
              id="password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mb-3">
            <InputLabel label="Confirm Password" />
            <InputFocusBlur
              placeholder="Confirm your password"
              id="confirm-password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <AgreementCheckbox register={register} />
          {errors.agreement && (
            <p className="text-red-500">{errors.agreement.message}</p>
          )}
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
      <AuthSignInFooter />
    </div>
  );
};

export default SignUp;
