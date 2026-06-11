import type { Metadata } from "next";
import styles from "../davecall/davecall.module.css";

export const metadata: Metadata = {
  title: "Book a Free Consultation – Scrub the Deck",
  description: "Book your free investment strategy consultation with David Pugh, founder of Scrub the Deck.",
  robots: { index: false, follow: false },
};

export default function ConsultationPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Free Consultation</p>
        <h1 className={styles.heading}>Book a Free Consultation</h1>
        <p className={styles.sub}>with David Pugh, Founder of Scrub the Deck</p>

        {/* ── GoHighLevel calendar embed — paste iframe/script here ── */}
        <div className={styles.calendarWrap}>
          {/* PLACEHOLDER — replace with GoHighLevel embed code */}
          <p className={styles.placeholder}>Calendar embed coming soon</p>
        </div>
      </div>
    </main>
  );
}
