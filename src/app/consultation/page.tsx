import type { Metadata } from "next";
import CalendarEmbed from "@/components/shared/CalendarEmbed";
import styles from "../davecall/davecall.module.css";

export const metadata: Metadata = {
  title: "Book a Consultation – Scrub the Deck",
  description: "Book your investment strategy consultation with David Pugh, founder of Scrub the Deck.",
  robots: { index: false, follow: false },
};

export default function ConsultationPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>1 Hour Consultation</p>
        <h1 className={styles.heading}>Book Your Session Here</h1>
        <p className={styles.sub}>with David Pugh, Founder of Scrub the Deck</p>
        <CalendarEmbed
          src="https://api.leadconnectorhq.com/widget/booking/hMPscZkPh9yotIcxiIiD"
          id="hMPscZkPh9yotIcxiIiD_1781191036166"
        />
      </div>
    </main>
  );
}
