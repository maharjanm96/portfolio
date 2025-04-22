import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import GoesOutComesInUnderline from "@/fancy/components/text/underline-goes-out-comes-in";
import Link from "next/link";
import React from "react";

const SticktFooter: React.FC = () => {
  return (
    <div className="w-full items-center justify-center h-full overflow-scroll">
      {/* add relative positioning to the main conent */}
      <div className="relative w-full h-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center bg-black text-white whitespace-pre">
        Last Section ↓
      </div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl text-black">
            <ul className="flex flex-col">
              <Link className="" href="/">
                <ComesInGoesOutUnderline label="Home" direction="right" />
              </Link>
              <Link className="" href="/about">
                <ComesInGoesOutUnderline label="About" direction="left" />
              </Link>
              <Link className="" href="/projects">
                <ComesInGoesOutUnderline label="  Projects" direction="right" />
              </Link>
              <Link className="" href="/contact">
                <ComesInGoesOutUnderline label="Contact" direction="left" />
              </Link>
            </ul>
            <ul className="flex flex-col">
              <Link href="https://www.linkedin.com/in/manish-maharjan-4b5a761a0/">
                <ComesInGoesOutUnderline label="LinkedIn" direction="left" />
              </Link>
              <Link href="https://github.com/maharjanm96">
                <ComesInGoesOutUnderline label="Github" direction="right" />
              </Link>
              <Link className="" href="https://www.instagram.com/manee_mrzn/">
                <ComesInGoesOutUnderline label="Instagram" direction="left" />
              </Link>
              <Link className="" href="#">
                <GoesOutComesInUnderline
                  label="maharjanm96@gmail.com"
                  direction="left"
                />
              </Link>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-black">
            portfolio
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SticktFooter;
