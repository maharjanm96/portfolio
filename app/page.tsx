import AnimatedText from "@/components/animated-text";
import PageTransition from "@/components/page-transition";
import ParallaxSection from "@/components/parallax-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center">
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            <ParallaxSection speed={0.05} className="space-y-6">
              <AnimatedText
                text="Manish Maharjan"
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                animation="fadeIn"
                tag="h1"
                delay={0.3}
              />

              <AnimatedText
                text="Creative Web Developer Navigating the Digital Cosmos"
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                animation="slideUp"
                tag="p"
                delay={0.8}
                staggerChildren={0.02}
              />

              {/* <div className="h-90">
              <VideoPlayer />
            </div> */}

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/work">
                    <span>Explore My Work</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </ParallaxSection>
          </section>
        </div>
      </PageTransition>

      {/* right side */}
      <PageTransition>
        <div className="min-h-screen flex flex-col">
          <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            <ParallaxSection speed={0.05} className="space-y-6">
              <AnimatedText
                text="Right Side"
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                animation="fadeIn"
                tag="h1"
                delay={0.3}
              />
            </ParallaxSection>
          </section>
        </div>
      </PageTransition>
    </div>
  );
}
