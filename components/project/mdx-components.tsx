import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-6 text-3xl font-bold text-white md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-bold text-white md:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-bold text-white md:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-base text-gray-400 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-5 ml-6 list-disc space-y-2 text-gray-400 leading-relaxed marker:text-[#BFE600]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 ml-6 list-decimal space-y-2 text-gray-400 leading-relaxed marker:text-[#BFE600]">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-[#BFE600] underline decoration-[#BFE600]/40 underline-offset-4 transition-colors hover:decoration-[#BFE600]"
    >
      {children}
    </Link>
  ),
  code: ({ children }) => (
    <code className="bg-[#0a0a0a] border border-[#222] px-1.5 py-0.5 text-sm font-[family-name:var(--font-mono)] text-[#BFE600]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="clip-corner mb-5 overflow-x-auto border border-[#222] bg-[#0a0a0a] p-4 text-sm font-[family-name:var(--font-mono)] text-gray-300">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-5 border-l-2 border-[#BFE600] pl-4 italic text-gray-300">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-[#222]" />,
  Screenshot: ({ src, alt }: { src: string; alt: string }) => (
    <div className="clip-corner relative my-6 aspect-video w-full overflow-hidden border border-[#222]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  ),
};
