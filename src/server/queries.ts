// Queries
import type { Post } from "~/types/types";

export async function getPosts() {
  try {
    const response: Response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`,
      );
    }
    const posts: Post[] = (await response.json()) as Post[];
    return posts;
  } catch (error) {
    console.error(error);
  }
}
