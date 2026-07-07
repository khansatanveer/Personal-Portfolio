"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Physical AI Humanoid Robotics Book",
    description:
      "A modern documentation platform built with Docusaurus and Tailwind CSS, featuring a responsive layout, intuitive navigation, and an integrated AI chatbot to help users explore Physical AI and Humanoid Robotics content through an interactive experience.",
    image: "/project-1.png",
    tech: ["Docusaurus", "Tailwind CSS", "Spec-Driven Development"," RAG Chatbot"],
    liveUrl: "https://physical-ai-humanoid-robotics-book-orpin-sigma.vercel.app",
    githubUrl: "https://github.com/khansatanveer/Physical-AI-Humanoid-Robotics-Book.git",
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack Todo Web Application",
    description:
      "A full-stack task management application with a Next.js frontend and Python backend. Users can create, update, and manage tasks with persistent database storage.",
    image: "/project-2.png",
    tech: [" Next.js", "Python", "TypeScript" ,   "JWT Authentication"],
    liveUrl: "https://todo-full-stack-web-application-three.vercel.app",
    githubUrl: "https://github.com/khansatanveer/Todo-Full-Stack-Web-Application.git",
    featured: true,
  },
  {
    id: 3,
    title: "Image Gallery",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive image gallery with category-based filtering, lightbox functionality, keyboard navigation, and smooth animations.",
    image: "/project-3.png",
    liveUrl: "https://code-alpha-image-gallery-lemon.vercel.app",
    githubUrl: "https://github.com/khansatanveer/CodeAlpha_ImageGallery.git",
    featured: true,
  },
  {
    id: 4,
    title: "Food Restaurant Website",
    tech: [" Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A modern and responsive restaurant website featuring an elegant UI, menu sections, and a mobile-friendly design.",
    image: "/project-4.png",
    liveUrl: "https://food-restaurant-amber-eight.vercel.app",
    githubUrl: "https://github.com/khansatanveer/food-restaurant.git",
    featured: true,
  },
  {
    id: 5,
    title: "Beauty Website",
    tech: ["Next.js", "TypeScript", "CSS"],
    description:
      "A modern and responsive beauty website featuring a clean layout and elegant user interface.",
    image: "/project-5.png",
    liveUrl: "https://beauty-website-in-css.vercel.app",
    githubUrl: "https://github.com/khansatanveer/beauty-website-in-css.git",
    featured: true,
  },
  {
    id: 6,
    title: "To-Do App",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A responsive task management application with a clean interface for organizing and managing daily tasks.",
    image: "/project-6.png",
    liveUrl: "https://to-do-app-silk-delta.vercel.app",
    githubUrl: "https://github.com/khansatanveer/TO-DO-App.git",
    featured: true,
  },
  {
    id: 7,
    title: "Resume Builder ",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive resume builder that allows users to create and preview professional resumes with a clean and intuitive interface.",
    image: "/project-7.png",
    liveUrl: "https://resume-builder-kappa-seven.vercel.app/",
    githubUrl: "https://github.com/khansatanveer/Resume-Builder.git",
    featured: true,
  },
{
  id: 8,
  title: "Blog Website",
  description:
    "A modern and responsive blog website built with Next.js and Tailwind CSS, featuring a clean user interface, organized blog posts, responsive layouts, and smooth navigation for an engaging reading experience.",
  image: "/project-8.png",
  tech: [ "Next.js", "TypeScript", "Tailwind CSS" ],
  liveUrl: "https://blog-website-nine-jet.vercel.app",
  githubUrl: "https://github.com/khansatanveer/Blog-Website.git",
  featured: true,
}
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="relative h-full rounded-2xl overflow-hidden glass card-tilt">
        
  <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-48 overflow-hidden">
    <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover w-full h-full"
  />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
              <ArrowUpRight className="w-10 h-10 text-white" />
            </div> */}
          </div>

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label={`View source code of ${project.title}`}
            >
              <LinkIcon className="w-5 h-5 text-white" />
            </a>
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-pink text-xs font-semibold text-white">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A curated collection of projects that showcase my expertise in building
              modern, scalable web applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

        
     
        </motion.div>
      </div>
    </section>
  );
}
