"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

// image:   filename in /public/images/testimonials/
// videoId: YouTube video ID — fill in as received
const RESULTS = [
  { name: "Matt Wilson",        company: "",                   result: "Raising 6 figures pre revenue", quote: "", image: "matt-wilson.jpg",    videoId: "e5v0kEtz5wU" },
  { name: "Anna Burns",         company: "",                   result: "Success with luxury launch", quote: "", image: "anna-burns.jpg",     videoId: "A_DOYcBJzpU" },
  { name: "Kara Stanford",      company: "Insight Delivered",  result: "Raised $300,000", quote: "", image: "kara-stanford.jpg",  videoId: "PJYiTuin8Yk" },
  { name: "James Dyer",         company: "At Last",            result: "", quote: "", image: "james-dyer.jpg",     videoId: "hfOEN_HIdfk" },
  { name: "Philip Werner",      company: "",                   result: "", quote: "", image: "philip-werner.jpg",  videoId: "Xu9UHAzF8Ns" },
  { name: "Sam Holden",         company: "",                   result: "", quote: "", image: "sam-holden.jpg",     videoId: "uAiGtsAQ5RA" },
  { name: "Chris Porter",       company: "Nexbotix",           result: "", quote: "", image: "chris-porter.jpg",   videoId: "zN-9jjFPQeI" },
  { name: "David Bacon",        company: "Boomtime",           result: "", quote: "", image: "david-bacon.jpg",    videoId: "CBQ7UC3UgQo" },
  { name: "Ian Humphreys",      company: "Brickflow",          result: "", quote: "", image: "ian-humphreys.jpg",  videoId: "q3O4s3LBLvc" },
  { name: "Achim",              company: "Ellis",              result: "", quote: "", image: "achim.jpg",          videoId: "ydSV_XjxReM" },
  { name: "Elliott Myers",      company: "Roto",               result: "", quote: "", image: "elliott-myers.jpg",  videoId: "T09LioATiWM" },
  { name: "Aaron Pheatan",      company: "",                   result: "", quote: "", image: "aaron-pheatan.jpg",  videoId: "ESsuPMNoWU8" },
  { name: "Aramide",            company: "",                   result: "", quote: "", image: "aramide.jpg",        videoId: "z1Lahe7qq-I" },
  { name: "Garry Martin",       company: "BBC",                result: "", quote: "", image: "garry-martin.jpg",   videoId: "QSOgcwYQr3Q" },
  { name: "Julia MacMillan",    company: "",                   result: "", quote: "", image: "julia-macmillan.jpg",videoId: "eAWkrr6tEqU" },
  { name: "Nick van Dijk-Oort", company: "",                   result: "", quote: "", image: "nick.jpg",           videoId: "AXW3JaEdP7o" },
  { name: "Manoli Yanaghas",    company: "VoltVision",         result: "", quote: "", image: "manoli.jpg",         videoId: "WeemMI5dk8Q" },
  { name: "Yule",               company: "",                   result: "", quote: "", image: "yule.jpg",           videoId: "n-6O9QP5uls" },
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
