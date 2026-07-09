"use client";

import Link from "next/link";
import { Code2, ExternalLink, Link as LinkIcon, Mail } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { icon: ExternalLink, label: "GitHub", href: "https://github.com/khansatanveer" },
    { icon: LinkIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/khansa-tanveer-b58780300" },
    { icon: Mail, label: "Email", href: "mailto:khansatanveerahmed@gmail.com" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8 ">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-bold gradient-text">Khansa</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-4">
              Fullstack Web Developer crafting exceptional digital experiences
              with modern technologies.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:khansatanveerahmed@gmail.com"
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  khansatanveerahmed@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm text-gray-400">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Khansa. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with{" "}
            <span className="text-primary-400">Next.js</span>,{" "}
            <span className="text-accent-cyan">TypeScript</span> &{" "}
            <span className="text-accent-pink">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
