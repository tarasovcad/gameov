import {getPosts} from "@/app/actions/posts/post";

export default async function Home() {
  const start = performance.now();
  const {posts, error} = await getPosts();
  const end = performance.now();
  const fetchTime = end - start;
  setTimeout(() => {
    console.log(`Fetched for REST API in ${fetchTime / 1000} seconds`);
  }, 1000);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="grid gap-6">
        {posts?.map((post) => (
          <article key={post.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">
                By: {post.author.name}
              </span>
            </div>
            {post.tags.length > 0 && (
              <div className="mt-2 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
