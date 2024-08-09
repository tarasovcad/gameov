import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import {hash} from "bcrypt";

export async function GET(req: Request) {
  try {
    const {searchParams} = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        {message: "Invalid or missing token"},
        {status: 400},
      );
    }

    const tokenRecord = await db.verificationToken.findUnique({
      where: {token},
    });

    if (!tokenRecord || tokenRecord.expires < new Date()) {
      return NextResponse.json(
        {message: "Token expired or invalid"},
        {status: 400},
      );
    }

    const {identifier: email} = tokenRecord;

    // Receive user data from TempUsercure location
    const tempUserData = await db.tempUser.findUnique({
      where: {
        email: email ?? undefined,
      },
    });

    if (!tempUserData) {
      return NextResponse.json({message: "User data not found"}, {status: 400});
    }

    const hashedPassword = await hash(tempUserData.password, 10);

    // Create new user
    await db.user.create({
      data: {
        username: tempUserData.username,
        email: tempUserData.email,
        password: hashedPassword,
      },
    });

    // Clean up temporary data and token
    await db.tempUser.delete({
      where: {
        email: email ?? undefined,
      },
    });

    await db.verificationToken.delete({where: {token}});

    return NextResponse.redirect(new URL("/signin", req.url));
    // return NextResponse.json(
    //   {
    //     message: "User created successfully",
    //     redirect: true, // Add a flag for redirect
    //     redirectUrl: "/signin",
    //   },
    //   {status: 200},
    // );
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
