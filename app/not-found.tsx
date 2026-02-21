import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <h1 className="mb-2 text-6xl font-bold text-[#BFE600] font-[family-name:var(--font-mono)]">
        404
      </h1>
      <p className="mb-8 text-lg text-gray-400">Page not found</p>
      <Link
        href="/"
        className="clip-corner bg-[#BFE600] px-6 py-3 text-sm font-bold text-black transition-all hover:bg-[#d4f520]"
      >
        Go Home
      </Link>
    </div>
  );
}
