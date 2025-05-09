"use client";

import BreathingText from "@/fancy/components/text/breathing-text";
import Typewriter from "@/fancy/components/text/typewriter";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ShinyButton } from "./magicui/shiny-button";
import SticktFooter from "./sticky-footer";

export default function PortfolioHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-primary opacity-90 bg-clip-text bg-gradient-to-b from-[#F5EAD8]/10 to-[#F5EAD8]/5 text-[5rem] sm:text-[7rem] md:text-[14rem] lg:text-[18rem] font-medium leading-none lowercase">
            <BreathingText
              label="PORTFOLIO"
              staggerDuration={0.1}
              fromFontVariationSettings="'wght' 100, 'slnt' 0"
              toFontVariationSettings="'wght' 800, 'slnt' -10"
            />
          </h1>
        </motion.div>

        <div>
          <div className="relative h-[60vh] z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-2 md:gap-16">
            <motion.div
              className="flex flex-col items-start space-y-4 md:space-y-6 md:mb-20"
              initial={{ x: -50, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-primary text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold">
                Your next dev hire? Just an explore away
              </h2>

              <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <Typewriter
                  text={[
                    "Web Developer",
                    "Crafting Sleek Interfaces",
                    "Coding with Precision",
                    "Building Digital Magic",
                    "Co-Founder @ Red Rubix Innovations",
                    "From Kathmandu",
                  ]}
                  speed={70}
                  className="text-primary text-xl md:text-2xl font-medium"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </motion.div>
            </motion.div>
          </div>
          {/* buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link href="/work">
                <ShinyButton className="cursor-pointer border-1 border-primary rounded-[0.3rem]">
                  <span className="flex items-center justify-center">
                    <p>Explore My Work</p>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </ShinyButton>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link href="/contact">
                <ShinyButton className="cursor-pointer text-xl border-1 border-primary rounded-[0.3rem]">
                  <span className="flex items-center justify-center">
                    {" "}
                    Contact Me
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </span>
                </ShinyButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>

      <div className="h-[100vh]">
        <SticktFooter />
      </div>
    </>
  );
}
