import {getClient} from "@/lib/apollo-client";
import {gql} from "@apollo/client";
import Image from "next/image";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
      slug
      date
      downloadLink
      tags
      appVersion
      platforms
      publisher
      releasedDate
      images
      status
      createdAt
    }
  }
`;

interface Post {
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

interface PostsData {
  posts: Post[];
}

export default async function PostsList() {
  const start = performance.now();

  const client = getClient();
  const {data} = await client.query<PostsData>({
    query: GET_POSTS,
  });

  const end = performance.now();
  const fetchTime = end - start;
  setTimeout(() => {
    console.log(`Fetched in ${fetchTime / 1000} seconds`);
  }, 1000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.posts.map((post: Post) => (
        <article key={post.id} className="border rounded-lg p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2">{post.description}</p>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {post.images[0] && (
            <Image
              src={post.images[0]}
              alt={post.title}
              width={300}
              height={200}
              className="mt-4 w-full h-48 object-cover rounded"
            />
          )}
          <div className="mt-4 text-sm text-gray-500">
            <p>Version: {post.appVersion}</p>
            <p>Published: {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
