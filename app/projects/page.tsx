import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/project/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Huzair Ahmed Khan",
  description: "AI agents, full-stack apps, and experiments.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-black grid-bg">
      <section className="relative w-full px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-[#BFE600] font-[family-name:var(--font-mono)] transition-colors hover:text-[#d4f520]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            back
          </Link>

          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#BFE600] font-[family-name:var(--font-mono)]">
            &gt; All Projects
          </h2>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Everything I&apos;ve built
          </h1>
          <p className="mb-12 max-w-2xl text-gray-400 leading-relaxed">
            AI agents, full-stack apps, and experiments.
          </p>

          {projects.length === 0 ? (
            <p className="text-gray-500">No projects yet — check back soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
