"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserDescription(userEmail: string | null | undefined) {
  if (!userEmail) {
    throw new Error("User email is required");
  }
  try {
    const profile = await prisma.profile.findUnique({
      where: {email: userEmail},
      select: {description: true},
    });

    if (!profile) {
      throw new Error("Profile not found");
    }
    return profile.description;
  } catch (error) {
    console.error("Error fetching profile description:", error);
    throw new Error("Failed to fetch profile description");
  }
}
