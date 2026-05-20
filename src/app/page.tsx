import HeroSection from "@/components/home/HeroSection";
import TVSection from "@/components/home/TVSection";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Spacer: 300vh desktop / 120vh mobile — gives TV animation room */}
      <div className={styles.spacer} />
      <HeroSection />
      <TVSection />
      <StatsSection />
      <Testimonials />
      <CTAStrip />
    </main>
  );
}
