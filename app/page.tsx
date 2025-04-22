import PortfolioHero from "@/components/portfolio-hero";
import StickyFooter from "@/components/sticky-footer";

export default function Home() {
  return (
    <div>
      <PortfolioHero />
      <div className="h-[100vh]">
        <StickyFooter />
      </div>
    </div>
  );
}
