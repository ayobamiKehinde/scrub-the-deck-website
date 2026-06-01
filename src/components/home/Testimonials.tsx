"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

// image:   filename in /public/images/testimonials/ e.g. "matt.jpg"
// videoId: YouTube video ID e.g. "ydSV_XjxReM"
const RESULTS = [
  { name: "Matt",    company: "SaaS Founder",            result: "Seed round in 5 weeks",        quote: "David completely transformed how we told our story. Investors finally got it.",   image: "matt.jpg",    videoId: "ydSV_XjxReM" },
  { name: "Werner",  company: "Deep Tech Co-Founder",    result: "£3.2M raised",                 quote: "The deck opened doors we'd been knocking on for months. Worth every penny.",       image: "werner.jpg",  videoId: "" },
  { name: "Anna",    company: "CEO & Founder",           result: "8 investor meetings",           quote: "We went from ignored to oversubscribed after one deck revision.",                 image: "anna.jpg",    videoId: "" },
  { name: "Kara",    company: "FinTech Founder",         result: "Pre-seed oversubscribed",       quote: "Every slide had a purpose. Investors told us it was the clearest deck they'd seen.", image: "kara.jpg", videoId: "" },
  { name: "James",   company: "PropTech Founder",        result: "Over £900K raised",             quote: "The narrative arc David built made our numbers actually land with investors.",     image: "james.jpg",   videoId: "" },
  { name: "Philip",  company: "Marketing SaaS",          result: "£650K raised so far",           quote: "We'd tried three other agencies. David was the first one who really got our vision.", image: "philip.jpg", videoId: "" },
  { name: "Sam",     company: "B2B Founder",             result: "Investor meetings secured",     quote: "From zero traction to a packed calendar of investor calls in three weeks.",        image: "sam.jpg",     videoId: "" },
  { name: "Chris",   company: "E-Commerce Founder",      result: "£1.28M raised",                quote: "David challenged our assumptions and the deck was better for it. Game changer.",   image: "chris.jpg",   videoId: "" },
  { name: "Rachel",  company: "HealthTech Founder",      result: "Series A closed",              quote: "The storytelling in our deck was on another level. Investors were hooked.",        image: "rachel.jpg",  videoId: "" },
  { name: "Tom",     company: "CleanTech CEO",           result: "£2.1M raised",                 quote: "We had the product, David gave us the narrative. Night and day difference.",       image: "tom.jpg",     videoId: "" },
  { name: "Sophie",  company: "EdTech Founder",          result: "£500K pre-seed",               quote: "I was nervous about fundraising. After the deck, I felt unstoppable.",             image: "sophie.jpg",  videoId: "" },
  { name: "Daniel",  company: "AI Startup Founder",      result: "VC term sheet in 3 weeks",     quote: "The deck was so good we had competing offers. Never expected that.",               image: "daniel.jpg",  videoId: "" },
  { name: "Laura",   company: "FashionTech Founder",     result: "Oversubscribed round",         quote: "Investors said ours was one of the best decks they'd ever seen. That's David.",    image: "laura.jpg",   videoId: "" },
  { name: "Marcus",  company: "CyberSec Founder",        result: "£4.5M Series A",               quote: "Six months of failed pitches ended in one week after the rebrand.",                image: "marcus.jpg",  videoId: "" },
  { name: "Priya",   company: "Biotech Co-Founder",      result: "Grant + equity raise",         quote: "David understood our science and made it accessible to non-technical investors.",  image: "priya.jpg",   videoId: "" },
  { name: "Oliver",  company: "SportsTech Founder",      result: "£750K raised",                 quote: "From first call to signed term sheet was 4 weeks. David made that happen.",        image: "oliver.jpg",  videoId: "" },
  { name: "Zara",    company: "InsurTech Founder",       result: "Pre-seed closed fast",         quote: "The confidence I got from having a world-class deck was priceless.",               image: "zara.jpg",    videoId: "" },
  { name: "Ben",     company: "Logistics SaaS Founder",  result: "£1.8M raised",                 quote: "David told our story better than we could ourselves. Investors felt it.",          image: "ben.jpg",     videoId: "" },
];

const INITIAL_COUNT = 8;

interface CardProps {
  name: string;
  company: string;
  result: string;
  quote: string;
  image: string;
  videoId: string;
  onOpen: (videoId: string) => void;
}

function VideoCard({ name, company, result, quote, image, videoId, onOpen }: CardProps) {
  const founderSrc = `/images/testimonials/${image}`;

  return (
    <article
      className={styles.card}
      onClick={() => onOpen(videoId)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(videoId); }}
      aria-label={`Play ${name}'s testimonial`}
    >
      <div className={styles.cardThumb}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={founderSrc}
          alt={`${name} — ${company}`}
          className={styles.cardVideo}
          onError={(e) => {
            // fallback to YouTube thumbnail if founder photo missing
            if (videoId) (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        <div className={styles.cardOverlay}>
          <div className={styles.cardOverlayInner}>
            <p className={styles.cardName}>{name}</p>
            <p className={styles.cardCompany}>{company}</p>
          </div>
        </div>
        {videoId && (
          <div className={styles.playBtn} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
              <path d="M5 3l11 6-11 6V3z" />
            </svg>
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardResult}>{result}</p>
        <p className={styles.cardQuote}>&ldquo;{quote}&rdquo;</p>
      </div>
    </article>
  );
}

function VideoModal({ videoId, onClose }: { videoId: string; onClose: () => void }) {
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
        {videoId ? (
          <iframe
            className={styles.modalVideo}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Testimonial video"
          />
        ) : (
          <video className={styles.modalVideo} src="/media/hero-bg.mp4" autoPlay controls playsInline />
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openModal  = useCallback((id: string) => setActiveVideoId(id ?? ""), []);
  const closeModal = useCallback(() => setActiveVideoId(null), []);

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

      {activeVideoId !== null && (
        <VideoModal videoId={activeVideoId} onClose={closeModal} />
      )}
    </section>
  );
}
