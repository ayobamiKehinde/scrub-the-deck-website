"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PictureTestimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const NAMES = [
  "AKK", "AR", "AP", "DF", "DL", "JD", "NF", "MO", "RH", "RW", "SH", "boomquote",
];

export default function PictureTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll<HTMLElement>(`.${styles.item}`) ?? [];

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 56,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>WHAT CLIENTS ARE SAYING</h2>
        <p className={styles.sub}>in their own words</p>
        <div className={styles.grid}>
          {NAMES.map((name) => (
            <div key={name} className={styles.item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/testimonials/${name}.jpg`}
                alt={`Client testimonial`}
                className={styles.img}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
