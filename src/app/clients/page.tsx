import type { Metadata } from "next";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./clients.module.css";

export const metadata: Metadata = {
  title: "Our Clients | Scrub the Deck",
  description:
    "Founders who raised investment with Scrub the Deck's pitch decks, and 22 years of creative work for brands including BBC, Mercedes, Hilton, and MTV.",
  alternates: { canonical: "https://scrubthedeck.com/clients" },
};

const FOUNDERS = [
  {
    name: "Ian Humphreys",
    role: "CEO",
    company: "Brickflow",
    outcome: "£2M+ raised",
    linkedin: "https://uk.linkedin.com/in/ianjhumphreys",
    image: "ian-humphreys.jpg",
  },
  {
    name: "Philip Werner",
    role: "Founder",
    company: "Maekersuite",
    outcome: "£650K raised",
    linkedin: "https://www.linkedin.com/in/philip-werner-8851ba155/",
    image: "philip-werner.jpg",
  },
  {
    name: "Nick van Dijk",
    role: "CEO",
    company: "Oort Energy",
    outcome: "$10M+ raised",
    linkedin: "https://www.linkedin.com/in/nick-van-dijk-9005aa4/",
    image: "nick.jpg",
  },
  {
    name: "Aaron Phethean",
    role: "Co-Founder",
    company: "Meltano",
    outcome: "£500K+ raised",
    linkedin: "https://uk.linkedin.com/in/aaron-phethean",
    image: "aaron-pheatan.jpg",
  },
  {
    name: "Elliott Myers",
    role: "CEO",
    company: "RotoVR",
    outcome: "£7M raised",
    linkedin: "https://uk.linkedin.com/in/elliott-myers-b8917015",
    image: "elliott-myers.jpg",
  },
  {
    name: "Kara Stanford",
    role: "Founder",
    company: "Insight Delivered",
    outcome: "$300K raised",
    linkedin: null,
    image: "kara-stanford.jpg",
  },
  {
    name: "Aramide Adebanjo",
    role: "Co-Founder",
    company: "Gist Mobile",
    outcome: "£500K+ raising",
    linkedin: "https://www.linkedin.com/in/aramideadebanjo/",
    image: "aramide.jpg",
  },
  {
    name: "Manoli Yannaghas",
    role: "CEO",
    company: "VoltVision",
    outcome: "£1.2M raised",
    linkedin: "https://uk.linkedin.com/in/manoli-yannaghas",
    image: "manoli.jpg",
  },
];

const PORTFOLIO_BRANDS = [
  {
    name: "BBC Worldwide",
    category: "Brand & Campaign",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/bbc-worldwide/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2017/04/bbc-ww.png",
  },
  {
    name: "BBC Earth",
    category: "Presentation Design",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/bbc-earth/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/00-Intro-screen-white.jpg",
  },
  {
    name: "Mercedes AMG",
    category: "Pitch & Brand",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/mercedes-amg/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/ABCofAMG_visual_03-1.jpg",
  },
  {
    name: "Hilton",
    category: "Campaign Design",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/hilton/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/19th-Dec-closed.jpg",
  },
  {
    name: "MTV",
    category: "Creative Direction",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/mtv/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/student-of-the-year-logo-design.jpg",
  },
  {
    name: "Top Gear USA",
    category: "Brand Identity",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/top-gear-usa/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2018/03/TGusa.jpg",
  },
  {
    name: "BMW M Series",
    category: "Campaign Design",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/bmw-m-series/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/BMW-design-1.jpg",
  },
  {
    name: "Kellogg's",
    category: "Brand Campaign",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/kelloggs/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/05/kelloggswe7.png",
  },
  {
    name: "Jim Beam",
    category: "Presentation Design",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/jim-beam/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2014/08/jimbeampicbig.jpg",
  },
  {
    name: "Golfbreaks",
    category: "Brand Design",
    url: "https://www.freelancegraphicdesigner.co.uk/portfolio/golfbreaks/",
    image: "https://www.freelancegraphicdesigner.co.uk/wp-content/uploads/2017/04/golfer.png",
  },
];

const clientsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scrubthedeck.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Clients",
          item: "https://scrubthedeck.com/clients",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Founders who raised investment with Scrub the Deck",
      description:
        "Pitch deck clients of David Pugh, Founder of Scrub the Deck, who successfully raised investment after working together.",
      numberOfItems: FOUNDERS.length,
      itemListElement: FOUNDERS.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: f.name,
          jobTitle: f.role,
          worksFor: { "@type": "Organization", name: f.company },
          ...(f.linkedin ? { sameAs: f.linkedin } : {}),
        },
      })),
    },
  ],
};

export default function ClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsJsonLd) }}
      />

      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Client results</p>
            <h1 className={styles.heading}>
              The founders who <em>raised.</em>
            </h1>
            <p className={styles.sub}>
              82% of founders we work with secure investment. Here are the people
              behind those numbers.
            </p>
          </div>
        </section>

        {/* Funded founders */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>Funded founders</h2>
              <p className={styles.sectionSub}>
                Founders who raised investment after working with David Pugh on
                their pitch deck.
              </p>
            </div>

            <div className={styles.foundersGrid}>
              {FOUNDERS.map((f) => (
                <div key={f.name} className={styles.founderCard}>
                  <img
                    src={`/images/testimonials/${f.image}`}
                    alt={`${f.name}, ${f.role} at ${f.company}`}
                    className={styles.founderThumb}
                    loading="lazy"
                  />
                  <div className={styles.founderInfo}>
                    <span className={styles.outcome}>{f.outcome}</span>
                    {f.linkedin ? (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.founderName}
                        aria-label={`${f.name} on LinkedIn`}
                      >
                        {f.name} ↗
                      </a>
                    ) : (
                      <span className={styles.founderNameStatic}>{f.name}</span>
                    )}
                    <p className={styles.founderRole}>
                      {f.role}, {f.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design portfolio */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>Design &amp; presentation work</h2>
              <p className={styles.sectionSub}>
                22 years of presentation and brand design work for global
                organisations. Delivered by David Pugh.
              </p>
            </div>

            <div className={styles.brandsGrid}>
              {PORTFOLIO_BRANDS.map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.brandCard}
                >
                  <img
                    src={b.image}
                    alt={`${b.name} — ${b.category} by David Pugh`}
                    className={styles.brandImg}
                    loading="lazy"
                  />
                  <div className={styles.brandOverlay}>
                    <span className={styles.brandName}>{b.name}</span>
                    <span className={styles.brandCategory}>{b.category}</span>
                    <span className={styles.brandArrow}>View project ↗</span>
                  </div>
                </a>
              ))}
            </div>

            <p className={styles.portfolioNote}>
              Full portfolio at{" "}
              <a
                href="https://www.freelancegraphicdesigner.co.uk/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portfolioLink}
              >
                freelancegraphicdesigner.co.uk
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaHeading}>Ready to be next?</p>
            <p className={styles.ctaSub}>
              Work with David on your pitch deck and get introduced to 1,500+
              investors.
            </p>
            <GoldButton href="/davecall-q" label="Book a Call" size="lg" />
          </div>
        </section>
      </main>
    </>
  );
}
