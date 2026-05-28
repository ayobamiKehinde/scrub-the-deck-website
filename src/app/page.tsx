import HeroSection  from "@/components/home/HeroSection";
import PitchSection from "@/components/home/PitchSection";
import RopeDivider  from "@/components/ui/RopeDivider";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import MeetFounder  from "@/components/home/MeetFounder";
import CTAStrip     from "@/components/home/CTAStrip";
import styles       from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PitchSection />
      <RopeDivider />
      {/* Stats + Testimonials share the same waves background */}
      <div className={styles.wavesSection}>
        <StatsSection />
        <Testimonials />
      </div>
      <MeetFounder />
      <CTAStrip />
    </main>
  );
}
