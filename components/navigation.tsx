"use client";

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
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center h-16 p-4">
          <Link href="/">
            <div
              className={`text-[1.4rem] md:text-[2.1rem] font-bold tracking-tighter  ${
                isMenuOpen
                  ? "text-black hidden lg:block"
                  : "text-white hover:text-gray-300"
              }`}
            >
              Manish Maharjan
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-[1.4rem] md:text-[2.1rem] font-bold cursor-pointer tracking-tighter ${
              isMenuOpen ? "text-black" : "text-white hover:text-gray-300"
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
            className="fixed inset-0 h-[26rem] bg-white z-40 flex flex-col justify-start pt-[4rem]"
          >
            <div className="flex flex-col gap-8 md:gap-14 items-start w-full lg:ml-[50rem] ">
              <div className="pl-2 md:p-0">
                <Link
                  href="/"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* <HyperText
                    className="block text-6xl font-bold text-black hover:text-gray-500"
                    animateOnHover={true}
                    characterSet={["H", "O", "M", "E"]}
                    duration={1200}
                    delay={100}
                  >
                    HOME
                  </HyperText> */}
                  <BoxReveal>HOME</BoxReveal>
                </Link>
                <Link
                  href="/about"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>ABOUT</BoxReveal>
                </Link>
                <Link
                  href="/work"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>WORK</BoxReveal>
                </Link>
                <Link
                  href="/contact"
                  className="block text-6xl font-bold text-black hover:text-stone-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BoxReveal>CONTACT</BoxReveal>
                </Link>
              </div>

              <div className="flex gap-8 text-2xl font-bold text-black p-4 md:p-0">
                <a
                  href="https://www.linkedin.com/in/manish-maharjan-4b5a761a0/"
                  className="hover:text-stone-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BoxReveal>LinkedIn</BoxReveal>
                </a>
                <a
                  href="https://github.com/manishmaharjan"
                  className="hover:text-stone-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BoxReveal>Github</BoxReveal>
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-stone-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BoxReveal>Instagram</BoxReveal>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
