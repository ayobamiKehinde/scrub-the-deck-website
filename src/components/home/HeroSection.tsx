"use client";

import { useState } from "react";
import StatCycler from "./StatCycler";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [switched, setSwitched] = useState(false);

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Primary video — fades out after stats finish */}
      <video
        className={`${styles.video} ${switched ? styles.videoFadeOut : ""}`}
        src="/media/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Secondary video — fades in as primary fades out */}
      <video
        className={`${styles.video} ${styles.videoSecondary} ${switched ? styles.videoFadeIn : ""}`}
        src="/media/boat-rocks.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.statSlot}>
        <StatCycler onDone={() => setSwitched(true)} />
      </div>
    </section>
  );
}
