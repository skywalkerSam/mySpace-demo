export default function Profile() {
  return (
    <div className="text-sky-400">
      <div className="bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300">
        <h1 className="flex items-center justify-center text-4xl text-blue-950 hover:text-blue-600 md:text-5xl">
          Profile
        </h1>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950">
        <div className="rounded-lg bg-black/20 p-8 backdrop-blur-sm">
          +{" "}
          {/* TODO: Add profile content such as user information, settings, etc. */}
          + <p className="text-xl">Profile content coming soon...</p>+{" "}
        </div>
      </div>
    </div>
  );
}
