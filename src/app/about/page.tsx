import type { Metadata } from "next";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About David Pugh - Founder of Scrub the Deck",
  description:
    "David Pugh is a pitch deck consultant and investment strategist with 22 years of experience. He helped facilitate the BBC's international franchise sale and founded Scrub the Deck to bring that expertise to startups.",
};

const BOOK_URL = "https://www.scrubthedeck.com/bookacall-t-form";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "David Pugh",
      jobTitle: "Founder and Pitch Deck Consultant",
      worksFor: {
        "@type": "Organization",
        name: "Scrub the Deck",
        url: "https://scrubthedeck.com",
      },
      url: "https://scrubthedeck.com/about",
      description:
        "Pitch deck consultant with 22 years of experience helping founders raise investment. Founder of Scrub the Deck.",
    },
    {
      "@type": "WebPage",
      name: "About David Pugh - Founder of Scrub the Deck",
      dateModified: "2026-06-01",
      author: { "@type": "Person", name: "David Pugh" },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={styles.page}>
        <section className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.grid}>

              <div className={styles.photoCol}>
                <Image
                  src="/images/david-about.jpg"
                  alt="David Pugh, Founder of Scrub the Deck"
                  width={520}
                  height={620}
                  className={styles.photo}
                  priority
                />
              </div>

              <div className={styles.textCol}>
                <p className={styles.eyebrow}>The Founder</p>
                <h1 className={styles.heading}>David Pugh</h1>

                <p className={styles.para}>
                  David Pugh holds a BA degree and boasts a 22-year career working with some of
                  the world&rsquo;s biggest brands as a senior designer, consultant, and communicator.
                </p>
                <p className={styles.para}>
                  One of his biggest achievements was facilitating the BBC&rsquo;s international
                  franchise sales, including Strictly Come Dancing, Doctor Who, and Top Gear, to
                  the USA and multiple global territories, helping to secure billions of dollars
                  for the corporation.
                </p>
                <p className={styles.para}>
                  He has created pitch decks for global brands and corporations including Cisco
                  Systems, Adidas, Accenture, Aston Martin, Mercedes, O2, Vodafone, Hilton, MTV,
                  and Petronas, giving him a rare understanding of what investors and
                  decision-makers respond to.
                </p>
                <p className={styles.para}>
                  David founded Scrub the Deck&reg; after recognising that founders with great
                  businesses were failing to raise investment not because their ideas weren&rsquo;t
                  good enough, but because their pitch decks didn&rsquo;t communicate value clearly
                  and they had no route to the right investors.
                </p>
                <p className={styles.para}>
                  He created the Connect &amp; Convince methodology: an 18-point pitch deck
                  structure developed through direct feedback from investors, combined with warm
                  introductions to his personal network of over 1,500 angels, VCs, and family offices.
                </p>

                <div className={styles.cta}>
                  <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
