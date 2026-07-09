"use client";

import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight } from "lucide-react";

import ParticlesBackground from "./ParticlesBackground";


export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl animate-float animation-delay-1s" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl animate-pulse-slow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 mt-20"
        >
          <span className="gradient-text neon-text">Khansa</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
        >
          Frontend Developer
        </motion.p>

        {/* Tech stack */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {["Next.js"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-300 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {["Html"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-300 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {["Css"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-300 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {["JavaScript"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-300 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
          {["TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-300 border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-gray-400 mb-8"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Karachi, Pakistan</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building clean, interactive, and user-friendly interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary flex items-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="/resume.pdf"
            download
            className="btn-secondary flex items-center gap-2 group"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Download CV
          </a>

          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-secondary flex items-center gap-2"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
