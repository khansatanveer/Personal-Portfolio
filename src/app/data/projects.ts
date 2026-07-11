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

export const projects: Project[] = [
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
},
{
    id: 9,
    title: "Calculator",
    tech: ["Html", "CSS" , "JavaScript"],
    description:
      "A modern and responsive calculator featuring basic arithmetic operations, keyboard support, AC and DEL functionality, and real-time calculations using JavaScript. ",
    image: "/project-9.png",
    liveUrl: "https://code-alpha-calculator-xi-six.vercel.app/",
    githubUrl: "https://github.com/khansatanveer/CodeAlpha_Calculator.git",
    featured: true,
  },
];