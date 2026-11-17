"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./TVPageHero.module.css";

interface TVPageHeroProps {
  headline: React.ReactNode;
  // required when headline isn't plain text, for the section's aria-label
  ariaLabel?: string;
  subtitle: string;
  tvSrc: string;
  tvAlt: string;
  ctaHref: string;
  ctaLabel?: string;
  videoId?: string;
  noBlend?: boolean;
  compact?: boolean;
  logoSrc?: string;
  partnerLogoSrc?: string;
  partnerLogoAlt?: string;
  // wraps the logo lockup in a link (welcome/meta deliberately have no way off the page)
  logoHref?: string;
  note?: React.ReactNode;
  centerPlay?: boolean;
}

export default function TVPageHero({
  headline,
  ariaLabel,
  subtitle,
  tvSrc,
  tvAlt,
  ctaHref,
  ctaLabel = "BOOK A CALL",
  videoId,
  noBlend = false,
  compact = false,
  logoSrc,
  partnerLogoSrc,
  partnerLogoAlt = "",
  logoHref,
  note,
  centerPlay = false,
}: TVPageHeroProps) {
  const [playing, setPlaying] = useState(false);

  const logos = (
    <>
      {logoSrc && (
        <Image
          src={logoSrc}
          alt="Scrub the Deck"
          width={280}
          height={72}
          className={`${styles.heroLogo} ${partnerLogoSrc ? styles.heroLogoWithPartner : ""}`}
          priority
        />
      )}
      {partnerLogoSrc && (
        <Image
          src={partnerLogoSrc}
          alt={partnerLogoAlt}
          width={414}
          height={83}
          className={styles.partnerLogo}
          priority
        />
      )}
    </>
  );

  return (
    <>
      <section className={`${styles.hero} ${compact ? styles.heroCompact : ""}`} aria-label={ariaLabel ?? (typeof headline === "string" ? headline : undefined)}>
        <div className={`${styles.inner} ${compact ? styles.innerCompact : ""}`}>
          {logoHref ? (
            <Link href={logoHref} className={styles.logoLink} aria-label="Scrub the Deck home">
              {logos}
            </Link>
          ) : logos}
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
