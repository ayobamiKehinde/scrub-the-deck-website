import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <Testimonials />
      <CTAStrip />
    </main>
  );
}
