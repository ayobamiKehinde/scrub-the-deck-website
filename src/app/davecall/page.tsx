import type { Metadata } from "next";
import CalendarEmbed from "@/components/shared/CalendarEmbed";
import styles from "./davecall.module.css";

export const metadata: Metadata = {
  title: "Book a Call with David Pugh – Scrub the Deck",
  description: "Book your free strategy session with David Pugh, founder of Scrub the Deck. Get expert advice on raising investment for your startup.",
  robots: { index: false, follow: false },
};

export default function DaveCallPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Free Strategy Session</p>
        <h1 className={styles.heading}>Book a Call with David Pugh</h1>
        <p className={styles.sub}>Choose a time that works for you</p>
        <CalendarEmbed
          src="https://api.leadconnectorhq.com/widget/booking/TLw6QW1hpxCbLTzqVU6g"
          id="TLw6QW1hpxCbLTzqVU6g_1781190938339"
        />
      </div>
    </main>
  );
}
