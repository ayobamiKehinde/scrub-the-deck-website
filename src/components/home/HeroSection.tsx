"use client";

import Image from "next/image";
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

      {/* Centered logo over video */}
      <div className={styles.logoWrap}>
        <Image
          src="/images/logo-silver.png"
          alt="Scrub the Deck"
          width={600}
          height={156}
          className={styles.heroLogo}
          priority
        />
      </div>

      {/* Gold CTA button */}
      <div className={styles.ctaWrap}>
        <GoldButton label="Book a Call" href="/contact" size="lg" />
      </div>

      {/* Rope divider at bottom */}
      <div className={styles.ropeWrap}>
        <RopeDivider />
      </div>
    </section>
  );
}
