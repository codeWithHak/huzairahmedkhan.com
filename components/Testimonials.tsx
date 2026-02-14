"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow AI",
    content:
      "Huzair delivered an AI agent system that reduced our support response time by 70%. His understanding of agentic architecture is exceptional. The code was clean, well-documented, and production-ready from day one.",
    avatar: "SC",
  },
  {
    name: "Michael Roberts",
    role: "Founder, DataSync",
    content:
      "The RAG system Huzair built for us was a game-changer. Our team can now query thousands of documents instantly with accurate, cited responses. No hallucinations, just results.",
    avatar: "MR",
  },
  {
    name: "Priya Sharma",
    role: "Product Lead, EduTech Pro",
    content:
      "From concept to deployed MVP in just 2 weeks. Huzair's daily updates and weekly demos made the entire process transparent. Highly recommend for any AI project.",
    avatar: "PS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="relative w-full px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#BFE600] font-[family-name:var(--font-mono)]">
            &gt; Testimonials
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What Clients Say
          </h3>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="clip-corner border border-[#222] bg-[#0a0a0a] p-8 md:p-12"
        >
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-8 text-xl leading-relaxed text-gray-200 md:text-2xl">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#BFE600]/10 text-sm font-bold text-[#BFE600] font-[family-name:var(--font-mono)]"
                    style={{
                      clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
                    }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-[#222] pt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 transition-all duration-200 ${
                    i === current
                      ? "w-8 bg-[#BFE600]"
                      : "w-2 bg-[#333] hover:bg-[#555]"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center border border-[#333] text-gray-400 transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center border border-[#333] text-gray-400 transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
