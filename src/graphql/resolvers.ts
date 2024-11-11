import {Resolvers} from "@apollo/client";
import {Category, PostStatus, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

type ResolverParent = unknown;

interface ResolverArgs {
  page?: number;
  limit?: number;
  status?: PostStatus;
  selectedCategory?: Category;
}
interface LatestPostsArgs {
  limit?: number;
  selectedCategory?: Category;
}

export const resolvers: Resolvers = {
  Query: {
    posts: async (
      _parent: ResolverParent,
      {
        page = 1,
        limit = 12,
        status = "PUBLISHED",
        selectedCategory = "PC_GAMES",
      }: ResolverArgs,
    ) => {
      const skip = (page - 1) * limit;

      const where = {
        status: status as PostStatus,
        selectedCategory: selectedCategory,
      };

      // Get total count for pagination info
      const totalPosts = await prisma.post.count({where});
      const totalPages = Math.ceil(totalPosts / limit);

      // Fetch posts with pagination
      const posts = await prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return {
        edges: posts,
        pageInfo: {
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          totalPages,
          totalPosts,
          currentPage: page,
        },
      };
    },
    latestPosts: async (
      _parent: ResolverParent,
      {limit = 6, selectedCategory = "PC_GAMES"}: LatestPostsArgs,
    ) => {
      const posts = await prisma.post.findMany({
        where: {
          status: "PUBLISHED",
          selectedCategory: selectedCategory,
        },
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
      });

      return posts;
    },
  },
};
