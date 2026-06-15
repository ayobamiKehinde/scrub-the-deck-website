import type { Metadata } from "next";
import styles from "./branding.module.css";

export const metadata: Metadata = {
  title: "Talks on Branding – Scrub the Deck",
  robots: { index: false, follow: false },
};

const VIDEOS = [
  "ktyY6p_B7mM",
  "sS5PMfJcF2E",
  "6kwboZSFyzc",
  "5wNl0ZG-p9o",
  "2Wfm9sFbhwY",
  "mIAP6auOwm8",
];

export default function BrandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>TALKS ON BRANDING</h1>
        <p className={styles.sub}>with David Pugh</p>
        <a href="/davecall-q" className={styles.cta}>Speak to David</a>

        <div className={styles.videos}>
          {VIDEOS.map((id) => (
            <div key={id} className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Talks on Branding"
                className={styles.video}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
