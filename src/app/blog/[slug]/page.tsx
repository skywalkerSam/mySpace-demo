import { getPosts } from "~/server/queries";
// import type { Post } from "~/types/types";
// import BlogTitle from "../blog-title";

export const dynamic = "force-dynamic";

export default async function BlogPage({ slug }: { slug: string }) {
  const posts = await getPosts();
  // console.log(posts);
  let post;
  if (posts) {
    post = posts.find((post) => posts?.slug === slug);
    // console.log(post);
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
