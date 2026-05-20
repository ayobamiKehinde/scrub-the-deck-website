import styles from "./services.module.css";

export const metadata = {
  title: "Pitch Deck Services — Scrub the Deck",
  description: "From a rapid deck audit to a full investor-ready pitch pack. Choose the service that matches your raise.",
};

const SERVICES = [
  {
    tag: "Most popular",
    name: "Full Pitch Pack",
    price: "From £[TBC]",
    description:
      "Your full pitch deck built from scratch. Strategy, narrative, design, and financial storytelling — everything an investor needs to say yes.",
    includes: [
      "Founder discovery session",
      "Narrative strategy framework",
      "Full deck design (10–15 slides)",
      "Two rounds of revisions",
      "Investor-ready PDF + editable file",
    ],
    turnaround: "10–14 days",
    cta: "Book a free call",
  },
  {
    tag: null,
    name: "Deck Audit",
    price: "From £[TBC]",
    description:
      "Already have a deck? We review it with an investor's eye and deliver a detailed written brief on what to fix and why.",
    includes: [
      "Full deck review",
      "Written feedback report",
      "Priority fix list",
      "30-min debrief call",
    ],
    turnaround: "3–5 days",
    cta: "Book a free call",
  },
  {
    tag: null,
    name: "Investor Ready",
    price: "From £[TBC]",
    description:
      "The full package. Full Pitch Pack plus live investor prep sessions, Q&A coaching, and warm introduction strategy.",
    includes: [
      "Everything in Full Pitch Pack",
      "2× mock investor sessions",
      "Q&A coaching",
      "Warm intro strategy session",
      "60-day post-launch support",
    ],
    turnaround: "14–21 days",
    cta: "Book a free call",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>What we do</p>
          <h1 className={styles.heading}>
            Pitch deck services <em>that close rounds.</em>
          </h1>
          <p className={styles.sub}>
            Three ways to work with us. All built around one goal: getting you funded.
          </p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className={styles.cards}>
        <div className={styles.cardsInner}>
          {SERVICES.map((s) => (
            <article key={s.name} className={styles.card}>
              {s.tag && <span className={styles.tag}>{s.tag}</span>}
              <p className={styles.price}>{s.price}</p>
              <h2 className={styles.cardName}>{s.name}</h2>
              <p className={styles.cardDesc}>{s.description}</p>
              <ul className={styles.includes}>
                {s.includes.map((item) => (
                  <li key={item} className={styles.includesItem}>
                    <span className={styles.tick}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span className={styles.turnaround}>⏱ {s.turnaround}</span>
                <a href="/contact" className={styles.cta}>{s.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Note ── */}
      <section className={styles.note}>
        <div className={styles.noteInner}>
          <p className={styles.noteText}>
            Pricing confirmed on your free strategy call. We take on a limited number of clients each quarter.
          </p>
        </div>
      </section>

    </main>
  );
}
