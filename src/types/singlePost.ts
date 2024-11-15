export interface Post {
  id: string;
  title: string;
  description: string;
  cardDescription: string;
  slug: string;
  date: string;
  downloadLink: string;
  tags: string[];
  authorUserName?: string;
  appVersion: string;
  platforms: string[];
  publisher: string;
  releasedDate: string;
  selectedCategory: string;
  images: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostsData {
  posts: {
    edges: Post[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      totalPages: number;
      totalPosts: number;
      currentPage: number;
    };
  };
}

export interface SixLatestPostsData {
  latestPosts: Post[];
}

export type FilterOptions = {
  tags: string[];
  publisher: string[];
  platforms: string[];
  interfaceLanguages: string[];
  voiceLanguages: string[];
};

export type FiltersData = {
  getAllUniqueFilters: FilterOptions;
};
