"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "PhysAI",
    description:
      "RAG-powered robotics education platform with AI chatbot. Combines structured content on robotics and physical AI with intelligent content querying that provides referenced answers.",
    image: "/projects/physai.png",
    tags: ["OpenAI Agents SDK", "RAG", "FastAPI", "Next.js"],
    liveUrl: "https://physai.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Quizler",
    description:
      "Full-stack agentic web app that converts PDFs and text into quizzes instantly. Reduces assessment preparation time from hours to seconds for educators.",
    image: "/projects/quizler.png",
    tags: ["AI Agents", "Python", "FastAPI", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ChadGPT",
    description:
      "AI Agent Platform that transforms passive conversation into active task completion. Executes commands, automates workflows, and delivers tangible outcomes.",
    image: "/projects/chadgpt.png",
    tags: ["Multi-Agent", "OpenAI SDK", "React", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
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
          className="clip-corner border border-[#222] bg-[#0a0a0a] overflow-hidden transition-colors duration-100 hover:border-[#BFE600]"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/1200x500/0a0a0a/BFE600?text=${featured.title}`;
              }}
            />
          </div>
          <div className="p-8">
            <h4 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {featured.title}
            </h4>
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
                {featured.liveUrl !== "#" && (
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
                {featured.githubUrl !== "#" && (
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
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="clip-corner border border-[#222] bg-[#0a0a0a] overflow-hidden transition-colors duration-100 hover:border-[#BFE600]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x450/0a0a0a/BFE600?text=${project.title}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h4>
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
                  {project.liveUrl !== "#" && (
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
                  {project.githubUrl !== "#" && (
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
          ))}
        </div>
      </div>
    </section>
  );
}
