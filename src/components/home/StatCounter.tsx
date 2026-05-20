"use client";

import { useEffect, useRef } from "react";
import styles from "./StatCounter.module.css";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  /** Seconds from page load before this counter appears and starts counting */
  delay: number;
  /** Duration of the count-up animation in seconds */
  duration: number;
}

interface Props {
  stat: Stat;
}

export default function StatCounter({ stat }: Props) {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasRun    = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    const wrap = wrapRef.current;
    const num  = numberRef.current;
    if (!wrap || !num) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      // Show all stats immediately at final value
      wrap.style.opacity = "1";
      wrap.style.transform = "translateX(0)";
      num.textContent = String(stat.target);
      hasRun.current = true;
      return;
    }

    const timer = setTimeout(() => {
      hasRun.current = true;

      // Swipe in from the left — stat enters, then the parrot reacts to it
      wrap.style.transition = "opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)";
      wrap.style.opacity    = "1";
      wrap.style.transform  = "translateX(0)";

      // Count up from 0 to target
      const start    = performance.now();
      const duration = stat.duration * 1000;

      const tick = (now: number) => {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        num.textContent = String(Math.round(eased * stat.target));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, stat.delay * 1000);

    return () => clearTimeout(timer);
  }, [stat]);

  return (
    // Starts invisible; fades in when delay fires (synced to parrot reaction)
    <div
      ref={wrapRef}
      className={styles.stat}
      style={{ opacity: 0, transform: "translateX(-40px)" }}
    >
      <p className={styles.number}>
        <span ref={numberRef}>0</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </p>
      <p className={styles.label}>{stat.label}</p>
    </div>
  );
}
