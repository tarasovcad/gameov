"use server";

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: "PUBLISHED",
      },
      select: {
        id: true,
        title: true,
        description: true,
        slug: true,
        date: true,
        downloadLink: true,
        tags: true,
        images: true,
        author: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
      take: 2,
    });

    return {posts};
  } catch (error) {
    return {error: "Failed to fetch posts"};
  }
}
