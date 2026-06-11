import type { Metadata } from "next";
import styles from "../davecall/davecall.module.css";

export const metadata: Metadata = {
  title: "Book a Call with David Pugh – Scrub the Deck",
  description: "Book your free strategy session with David Pugh, founder of Scrub the Deck. Get expert advice on raising investment for your startup.",
  robots: { index: false, follow: false },
};

export default function DaveCallQPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Free Strategy Session</p>
        <h1 className={styles.heading}>Book a Call with David Pugh</h1>
        <p className={styles.sub}>Choose a time that works for you</p>

        {/* ── GoHighLevel calendar embed — paste iframe/script here ── */}
        <div className={styles.calendarWrap}>
          {/* PLACEHOLDER — replace with GoHighLevel embed code */}
          <p className={styles.placeholder}>Calendar embed coming soon</p>
        </div>
      </div>
    </main>
  );
}
