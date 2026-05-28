"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const RESULTS = [
  { name: "Matt",   company: "SaaS Founder",          result: "Seed round in 5 weeks",         quote: "David completely transformed how we told our story. Investors finally got it." },
  { name: "Werner", company: "Deep Tech Co-Founder",   result: "£3.2M raised",                  quote: "The deck opened doors we'd been knocking on for months. Worth every penny." },
  { name: "Anna",   company: "CEO & Founder",          result: "8 investor meetings",            quote: "We went from ignored to oversubscribed after one deck revision." },
  { name: "Kara",   company: "FinTech Founder",        result: "Pre-seed oversubscribed",        quote: "Every slide had a purpose. Investors told us it was the clearest deck they'd seen." },
  { name: "James",  company: "PropTech Founder",       result: "Over £900K raised",              quote: "The narrative arc David built made our numbers actually land with investors." },
  { name: "Philip", company: "Marketing SaaS",         result: "£650K raised so far",            quote: "We'd tried three other agencies. David was the first one who really got our vision." },
  { name: "Sam",    company: "B2B Founder",            result: "Investor meetings secured",      quote: "From zero traction to a packed calendar of investor calls in three weeks." },
  { name: "Chris",  company: "E-Commerce Founder",     result: "£1.28M raised",                 quote: "David challenged our assumptions and the deck was better for it. Game changer." },
];

const BRANDS: { name: string; file: string }[] = [
  { name: "Mercedes-Benz", file: "mercedes"     },
  { name: "O2",            file: "o2"           },
  { name: "Aston Martin",  file: "aston-martin" },
  { name: "Cisco",         file: "cisco"        },
  { name: "Vodafone",      file: "vodafone"     },
  { name: "Hilton",        file: "hilton"       },
  { name: "MTV",           file: "mtv"          },
  { name: "Petronas",      file: "petronas"     },
  { name: "Adidas",        file: "adidas"       },
];

function BrandLogo({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  if (imgFailed) return <span className={styles.brandText}>{name}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/brands/${file}.jpg`}
      alt={name}
      className={styles.brandLogo}
      onError={() => setImgFailed(true)}
    />
  );
}

interface CardProps {
  name: string;
  company: string;
  result: string;
  quote: string;
  onOpen: () => void;
}

function VideoCard({ name, company, result, quote, onOpen }: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const show = () => { v.currentTime = 0.001; };
    v.addEventListener("loadedmetadata", show, { once: true });
    return () => v.removeEventListener("loadedmetadata", show);
  }, []);

  const handleMouseEnter = () => { videoRef.current?.play(); };
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0.001; }
  };

  return (
    <article
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(); }}
      aria-label={`Play ${name}'s testimonial`}
    >
      {/* Video thumbnail — portrait */}
      <div className={styles.cardThumb}>
        <video
          ref={videoRef}
          className={styles.cardVideo}
          src="/media/hero-bg.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        />

        {/* Gradient + name overlay at bottom of video */}
        <div className={styles.cardOverlay}>
          <div className={styles.cardOverlayInner}>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.cardCompany}>{company}</p>
          </div>
        </div>

        {/* Play icon */}
        <div className={styles.playBtn} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5 3l11 6-11 6V3z" />
          </svg>
        </div>
      </div>

      {/* Info below video */}
      <div className={styles.cardInfo}>
        <p className={styles.cardResult}>{result}</p>
        <p className={styles.cardQuote}>&ldquo;{quote}&rdquo;</p>
      </div>
    </article>
  );
}

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
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label="Video testimonial">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </button>
        <video
          className={styles.modalVideo}
          src="/media/hero-bg.mp4"
          autoPlay
          controls
          playsInline
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from([`.${styles.eyebrow}`, `.${styles.heading}`], {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      });
      tl.from(`.${styles.card}`, {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
      }, "-=0.4");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        onEnter:     () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave:     () => tl.progress(0).pause(),
        onLeaveBack: () => tl.progress(0).pause(),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>WHAT OUR CLIENTS SAY</h2>
        <p className={styles.sub}>in real interviews</p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {RESULTS.map((r) => (
          <VideoCard key={r.name} {...r} onOpen={openModal} />
        ))}
      </div>

      {/* Brand marquee */}
      <div className={styles.brandsWrap}>
        <p className={styles.brandsLabel}>Trusted by the world&apos;s leading brands</p>
        <div className={styles.marqueeOuter} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={i} className={styles.brandItem}>
                <BrandLogo name={brand.name} file={brand.file} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <VideoModal onClose={closeModal} />}

    </section>
  );
}
