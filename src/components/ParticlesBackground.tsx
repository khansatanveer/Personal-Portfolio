"use client";

import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  background: string;
}

const generateParticles = (): Particle[] => {
  return Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 10 + 10}s`,
    animationDelay: `${Math.random() * 5}s`,
    size: `${Math.random() * 4 + 2}px`,
    background: `rgba(${
      i % 3 === 0
        ? "139, 92, 246"
        : i % 3 === 1
        ? "34, 211, 238"
        : "236, 72, 153"
    }, ${Math.random() * 0.5 + 0.2})`,
  }));
};

export default function ParticlesBackground() {
  const particles = useMemo(() => generateParticles(), []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDuration: particle.animationDuration,
            animationDelay: particle.animationDelay,
            width: particle.size,
            height: particle.size,
            background: particle.background,
          }}
        />
      ))}
    </div>
  );
}