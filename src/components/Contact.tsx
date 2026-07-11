"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, FormEvent} from "react";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  MessageCircle,
  ExternalLink,
  Link as LinkIcon,  
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

const validateForm = (): boolean => {
  const newErrors: FormErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  const form = new FormData();

  form.append("access_key", "fb582afc-8d8e-454c-a6bd-2f08112127d3");
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("message", formData.message);
  form.append("subject", "Portfolio Message");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    if (result.success) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }
  } catch {
    setSubmitStatus("error");
  }

  setIsSubmitting(false);

  setTimeout(() => {
    setSubmitStatus(null);
  }, 5000);
};

const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => 
  { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value }));
 if (errors[name as keyof FormErrors]) { setErrors((prev) => ({ ...prev, [name]: undefined })); } };

  const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "khansatanveerahmed@gmail.com",
    href: "mailto:khansatanveerahmed@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "https://maps.google.com/?q=Karachi,Pakistan",
  },
  { icon: Phone,
    label: "WhatsApp", 
    value: "+92 3090962523", 
    href: "https://wa.me/923001234567", },
];

const socialLinks = [
  {
    icon: ExternalLink,
    label: "GitHub",
    href: "https://github.com/khansatanveer",
    color: "hover:text-white",
  },
  {
    icon: LinkIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khansa-tanveer-b58780300/",
    color: "hover:text-blue-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/923090962523",
    color: "hover:text-green-400",
  },
];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden ">
      <div className="section-gradient-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-4"> {contactInfo.map((info) => ( <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group" > 
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center flex-shrink-0"> 
            <info.icon className="w-5 h-5 text-white" /> </div>
            <div> <p className="text-sm text-gray-500">{info.label}</p> <p className="font-medium text-gray-200 group-hover:text-primary-400 transition-colors"> {info.value} </p> 
          </div> 
          </a> ))} 
          </div>
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-mono text-primary-400 mb-4">
              Get In Touch
            </span>
            <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Contact<span className="gradient-text"> Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto rounded-full" />
            <p className="text-gray-400 text-sm sm:text-base mt-6 max-w-2xl mx-auto px-2">
              Whether you have a project, internship, freelance opportunity, or collaboration in mind, I&apos;d love to hear from you. Let&apos;s connect and build something great together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 ">
            {/* Contact info - Left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                     <p className="font-medium text-gray-200 break-all text-sm sm:text-base">
  {info.value}
</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="p-4 rounded-xl  bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/20">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium text-white">Currently Available</p>
                    <p className="text-sm  text-gray-400 ">
                      Open to Internships, Freelance Projects, and New Opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form - Right side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-6 md:p-8">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-400">
                      Thank you! Your message has been sent successfully. I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-50 border ${
                        errors.name
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary-500"
                      } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200`}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-50 border ${
                        errors.email
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary-500"
                      } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-lg bg-dark-50 border ${
                        errors.message
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary-500"
                      } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5 border-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
