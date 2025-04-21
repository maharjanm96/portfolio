import AnimatedText from "@/components/animated-text";
import ContactForm from "@/components/contact-form";
import PageTransition from "@/components/page-transition";
import ParallaxSection from "@/components/parallax-section";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ParallaxSection speed={0.1} className="mb-12">
            <AnimatedText
              text="Contact Me"
              className="text-3xl md:text-5xl font-bold mb-4 text-glow"
              animation="fadeIn"
              tag="h1"
            />

            <AnimatedText
              text="Let's connect and create something amazing together"
              className="text-xl text-muted-foreground max-w-2xl"
              animation="slideUp"
              tag="p"
              delay={0.4}
            />
          </ParallaxSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <ParallaxSection speed={0.15} className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p>
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision. Whether you
                  have a question or just want to say hi, I&apos;ll try my best
                  to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="flex flex-col space-y-3">
                  <Link
                    href="mailto:example@example.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>example@example.com</span>
                  </Link>

                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/manishmaharjan</span>
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/manishmaharjan</span>
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>twitter.com/manishmaharjan</span>
                  </Link>
                </div>
              </div>
            </ParallaxSection>

            <ParallaxSection speed={0.2}>
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
