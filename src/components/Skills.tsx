"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "Next.js", level: 95, icon: "⚡" },
  { name: "TypeScript", level: 80, icon: "🔷" },
  { name: "JavaScript", level: 80, icon: "📜" },
  { name: "HTML5 ", level: 98, icon: "🌐" },
  { name: "CSS3", level: 98, icon: "🌐" }
];

const Styling: Skill[] = [
  { name: "Framer Motion", level: 85, icon: "✨" },
  { name: "Tailwind CSS", level: 95, icon: "🎨" }
];

const additionalSkills: Skill[] = [
  { name: "Git / GitHub", level: 80, icon: "📦" },
  { name: "VS Code", level: 95, icon: "💻" },
  { name: "Vercel", level: 85, icon: "🚀" }
];

function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-mono text-primary-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink progress-fill"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
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
              My Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of modern web technologies I use to build
              scalable and performant applications.
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-lg">
                💻
              </span>
              Frontend 
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-pink flex items-center justify-center text-lg">
                🎨
              </span>
              Styling
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Styling.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + frontendSkills.length} />
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-pink to-primary-500 flex items-center justify-center text-lg">
                🛠️
              </span>
              Tools 
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + frontendSkills.length + Styling.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
