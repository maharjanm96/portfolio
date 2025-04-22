"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ElementType, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface MotionTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: ElementType;
}

const projects: Project[] = [
  {
    title: "Custom Rom Market",
    description: "A full-stack e-commerce platform for selling custom ROMs",
    image: "/projects/rommarket.png",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
      "Shadcn UI",
      "College Project",
    ],
    liveUrl: "https://custom-rom-market.vercel.app/",
    githubUrl: "https://github.com/maharjanm96/CustomRom-Market",
  },
  {
    title: "Pi Airdrop UI",
    description: "Pi airdrop UI for educational purpose with Admin Dashboard",
    image: "/projects/pi.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Shadcn UI",
      "Framer Motion",
    ],
    liveUrl: "https://piofficialairdrop.vercel.app/",
    githubUrl: "https://github.com/maharjanm96/Pi-Airdrop",
  },
  {
    title: "Orbit Social",
    description:
      "Social media platform with real-time messaging and content sharing",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Nebula Notes",
    description:
      "Note-taking app with markdown support and cloud synchronization",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const MotionText = ({
  text,
  className = "",
  delay = 0,
  tag: Tag = "div",
}: MotionTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: Project & { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-transparent backdrop-blur-sm shadow-lg"
    >
      <div className="relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="aspect-video relative"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-primary mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 rounded-2xl"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="gap-2 rounded-2xl"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
          <Button asChild size="sm" className="gap-2 rounded-2xl">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </Button>
        </div>
      </div>

      <motion.div
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pb-16 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 pt-24 md:pt-32">
          <MotionText
            text="My Work"
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-primary bg-gradient-to-r from-purple-500 to-blue-500"
            tag="h1"
          />

          <MotionText
            text="Exploring the digital universe through code and creativity"
            className="text-xl text-primary max-w-2xl"
            delay={0.3}
            tag="p"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
