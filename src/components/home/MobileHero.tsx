"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MobileHero.module.css";

export default function MobileHero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className={styles.section}>

      {/* Logo */}
      <Image
        src="/images/logo-silver.png"
        alt="Scrub the Deck"
        width={400}
        height={100}
        className={styles.logo}
        priority
      />

      {/* Headline */}
      <div className={styles.textBlock}>
        <p className={styles.headline}>If you want to raise investment in 2026</p>
        <p className={styles.sub}>...you&rsquo;re in the <em>RIGHT</em> place!</p>
      </div>

      {/* TV */}
      <div className={styles.tvWrap}>
        <Image
          src="/images/dave-tv.png"
          alt="Scrub the Deck TV"
          width={560}
          height={480}
          className={styles.tvImage}
          priority
        />
        {!playing ? (
          <button className={styles.playBtn} onClick={() => setPlaying(true)} aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : (
          <iframe
            className={styles.tvIframe}
            src="https://www.youtube.com/embed/LQ4SXep3zOs?autoplay=1&rel=0&modestbranding=1"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Scrub the Deck intro"
          />
        )}
      </div>

      {/* CTA button */}
      <a href="/contact" className={styles.ctaBtn}>
        <span className={styles.ctaLabel}>BOOK A 1 on 1 CALL WITH FOUNDER DAVID PUGH</span>
      </a>

    </section>
  );
}
