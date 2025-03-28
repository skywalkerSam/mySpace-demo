import { getPosts } from "~/server/queries";
import type { Post } from "~/types/types";

export const dynamic = "force-dynamic";
// export const revalidate = 420;

interface Props {
  params: { slug: string };
}
  /**
   * Page for a single blog post. Given a slug as a URL param, it will fetch the corresponding post
   * from the database and display its title and content.
   * @param {{ params: { slug: string } }} props
   * @returns {JSX.Element}\
   * @see https://nextjs.org/docs/app/api-reference/functions/next-response
   */
export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const posts: Post[] | undefined = await getPosts();
  // console.log(posts);
  const post = posts?.find((post) => post?.slug === slug);
  // const post = posts.filter((post) => post.slug === slug)?.[0];
  // console.log(post);
  if (!post) {
    console.error("No post found with slug:", slug);
  }

  return (
    <div className="text-sky-400">
      <div className="bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300">
        <h1 className="flex items-center justify-center text-4xl text-blue-950 hover:text-blue-600 md:text-5xl">
          {post?.title}
        </h1>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950">
        <div>
          <p className="text-xl md:text-2xl">{post?.content}</p>
        </div>
      </div>
    </div>
  );
}
