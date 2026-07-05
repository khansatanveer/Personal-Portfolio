"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "CTO",
    company: "TechVentures Inc.",
    avatar: "AK",
    content:
      "Khansa is an exceptional developer who consistently delivers high-quality work. Her attention to detail and ability to translate complex requirements into elegant solutions is remarkable. She was instrumental in scaling our platform to handle 100K+ users.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "Digital Solutions Co.",
    avatar: "SM",
    content:
      "Working with Khansa was a pleasure. She brought both technical expertise and creative problem-solving to every project. Her proactive communication and ability to mentor junior developers made her an invaluable team member.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ali Raza",
    role: "Founder",
    company: "StartupHub",
    avatar: "AR",
    content:
      "Khansa transformed our vision into a fully functional, beautiful web application. Her fullstack capabilities and understanding of modern web technologies helped us launch our MVP ahead of schedule. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary-500/30 absolute top-4 right-4" />

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-lg font-bold text-white shadow-neon-purple">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-500 w-6"
                      : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
