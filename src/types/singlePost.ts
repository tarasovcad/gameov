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
  images: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostsData {
  posts: Post[];
}
