"use client";

import Script from "next/script";
import TVPageHero from "@/components/shared/TVPageHero";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/home/StatsSection";
import BrandsStrip from "@/components/shared/BrandsStrip";
import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import PictureTestimonials from "@/components/shared/PictureTestimonials";
import styles from "../welcome/welcome.module.css";

const BOOK_URL = "/davecall-q";
const VIDEO_ID  = "LQ4SXep3zOs";
const META_PIXEL_ID = "1015514056864712";

export default function MetaPage() {
  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <main>
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

        <Testimonials alwaysShowAll />

        <PictureTestimonials />

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
    </>
  );
}
