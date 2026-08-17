"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PictureTestimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  { file: "AKK",       name: "Alex Kayode-Kay",  linkedin: "https://www.linkedin.com/in/alex-kayode-kay-0755858b/" },
  { file: "AR",        name: "Annabelle Roseborne", linkedin: null },
  { file: "AP",        name: "Ashley Pugh",       linkedin: null },
  { file: "DF",        name: "David Flavin",      linkedin: null },
  { file: "DL",        name: "Daryl Leigh",       linkedin: null },
  { file: "JD",        name: "Jonathan Dooley",   linkedin: null },
  { file: "NF",        name: "Neil Fogarty",      linkedin: "https://uk.linkedin.com/in/neildfogarty" },
  { file: "MO",        name: "Michael Ojo",       linkedin: null },
  { file: "RH",        name: "Robin Holiday",     linkedin: "https://www.linkedin.com/in/robin-holiday-46079b24/" },
  { file: "RW",        name: "Richard Woods",     linkedin: "https://www.linkedin.com/in/richardwoodsofficial/" },
  { file: "SH",        name: "Sam Holden",        linkedin: "https://uk.linkedin.com/in/sampholden" },
  { file: "boomquote", name: "David Bacon",       linkedin: null },
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
            toggleActions: "restart none none reset",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>SOME WROTE IT DOWN</h2>
        <p className={styles.sub}>and sent it to us</p>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => {
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/images/testimonials/${t.file}.jpg`}
                alt={`${t.name} — recommendation for David Pugh, Scrub the Deck`}
                className={styles.img}
                loading="lazy"
              />
            );
            return t.linkedin ? (
              <a
                key={t.file}
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
                aria-label={`${t.name} on LinkedIn`}
              >
                {img}
              </a>
            ) : (
              <div key={t.file} className={styles.item}>
                {img}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
