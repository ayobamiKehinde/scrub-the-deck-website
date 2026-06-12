"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./faq.module.css";

const FAQ_VIDEOS = [
  { id: "PLACEHOLDER_1", q: "How long does it take to raise investment?" },
  { id: "PLACEHOLDER_2", q: "What is Scrub the Deck's success rate?" },
  { id: "PLACEHOLDER_3", q: "Who are the investors in David's network?" },
  { id: "PLACEHOLDER_4", q: "What if I already have a pitch deck?" },
  { id: "PLACEHOLDER_5", q: "How much does Scrub the Deck cost?" },
  { id: "PLACEHOLDER_6", q: "Is there a guarantee?" },
  { id: "PLACEHOLDER_7", q: "Does David Pugh work with every startup?" },
  { id: "PLACEHOLDER_8", q: "What is the 18-point pitch deck structure?" },
  { id: "PLACEHOLDER_9", q: "Is the strategy session really free?" },
];

function FAQCard({ id, q, onOpen }: { id: string; q: string; onOpen: (id: string) => void }) {
  const isPlaceholder = id.startsWith("PLACEHOLDER");
  const thumb = isPlaceholder
    ? `/images/faq/faq-${id.replace("PLACEHOLDER_", "")}.png`
    : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

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
        <img src={thumb} alt={q} className={styles.cardImg} loading="lazy" />
        <div className={styles.cardOverlay} />
        <div className={styles.playBtn} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5 3l11 6-11 6V3z" />
          </svg>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardQuestion}>{q}</p>
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
          <FAQCard key={v.id} id={v.id} q={v.q} onOpen={openModal} />
        ))}
      </div>

      {activeId !== null && !activeId.startsWith("PLACEHOLDER") && (
        <VideoModal videoId={activeId} onClose={closeModal} />
      )}
    </main>
  );
}
