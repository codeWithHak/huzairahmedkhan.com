"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Facebook, ArrowUpRight, Github } from "lucide-react";

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: UpworkIcon,
    href: "https://www.upwork.com/freelancers/~01655224ec78cdc162",
    label: "Upwork",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/huzair-ahmed-khan/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/codeWithHak",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/huzair.01/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61587263753224",
    label: "Facebook",
  },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-black px-6 py-6 md:px-12 md:py-8">
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl shrink-0 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider text-white"
        >
          HAK
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-widest text-gray-400 transition-colors hover:text-white"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-50 flex flex-col gap-1.5 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white transition-colors"
          />
          <motion.span 
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white transition-colors"
          />
        </motion.button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 backdrop-blur-sm md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-medium tracking-widest text-white transition-colors hover:text-[#BFE600]"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social links in mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8 flex items-center gap-6"
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-[#BFE600]"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </Link>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative grid w-full max-w-7xl flex-1 min-h-0 grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8 -mt-2 md:-mt-4">
        {/* Left Text - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-3 hidden text-left md:order-1 md:block"
        >
          <p className="max-w-xs text-sm leading-relaxed text-white/80">
            Autonomous AI agents that reason, plan, and execute — like a real team member. No micromanagement needed.
          </p>
          <Link
            href="#about"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-from-font transition-colors hover:text-[#BFE600]"
          >
            Read More
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Center Image with Circle Background */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          {/* Lime Circle Background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[250px] w-[250px] rounded-full bg-[#BFE600] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
          />
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <Image
              src="/profile.png"
              alt="Huzair Ahmed Khan"
              width={500}
              height={625}
              sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="relative z-10 h-auto w-56 scale-110 object-cover sm:w-64 sm:scale-125 md:w-80 lg:w-96"
              priority
            />
          </motion.div>
        </div>

        {/* Right Text - Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 flex flex-col items-center justify-center text-center md:order-3 md:translate-x-2"
        >
          <h1 className="text-5xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ textShadow: '0 0 40px rgba(191, 230, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.3)' }}>
            I Build <span style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>AI</span>
            <br />
            Employees
          </h1>
        </motion.div>
      </div>

      {/* Footer - Always visible at bottom */}
      <footer className="z-30 flex w-full max-w-7xl shrink-0 items-center justify-between py-6">
        {/* Social icons - left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-4 md:gap-5"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#BFE600]"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          ))}
        </motion.div>

        {/* Location - right */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium tracking-widest text-gray-400 md:text-base"
        >
          Karachi, Pakistan
        </motion.p>
      </footer>
    </section>
  );
}
