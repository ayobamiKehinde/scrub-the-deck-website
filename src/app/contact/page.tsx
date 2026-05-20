import styles from "./contact.module.css";

export const metadata = {
  title: "Book a Strategy Session — Scrub the Deck",
  description: "Book a free strategy session with Scrub the Deck. Limited spots available each quarter.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Limited spots available</p>
          <h1 className={styles.heading}>
            Book a free <em>strategy session.</em>
          </h1>
          <p className={styles.sub}>
            Tell us about your raise. We&apos;ll tell you exactly what your deck needs.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>

          <div className={styles.formSide}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Jane Smith"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="jane@startup.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="company">Company name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="Your startup"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="stage">Funding stage</label>
                <select id="stage" name="stage" className={styles.select}>
                  <option value="">Select a stage</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B+</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">What do you need?</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Tell us about your company, your raise target, and where you're stuck."
                />
              </div>

              <button type="submit" className={styles.submit}>
                Send message →
              </button>
            </form>
          </div>

          <aside className={styles.infoSide}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Typical response</p>
              <p className={styles.infoValue}>Within 24 hours</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Session length</p>
              <p className={styles.infoValue}>30 minutes, free</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Availability</p>
              <p className={styles.infoValue}>Limited — {new Date().getFullYear()} Q{Math.ceil((new Date().getMonth() + 1) / 3)} cohort</p>
            </div>
            <blockquote className={styles.pullQuote}>
              &ldquo;Worth every penny. Closed the round in three weeks.&rdquo;
              <cite className={styles.cite}>— Kara, FinTech Founder</cite>
            </blockquote>
          </aside>

        </div>
      </section>

    </main>
  );
}
