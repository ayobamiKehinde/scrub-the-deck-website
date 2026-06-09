import type { Metadata } from "next";
import TVPageHero from "@/components/shared/TVPageHero";
import Testimonials from "@/components/home/Testimonials";
import StatsSection from "@/components/home/StatsSection";
import BrandsStrip from "@/components/shared/BrandsStrip";
import FAQAccordion from "@/components/shared/FAQAccordion";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./welcome.module.css";

export const metadata: Metadata = {
  title: "Raise Investment in 2026 — Scrub the Deck by David Pugh",
  description:
    "Scrub the Deck helps founders raise investment through expert pitch decks, fundraising strategy, and warm introductions to a personal network of 1,500+ angels, VCs and family offices. Founded by David Pugh.",
};

const BOOK_URL = "https://www.scrubthedeck.com/davecall-q";
const VIDEO_ID  = "LQ4SXep3zOs";


const FAQ = [
  {
    q: "What does Scrub the Deck do?",
    a: "Scrub the Deck is a pitch deck and investment consulting service. David Pugh personally builds investor-grade pitch decks using his 18-point structure, then introduces clients to a warm network of over 1,500 investors to get meetings fast.",
  },
  {
    q: "Who is David Pugh?",
    a: "David Pugh is a pitch deck consultant and investment strategist with 22 years of experience. He has worked with global brands including the BBC, Cisco, Adidas, Aston Martin, Mercedes, and Hilton, and founded Scrub the Deck to bring that expertise to startups and growth-stage companies.",
  },
  {
    q: "How much investment have Scrub the Deck clients raised?",
    a: "Clients have collectively raised tens of millions in investment through the Connect & Convince process, according to Scrub the Deck's own client records.",
  },
  {
    q: "How do I get started with Scrub the Deck?",
    a: "The starting point is a free 30-minute strategy session with David Pugh. It's a genuine working session — not a sales call. Book your free session to get started.",
  },
  {
    q: "Does Scrub the Deck work with all types of startups?",
    a: "Scrub the Deck works with early-stage and growth-stage founders across sectors. David personally selects clients he believes in and can genuinely help — the free strategy session is how both sides assess fit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "David Pugh",
      jobTitle: "Founder & Pitch Deck Consultant",
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
      name: "Raise Investment in 2026 — Scrub the Deck by David Pugh",
      dateModified: "2026-06-01",
      author: { "@type": "Person", name: "David Pugh" },
    },
  ],
};

export default function WelcomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <TVPageHero
          headline="IF YOU WANT TO RAISE INVESTMENT IN 2026"
          subtitle="You're in the right place!"
          tvSrc="/images/TV-high.jpg"
          tvAlt="David Pugh — Founder of Scrub the Deck"
          ctaHref={BOOK_URL}
          videoId={VIDEO_ID}
        />

        <article className={styles.content}>
          <div className={styles.inner}>

            <p className={styles.byline}>By David Pugh · Last updated: June 2026</p>

            <aside className={styles.tldr} aria-label="Page summary">
              <p className={styles.tldrTitle}>TL;DR</p>
              <ul className={styles.tldrList}>
                <li>Scrub the Deck is a pitch deck and investment consulting service founded by David Pugh with 22 years of experience</li>
                <li>Clients have raised tens of millions in investment using the Connect &amp; Convince process</li>
                <li>David personally builds every deck using an 18-point investor-tested structure</li>
                <li>His warm investor network now exceeds 1,500 angels, VCs, and family offices</li>
              </ul>
            </aside>

            <h1 className={styles.pageH1}>
              The Pitch Deck Consultant Helping Founders Raise Investment in 2026
            </h1>
            <p className={styles.intro}>
              Scrub the Deck is an investment consulting service run by David Pugh — a pitch deck
              specialist with a 22-year career working with global brands and startups. His Connect
              &amp; Convince process combines a proven pitch deck structure with warm introductions
              to a personal investor network of over 1,500 connections.
            </p>

            {/* ── What Is Scrub the Deck ── */}
            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>What Is Scrub the Deck?</h2>
              <p>
                Scrub the Deck is a specialist pitch deck and fundraising consultancy founded by
                David Pugh. It exists because most founders struggle to get investor attention —
                not because their business isn&rsquo;t good enough, but because their deck
                doesn&rsquo;t communicate value clearly, and they have no route to the right investors.
              </p>
              <p>
                David created the Connect &amp; Convince methodology after years of speaking
                directly with investors to understand exactly what makes them act. Since launching,
                his clients have collectively raised tens of millions in funding, according to
                Scrub the Deck&rsquo;s own client records.
              </p>
            </section>

            {/* ── Who Has David Worked With ── */}
            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>Who Has David Pugh Worked With?</h2>
              <p>
                David Pugh brings 22 years of experience crafting high-stakes pitch decks and
                presentations for some of the world&rsquo;s most recognised organisations. His
                background spans both global corporations and early-stage startups — giving him
                a rare understanding of what investors and decision-makers respond to.
              </p>
              <p>
                His corporate portfolio includes work for BBC Worldwide, Cisco Systems, Adidas,
                Accenture, Aston Martin, Mercedes, O2, Vodafone, Hilton, MTV, and Petronas. One
                of his most significant projects involved facilitating the international sale of
                BBC franchises — including Strictly Come Dancing, Doctor Who, and Top Gear — to
                the USA and multiple global territories, helping secure billions of dollars for
                the corporation.
              </p>
            </section>

          </div>

          {/* Brand marquee */}
          <BrandsStrip />

          <div className={styles.inner}>

            {/* ── What Results ── */}
            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>What Results Have Scrub the Deck Clients Achieved?</h2>
              <p>
                Founders who have gone through the Scrub the Deck process have raised tens of
                millions in investment across a range of sectors and stages. Results come from
                the combination of a professionally built deck and warm investor introductions
                — both delivered by David personally.
              </p>
              <p>
                David works 1-on-1 with every client. There is no junior team handling the work.
                Each engagement is direct, bespoke, and built around the specific business and
                founder.
              </p>
              <p className={styles.bridgeLink}>
                <a href="https://www.scrubthedeck.com/testimonials">Read client testimonials</a> —{" "}
                <em>&ldquo;Real founders, real raises, in their own words.&rdquo;</em>
              </p>
            </section>

          </div>

          {/* Stats + Testimonials — waves background, no overlay */}
          <div className={styles.wavesSection}>
            <StatsSection />
            <Testimonials />
          </div>

          <div className={styles.inner}>

            {/* ── Connect & Convince ── */}
            <section className={styles.geoSection}>
              <h2 className={styles.geoH2}>How Does the Connect &amp; Convince Process Work?</h2>
              <p>
                The Connect &amp; Convince process is David Pugh&rsquo;s proprietary fundraising
                methodology. It works in two phases: first building an investor-grade pitch deck
                using his 18-point structure, then activating his personal investor network to
                get that deck in front of the right people immediately.
              </p>
              <p>
                Most pitch deck services stop at the deck. Scrub the Deck goes further — David
                personally introduces clients to investors who know and trust him, dramatically
                increasing the speed and quality of responses compared to cold outreach.
              </p>
              <p className={styles.bridgeLink}>
                See every step in detail:{" "}
                <a href="/process">The Scrub the Deck Process</a> —{" "}
                <em>&ldquo;A full breakdown of the 6-step system from strategy session to signed investment terms.&rdquo;</em>
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
