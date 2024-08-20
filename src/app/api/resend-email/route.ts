// pages/api/auth/resend-email.ts
import {NextResponse} from "next/server";
import crypto from "crypto";
import {db} from "@/lib/db";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAXIMUM_RESEND_ATTEMPTS = 5;

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({message: "Method not allowed"});
  }
  try {
    const {email} = await req.json();

    const tempUser = await db.tempUser.findUnique({
      where: {email},
    });
    if (!tempUser) {
      return NextResponse.json({message: "User not found"}, {status: 400});
    }

    if (tempUser.resendCount >= MAXIMUM_RESEND_ATTEMPTS) {
      return NextResponse.json(
        {message: "Maximum resend attempts reached"},
        {status: 429},
      );
    }

    await db.tempUser.update({
      where: {email},
      data: {resendCount: tempUser.resendCount + 1},
    });

    // Check if a token already exists for the email
    let tokenRecord = await db.verificationToken.findFirst({
      where: {identifier: email},
    });
    let token;
    if (tokenRecord) {
      token = tokenRecord.token;
    } else {
      // Generate a new token if none exists
      token = crypto.randomBytes(32).toString("hex");
      tokenRecord = await db.verificationToken.create({
        data: {
          identifier: email,
          token,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
        },
      });
    }

    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/callback/email?token=${token}`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verify your email",
      html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email and sign in.</p>`,
    });
    return NextResponse.json(
      {
        message: "Verification email sent. Please check your inbox.",
      },
      {status: 200},
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error in POST /api/user:", error);
      return NextResponse.json(
        {message: "Something went wrong", error: error.message},
        {status: 500},
      );
    } else {
      console.error("Unexpected error in POST /api/user:", error);
      return NextResponse.json(
        {message: "Something went wrong", error: "Unexpected error"},
        {status: 500},
      );
    }
  }
}
