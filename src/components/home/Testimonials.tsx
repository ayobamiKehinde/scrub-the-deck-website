"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

// image:   filename in /public/images/testimonials/
// videoId: YouTube video ID — fill in as received
const RESULTS = [
  { name: "Ian Humphreys",      company: "CEO of Brickflow",       result: "Over £2M raised",               quote: "", image: "ian-humphreys.jpg",  videoId: "q3O4s3LBLvc" },
  { name: "Philip Werner",      company: "Founder of Maekersuite", result: "£650K raised so far",           quote: "", image: "philip-werner.jpg",  videoId: "Xu9UHAzF8Ns" },
  { name: "Nick van Dijk",      company: "CEO of Oort",            result: "$10M+ raised so far",       quote: "", image: "nick.jpg",           videoId: "AXW3JaEdP7o" },
  { name: "Aaron Phethean",     company: "Founder of Meltano",     result: "Over £500,000 raised",          quote: "", image: "aaron-pheatan.jpg",  videoId: "ESsuPMNoWU8" },
  { name: "Elliott Myers",      company: "CEO of Roto",            result: "£7M raised to date",                 quote: "", image: "elliott-myers.jpg",  videoId: "T09LioATiWM" },
  { name: "Kara Stanford",      company: "Insight Delivered",       result: "Raised $300K in just 2 weeks",      quote: "", image: "kara-stanford.jpg",  videoId: "PJYiTuin8Yk" },
  { name: "Aramide Adebanjo",   company: "Founder of Gist Mobile",  result: "Raising £500,000 on a budget",       quote: "", image: "aramide.jpg",        videoId: "z1Lahe7qq-I" },
  { name: "Manoli Yanaghas",    company: "CEO of VoltVision",      result: "Raised £1.2M",                       quote: "", image: "manoli.jpg",         videoId: "WeemMI5dk8Q" },
  { name: "James Dyer",         company: "CEO of At Last",         result: "Over £900,000 raised",               quote: "", image: "james-dyer.jpg",     videoId: "hfOEN_HIdfk" },
  { name: "Achim Ellis",        company: "Founder of Bioflow",     result: "Pre-seed funding secured",           quote: "", image: "achim.jpg",          videoId: "ydSV_XjxReM" },
  { name: "Darren Sloof",       company: "CEO of AirPurity",        result: "Multiple new investor & sales meetings", quote: "", image: "darren-sloof.jpg",   videoId: "LwQ9SIxlZX8" },
  { name: "David Bacon",        company: "CEO of Boomtime",         result: "Over £160K raised pre product",      quote: "", image: "david-bacon.jpg",    videoId: "CBQ7UC3UgQo" },
  { name: "Chris Porter",       company: "CEO of Nexbotix",         result: "New deck for a £1.28M raise",        quote: "", image: "chris-porter.jpg",   videoId: "zN-9jjFPQeI" },
  { name: "Sam Holden",         company: "Founder of Ebb",          result: "Investor meetings secured",          quote: "", image: "sam-holden.jpg",     videoId: "uAiGtsAQ5RA" },
  { name: "Garry Martin",       company: "at the BBC",              result: "Decks that made Billions!",          quote: "", image: "garry-martin.jpg",   videoId: "QSOgcwYQr3Q" },
  { name: "Julia MacMillan",    company: "Founder of Where2 App",   result: "Deck is investor ready",             quote: "", image: "julia-macmillan.jpg",videoId: "eAWkrr6tEqU" },
  { name: "Yule Van Opstal",    company: "Solo founder",            result: "I definitely recommend you",         quote: "", image: "yule.jpg",           videoId: "n-6O9QP5uls" },
  { name: "Anna Burns",         company: "Yonder Consulting",       result: "Success with luxury launch",         quote: "", image: "anna-burns.jpg",     videoId: "A_DOYcBJzpU" },
  { name: "Matt Wilson",        company: "Founder of Aniballers",   result: "Raising 6 figures pre revenue",      quote: "", image: "matt-wilson.jpg",    videoId: "e5v0kEtz5wU" },
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
          alt={`${name}, ${company}`}
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
      {result && (
        <div className={styles.cardInfo}>
          <p className={styles.cardResult}>{result}</p>
        </div>
      )}
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

  // After the grid expands/collapses, recalculate all ScrollTrigger positions.
  // Without this, sibling sections (e.g. MeetFounder) stay at opacity:0 because
  // their stale trigger coordinates no longer match the new page height.
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [showAll]);

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
          <span>{showAll ? "View less" : "VIEW 11 MORE CLIENT TESTIMONIALS"}</span>
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
