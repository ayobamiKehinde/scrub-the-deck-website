"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const RESULTS = [
  { name: "Matt",    company: "SaaS Founder",            result: "Seed round in 5 weeks",        quote: "David completely transformed how we told our story. Investors finally got it." },
  { name: "Werner",  company: "Deep Tech Co-Founder",    result: "£3.2M raised",                 quote: "The deck opened doors we'd been knocking on for months. Worth every penny." },
  { name: "Anna",    company: "CEO & Founder",           result: "8 investor meetings",           quote: "We went from ignored to oversubscribed after one deck revision." },
  { name: "Kara",    company: "FinTech Founder",         result: "Pre-seed oversubscribed",       quote: "Every slide had a purpose. Investors told us it was the clearest deck they'd seen." },
  { name: "James",   company: "PropTech Founder",        result: "Over £900K raised",             quote: "The narrative arc David built made our numbers actually land with investors." },
  { name: "Philip",  company: "Marketing SaaS",          result: "£650K raised so far",           quote: "We'd tried three other agencies. David was the first one who really got our vision." },
  { name: "Sam",     company: "B2B Founder",             result: "Investor meetings secured",     quote: "From zero traction to a packed calendar of investor calls in three weeks." },
  { name: "Chris",   company: "E-Commerce Founder",      result: "£1.28M raised",                quote: "David challenged our assumptions and the deck was better for it. Game changer." },
  { name: "Rachel",  company: "HealthTech Founder",      result: "Series A closed",              quote: "The storytelling in our deck was on another level. Investors were hooked." },
  { name: "Tom",     company: "CleanTech CEO",           result: "£2.1M raised",                 quote: "We had the product, David gave us the narrative. Night and day difference." },
  { name: "Sophie",  company: "EdTech Founder",          result: "£500K pre-seed",               quote: "I was nervous about fundraising. After the deck, I felt unstoppable." },
  { name: "Daniel",  company: "AI Startup Founder",      result: "VC term sheet in 3 weeks",     quote: "The deck was so good we had competing offers. Never expected that." },
  { name: "Laura",   company: "FashionTech Founder",     result: "Oversubscribed round",         quote: "Investors said ours was one of the best decks they'd ever seen. That's David." },
  { name: "Marcus",  company: "CyberSec Founder",        result: "£4.5M Series A",               quote: "Six months of failed pitches ended in one week after the rebrand." },
  { name: "Priya",   company: "Biotech Co-Founder",      result: "Grant + equity raise",         quote: "David understood our science and made it accessible to non-technical investors." },
  { name: "Oliver",  company: "SportsTech Founder",      result: "£750K raised",                 quote: "From first call to signed term sheet was 4 weeks. David made that happen." },
  { name: "Zara",    company: "InsurTech Founder",       result: "Pre-seed closed fast",         quote: "The confidence I got from having a world-class deck was priceless." },
  { name: "Ben",     company: "Logistics SaaS Founder",  result: "£1.8M raised",                 quote: "David told our story better than we could ourselves. Investors felt it." },
];

const INITIAL_COUNT = 8;

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
        <div className={styles.cardOverlay}>
          <div className={styles.cardOverlayInner}>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.cardCompany}>{company}</p>
          </div>
        </div>
        <div className={styles.playBtn} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5 3l11 6-11 6V3z" />
          </svg>
        </div>
      </div>
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
    <div className={styles.modalBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </button>
        <video className={styles.modalVideo} src="/media/hero-bg.mp4" autoPlay controls playsInline />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen]   = useState(false);
  const [showAll,   setShowAll]     = useState(false);
  const openModal   = useCallback(() => setModalOpen(true),  []);
  const closeModal  = useCallback(() => setModalOpen(false), []);

  const visible = showAll ? RESULTS : RESULTS.slice(0, INITIAL_COUNT);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from([`.${styles.heading}`, `.${styles.sub}`], {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      });
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

      <div className={styles.header}>
        <h2 className={styles.heading}>WHAT OUR CLIENTS SAY</h2>
        <p className={styles.sub}>in real interviews</p>
      </div>

      <div className={styles.grid}>
        {visible.map((r) => (
          <VideoCard key={r.name} {...r} onOpen={openModal} />
        ))}
      </div>

      {/* See more / See less */}
      <div className={styles.viewMoreWrap}>
        <button
          className={styles.viewMoreBtn}
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
        >
          <span>{showAll ? "View less" : "View more"}</span>
          <svg
            className={`${styles.viewMoreChevron} ${showAll ? styles.chevronUp : ""}`}
            width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M3 6l6 6 6-6" />
          </svg>
        </button>
      </div>

      {modalOpen && <VideoModal onClose={closeModal} />}
    </section>
  );
}
