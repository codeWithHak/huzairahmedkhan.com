"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    week: "Week 1",
    title: "Discovery & Design",
    description:
      "We dive deep into your requirements. I analyze your workflows, identify automation opportunities, and design the agent architecture.",
  },
  {
    num: "02",
    week: "Weeks 2-3",
    title: "Build & Deploy",
    description:
      "Rapid development with weekly demos and daily Loom updates. You see progress in real-time, not just at the end.",
  },
  {
    num: "03",
    week: "Ongoing",
    title: "Support & Optimize",
    description:
      "Post-launch support, performance monitoring, and continuous improvements. Your AI gets smarter over time.",
  },
];

export default function Process() {
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
            &gt; Process
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            How I Work
          </h3>
        </motion.div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connecting line — horizontal across the top of cards */}
          <div className="absolute top-10 left-6 right-6 hidden h-px bg-gradient-to-r from-[#BFE600] via-[#BFE600]/50 to-[#BFE600] md:block" />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="clip-corner relative border border-[#222] bg-[#0a0a0a] p-6 pt-8 transition-colors duration-100 hover:border-[#BFE600]"
              >
                {/* Step number */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#BFE600]/20 font-[family-name:var(--font-mono)]">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold text-[#BFE600] font-[family-name:var(--font-mono)]">
                    {step.week}
                  </span>
                </div>

                <h4 className="mb-3 text-xl font-bold text-white">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
