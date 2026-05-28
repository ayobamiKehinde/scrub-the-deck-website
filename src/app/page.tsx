import HeroSection    from "@/components/home/HeroSection";
import PitchSection   from "@/components/home/PitchSection";
import StatsSection   from "@/components/home/StatsSection";
import Testimonials   from "@/components/home/Testimonials";
import MeetFounder    from "@/components/home/MeetFounder";
import CTAStrip       from "@/components/home/CTAStrip";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PitchSection />
      <StatsSection />
      <Testimonials />
      <MeetFounder />
      <CTAStrip />
    </main>
  );
}
