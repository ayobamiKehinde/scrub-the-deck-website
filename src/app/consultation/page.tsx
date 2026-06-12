import type { Metadata } from "next";
import Script from "next/script";
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

        <div className={styles.calendarWrap}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/hMPscZkPh9yotIcxiIiD"
            style={{ width: "100%", border: "none", outline: "none", display: "block", background: "transparent" }}
            scrolling="no"
            id="hMPscZkPh9yotIcxiIiD_1781191036166"
          />
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </div>
      </div>
    </main>
  );
}
