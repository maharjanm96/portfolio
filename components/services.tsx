"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Gauge,
  Layout,
  Lightbulb,
  Search,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { CiMobile3 } from "react-icons/ci";

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
  {
    icon: <Gauge className="h-10 w-10" />,
    title: "Performance Optimization",
    description:
      "Enhancing website speed and efficiency through code optimization and modern best practices.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "SEO Integration",
    description:
      "Implementing search engine optimization techniques to improve visibility and organic traffic.",
    color: "from-blue-600 to-indigo-500",
  },

  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Technical Consultation",
    description:
      "Providing expert advice on technology choices, architecture, and development strategies.",
    color: "from-yellow-500 to-amber-400",
  },
];

export default function ServicesComponent() {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 bg-transparent relative overflow-hidden">
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
    <motion.div ref={ref} className="max-w-4xl mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-4xl md:text-6xl font-bold mb-6 text-primary"
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
        className="text-xl text-primary"
      >
        Transforming ideas into exceptional digital experiences with expertise
        and creativity
      </motion.p>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
};

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: 0.1 + index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-transparent backdrop-blur-lg shadow-lg p-6 h-full flex flex-col"
    >
      {/* Gradient border effect */}
      <motion.div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-500`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <div
        className={`p-3 rounded-[0.3rem] bg-gradient-to-r ${service.color} w-fit mb-4 text-primary shadow-lg`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
      <p className="text-primary mb-4 flex-grow">{service.description}</p>
    </motion.div>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
      className="bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg text-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-transparent -z-10" />

      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Ready to bring your vision to life?
      </h2>
      <p className="text-primary max-w-2xl mx-auto mb-8">
        Let&apos;s collaborate to create a digital solution that exceeds your
        expectations and helps you achieve your goals.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link href="/contact">
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-[0.3rem] px-6 bg-transparent cursor-pointer"
          >
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};
