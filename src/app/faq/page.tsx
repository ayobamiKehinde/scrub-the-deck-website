"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./faq.module.css";

const FAQ_VIDEOS = [
  { id: "cz6UutwkTTM", image: "FAQ1.jpg", q: "Who are the investors in your network?" },
  { id: "_d5T_3-nx5M", image: "FAQ2.jpg", q: "What is your success rate?", note: "*as of April 2026 the success rate has increased from 76% to 82%" },
  { id: "8dlf98gHCqM", image: "FAQ3.jpg", q: "How long does the process take?" },
  { id: "heYWZv3RZcE", image: "FAQ4.jpg", q: "Do you work on commission only?" },
  { id: "uHAza5EN9Dw", image: "FAQ5.jpg", q: "What if I already have a pitch deck?" },
  { id: "TuYyyUYMhhM", image: "FAQ6.jpg", q: "What is the price of your service?" },
  { id: "exhMywwfC1M", image: "FAQ7.jpg", q: "What guarantees can you offer?" },
];

function FAQCard({ id, image, q, note, onOpen }: { id: string; image: string; q: string; note?: string; onOpen: (id: string) => void }) {
  return (
    <article
      className={styles.card}
      onClick={() => onOpen(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(id); }}
      aria-label={`Play answer: ${q}`}
    >
      <div className={styles.cardThumb}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/${image}`} alt={q} className={styles.cardImg} loading="lazy" />
        <div className={styles.cardOverlay} />
        <div className={styles.playBtn} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5 3l11 6-11 6V3z" />
          </svg>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardQuestion}>{q}</p>
        {note && <p className={styles.cardNote}>{note}</p>}
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
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </button>
        <iframe
          className={styles.modalVideo}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="FAQ answer video"
        />
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const openModal  = useCallback((id: string) => setActiveId(id), []);
  const closeModal = useCallback(() => setActiveId(null), []);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h1>
        <p className={styles.sub}>answered by David Pugh</p>
      </div>

      <div className={styles.grid}>
        {FAQ_VIDEOS.map((v) => (
          <FAQCard key={v.id} {...v} onOpen={openModal} />
        ))}
      </div>

      {activeId !== null && (
        <VideoModal videoId={activeId} onClose={closeModal} />
      )}
    </main>
  );
}
