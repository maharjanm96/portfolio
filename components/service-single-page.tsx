"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { CiMobile3 } from "react-icons/ci";
import { ShinyButton } from "./magicui/shiny-button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const services = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive user interfaces with modern frameworks like React, Next.js, Tailwind CSS and Shadcn UI.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js, Express, MongoDB, and Prisma.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from database design to user interface, creating seamless digital experiences.",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: <CiMobile3 className="h-10 w-10" />,
    title: "Responsive Web Design",
    description:
      "Crafting websites that look and function beautifully across all devices and screen sizes.",
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    description:
      "Building mobile applications for iOS and Android platforms using Flutter.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "Web Hosting",
    description:
      "Providing reliable web hosting services to ensure your website is always up and running.",
    color: "from-blue-600 to-indigo-500",
  },
];

export default function ServiceSinglePage() {
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-12 py-6 md:py-12 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <HeaderSection />
          <ServicesGrid />
          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
}

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const HeaderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-primary"
      >
        What I Offer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="text-lg md:text-xl text-primary"
      >
        Transforming ideas into exceptional digital experiences with expertise
        and creativity
      </motion.p>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
};

const ServiceCard = ({ service }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative rounded-[0.5rem] overflow-hidden border border-border/50 bg-card/20 backdrop-blur-sm shadow-lg p-6 h-full flex flex-col"
    >
      {/* Gradient border effect */}
      <motion.div
        className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-500`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <div
        className={`p-3 rounded-[0.4rem] bg-gradient-to-r ${service.color} w-fit mb-4 text-white shadow-lg`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-primary mb-4 flex-grow">{service.description}</p>
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
    >
      <Link href="/contact" className="flex justify-center">
        <ShinyButton className="cursor-pointer text-xl border-1 border-primary rounded-[0.3rem]">
          <span className="flex items-center justify-center">
            <p>Get In Touch</p>
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </ShinyButton>
      </Link>
    </motion.div>
  );
};
