import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <div className={styles.titleGroup}>
            <h2 className={styles.heading}>RISE UP WITH INVESTMENT</h2>
            <p className={styles.sub}>Spread your wings</p>
          </div>
          <p className={styles.body}>
            Investors don&rsquo;t fund ideas. They fund founders who speak their language.
            After 22 years and 1,500+ investor relationships, we know exactly what goes into
            a presentation that can convince an investor without you being in the room.
            Scrub the Deck translates your business into the language that closes rounds.
          </p>
          <GoldButton label="Book a Call" href="/davecall-q" size="lg" />
        </div>
      </div>
      <div className={styles.rope}><RopeDivider /></div>
    </section>
  );
}
