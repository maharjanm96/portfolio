import { Bricolage_Grotesque } from "next/font/google";

import Navigation from "@/components/navigation";
import NebulaTheme from "@/components/nebula-theme";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manish Maharjan | Creative Web Developer",
  description: "Creative Web Developer Navigating the Digital Cosmos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage_grotesque.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="space-theme"
        >
          <div className="relative min-h-screen overflow-hidden">
            <StarsBackground />
            <ShootingStars />
            <NebulaTheme />

            <Navigation />

            <main className="relative z-10">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
