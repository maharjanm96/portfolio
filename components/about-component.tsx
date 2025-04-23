"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";
import { TechStackMarquee } from "./tech-stack-marquee";
import { LinkPreview } from "./ui/link-preview";

// const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "PostgreSQL",
//   "GraphQL",
//   "REST API",
//   "Tailwind CSS",
//   "Framer Motion",
//   "Git",
//   "Docker",
//   "AWS",
// ];

const AboutComponent = () => {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 md:px-12 py-16 md:py-24 bg-transparent relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-90 left-150 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute top-90 left-180 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-1/2 left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <HeaderSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <ProfileSection />
            <ContentSection />
          </div>

          {/* <ScrollIndicator /> */}
        </div>
      </div>
    </PageTransition>
  );
};

const PageTransition = ({ children }: { children: ReactNode }) => {
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
      className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-primary"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="text-xl text-primary max-w-2xl"
        >
          The story behind the developer navigating the digital cosmos
        </motion.p>
      </div>
    </motion.div>
  );
};

const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-purple-500/5"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

      <div className="relative h-full w-full group">
        <Image
          src="/images/profile.png"
          alt="Manish Maharjan"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div>
            <h3 className="text-primary text-3xl font-bold">Manish Maharjan</h3>
            <p className="text-primary text-lg mt-2">Digital Explorer</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContentSection = () => {
  const journeyRef = useRef(null);
  // const skillsRef = useRef(null);
  const isJourneyInView = useInView(journeyRef, { once: true, amount: 0.3 });
  // const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

  return (
    <div className="h-full flex flex-col gap-8">
      <motion.div
        ref={journeyRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isJourneyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        className="bg-card/20 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-border/50 shadow-lg flex-grow relative overflow-hidden group"
      >
        {/* Subtle gradient animation on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-xl -z-10" />

        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-primary bg-gradient-to-r from-purple-400 to-blue-400">
          My Journey
        </h2>
        <div className="space-y-4">
          <p className="leading-relaxed text-primary">
            Hello! I&apos;m Manish Maharjan, a creative web developer with a
            passion for building immersive digital experiences. My journey in
            the digital cosmos began with a fascination for how technology can
            transform ideas into reality.
          </p>
          <span className="leading-relaxed text-primary">
            As the co-founder of{" "}
            <LinkPreview
              url="https://redrubixin.com"
              isStatic={true}
              imageSrc="/projects/redrubix.png"
            >
              <span className="text-red-500 font-bold">
                Red Rubix Innovations
              </span>
            </LinkPreview>
            , I collaborate closely with my talented team to create innovative
            web solutions. With years of experience in web development,
            I&apos;ve had the opportunity to work on various projects ranging
            from e-commerce platforms to interactive web applications, always
            striving to push the boundaries of what&apos;s possible.
          </span>
          <p className="leading-relaxed text-primary">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or stargazing –
            both literally and in the digital universe. At Redrubix Innovations,
            we&apos;re driven by a shared vision of innovation, teamwork, and
            excellence in all our projects.
          </p>
        </div>
      </motion.div>

      {/* <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2  xl -z-10" />

        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-primary bg-gradient-to-r from-blue-400 to-purple-400">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: isSkillsInView ? 0.3 + index * 0.05 : 0,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="px-3 py-1.5 bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-sm rounded-2xl"
                >
                  {skill}
                </Badge>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      <TechStackMarquee />
    </div>
  );
};

// const ScrollIndicator = () => {
//   return (
//     <motion.div
//       className="mt-16 text-center text-sm text-muted-foreground"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 1.2 }}
//     >
//       <p>Scroll down to discover more</p>
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{
//           repeat: Number.POSITIVE_INFINITY,
//           duration: 2,
//           ease: "easeInOut",
//         }}
//         className="inline-block mt-2 text-primary"
//       >
//         ↓
//       </motion.div>
//     </motion.div>
//   );
// };

export default AboutComponent;
