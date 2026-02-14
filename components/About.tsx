"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "100%", label: "Remote Ready" },
];

export default function About() {
  return (
    <section
      id="about"
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
            &gt; About Me
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Building the Future of Work
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="clip-corner border border-[#222] bg-[#0a0a0a] p-8"
          >
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;m <span className="text-white font-semibold">Huzair Ahmed Khan</span>,
                an Agentic AI Developer based in Karachi, Pakistan. I specialize in building
                autonomous AI systems that don&apos;t just respond — they <span className="text-[#BFE600]">reason, plan,
                and execute</span> complex workflows independently.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                After pivoting from frontend development to AI, I&apos;ve delivered
                production systems including AI-powered ERPs, multi-agent customer support
                systems, and adaptive learning platforms grounded in custom RAG knowledge bases.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                My approach? <span className="text-white font-semibold">Production-first architecture</span> with
                OpenAI Agents SDK, precise RAG pipelines, and clean, scalable code. No demos that
                break in real use — just AI that actually works.
              </p>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="clip-corner border border-[#222] bg-[#0a0a0a] p-6 transition-colors duration-100 hover:border-[#BFE600]"
              >
                <div className="text-3xl font-bold text-[#BFE600] font-[family-name:var(--font-mono)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
