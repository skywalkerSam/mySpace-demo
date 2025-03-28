import { NextResponse } from "next/server";

/**
 * Returns a list of users.
 *
 * @returns A JSON response with a list of user objects, each containing an `id` and a `name`.
 */
export async function GET() {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Sammy" },
  ];
  return NextResponse.json(users);
}

/**
 * Creates a new user.
 *
 * @param request The request body should contain a JSON object with a single
 * property: `name`. The `name` should be a string.
 *
 * @returns A JSON response with the newly created user's data, including an
 * `id` and a `name`. If the request is invalid, a 400 status code is returned
 * with a plain text response body explaining the error.
 */
export async function POST(request: Request) {
  // Parse the request body
  const body: unknown = await request.json();
  if (typeof body === "object" && body !== null && "name" in body) {
    const { name } = body;
    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    // Handle the case where the body does not have a name property
    return new Response("Invalid request body", {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
