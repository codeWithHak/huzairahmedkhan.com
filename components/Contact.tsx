"use client";

import { motion } from "framer-motion";
import { Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-[#BFE600] font-[family-name:var(--font-mono)]">
            &gt; Let&apos;s Talk
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Build Your AI Employee?
            <span className="cursor-blink text-[#BFE600]">_</span>
          </h3>
          <p className="mb-12 text-lg text-gray-400 max-w-2xl">
            Send me your automation challenge. I&apos;ll reply within 4 hours with a
            technical assessment, suggested approach, and honest timeline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Primary CTA */}
          <Link
            href="https://www.upwork.com/freelancers/~01655224ec78cdc162"
            target="_blank"
            rel="noopener noreferrer"
            className="clip-corner inline-flex items-center gap-3 bg-[#BFE600] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-[#d4f520] hover:shadow-[0_0_30px_rgba(191,230,0,0.3)]"
          >
            Hire Me on Upwork
            <ArrowRight className="h-5 w-5" />
          </Link>

          {/* Secondary options */}
          <p className="text-gray-500">Or reach out directly:</p>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/huzair-ahmed-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner flex items-center gap-2 border border-[#333] px-5 py-3 text-gray-300 transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="https://wa.me/923313391666"
              target="_blank"
              rel="noopener noreferrer"
              className="clip-corner flex items-center gap-2 border border-[#333] px-5 py-3 text-gray-300 transition-colors duration-100 hover:border-[#BFE600] hover:text-[#BFE600]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-[#222] pt-8"
        >
          <p className="text-sm text-gray-500 font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} Huzair Ahmed Khan. Built with Next.js &
            Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
