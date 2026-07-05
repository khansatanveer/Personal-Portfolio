"use client";

import { motion } from "framer-motion";
import { MapPin, Code, Coffee } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { icon: Code, label: "Projects Completed", value: "20+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="section-gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-400 mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get to Know <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-pink/20 rounded-3xl blur-2xl" />

                {/* Main card */}
                <div className="relative glass rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                  {/* Code icon in center */}
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mb-6 shadow-neon-purple">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  {/* Location badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-accent-cyan" />
                    <span className="text-sm text-gray-300">Karachi, Pakistan</span>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center shadow-neon-pink"
                  >
                    <span className="text-2xl font-bold text-white">K</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-semibold">
                A passionate developer crafting{" "}
                <span className="gradient-text">digital experiences</span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Hi, I&apos;m Khansa — a passionate Frontend Developer based in Karachi, Pakistan.
                I specialize in building modern, responsive, and user-friendly web applications using {" "}
                <span className="text-primary-400 font-medium">Next.js</span>,{" "}
                {" "}
                <span className="text-primary-400 font-medium">Html</span>
                ,{" "}
                <span className="text-primary-400 font-medium">Css</span>
                ,{" "}
                <span className="text-primary-400 font-medium">JavaScript</span>
                {" "}
                and {" "}
                <span className="text-primary-400 font-medium">TypeScript</span> {" "}
                and other modern frontend technologies.
              </p>

              <p className="text-gray-400 leading-relaxed">
              Driven by a curiosity for how the web works, I began my frontend development journey 
              with a desire to transform ideas into engaging digital experiences. I enjoy creating 
              intuitive, accessible, and visually appealing interfaces while writing clean, maintainable,
              and scalable code. I&apos;m constantly expanding my knowledge, exploring the latest frontend 
              technologies and UI/UX best practices, and building fast, high-quality web applications that
              deliver exceptional user experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-xl glass"
                  >
                    <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
