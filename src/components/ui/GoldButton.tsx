import styles from "./GoldButton.module.css";

interface GoldButtonProps {
  label: string;
  href?: string;
  size?: "sm" | "lg";
  onClick?: () => void;
}

export default function GoldButton({ label, href, size = "lg", onClick }: GoldButtonProps) {
  const cls = `${styles.btn} ${size === "sm" ? styles.sm : styles.lg}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        <span className={styles.label}>{label}</span>
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick}>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
