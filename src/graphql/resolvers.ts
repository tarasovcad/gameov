import {Resolvers} from "@apollo/client";
import {Category, PostStatus, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

type ResolverParent = unknown;

interface ResolverArgs {
  page?: number;
  limit?: number;
  status?: PostStatus;
  selectedCategory?: Category;
  sortBy?: string;
  category?: string;
}
interface LatestPostsArgs {
  limit?: number;
  selectedCategory?: Category;
  status?: PostStatus;
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
        sortBy = "Newest",
      }: ResolverArgs,
    ) => {
      const skip = (page - 1) * limit;

      const where = {
        status: status as PostStatus,
        selectedCategory: selectedCategory,
      };

      let orderBy = {};
      switch (sortBy) {
        case "Newest":
          orderBy = {createdAt: "desc"};
          break;
        case "Oldest":
          orderBy = {createdAt: "asc"};
          break;
        case "Alphabetical":
          orderBy = {title: "asc"};
          break;
        default:
          orderBy = {createdAt: "desc"};
      }

      // Get total count for pagination info
      const totalPosts = await prisma.post.count({where});
      const totalPages = Math.ceil(totalPosts / limit);

      // Fetch posts with pagination
      const posts = await prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy,
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
      {
        limit = 6,
        selectedCategory = "PC_GAMES",
        status = "PUBLISHED",
      }: LatestPostsArgs,
    ) => {
      const posts = await prisma.post.findMany({
        where: {
          status: status,
          selectedCategory: selectedCategory,
        },
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          title: true,
          cardDescription: true,
          slug: true,
          date: true,
          images: true,
        },
      });

      return posts;
    },
    getAllUniqueFilters: async () => {
      const posts = await prisma.post.findMany({
        where: {
          status: "PUBLISHED",
        },
        select: {
          tags: true,
          publisher: true,
          platforms: true,
          interfaceLanguages: true,
          voiceLanguages: true,
          // releasedDate: true,
          // size
        },
      });
      const uniqueTags = Array.from(
        new Set(posts.flatMap((post) => post.tags)),
      ).sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
      const uniquePlatforms = Array.from(
        new Set(posts.flatMap((post) => post.platforms)),
      ).sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
      const uniquePublisher = Array.from(
        new Set(
          posts.flatMap((post) => (post.publisher ? [post.publisher] : [])),
        ),
      ).sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
      const uniqueInterfaceLanguages = Array.from(
        new Set(posts.flatMap((post) => post.interfaceLanguages)),
      ).sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
      const voiceInterfaceLanguages = Array.from(
        new Set(posts.flatMap((post) => post.voiceLanguages)),
      ).sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}));
      return {
        tags: uniqueTags,
        publisher: uniquePublisher,
        platforms: uniquePlatforms,
        interfaceLanguages: uniqueInterfaceLanguages,
        voiceLanguages: voiceInterfaceLanguages,
      };
    },
  },
};
