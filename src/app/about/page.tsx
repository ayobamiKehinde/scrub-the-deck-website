import styles from "./about.module.css";

export const metadata = {
  title: "About — Scrub the Deck",
  description: "The story behind Scrub the Deck — the pitch deck agency with an 81% raise success rate.",
};

const STATS = [
  { value: "81%",   label: "Raise success rate" },
  { value: "£47M+", label: "Raised for clients" },
  { value: "200+",  label: "Decks crafted" },
  { value: "7+",    label: "Years experience" },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* ── Page hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Our story</p>
          <h1 className={styles.heading}>
            Built to help founders <em>raise.</em>
          </h1>
          <p className={styles.sub}>
            Scrub the Deck is a pitch deck agency with one obsession: turning great ideas into rounds that close.
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

      {/* ── Bio ── */}
      <section className={styles.bio}>
        <div className={styles.bioInner}>
          <div className={styles.bioPhoto}>
            <div className={styles.photoPlaceholder}>
              <span>Photo coming soon</span>
            </div>
          </div>

          <div className={styles.bioText}>
            <h2 className={styles.bioHeading}>
              From the boardroom to the pitch room.
            </h2>
            <p className={styles.bioPara}>
              Scrub the Deck was built on years inside the investment world — advising founders, reviewing hundreds of decks, and sitting in the rooms where decisions get made. We know exactly what investors are looking for before a word is spoken.
            </p>
            <p className={styles.bioPara}>
              The agency was born from a simple observation: most founders are brilliant at building, but struggle to translate that brilliance onto slides. The wrong narrative costs rounds. The right one closes them.
            </p>
            <p className={styles.bioPara}>
              We work with a small number of founders each quarter — seed through Series B — helping them build decks that don't just look premium, but tell a story investors can't ignore.
            </p>
            <a href="/contact" className={styles.cta}>
              Work with us →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
