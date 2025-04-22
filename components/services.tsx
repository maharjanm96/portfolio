"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Gauge,
  Layout,
  Lightbulb,
  Search,
  Shield,
  Smartphone,
} from "lucide-react";
import { useRef } from "react";

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
      "Creating responsive, interactive user interfaces with modern frameworks like React, Next.js, and Vue.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js, Express, MongoDB, and PostgreSQL.",
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
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responsive Web Design",
    description:
      "Crafting websites that look and function beautifully across all devices and screen sizes.",
    color: "from-amber-500 to-orange-400",
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
    icon: <Shield className="h-10 w-10" />,
    title: "Web Security",
    description:
      "Implementing robust security measures to protect your applications and user data.",
    color: "from-red-500 to-rose-400",
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
      <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
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
    <motion.div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
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
        className="text-xl text-muted-foreground"
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
      className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-sm shadow-lg p-6 h-full flex flex-col"
    >
      {/* Gradient border effect */}
      <motion.div
        className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 -z-10 transition-opacity duration-500`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <div
        className={`p-3 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-4 text-white shadow-lg`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">
        {service.description}
      </p>

      <motion.div
        className="flex items-center text-sm font-medium text-primary group-hover:underline"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </motion.div>
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
      className="bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-border/50 shadow-lg text-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-50 -z-10" />

      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to bring your vision to life?
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Let&apos;s collaborate to create a digital solution that exceeds your
        expectations and helps you achieve your goals.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg">
          Get in Touch
        </Button>
      </motion.div>
    </motion.div>
  );
};
