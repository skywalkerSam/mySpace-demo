import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    {
      title: "Hello",
      slug: "hello-world",
      content: "Hi, Welcome to the World of APIs",
    },
    {
      title: "API",
      slug: "api-intro",
      content: "Application Programming Interface",
    },
  ];
  return NextResponse.json(posts);

  //   return new Response(JSON.stringify(posts));

  //   return new Response(JSON.stringify(posts), {
  //     status: 201,
  //     headers: { "Content-Type": "application/json" },
  //   });
}
