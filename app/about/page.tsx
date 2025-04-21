import AnimatedText from "@/components/animated-text";
import PageTransition from "@/components/page-transition";
import ParallaxSection from "@/components/parallax-section";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Docker",
  "AWS",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ParallaxSection speed={0.1} className="mb-12">
            <AnimatedText
              text="About Me"
              className="text-3xl md:text-5xl font-bold mb-4 text-glow"
              animation="fadeIn"
              tag="h1"
            />

            <AnimatedText
              text="The story behind the developer navigating the digital cosmos"
              className="text-xl text-muted-foreground max-w-2xl"
              animation="slideUp"
              tag="p"
              delay={0.4}
            />
          </ParallaxSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <ParallaxSection speed={0.15} className="space-y-6">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg border border-border border-glow">
                <Image
                  src="/images/profile4.jpeg"
                  alt="Manish Maharjan"
                  fill
                  className="object-cover"
                />
              </div>
            </ParallaxSection>

            <ParallaxSection speed={0.2} className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p>
                  Hello! I&apos;m Manish Maharjan, a creative web developer with
                  a passion for building immersive digital experiences. My
                  journey in the digital cosmos began with a fascination for how
                  technology can transform ideas into reality.
                </p>
                <p>
                  With years of experience in web development, Ive had the
                  opportunity to work on various projects ranging from
                  e-commerce platforms to interactive web applications. I
                  specialize in creating responsive, user-friendly websites that
                  not only look great but also provide exceptional user
                  experiences.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  stargazing – both literally and in the digital universe.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
