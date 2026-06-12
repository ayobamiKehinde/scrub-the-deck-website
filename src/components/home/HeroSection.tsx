"use client";

import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <video
        className={styles.video}
        src="/media/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className={styles.overlay} aria-hidden="true" />

      {/* Gold CTA button */}
      <div className={styles.ctaWrap}>
        <GoldButton label="Book a Call" href="/davecall-q" size="lg" />
      </div>

      {/* Rope divider at bottom */}
      <div className={styles.ropeWrap}>
        <RopeDivider />
      </div>
    </section>
  );
}
