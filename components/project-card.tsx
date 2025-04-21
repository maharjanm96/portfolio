"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card/30 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
      </div>

      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          animate={{
            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {liveUrl && (
            <Button asChild size="sm" variant="default">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <span>View Live</span>
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          )}

          {githubUrl && (
            <Button asChild size="sm" variant="outline">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                <span>Code</span>
              </Link>
            </Button>
          )}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border border-primary/0 rounded-lg"
        animate={{
          borderColor: isHovered ? "hsl(var(--primary))" : "transparent",
          boxShadow: isHovered ? "0 0 15px rgba(59, 130, 246, 0.3)" : "none",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
