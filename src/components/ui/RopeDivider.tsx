import styles from "./RopeDivider.module.css";

export default function RopeDivider() {
  return (
    <div className={styles.rope} aria-hidden="true">
      <img src="/images/rope-divider.png" alt="" className={styles.img} />
    </div>
  );
}
