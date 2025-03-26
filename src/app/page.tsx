import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950 text-sky-400">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div>
            <Link
              href="https://myspace.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex">
                <img
                  src="/myspace-logo.svg"
                  alt="Icon"
                  className="p-1 w-20 md:w-24"
                />
                <p className="p-1 text-4xl md:text-5xl">myspace</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
