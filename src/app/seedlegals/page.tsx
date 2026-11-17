import type { Metadata } from "next";
import TVPageHero from "@/components/shared/TVPageHero";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/home/StatsSection";
import BrandsStrip from "@/components/shared/BrandsStrip";
import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import PictureTestimonials from "@/components/shared/PictureTestimonials";
import styles from "../welcome/welcome.module.css";

export const metadata: Metadata = {
  title: "Free Investor Deck Readiness Review for SeedLegals Members - Scrub the Deck",
  description:
    "Scrub the Deck is an official SeedLegals partner. SeedLegals members can book a free investor deck readiness review with founder David Pugh.",
};

const BOOK_URL = "/davecall-q";
const VIDEO_ID  = "LQ4SXep3zOs";

export default function SeedLegalsPage() {
  return (
    <main>
      <TVPageHero
        headline={<>BOOK YOUR <span className={styles.headlineAccent}>FREE</span> INVESTOR DECK READINESS REVIEW</>}
        ariaLabel="Book your free investor deck readiness review"
        subtitle="Exclusive offer for Seedlegals members"
        tvSrc="/images/TV-no-background.png"
        tvAlt="David Pugh, Founder of Scrub the Deck"
        ctaHref={BOOK_URL}
        videoId={VIDEO_ID}
        noBlend
        compact
        logoSrc="/images/logo-silver.png"
        partnerLogoSrc="/images/seedlegals-partner.png"
        partnerLogoAlt="SeedLegals official partner"
        logoHref="/"
      />

      <BrandsStrip label="Some of the clients I've worked with in a 20 year career" />

      <StatsSection wooden />

      <Testimonials alwaysShowAll />

      <PictureTestimonials />

      <div className={styles.bookCta}>
        <RopeDivider />
        <div className={styles.bookCtaContent}>
          <p className={styles.bookCtaHeading}>READY TO RAISE INVESTMENT?</p>
          <p className={styles.bookCtaSub}>Book your free deck readiness review with founder Dave Pugh</p>
          <div className={styles.bookCtaBtnWrap}>
            <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
          </div>
        </div>
        <RopeDivider />
      </div>
    </main>
  );
}
