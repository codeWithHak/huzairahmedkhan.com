"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import HackathonBadge from "@/components/project/HackathonBadge";
import type { Project } from "@/lib/projects";

type Props = {
  projects: Project[];
  totalCount: number;
};

export default function Projects({ projects, totalCount }: Props) {
  if (projects.length === 0) return null;
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#BFE600] font-[family-name:var(--font-mono)]">
            &gt; Portfolio
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Featured Projects
          </h3>
        </motion.div>

        {/* Featured Project — Full Width Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`clip-corner group border bg-[#0a0a0a] overflow-hidden transition-colors duration-100 hover:border-[#BFE600] ${
            featured.hackathonWinner ? "border-[#BFE600]/40" : "border-[#222]"
          }`}
        >
          <Link
            href={`/projects/${featured.slug}`}
            className="block relative aspect-[21/9] w-full overflow-hidden"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
            {featured.hackathonWinner && (
              <div className="absolute left-4 top-4 z-10">
                <HackathonBadge name={featured.hackathonName} size="md" />
              </div>
            )}
          </Link>
          <div className="p-8">
            <Link href={`/projects/${featured.slug}`}>
              <h4 className="mb-3 text-2xl font-bold text-white md:text-3xl transition-colors hover:text-[#BFE600]">
                {featured.title}
              </h4>
            </Link>
            <p className="mb-5 text-gray-400 leading-relaxed max-w-3xl">
              {featured.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#BFE600]/10 px-3 py-1 text-xs font-medium text-[#BFE600] font-[family-name:var(--font-mono)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="ml-auto flex gap-3">
                {featured.liveUrl && (
                  <Link
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clip-corner inline-flex items-center gap-2 bg-[#BFE600] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#d4f520]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
                {featured.githubUrl && (
                  <Link
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clip-corner inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Projects — Bento Grid */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {totalCount > projects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-end"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#BFE600] font-[family-name:var(--font-mono)] transition-colors hover:text-[#d4f520]"
            >
              View all {totalCount} projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
