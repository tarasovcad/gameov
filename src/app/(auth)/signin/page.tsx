"use client";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import {signIn} from "next-auth/react";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignInFormData, signInSchema} from "@/validation/signInValidation";
import Logo from "@/components/logo/Logo";
import InputSpotlight from "@/components/ui/InputSpotlight";
import UnderlineLink from "@/components/ui/UnderlineLink";
import AuthProviderButton from "@/components/auth/AuthProviderButton";
import {
  ChromeIcon,
  CircleUser,
  Github,
  LockKeyhole,
  Mail,
  Twitter,
} from "lucide-react";
import useCustomToast from "@/hooks/useCustomToast";

const SignIn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useCustomToast();

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (result?.ok) {
        toast.success("Sign in successful");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 1500);
      }
      if (result?.error) {
        setError("root", {message: "Invalid email or password"});
        console.log(result?.error);
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      setError("root", {message: "An error occurred during sign in"});
      toast.error("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex gap-[30px]">
      <div className="absolute top-[30px] left-[30px] flex items-center justify-center cursor-pointer">
        <Link
          href={"/"}
          className=" w-fit items-center justify-start hidden dark:block ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={130}
            height={23}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="min-[1101px]:w-1/2 w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-5 max-w-[500px] w-full z-50">
          <AuthHeading
            title=" Welcome back!"
            subtitle=" We are happy to see you again! Sign in to your account to continue"
          />
          <div className="flex gap-4 items-center justify-center w-full ">
            <AuthProviderButton>
              <ChromeIcon size={21} />
              <span className="text-[15px] max-[550px]:hidden text-primary_text">
                Goggle
              </span>
            </AuthProviderButton>
            <AuthProviderButton>
              <Github size={20} />
              <span className="text-[15px] max-[550px]:hidden text-primary_text">
                Github
              </span>
            </AuthProviderButton>
            <AuthProviderButton>
              <Twitter size={20} />
              <span className="text-[15px] max-[550px]:hidden text-primary_text">
                Twitter
              </span>
            </AuthProviderButton>
          </div>
          <AuthSeparator />
          <form
            className="flex flex-col gap-[6px] max-[600px]:gap-[5px]"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full gap-2 mb-[18px]">
              <InputLabel label="Email" />
              <InputSpotlight
                placeholder="Enter your mail address"
                id="email"
                type="email"
                icon={<Mail size={19} />}
                register={register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-2 mb-[20px] relative">
              <InputLabel label="Password" />
              <InputSpotlight
                placeholder="Enter your password"
                id="password"
                type="password"
                icon={<LockKeyhole size={19} />}
                register={register("password")}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <Link
                href={"/forgot-password"}
                className={`text-white text-xs text-right w-fit self-end absolute -bottom-[25px] right-0 underline hover:text-[#A0C111] transition-colors duration-300 ease-in-out ${errors.password && "bottom-[3px]"}`}>
                Forgot your password?
              </Link>
            </div>

            <AuthMainButton
              buttonTitle="Sign In"
              className="mt-6"
              isLoading={isLoading}
            />
          </form>

          <h3 className="text-white/50 text-sm font-medium text-center ">
            Don&apos;t have an account?{" "}
            <Link
              href={"/signup"}
              className="text-[#A0C111] after:bg-white hover:text-white transition-colors duration-300 underline">
              Sign up
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-1/2 relative max-[1100px]:hidden">
        <Image
          src="/sign-up6.jpg"
          alt="hero-slider-1"
          objectFit="cover"
          width={500}
          height={300}
          draggable="false"
          unoptimized
          priority
          className="object-cover w-full h-full rounded-lg rounded-s-[40px] "
        />
      </div>
    </div>
  );
};

export default SignIn;
