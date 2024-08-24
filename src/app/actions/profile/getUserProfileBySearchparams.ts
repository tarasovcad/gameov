"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserProfileBySearchparams(
  username: string | null | undefined,
) {
  if (!username) {
    throw new Error("Username is required");
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: {username: username},
      select: {
        username: true,
        description: true,
        role: true,
        image: true,
        createdAt: true,
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return "Failed to fetch profile";
  }
}
