"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUserBackgoundPicture(
  userEmail: string | null | undefined,
  backgroundImage: string,
) {
  if (!userEmail) {
    throw new Error("User email is required");
  } else if (!backgroundImage) {
    throw new Error("Background image is required");
  }
  try {
    const updatedUserBackgroundPicture = await prisma.profile.update({
      where: {email: userEmail},
      data: {backgroundImage: backgroundImage},
    });
    return updatedUserBackgroundPicture;
  } catch (error) {
    console.error("Error updating user background picture:", error);
    throw new Error("Failed to update user background picture");
  }
}
