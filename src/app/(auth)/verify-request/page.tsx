"use client";
import {Mail, MoveLeft} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function VerifyRequest() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleResendEmail = async () => {
    try {
      const response = await fetch("/api/resend-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      if (response.ok) {
        toast.success("Email sent successfully. Please check your inbox.");
        return;
      } else {
        toast.error("Failed to resend email. Maximum resend attempts reached.");
      }
    } catch (error) {
      toast.error("Failed to resend email. Please try again later.");
    }
  };
  return (
    <div className="text-white flex flex-col items-center p-[100px]">
      <div className="max-w-[600px] flex flex-col items-center gap-3 text-center">
        <div className="w-16 h-16 bg-[#EEF2FF] flex items-center justify-center rounded-full mb-3">
          <Mail size={35} color="black" />
        </div>
        <h1 className="font-bold text-2xl">Check your email</h1>
        <p className="text-white/50">
          Please check your email inbox and click on the provided link to verify
          your email. If you did not request this email,{" "}
          <button onClick={handleResendEmail} className="text-white">
            click here to send it again.
          </button>
        </p>
        <Link href="/signin">
          <div className="flex gap-2 mt-3">
            <MoveLeft />
            <span>Back to Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
