import {PostStatus, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    posts: async () => {
      return await prisma.post.findMany({
        where: {
          status: "PUBLISHED",
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  },
};
