"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.1,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate when the section is in view
      if (
        scrollY + viewportHeight > sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        // Calculate the parallax offset
        const offset = (scrollY - sectionTop + viewportHeight) * speed;
        section.style.setProperty("--parallax-y", `${offset}px`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={sectionRef} className={`parallax ${className}`}>
      {children}
    </div>
  );
}
