import styles from "./VideoPageBg.module.css";

export default function VideoPageBg() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className={styles.video}
      >
        <source src="/media/loop-digital-sea.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
    </>
  );
}
