import GoldButton from "@/components/ui/GoldButton";
import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>RISE UP WITH INVESTMENT</h2>
          <p className={styles.sub}>Spread your wings</p>
          <p className={styles.body}>
            Before I created this brand, I saw that founders were really struggling to grab
            an investor&rsquo;s attention. They were constantly rejected — or worse, ignored.
            I made it my goal to speak directly to investors in my network and extract the
            formula they define. After several years of trial-and-error, testing everything
            the hard way — I&rsquo;ve finally cracked it.
          </p>
          <GoldButton label="Book a Call" href="/contact" size="lg" />
        </div>
      </div>
    </section>
  );
}
