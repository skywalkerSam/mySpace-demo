import Link from "next/link";
import NavigationMenuBar from "./navigation-menubar";

export default function HomePage() {
  return (
    <div>
      <NavigationMenuBar></NavigationMenuBar>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950 text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16"></div>
      </main>
    </div>
  );
}
