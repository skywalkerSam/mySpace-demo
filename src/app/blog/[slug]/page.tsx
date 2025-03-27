import { getPosts } from "~/server/queries";
import type { Post } from "~/types/types";
// import BlogTitle from "../blog-title";

export default async function BlogPage({ slug }: { slug: string }) {
  const posts = await getPosts();
  let post: Post | undefined;
  if (posts) {
    post = posts.find((post) => post.slug === slug);
  }

  return (
    <div className="text-sky-400">
      {/* <BlogTitle></BlogTitle> */}
      <h1>{post?.title}</h1>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950">
        <div>
          <p>{post?.content}</p>
        </div>
      </div>
    </div>
  );
}
