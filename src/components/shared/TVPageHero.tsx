"use client";

import React, { useState } from "react";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./TVPageHero.module.css";

interface TVPageHeroProps {
  headline: string;
  subtitle: string;
  tvSrc: string;
  tvAlt: string;
  ctaHref: string;
  ctaLabel?: string;
  videoId?: string;
  noBlend?: boolean;
  compact?: boolean;
  logoSrc?: string;
  note?: React.ReactNode;
  centerPlay?: boolean;
}

export default function TVPageHero({
  headline,
  subtitle,
  tvSrc,
  tvAlt,
  ctaHref,
  ctaLabel = "BOOK A CALL",
  videoId,
  noBlend = false,
  compact = false,
  logoSrc,
  note,
  centerPlay = false,
}: TVPageHeroProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <section className={`${styles.hero} ${compact ? styles.heroCompact : ""}`} aria-label={headline}>
        <div className={`${styles.inner} ${compact ? styles.innerCompact : ""}`}>
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="Scrub the Deck"
              width={280}
              height={72}
              className={styles.heroLogo}
              priority
            />
          )}
          <p className={styles.headline}>{headline}</p>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.tvWrap}>
            <Image
              src={tvSrc}
              alt={tvAlt}
              width={600}
              height={500}
              className={noBlend ? styles.tvImgPlain : styles.tvImg}
              priority
            />
            {videoId && (
              <button
                className={`${styles.playBtn} ${centerPlay ? styles.playBtnCenter : ""}`}
                onClick={() => setPlaying(true)}
                aria-label="Play intro video"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

          {note && <p className={styles.note}>{note}</p>}

          <div className={styles.ctaWrap}>
            <GoldButton href={ctaHref} label={ctaLabel} size="lg" />
          </div>
        </div>
      </section>

      {playing && videoId && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setPlaying(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setPlaying(false)}
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              className={styles.modalIframe}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Scrub the Deck intro video"
            />
          </div>
        </div>
      )}
    </>
  );
}
