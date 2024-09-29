"use client";
import AgreementCheckbox from "@/components/auth/AgreementCheckbox";
import AuthHeading from "@/components/auth/AuthHeading";
import AuthMainButton from "@/components/auth/AuthMainButton";
import AuthSeparator from "@/components/auth/AuthSeparator";
import Image from "next/image";
import {InputLabel} from "@/components/ui/InputLabel";
import ProviderButton from "@/components/ui/ProviderButton";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type SignUpFormData, signUpSchema} from "@/validation/signUpValidation";

import InputSpotlight from "@/components/ui/InputSpotlight";
import UnderlineLink from "@/components/ui/UnderlineLink";
import toast from "react-hot-toast";
import {
  ChromeIcon,
  CircleUser,
  Github,
  LockKeyhole,
  Mail,
  Twitter,
  User,
} from "lucide-react";
import {Google} from "iconsax-react";
import AuthProviderButton from "@/components/auth/AuthProviderButton";

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
    <div className="h-screen flex gap-[30px] p-[30px] pt-[40px]">
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
            title="Create an account"
            subtitle="New here? Sign up and begin your journey"
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
              <InputLabel label="Username" />
              <InputSpotlight
                placeholder="Enter your username"
                id="username"
                type="username"
                icon={<CircleUser size={19} />}
                register={register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
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
            <div className="flex flex-col w-full gap-2 mb-[20px]">
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

          <h3 className="text-white/50 text-sm font-medium text-center ">
            Already have an account?{" "}
            <Link
              href={"/signin"}
              className="text-[#A0C111] after:bg-white hover:text-white transition-colors duration-300 underline">
              Sign in
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
          className="object-cover w-full h-full rounded-lg rounded-s-[40px] "
        />
      </div>
    </div>
  );
};

export default SignUp;
