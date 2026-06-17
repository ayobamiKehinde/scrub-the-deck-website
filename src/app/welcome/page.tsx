import type { Metadata } from "next";
import TVPageHero from "@/components/shared/TVPageHero";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/home/StatsSection";
import BrandsStrip from "@/components/shared/BrandsStrip";
import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import PictureTestimonials from "@/components/shared/PictureTestimonials";
import VideoPageBg from "@/components/shared/VideoPageBg";
import styles from "./welcome.module.css";

export const metadata: Metadata = {
  title: "Raise Investment in 2026 - Scrub the Deck by David Pugh",
  description:
    "Scrub the Deck helps founders raise investment through expert pitch decks, fundraising strategy, and warm introductions to a personal network of 1,500+ angels, VCs and family offices. Founded by David Pugh.",
};

const BOOK_URL = "/davecall-q";
const VIDEO_ID  = "LQ4SXep3zOs";

export default function WelcomePage() {
  return (
    <main>
      <VideoPageBg />
      {/* Logo lives inside the hero so it sits on the sea texture — no dark gap */}
      <TVPageHero
        headline="IF YOU WANT TO RAISE INVESTMENT IN 2026"
        subtitle="You're in the right place!"
        tvSrc="/images/TV-no-background.png"
        tvAlt="David Pugh, Founder of Scrub the Deck"
        ctaHref={BOOK_URL}
        videoId={VIDEO_ID}
        noBlend
        compact
        logoSrc="/images/logo-silver.png"
      />

      <BrandsStrip label="Some of the clients I've worked with in a 20 year career" />

      <StatsSection wooden />

      {/* Video testimonials — show all on this page */}
      <Testimonials alwaysShowAll />

      {/* Written/picture testimonials with scroll animation */}
      <PictureTestimonials />

      {/* Final Book a Call CTA */}
      <div className={styles.bookCta}>
        <RopeDivider />
        <div className={styles.bookCtaContent}>
          <p className={styles.bookCtaHeading}>READY TO RAISE INVESTMENT?</p>
          <p className={styles.bookCtaSub}>Book a free call with founder Dave Pugh today</p>
          <div className={styles.bookCtaBtnWrap}>
            <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
          </div>
        </div>
        <RopeDivider />
      </div>
    </main>
  );
}
