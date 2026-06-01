"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./MobileHero.module.css";

function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>
        <iframe
          className={styles.modalVideo}
          src="https://www.youtube.com/embed/LQ4SXep3zOs?autoplay=1&rel=0&modestbranding=1"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Scrub the Deck intro"
        />
      </div>
    </div>
  );
}

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

      {/* TV — clicking opens fullscreen modal */}
      <div className={styles.tvWrap}>
        <Image
          src="/images/dave-tv.png"
          alt="Scrub the Deck TV"
          width={1165}
          height={787}
          className={styles.tvImage}
          priority
        />
        <button className={styles.playBtn} onClick={() => setPlaying(true)} aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* CTA button */}
      <a href="/contact" className={styles.ctaBtn}>
        <span className={styles.ctaLabel}>BOOK A CALL</span>
      </a>

      {playing && <VideoModal onClose={() => setPlaying(false)} />}
    </section>
  );
}
