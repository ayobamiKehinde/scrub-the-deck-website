import type { Metadata } from "next";
import styles from "./thank-you.module.css";

export const metadata: Metadata = {
  title: "Thank You for Booking – Scrub the Deck",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>You&rsquo;re booked in</p>
        <h1 className={styles.heading}>Thank you for booking</h1>
        <p className={styles.body}>
          Looking forward to our chat. In the meantime please have a look at the following link — it will help us get the very most out of our time on the call.
        </p>
        <a href="/faq" className={styles.faqLink}>
          Click Here for FAQ Videos <span>(less than 10 mins total)</span>
        </a>
        <p className={styles.signoff}>Chat soon&nbsp;:)</p>

        <div className={styles.videoWrap}>
          <iframe
            src="https://www.youtube.com/embed/l-DZWPnRPvA?rel=0&modestbranding=1"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="A message from David Pugh"
            className={styles.video}
          />
        </div>
      </div>
    </main>
  );
}
