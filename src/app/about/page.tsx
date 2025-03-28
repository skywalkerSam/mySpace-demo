import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 via-blue-600 to-blue-950">
      <div>
        <div>
          <Link
            href="https://myspace.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/myspace-logo.svg"
              alt="Icon"
              className="m-4 w-12 md:w-16"
            />
          </Link>
        </div>
        <div>
          <p className="flex flex-wrap text-lg text-sky-400 md:text-2xl">
            MySpace demo w/ NEXT.js + Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
