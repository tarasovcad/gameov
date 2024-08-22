"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function updateUserDescription(
  userEmail: string | null | undefined,
  description: string,
) {
  if (!userEmail) {
    throw new Error("User email is required");
  } else if (!description) {
    throw new Error("Description is required");
  }
  try {
    const updatedUserProfile = await prisma.profile.update({
      where: {email: userEmail},
      data: {description: description},
    });
    return updatedUserProfile;
  } catch (error) {
    console.error("Error updating user description:", error);
    throw new Error("Failed to update user description");
  }
}
