// Queries
import type { Post } from "~/types/types";

export async function getPosts() {
  try {
    const response: Response = await fetch("http://localhost:3000/api/posts");
    const posts: Post[] = JSON.parse(await response.text()) as Post[];
    // const posts: Post[] = (await response.json()) as Post[];
    // JSON.stringify(posts);
    return posts;
  } catch {
    return undefined;
  }
}
