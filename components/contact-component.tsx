"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, MailCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./contact-form";
const socialLinks = [
  {
    icon: <MailCheck className="h-5 w-5" />,
    href: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBHrTXjrKcdzZDRcqdFNlrjVfSWLJqmHmzqzhSfgHFzBgPxJMmVcRFtkJmJnTKNfhpm",
    text: "maharjanm96@gmail.com",
    color: "from-red-500 to-yellow-500",
  },
  {
    icon: <FaLinkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/manish-maharjan-4b5a761a0/",
    text: "Manish Maharjan",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: <FaGithub className="h-5 w-5" />,
    href: "https://github.com/maharjanm96",
    text: "Manish Maharjan",
    color: "from-gray-500 to-gray-400",
  },
  {
    icon: <FaInstagram className="h-5 w-5" />,
    href: "https://www.instagram.com/manee_mrzn/",
    text: "@manee_mrzn",
    color: "from-red-600 to-red-400",
  },

  {
    icon: <FaWhatsapp className="h-5 w-5" />,
    href: "https://wa.me/9840390774",
    text: "+977 9840390774",
    color: "from-green-500 to-green-400",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10">
        <HeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <InfoSection />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

const HeaderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-primary"
      >
        Contact Me
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-xl text-primary max-w-2xl"
      >
        Let&apos;s connect and create something amazing together
      </motion.p>
    </motion.div>
  );
};

const InfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="space-y-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="prose prose-invert max-w-none bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-primary">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="space-y-6 bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-primary">Connect With Me</h3>
        <div className="flex flex-col space-y-5">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${link.color} p-2 shadow-md`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-white">{link.icon}</span>
                </motion.div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {link.text}
                </span>
                <motion.div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
