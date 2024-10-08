"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUserImage(
  userEmail: string | null | undefined,
  imageUrl: string,
) {
  if (!userEmail) {
    throw new Error("User email is required");
  }
  try {
    const updatedUser = await prisma.user.update({
      where: {email: userEmail},
      data: {image: imageUrl},
    });

    await prisma.profile.update({
      where: {email: userEmail},
      data: {image: imageUrl},
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user image:", error);
    throw new Error("Failed to update user image");
  }
}
