import styles from "./GoldButton.module.css";

interface GoldButtonProps {
  label: string;
  href?: string;
  size?: "sm" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function GoldButton({ label, href, size = "lg", onClick, className }: GoldButtonProps) {
  const cls = `${styles.btn} ${size === "sm" ? styles.sm : styles.lg}${className ? ` ${className}` : ""}`;

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
