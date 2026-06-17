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
        <h1 className={styles.heading}>Thank you for booking</h1>

        <div className={styles.videoWrap}>
          <iframe
            src="https://www.youtube.com/embed/l-DZWPnRPvA?rel=0&modestbranding=1"
            allow="fullscreen"
            allowFullScreen
            title="A message from David Pugh"
            className={styles.video}
          />
        </div>

        <a href="/faq" className={styles.faqLink}>
          Click Here for FAQ Videos (less than 10 mins total)
        </a>

        <p className={styles.body}>
          Looking forward to our chat, in the meantime please have a look at the following link. As this will help us get the very most out of our time on the call.
        </p>

        <p className={styles.signoff}>Chat soon :)</p>
      </div>
    </main>
  );
}
