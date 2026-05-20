"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StatsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { end: 81,   prefix: "",  suffix: "%",  label: "Success Rate"         },
  { end: 47,   prefix: "£", suffix: "M+", label: "Raised for Clients"   },
  { end: 200,  prefix: "",  suffix: "+",  label: "Decks Crafted"        },
  { end: 1500, prefix: "",  suffix: "+",  label: "Investor Connections" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards   = [...(sectionRef.current?.querySelectorAll<HTMLElement>(`.${styles.card}`) ?? [])];
      const numbers = [...(sectionRef.current?.querySelectorAll<HTMLElement>("[data-count]") ?? [])];

      const resetNumbers = () => {
        numbers.forEach((el) => {
          const prefix = el.dataset.prefix ?? "";
          const suffix = el.dataset.suffix ?? "";
          el.textContent = `${prefix}0${suffix}`;
        });
      };

      // Initialise all to zero on mount
      resetNumbers();

      // Cards entrance — paused, replayed on each enter
      const cardsTl = gsap.timeline({ paused: true });
      cardsTl.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Count-up tweens — paused, replayed on each enter
      const countTweens = numbers.map((el, i) => {
        const end    = Number(el.dataset.end ?? 0);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const obj    = { val: 0 };

        return gsap.to(obj, {
          val: end,
          duration: 2.4,
          delay: 0.1 + i * 0.12,
          ease: "power2.out",
          paused: true,
          onUpdate() {
            el.textContent = prefix + Math.round(obj.val) + suffix;
          },
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        onEnter:     () => { cardsTl.restart(); countTweens.forEach(t => t.restart()); },
        onEnterBack: () => { cardsTl.restart(); countTweens.forEach(t => t.restart()); },
        onLeave:     () => { cardsTl.progress(0).pause(); resetNumbers(); countTweens.forEach(t => t.progress(0).pause()); },
        onLeaveBack: () => { cardsTl.progress(0).pause(); resetNumbers(); countTweens.forEach(t => t.progress(0).pause()); },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The numbers speak</p>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.card}>
              <p
                className={styles.number}
                data-count
                data-end={s.end}
                data-prefix={s.prefix}
                data-suffix={s.suffix}
              />
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
