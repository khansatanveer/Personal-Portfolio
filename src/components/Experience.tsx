"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    location: "Karachi, Pakistan (Remote)",
    period: "July 2026 - Present",
    description:
      "Working on real-world frontend development projects as part of my internship. Developing responsive and interactive web applications using HTML, CSS, and JavaScript, following clean coding practices and version control with Git and GitHub. Deploying completed projects on Vercel for live demonstration.",
    technologies: ["HTML" , "CSS" , "JavaScript" , "Git" , "GitHub" , "Vercel"],
    current: true,
  },
  {
    id: 2,
    role: "Student ",
    company: "Governor Initiative for AI, Web 3.0 & Metaverse (GIAIC)",
    location: "Karachi, Pakistan",
    period: "2024 - june 2026",
    description:
      " Completed the GIAIC program with hands-on experience in modern web development. Built  frontend and full-stack projects, participated in hackathons, and developed practical skills in responsive design, version control, and deployment.",
    technologies: [ "Next.js", "TypeScript",  "JavaScript" , "Tailwind CSS", "Python", "Docusaurus", "Git" , "GitHub" , "Vercel"],
    current: false,
  }
];

function ExperienceCard({
  experience,
  index,
  isLeft,
}: {
  experience: Experience;
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-12 last:mb-0`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
      <motion.div
  initial={{ scale: 0 }}
  animate={isInView ? { scale: 1 } : {}}
  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
  className="w-4 h-4 rounded-full border-4 border-accent-cyan bg-dark shadow-neon-cyan"
/>
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
        )}
      </div>

      {/* Content card */}
      <div className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
          {/* Current badge */}
          {experience.current && (
            <div className="inline-block px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan text-xs font-semibold mb-3">
              Present
            </div>
          )}

          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary-400 transition-colors">
            {experience.role}
          </h3>

          <div className="flex items-center gap-2 text-primary-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span className="font-medium">{experience.company}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies used */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden ">
      <div className="section-gradient-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-400 mb-4">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A journey of continuous learning through education, internships, hackathons, and hands-on projects,
              building experience in frontend development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-pink transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
