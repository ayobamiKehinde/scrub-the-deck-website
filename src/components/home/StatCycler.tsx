"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatCycler.module.css";

interface Stat {
  value: string;
  label: string;
  showAt: number;
  hideAt: number;
}

// From frame analysis of the 12s video loop:
// ~6s  → parrot turns toward camera      (reaction 1)
// ~8.5s → dramatic colorful tail display (reaction 2)
// ~10s  → third distinct pose change     (reaction 3)
// Stat slides in 0.4s before each reaction so it fully lands right as the bird reacts.
const STATS: Stat[] = [
  {
    value: "81%",
    label: "success rate",
    showAt: 4.6,    // lands ~1s before bird reacts
    hideAt: 6.6,
  },
  {
    value: "200+",
    label: "decks crafted",       // placeholder — confirm with David
    showAt: 7.1,
    hideAt: 9.3,
  },
  {
    value: "£47M+",
    label: "raised for clients",  // placeholder — confirm with David
    showAt: 9.9,    // fully visible by 10.3s → bird reacts
    hideAt: 11.5,
  },
];

type Phase = "hidden" | "entering" | "visible" | "exiting";

interface ActiveStat {
  stat: Stat;
  phase: Phase;
}

interface Props {
  onDone?: () => void;
}

export default function StatCycler({ onDone }: Props) {
  const [active, setActive] = useState<ActiveStat | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafs   = useRef<number[]>([]);

  useEffect(() => {
    STATS.forEach((stat, i) => {
      const isLast = i === STATS.length - 1;

      const t1 = setTimeout(() => {
        // 1. Mount element in off-screen position (phase: "hidden")
        setActive({ stat, phase: "hidden" });

        // 2. Two rAFs: first ensures the hidden state is painted,
        //    second triggers the slide-in transition.
        const raf1 = requestAnimationFrame(() => {
          const raf2 = requestAnimationFrame(() => {
            setActive({ stat, phase: "entering" });

            // 3. Snap phase to "visible" once the enter transition settles
            const t2 = setTimeout(() => {
              setActive(prev =>
                prev?.stat === stat ? { stat, phase: "visible" } : prev
              );
            }, 350);
            timers.current.push(t2);
          });
          rafs.current.push(raf2);
        });
        rafs.current.push(raf1);

        // 4. Slide out
        const holdMs = (stat.hideAt - stat.showAt) * 1000;
        const t3 = setTimeout(() => {
          setActive(prev =>
            prev?.stat === stat ? { stat, phase: "exiting" } : prev
          );

          // 5. Remove from DOM after exit transition completes
          const t4 = setTimeout(() => {
            setActive(prev => (prev?.stat === stat ? null : prev));
            if (isLast) onDone?.();
          }, 300);
          timers.current.push(t4);
        }, holdMs);
        timers.current.push(t3);

      }, stat.showAt * 1000);

      timers.current.push(t1);
    });

    return () => {
      timers.current.forEach(clearTimeout);
      rafs.current.forEach(cancelAnimationFrame);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!active) return null;

  return (
    <div
      className={`${styles.slot} ${styles[active.phase]}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <p className={styles.number}>{active.stat.value}</p>
      <p className={styles.label}>{active.stat.label}</p>
    </div>
  );
}
