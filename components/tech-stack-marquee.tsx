import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define tech stack items with local SVG paths
const techStack = [
  {
    name: "Next.js",
    img: "/techstack/nextjs_icon_dark.svg",
  },
  {
    name: "React",
    img: "/techstack/React_dark.svg",
  },
  {
    name: "TypeScript",
    img: "/techstack/typescript.svg",
  },
  {
    name: "MongoDB",
    img: "/techstack/mongodb.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/techstack/tailwindcss.svg",
  },
  {
    name: "Node.js",
    img: "/techstack/nodejs.svg",
  },

  {
    name: "Prisma",
    img: "/techstack/Prisma_dark.svg",
  },
  {
    name: "Figma",
    img: "/techstack/figma.svg",
  },
  {
    name: "GitHub",
    img: "/techstack/GitHub_dark.svg",
  },
  {
    name: "Firebase",
    img: "/techstack/firebase.svg",
  },
  {
    name: "Stripe",
    img: "/techstack/stripe.svg",
  },
  {
    name: "Zod",
    img: "/techstack/zod.svg",
  },
  {
    name: "TanStack",
    img: "/techstack/tanstack.svg",
  },
  {
    name: "Redux",
    img: "/techstack/redux.svg",
  },
  {
    name: "Motion",
    img: "/techstack/Motion_dark.svg",
  },
  {
    name: "Vercel",
    img: "/techstack/Vercel_dark.svg",
  },
  {
    name: "v0",
    img: "/techstack/v0_dark.svg",
  },
  {
    name: "OpenAI",
    img: "/techstack/OpenAI_dark.svg",
  },
  {
    name: "Claude AI",
    img: "/techstack/claude-ai-icon.svg",
  },
  {
    name: "Flutter",
    img: "/techstack/flutter.svg",
  },
  {
    name: "Dart",
    img: "/techstack/dart.svg",
  },
  {
    name: "Laravel",
    img: "/techstack/laravel.svg",
  },
  {
    name: "Canva",
    img: "/techstack/canva.svg",
  },
];

// Calculate how many items per line
const itemsPerLine = Math.ceil(techStack.length / 4);

// Split tech stack into 4 unique lines
const firstRow = techStack.slice(0, itemsPerLine);
const secondRow = techStack.slice(itemsPerLine, itemsPerLine * 2);
const thirdRow = techStack.slice(itemsPerLine * 2, itemsPerLine * 3);
const fourthRow = techStack.slice(itemsPerLine * 3);

const TechCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl p-4",
        "flex items-center justify-center"
      )}
    >
      <Image
        src={img}
        alt={name}
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
        priority
      />
    </figure>
  );
};

export function TechStackMarquee() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:600px] bg-transparent rounded-2xl">
      <div
        className="flex flex-row items-center md:gap-4"
        style={{
          transform:
            "translateX(0px) translateY(10px) translateZ(-10px) rotateX(30deg) rotateY(-0deg) rotateZ(0deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>

      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
