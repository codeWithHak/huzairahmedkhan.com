"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Database, Zap, Rocket, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    short: "Multi-agent orchestration with tool calling.",
    detail:
      "AI that reasons, plans, and executes complex workflows autonomously. Built with OpenAI Agents SDK, custom tool integrations, and production-grade error handling.",
  },
  {
    icon: Database,
    title: "RAG Systems",
    short: "Chat with your data — PDFs, databases, docs.",
    detail:
      "Custom embeddings with Pinecone, Chroma, or pgvector. Semantic chunking, hybrid search, and citation-grounded responses. No hallucinations.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    short: "Customer support, WhatsApp, CRM integrations.",
    detail:
      "End-to-end automation pipelines: lead qualification bots, support agents, WhatsApp flows, and CRM sync. Automate the repetitive stuff.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    short: "Idea to deployed prototype in 2 weeks.",
    detail:
      "Scalable, production-ready code with full documentation for easy handoff. FastAPI backends, Next.js frontends, and AI agents wired together.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
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
            &gt; Services
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What I Build
          </h3>
        </motion.div>

        <div className="flex flex-col gap-3">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center gap-6 p-6 border transition-colors duration-100 text-left ${
                    isOpen
                      ? "border-[#BFE600] bg-[#BFE600]/5"
                      : "border-[#222] bg-[#0a0a0a] hover:border-[#BFE600]"
                  }`}
                  style={{
                    clipPath: "polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)",
                  }}
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-r border-[#BFE600]/30 pr-6">
                    <service.icon className="h-6 w-6 text-[#BFE600]" />
                  </div>

                  {/* Title + Short */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-white">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-0.5">
                      {service.short}
                    </p>
                  </div>

                  {/* Expand icon */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#BFE600]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-x border-b border-[#BFE600]/30 bg-[#0a0a0a] px-6 py-5 pl-[4.5rem]">
                        <p className="text-gray-300 leading-relaxed">
                          {service.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
