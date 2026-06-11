import type { Metadata } from "next";
import Image from "next/image";
import BrandsStrip from "@/components/shared/BrandsStrip";
import FAQAccordion from "@/components/shared/FAQAccordion";
import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About David Pugh - Founder of Scrub the Deck",
  description:
    "David Pugh is a pitch deck consultant and investment strategist with 22 years of experience. He helped facilitate the BBC's international franchise sale and founded Scrub the Deck to bring that expertise to startups.",
};

const BOOK_URL = "https://www.scrubthedeck.com/bookacall-t-form";

const STATS = [
  { value: "81%",    label: "Raise success rate" },
  { value: "£30M+",  label: "Raised for clients" },
  { value: "100+",   label: "Decks crafted" },
  { value: "1,500+", label: "Investor connections" },
];

const FAQ = [
  {
    q: "What is Scrub the Deck?",
    a: "Scrub the Deck is a pitch deck and investment consulting service. David Pugh personally builds investor-grade pitch decks using his 18-point structure, then introduces clients to a warm network of over 1,500 investors to get meetings fast.",
  },
  {
    q: "Who is David Pugh?",
    a: "David Pugh is a pitch deck consultant and investment strategist with 22 years of experience. He has worked with global brands including the BBC, Cisco, Adidas, Aston Martin, Mercedes, and Hilton, and founded Scrub the Deck to bring that expertise to startups and growth-stage companies.",
  },
  {
    q: "How much investment have Scrub the Deck clients raised?",
    a: "Clients have collectively raised tens of millions in investment through the Connect and Convince process, according to Scrub the Deck's own client records.",
  },
  {
    q: "How do I get started with Scrub the Deck?",
    a: "The starting point is a free 30-minute strategy session with David Pugh. It's a genuine working session, not a sales call. Book your free session to get started.",
  },
  {
    q: "Does Scrub the Deck work with all types of startups?",
    a: "Scrub the Deck works with early-stage and growth-stage founders across sectors. David personally selects clients he believes in and can genuinely help. The free strategy session is how both sides assess fit.",
  },
];

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

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>The Founder</p>
            <h1 className={styles.heading}>
              About <em>David Pugh</em>
            </h1>
            <p className={styles.sub}>
              22 years building decks that raise money. Investor network of 1,500+.
              A process that works.
            </p>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className={styles.statsBar}>
          <div className={styles.statsInner}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.rope}><RopeDivider /></div>

        {/* ── Bio ── */}
        <section className={styles.bio}>
          <div className={styles.bioInner}>
            <div className={styles.bioPhoto}>
              <Image
                src="/images/founder-image-new.png"
                alt="David Pugh, Founder of Scrub the Deck"
                width={480}
                height={560}
                className={styles.bioPhotoImg}
              />
            </div>

            <div className={styles.bioText}>
              <p className={styles.byline}>By David Pugh · Last updated: June 2026</p>

              <h2 className={styles.bioHeading}>
                Senior Designer Turned Pitch Deck Expert
              </h2>
              <p className={styles.bioPara}>
                David Pugh is a pitch deck consultant and investment strategist with over 22 years
                of experience as a senior designer. He has crafted high-stakes presentations and
                pitch decks for some of the world&rsquo;s most recognised organisations, including
                the BBC, Cisco Systems, Adidas, Accenture, Aston Martin, Mercedes, O2, Vodafone,
                Hilton, MTV, and Petronas.
              </p>
              <p className={styles.bioPara}>
                One of David&rsquo;s most significant achievements was facilitating the international
                sale of BBC franchises, including Strictly Come Dancing, Doctor Who, and Top Gear,
                to the USA and multiple global territories, helping secure billions of dollars
                for the corporation.
              </p>
              <p className={styles.bioPara}>
                David founded Scrub the Deck&reg; after recognising a consistent pattern:
                founders with great businesses were failing to raise investment not because their
                ideas weren&rsquo;t good enough, but because their pitch decks didn&rsquo;t
                communicate value clearly, and they had no route to the right investors.
              </p>
              <p className={styles.bioPara}>
                He created the Connect &amp; Convince methodology, an 18-point pitch deck
                structure developed and refined through direct conversations with investors,
                combined with warm introductions to his personal investor network of over
                1,500 angels, VCs, and family offices.
              </p>
              <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
            </div>
          </div>
        </section>

        <div className={styles.rope}><RopeDivider /></div>

        {/* ── GEO sections ── */}
        <article className={styles.geoContent}>
          <div className={styles.geoInner}>

            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>What Is the Connect and Convince Process?</h2>
              <p>
                The Connect &amp; Convince process is David Pugh&rsquo;s proprietary fundraising
                methodology. It works in two phases: first building an investor-grade pitch deck
                using his 18-point structure, then activating his personal investor network to
                get that deck in front of the right people immediately.
              </p>
              <p>
                Most pitch deck services stop at the deck. Scrub the Deck goes further. David
                personally introduces clients to investors who know and trust him, dramatically
                increasing the speed and quality of responses compared to cold outreach.
              </p>
              <p>
                See every step in detail: <a href="/process">The Scrub the Deck Process</a>{" "}
                <em>&ldquo;A full breakdown of the 6-step system from strategy session to signed investment terms.&rdquo;</em>
              </p>
            </section>

            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>Who Has David Pugh Worked With?</h2>
              <p>
                David Pugh brings 22 years of experience crafting high-stakes pitch decks and
                presentations for some of the world&rsquo;s most recognised organisations. His
                background spans both global corporations and early-stage startups, giving him
                a rare understanding of what investors and decision-makers respond to.
              </p>
              <p>
                His corporate portfolio includes work for BBC Worldwide, Cisco Systems, Adidas,
                Accenture, Aston Martin, Mercedes, O2, Vodafone, Hilton, MTV, and Petronas. One
                of his most significant projects involved facilitating the international sale of
                BBC franchises, including Strictly Come Dancing, Doctor Who, and Top Gear, to
                the USA and multiple global territories, helping secure billions of dollars for
                the corporation.
              </p>
            </section>

          </div>

          <BrandsStrip label="Brands David has worked with" />

          <div className={styles.geoInner}>

            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>What Results Have Scrub the Deck Clients Achieved?</h2>
              <p>
                Founders who have gone through the Scrub the Deck process have raised tens of
                millions in investment across a range of sectors and stages. Results come from
                the combination of a professionally built deck and warm investor introductions,
                both delivered by David personally.
              </p>
              <p>
                David works 1-on-1 with every client. There is no junior team handling the work.
                Each engagement is direct, bespoke, and built around the specific business and
                founder.
              </p>
              <p>
                Read client testimonials:{" "}
                <a href="/welcome">Real founders, real raises, in their own words.</a>
              </p>
            </section>

            {/* ── FAQ ── */}
            <section className={styles.faqSection}>
              <h2 className={styles.faqH2}>Frequently Asked Questions About Scrub the Deck</h2>
              <FAQAccordion items={FAQ} />
            </section>

            <div className={styles.finalCta}>
              <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
            </div>

          </div>
        </article>

      </main>
    </>
  );
}
