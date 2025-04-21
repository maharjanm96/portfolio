import AnimatedText from "@/components/animated-text";
import PageTransition from "@/components/page-transition";
import ParallaxSection from "@/components/parallax-section";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Cosmic E-Commerce",
    description:
      "A full-stack e-commerce platform with Next.js, TypeScript, and MongoDB",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Stellar Dashboard",
    description:
      "Admin dashboard with real-time data visualization and analytics",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Orbit Social",
    description:
      "Social media platform with real-time messaging and content sharing",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Nebula Notes",
    description:
      "Note-taking app with markdown support and cloud synchronization",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ParallaxSection speed={0.1} className="mb-12">
            <AnimatedText
              text="My Work"
              className="text-3xl md:text-5xl font-bold mb-4 text-glow"
              animation="fadeIn"
              tag="h1"
            />

            <AnimatedText
              text="Exploring the digital universe through code and creativity"
              className="text-xl text-muted-foreground max-w-2xl"
              animation="slideUp"
              tag="p"
              delay={0.4}
            />
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
