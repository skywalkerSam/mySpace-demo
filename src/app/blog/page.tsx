import Link from "next/link";
import { getPosts } from "~/server/queries";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="text-sky-400">
      <div className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600">
        <h1 className="flex items-center justify-center text-4xl text-gray-950 hover:text-blue-900 md:text-5xl">
          Blog
        </h1>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-600 via-blue-900 to-blue-950">
        <div className="container mx-auto p-4">
          {!posts || posts.length === 0 ? (
            <p className="text-center text-sky-300">No blog posts found.</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <li className="rounded-md bg-white/10 p-4 backdrop-blur">
                    <h2 className="mb-2 text-xl font-bold text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-sky-200">
                      {post.content.length > 100
                        ? `${post.content.substring(0, 100)}...`
                        : post.content}
                    </p>
                    {/* <p className="text-blue-200">{post.content}</p> */}
                    <p className="mt-2 inline-block text-sky-400 hover:underline">
                      Read more →
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// export default function Blog() {
//   return (
//     <div className="text-sky-400">
//       <div className="bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300">
//         <h1 className="flex items-center justify-center text-4xl text-blue-950 hover:text-blue-600 md:text-5xl">
//           Blog
//         </h1>
//       </div>
//       <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950">
//         <div></div>
//       </div>
//     </div>
//   );
// }
