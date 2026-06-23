import type { Metadata } from "next";
import PictureTestimonials from "@/components/shared/PictureTestimonials";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./testimonials.module.css";

export const metadata: Metadata = {
  title: "Client Testimonials – Scrub the Deck",
  description:
    "Real testimonials from founders who raised investment with Scrub the Deck. See what clients say about working with David Pugh and the pitch deck process.",
  openGraph: {
    title: "Client Testimonials – Scrub the Deck",
    description: "Real testimonials from founders who raised investment with Scrub the Deck.",
    images: [{ url: "/images/parrot-icon.jpeg", width: 1200, height: 630, alt: "Scrub the Deck" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/parrot-icon.jpeg"],
  },
};

const VIDEOS = [
  { id: "q3O4s3LBLvc" },
  { id: "Xu9UHAzF8Ns" },
  { id: "AXW3JaEdP7o" },
  { id: "ESsuPMNoWU8" },
  { id: "T09LioATiWM" },
  { id: "hfOEN_HIdfk" },
  { id: "ydSV_XjxReM" },
  { id: "WeemMI5dk8Q" },
  { id: "PJYiTuin8Yk" },
  { id: "z1Lahe7qq-I" },
  { id: "e5v0kEtz5wU" },
  { id: "CBQ7UC3UgQo" },
  { id: "zN-9jjFPQeI" },
  { id: "eAWkrr6tEqU", start: 3 },
  { id: "n-6O9QP5uls" },
  { id: "A_DOYcBJzpU" },
  { id: "uAiGtsAQ5RA" },
  { id: "QSOgcwYQr3Q" },
];

export default function TestimonialsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>WHAT CLIENTS SAY</h1>
        <p className={styles.sub}>in their own words</p>

        <div className={styles.videos}>
          {VIDEOS.map(({ id, start }) => {
            const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
            if (start) params.set("start", String(start));
            return (
              <div key={id} className={styles.videoWrap}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}?${params}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Client testimonial"
                  className={styles.video}
                />
              </div>
            );
          })}
        </div>
      </div>

      <PictureTestimonials />

      <div className={styles.ctaWrap}>
        <GoldButton href="/davecall-q" label="Book a Call" size="lg" />
      </div>
    </main>
  );
}
