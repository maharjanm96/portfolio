import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import GoesOutComesInUnderline from "@/fancy/components/text/underline-goes-out-comes-in";
import Link from "next/link";
import React from "react";
import ServiceSinglePage from "./service-single-page";

const SticktFooter: React.FC = () => {
  return (
    <div className="w-full items-center justify-center h-full overflow-scroll">
      <div className="relative h-full z-10 bg-black overflow-hidden">
        <ServiceSinglePage />
      </div>

      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-transparent flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12">
          <div className="flex flex-row space-x-12 sm:pace-x-16 md:space-x-24 text-md sm:text-lg md:text-xl text-primary">
            <ul className="flex flex-col">
              <Link className="" href="/">
                <ComesInGoesOutUnderline label="Home" direction="right" />
              </Link>
              <Link className="" href="/about">
                <ComesInGoesOutUnderline label="About" direction="left" />
              </Link>
              <Link className="" href="/projects">
                <ComesInGoesOutUnderline label="Works" direction="right" />
              </Link>
              <Link className="" href="/services">
                <ComesInGoesOutUnderline label="Services" direction="left" />
              </Link>
              <Link className="" href="/contact">
                <ComesInGoesOutUnderline label="Contact" direction="left" />
              </Link>
            </ul>
            <ul className="flex flex-col">
              <Link
                href="https://www.linkedin.com/in/manish-maharjan-4b5a761a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ComesInGoesOutUnderline label="LinkedIn" direction="left" />
              </Link>
              <Link
                href="https://github.com/maharjanm96"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ComesInGoesOutUnderline label="Github" direction="right" />
              </Link>
              <Link
                href="https://www.instagram.com/manee_mrzn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ComesInGoesOutUnderline label="Instagram" direction="left" />
              </Link>
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ComesInGoesOutUnderline label="maharjanm96@gmail.com" />
              </Link>
              <Link
                className="text-red-600"
                href="https://redrubixin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoesOutComesInUnderline
                  label="Red Rubix Innovations"
                  direction="left"
                />
              </Link>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-primary">
            portfolio
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SticktFooter;
