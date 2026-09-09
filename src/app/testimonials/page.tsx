import type { Metadata } from "next";
import Testimonials from "@/components/home/Testimonials";
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

export default function TestimonialsPage() {
  return (
    <main className={styles.page}>
      <Testimonials alwaysShowAll />
      <PictureTestimonials />
      <div className={styles.ctaWrap}>
        <GoldButton href="/davecall-q" label="Book a Call" size="lg" />
      </div>
    </main>
  );
}
