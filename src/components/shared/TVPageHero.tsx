"use client";

import { useState } from "react";
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
}

export default function TVPageHero({
  headline,
  subtitle,
  tvSrc,
  tvAlt,
  ctaHref,
  ctaLabel = "BOOK A CALL",
  videoId,
}: TVPageHeroProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <section className={styles.hero} aria-label={headline}>
        <div className={styles.inner}>
          <p className={styles.headline}>{headline}</p>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.tvWrap}>
            <Image
              src={tvSrc}
              alt={tvAlt}
              width={600}
              height={500}
              className={styles.tvImg}
              priority
            />
            {videoId && (
              <button
                className={styles.playBtn}
                onClick={() => setPlaying(true)}
                aria-label="Play intro video"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>

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
