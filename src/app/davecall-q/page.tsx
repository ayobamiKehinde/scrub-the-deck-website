import type { Metadata } from "next";
import Script from "next/script";
import VideoPageBg from "@/components/shared/VideoPageBg";
import styles from "../davecall/davecall.module.css";

export const metadata: Metadata = {
  title: "Book a Call with David Pugh – Scrub the Deck",
  description: "Book your free strategy session with David Pugh, founder of Scrub the Deck. Get expert advice on raising investment for your startup.",
  robots: { index: false, follow: false },
};

export default function DaveCallQPage() {
  return (
    <main className={styles.page}>
      <VideoPageBg />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Free Strategy Session</p>
        <h1 className={styles.heading}>Book a Call with David Pugh</h1>
        <p className={styles.sub}>Choose a time that works for you</p>

        <div className={styles.calendarWrap}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/GOvIXEVoOdlxVEiLeNYC"
            style={{ width: "100%", border: "none", outline: "none", display: "block", background: "transparent" }}
            scrolling="no"
            id="GOvIXEVoOdlxVEiLeNYC_1781191324510"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </div>
      </div>
    </main>
  );
}
