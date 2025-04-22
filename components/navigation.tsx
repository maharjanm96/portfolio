"use client";

import LetterSwapForward from "@/fancy/components/text/letter-swap-forward-anim";
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BoxReveal } from "./magicui/box-reveal";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100vh",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-transparent opacity-90 z-[70] mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center h-16 p-4">
          <Link href="/">
            <div
              className={`text-[1.4rem] md:text-[2.1rem] font-bold tracking-tighter ${
                isMenuOpen
                  ? "text-black hidden lg:block"
                  : "text-primary hover:text-gray-300"
              }`}
            >
              Manish Maharjan
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-[1.4rem] md:text-[2.1rem] font-bold cursor-pointer tracking-tighter ${
              isMenuOpen ? "text-black" : "text-primary hover:text-gray-300"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-[27rem] bg-primary z-50 flex flex-col justify-start pt-[3rem] md:pt-[2rem]"
          >
            <div className="flex flex-col gap-8 md:gap-14 items-start w-full lg:ml-[50rem]">
              <div className="pl-2 md:p-0">
                <Link
                  href="/"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>
                    <LetterSwapForward
                      label="Home"
                      reverse={true}
                      staggerFrom={"last"}
                    />
                  </BoxReveal>
                </Link>
                <Link
                  href="/about"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>
                    <LetterSwapForward
                      label="About"
                      reverse={true}
                      staggerFrom={"last"}
                    />
                  </BoxReveal>
                </Link>
                <Link
                  href="/work"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>
                    <LetterSwapForward
                      label="Works"
                      reverse={true}
                      staggerFrom={"last"}
                    />
                  </BoxReveal>
                </Link>
                <Link
                  href="/services"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>
                    <LetterSwapForward
                      label="Services"
                      reverse={true}
                      staggerFrom={"last"}
                    />
                  </BoxReveal>
                </Link>
                <Link
                  href="/contact"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>
                    <LetterSwapForward
                      label="Contact"
                      reverse={true}
                      staggerFrom={"last"}
                    />
                  </BoxReveal>
                </Link>
              </div>

              <div className="flex gap-8 text-2xl font-bold text-black px-4 md:p-0">
                <Link href="https://www.linkedin.com/in/manish-maharjan-4b5a761a0/">
                  <BoxReveal>
                    <ComesInGoesOutUnderline
                      label="LinkedIn"
                      direction="left"
                    />
                  </BoxReveal>
                </Link>
                <Link href="https://github.com/maharjanm96">
                  <BoxReveal>
                    <ComesInGoesOutUnderline label="Github" direction="right" />
                  </BoxReveal>
                </Link>

                <Link className="" href="https://www.instagram.com/manee_mrzn/">
                  <BoxReveal>
                    <ComesInGoesOutUnderline
                      label="Instagram"
                      direction="left"
                    />
                  </BoxReveal>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
