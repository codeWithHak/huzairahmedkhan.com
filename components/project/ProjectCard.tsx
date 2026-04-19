"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HackathonBadge from "@/components/project/HackathonBadge";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`clip-corner group border bg-[#0a0a0a] overflow-hidden transition-colors duration-100 hover:border-[#BFE600] ${
        project.hackathonWinner ? "border-[#BFE600]/40" : "border-[#222]"
      }`}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block relative aspect-video w-full overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {project.hackathonWinner && (
          <div className="absolute left-3 top-3 z-10">
            <HackathonBadge name={project.hackathonName} />
          </div>
        )}
      </Link>
      <div className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <h4 className="mb-2 text-xl font-bold text-white transition-colors hover:text-[#BFE600]">
            {project.title}
          </h4>
        </Link>
        <p className="mb-4 text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#BFE600]/10 px-2.5 py-0.5 text-xs font-medium text-[#BFE600] font-[family-name:var(--font-mono)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
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
    </motion.div>
  );
}
