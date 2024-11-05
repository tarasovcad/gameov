export interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  downloadLink: string;
  tags: string[];
  appVersion: string;
  platforms: string[];
  publisher: string;
  releasedDate: string;
  images: string[];
  status: string;
  createdAt: string;
}

export interface PostsData {
  posts: Post[];
}
