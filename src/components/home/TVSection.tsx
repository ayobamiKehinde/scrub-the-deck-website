"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TVSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function TVSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: slow scrub rise from bottom
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          el,
          { y: "62vh" },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              scrub: 1.5,
              start: 0,
              end: () => window.innerHeight * 2,
            },
          }
        );
      });

      // Mobile: sit at y:0, fade in when scrolled to
      mm.add("(max-width: 767px)", () => {
        gsap.set(el, { y: 0, opacity: 0 });
        gsap.to(el, {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-label="Scrub the Deck intro">
      <div className={styles.tvPlaceholder}>
        <button className={styles.playBtn} aria-label="Play intro video">
          <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
