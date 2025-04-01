import { NextResponse } from "next/server";
import { posts } from "~/data/posts";

export async function GET() {
  return NextResponse.json(posts);

  //   return new Response(JSON.stringify(posts));

  //   return new Response(JSON.stringify(posts), {
  //     status: 201,
  //     headers: { "Content-Type": "application/json" },
  //   });
}
