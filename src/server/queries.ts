// Queries
import type { Post } from "~/types/types";

export async function getPosts() {
  try {
    const response: Response = await fetch("http://localhost:3000/api/posts");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`,
      );
    }
    const posts: Post[] = (await response.json()) as Post[];
    return posts;
  } catch (error) {
    throw error;
  }
}
