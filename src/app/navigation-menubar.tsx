"use client";

import Link from "next/link";

export default function NavigationMenuBar() {
  return (
    <div className="flex h-16 bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300">
      <div className="m-4 flex size-9 w-16 flex-auto">
        <Link href="/">
          <img src="/myspace-logo.svg" alt="Icon" className="w-14"/>
        </Link>
      </div>
      <div className="flex size-9 flex-none md:flex-auto"></div>
      <div className="flex size-12 flex-grow flex-row-reverse gap-4 p-4 tracking-tighter md:tracking-normal text-sky-400">
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
}
