"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FullPageScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use identical ranges for all sections with precise values
  // Each section has the exact same pattern of fade in/out relative to its position
  const sectionTransforms = [
    // Section 0: 0% - 25%
    {
      opacity: useTransform(scrollYProgress, [0, 0.125, 0.25], [1, 0.5, 0]),
      scale: useTransform(scrollYProgress, [0, 0.125, 0.25], [1, 0.97, 0.95]),
    },
    // Section 1: 25% - 50%
    {
      opacity: useTransform(scrollYProgress, [0.25, 0.375, 0.5], [0, 1, 0]),
      scale: useTransform(scrollYProgress, [0.25, 0.375, 0.5], [0.95, 1, 0.95]),
    },
    // Section 2: 50% - 75%
    {
      opacity: useTransform(scrollYProgress, [0.5, 0.625, 0.75], [0, 1, 0]),
      scale: useTransform(scrollYProgress, [0.5, 0.525, 0.5], [0.95, 1, 0.95]),
    },
    // Section 3: 75% - 100%
    {
      opacity: useTransform(scrollYProgress, [0.75, 0.875, 1], [0, 1, 1]),
      scale: useTransform(scrollYProgress, [0.75, 0.775, 1], [0.95, 1, 1]),
    },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.25) setActiveSection(0);
      else if (value < 0.5) setActiveSection(1);
      else if (value < 0.75) setActiveSection(2);
      else setActiveSection(3);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Improved scroll function with consistent behavior
  const scrollToSection = (sectionIndex: number) => {
    if (containerRef.current) {
      const sectionHeight = window.innerHeight;
      const targetPosition = sectionHeight * sectionIndex;

      // Use window.scrollTo for consistent behavior
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update active section immediately for better feedback
      setActiveSection(sectionIndex);
    }
  };

  // Handle wheel event for full-page scrolling with consistent behavior
  useEffect(() => {
    let isScrolling = false;
    let timeoutId: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(3, activeSection + direction));

      // Only scroll if we're changing sections
      if (nextSection !== activeSection) {
        scrollToSection(nextSection);
      }

      // Ensure consistent timeout clearing
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  }, [activeSection]);

  const sections = [
    { bg: "bg-gradient-to-br from-rose-400 to-amber-300", text: "Welcome" },
    { bg: "bg-gradient-to-br from-cyan-400 to-blue-500", text: "Services" },
    { bg: "bg-gradient-to-br from-emerald-400 to-teal-500", text: "Portfolio" },
    { bg: "bg-gradient-to-br from-purple-400 to-indigo-500", text: "Contact" },
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] overflow-hidden">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className={`h-screen w-full flex items-center justify-center ${section.bg} fixed top-0 left-0`}
          style={{
            opacity: sectionTransforms[index].opacity,
            scale: sectionTransforms[index].scale,
            zIndex: 10 - index, // Higher sections appear on top
          }}
        >
          <motion.h1
            className="text-6xl font-bold text-white drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: activeSection === index ? 0 : 50,
              opacity: activeSection === index ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {section.text}
          </motion.h1>
        </motion.section>
      ))}
    </div>
  );
};

export default FullPageScroll;

//  <PageTransition>
//    <div className="flex flex-col">
//      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
//        <ParallaxSection speed={0.05} className="space-y-6">
//          <AnimatedText
//            text="Manish Maharjan"
//            className="text-4xl md:text-6xl lg:text-7xl font-bold"
//            animation="fadeIn"
//            tag="h1"
//            delay={0.3}
//          />

//          <AnimatedText
//            text="Creative Web Developer Navigating the Digital Cosmos"
//            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
//            animation="slideUp"
//            tag="p"
//            delay={0.8}
//            staggerChildren={0.02}
//          />

//          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
//            <Button asChild size="lg" className="group">
//              <Link href="/work">
//                <span>Explore My Work</span>
//                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//              </Link>
//            </Button>

//            <Button asChild variant="outline" size="lg">
//              <Link href="/contact">Contact Me</Link>
//            </Button>
//          </div>
//        </ParallaxSection>
//      </section>
//    </div>
//  </PageTransition>;
