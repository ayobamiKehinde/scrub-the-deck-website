"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RopeDivider from "@/components/ui/RopeDivider";
import styles from "./StatsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { end: 82,   prefix: "",  suffix: "%",  label: "Success Rate"         },
  { end: 30,   prefix: "£", suffix: "M+", label: "Raised for Clients"   },
  { end: 100,  prefix: "",  suffix: "+",  label: "Decks Crafted"        },
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
          el.textContent = `${el.dataset.prefix ?? ""}0${el.dataset.suffix ?? ""}`;
        });
      };
      resetNumbers();

      const cardsTl = gsap.timeline({ paused: true });
      cardsTl.from([`.${styles.eyebrow}`, `.${styles.heading}`, `.${styles.sub}`], {
        y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
      });
      cardsTl.from(cards, { y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.4");

      const countTweens = numbers.map((el, i) => {
        const end = Number(el.dataset.end ?? 0);
        const prefix = el.dataset.prefix ?? "";
        const suffix = el.dataset.suffix ?? "";
        const obj = { val: 0 };
        return gsap.to(obj, {
          val: end, duration: 2.4, delay: 0.3 + i * 0.12, ease: "power2.out", paused: true,
          onUpdate() { el.textContent = prefix + Math.round(obj.val) + suffix; },
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
      <div className={styles.ropeTop}><RopeDivider /></div>

      {/* Hidden SEO heading */}
      <h1 className={styles.seoHeading}>
        The Pitch Deck Agency That Raises Funding: Scrub the Deck
      </h1>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>WHAT THE STATS SAY</p>
        <p className={styles.sub}>in real numbers</p>

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

      <div className={styles.ropeBottom}><RopeDivider /></div>
    </section>
  );
}
