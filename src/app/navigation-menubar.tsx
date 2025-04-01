"use client";

import Link from "next/link";
import Image from "next/image";

/**
 * Renders the navigation menu bar for the application.
 * The navigation menu includes links to the Home, About, Profile, and Blog pages.
 * It also displays the MySpace logo which links back to the homepage.
 * The menu bar has a gradient background and responsive design adjustments for different screen sizes.
 */
export default function NavigationMenuBar() {
  return (
    <nav className="flex h-16 bg-gradient-to-b from-blue-950 via-blue-600 to-blue-300">
      <div className="m-4 flex size-9 w-16 flex-auto">
        <Link href="/">
          <Image
            src="/myspace-logo.svg"
            alt="MySpace Logo"
            width={56}
            height={56}
            className="w-14"
          />
          {/* <img src="/myspace-logo.svg" alt="Icon" className="w-14" /> */}
        </Link>
      </div>
      <div className="flex size-9 flex-none md:flex-auto"></div>
      <ul className="flex size-12 flex-grow flex-row-reverse gap-4 p-4 text-lg tracking-tighter text-gray-950 md:tracking-normal">
        <li>
          <Link href="/about" className="hover:text-blue-950">
            About
          </Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-blue-950">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-950">
            Blog
          </Link>
        </li>
        {/* <Link href="/about" className="hover:text-blue-950">About</Link>
        <Link href="/profile" className="hover:text-blue-950">Profile</Link>
        <Link href="/blog" className="hover:text-blue-950">Blog</Link> */}
      </ul>
    </nav>
  );
}
