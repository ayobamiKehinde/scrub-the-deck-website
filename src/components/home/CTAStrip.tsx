import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Ready to raise?</p>
        <h2 className={styles.heading}>
          Stop losing rounds.<br />
          <em>Start closing them.</em>
        </h2>
        <p className={styles.sub}>
          We work with a small number of founders each quarter.<br />
          Book a free strategy session before the next cohort fills.
        </p>
        <a href="/contact" className={styles.btn}>
          Book a Free Strategy Session
        </a>
      </div>
    </section>
  );
}
