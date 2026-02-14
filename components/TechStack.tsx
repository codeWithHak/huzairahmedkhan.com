"use client";

import { motion } from "framer-motion";

const techStack: Record<string, string[]> = {
  "AI & LLMs": [
    "OpenAI Agents SDK",
    "GPT-4o",
    "Claude",
    "Gemini",
    "Prompt Engineering",
  ],
  "RAG & Vectors": [
    "Pinecone",
    "Chroma",
    "pgvector",
    "Custom Embeddings",
    "Chunking Strategies",
  ],
  Backend: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "NeonDB",
  ],
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  Integrations: [
    "Stripe",
    "Twilio",
    "WhatsApp API",
    "HubSpot",
  ],
  "Cloud & DevOps": [
    "Docker",
    "AWS",
    "Vercel",
    "GitHub Actions",
  ],
};

function MarqueeRow({ category, techs, index }: { category: string; techs: string[]; index: number }) {
  // Duplicate items enough times to fill the scroll
  const items = [...techs, ...techs, ...techs, ...techs];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="flex items-center border-b border-[#222] py-4 first:border-t"
    >
      {/* Fixed category label */}
      <div className="w-36 shrink-0 pr-6 md:w-44">
        <span className="text-sm font-bold text-[#BFE600] font-[family-name:var(--font-mono)]">
          {category}
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="relative flex-1 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-black to-transparent" />

        <div className="animate-marquee flex w-max gap-4" style={{ animationDuration: `${20 + index * 5}s` }}>
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap bg-[#BFE600]/5 px-3 py-1 text-sm text-gray-300 font-[family-name:var(--font-mono)] shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative w-full px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#BFE600] font-[family-name:var(--font-mono)]">
            &gt; Technologies
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Tech Stack
          </h3>
        </motion.div>

        <div>
          {Object.entries(techStack).map(([category, techs], index) => (
            <MarqueeRow
              key={category}
              category={category}
              techs={techs}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
