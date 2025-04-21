"use client";

import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  animation?: "fadeIn" | "slideUp" | "typewriter";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  animation = "fadeIn",
  tag = "p",
}: AnimatedTextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  const getVariants = (): Variants => {
    switch (animation) {
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: delay + i * staggerChildren,
              duration,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          }),
        };
      case "typewriter":
        return {
          hidden: { width: 0, opacity: 0 },
          visible: {
            width: "100%",
            opacity: 1,
            transition: {
              delay,
              duration: duration * 2,
              ease: "easeInOut",
            },
          },
        };
      case "fadeIn":
      default:
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: {
              delay: delay + i * staggerChildren,
              duration,
              ease: "easeInOut",
            },
          }),
        };
    }
  };

  const variants = getVariants();

  if (animation === "typewriter") {
    const Component = tag as any;
    return (
      <Component
        className={`overflow-hidden whitespace-nowrap ${className}`}
        ref={ref}
      >
        <motion.span
          initial="hidden"
          animate={controls}
          variants={variants}
          className="inline-block"
        >
          {text}
        </motion.span>
      </Component>
    );
  }

  // For fadeIn and slideUp animations, we animate each word
  const words = text.split(" ");
  const Component = tag as any;

  return (
    <Component className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={controls}
        className="inline-block"
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                custom={index * 0.2 + charIndex * staggerChildren}
                variants={variants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span>&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
