// Queries
import type { Post } from "~/types/types";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api/posts";

/**
 * Fetches posts from the API endpoint.
 *
 * @returns A list of posts, each with { title, content, slug } as defined in the Post interface.
 *          An empty array if the fetch fails.
 */
export async function getPosts() {
  try {
    const response: Response = await fetch(apiUrl, {
      cache: "no-cache",
    });
    if (!response.ok) {
      console.error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`,
      );
      return [];
    }
    const posts: Post[] = (await response.json()) as Post[];
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}
