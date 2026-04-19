import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getAdjacentProjects,
  getAllProjects,
  getProjectBySlug,
} from "@/lib/projects";
import { mdxComponents } from "@/components/project/mdx-components";
import HackathonBadge from "@/components/project/HackathonBadge";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Huzair Ahmed Khan`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <main className="min-h-screen bg-black grid-bg">
      <article className="relative w-full px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#BFE600] font-[family-name:var(--font-mono)] transition-colors hover:text-[#d4f520]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            all projects
          </Link>

          <div
            className={`clip-corner relative mb-8 aspect-[21/9] w-full overflow-hidden border ${
              project.hackathonWinner ? "border-[#BFE600]/40" : "border-[#222]"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
            {project.hackathonWinner && (
              <div className="absolute left-4 top-4 z-10">
                <HackathonBadge name={project.hackathonName} size="md" />
              </div>
            )}
          </div>

          <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mb-6 text-lg text-gray-400 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-[#222] pb-8">
            <span className="text-xs font-medium text-gray-500 font-[family-name:var(--font-mono)]">
              {formattedDate}
            </span>
            <span className="text-gray-700">·</span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#BFE600]/10 px-2.5 py-0.5 text-xs font-medium text-[#BFE600] font-[family-name:var(--font-mono)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="ml-auto flex gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-corner inline-flex items-center gap-2 bg-[#BFE600] px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-[#d4f520]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-corner inline-flex items-center gap-2 border border-[#333] px-4 py-2 text-xs font-semibold text-white transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </Link>
              )}
            </div>
          </div>

          <div className="prose-invert">
            <MDXRemote
              source={project.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {(prev || next) && (
            <nav className="mt-16 grid gap-4 border-t border-[#222] pt-8 md:grid-cols-2">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="clip-corner group border border-[#222] bg-[#0a0a0a] p-5 transition-colors hover:border-[#BFE600]"
                >
                  <span className="mb-2 flex items-center gap-1 text-xs text-gray-500 font-[family-name:var(--font-mono)]">
                    <ArrowLeft className="h-3 w-3" />
                    previous
                  </span>
                  <span className="block text-base font-semibold text-white transition-colors group-hover:text-[#BFE600]">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="clip-corner group border border-[#222] bg-[#0a0a0a] p-5 text-right transition-colors hover:border-[#BFE600]"
                >
                  <span className="mb-2 flex items-center justify-end gap-1 text-xs text-gray-500 font-[family-name:var(--font-mono)]">
                    next
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="block text-base font-semibold text-white transition-colors group-hover:text-[#BFE600]">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          )}
        </div>
      </article>
    </main>
  );
}
