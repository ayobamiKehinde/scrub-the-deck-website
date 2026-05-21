"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MeetFounder.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function MeetFounder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from(`.${styles.eyebrow}`, { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" });
      tl.from(`.${styles.heading}`, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
      tl.from(`.${styles.bio}`, { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.4");
      tl.from(`.${styles.attribution}`, { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
      tl.from(`.${styles.tvWrap}`, { x: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=1.2");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter:     () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave:     () => tl.progress(0).pause(),
        onLeaveBack: () => tl.progress(0).pause(),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>

        {/* Left — text */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Meet the founder</p>
          <h2 className={styles.heading}>
            David <em>Pugh.</em>
          </h2>

          <p className={styles.bio}>
            Before I created this brand, I saw that founders were really struggling to grab an investor&rsquo;s attention. They were constantly rejected — or worse, <strong>ignored.</strong>
          </p>
          <p className={styles.bio}>
            I made it my goal to speak directly to investors in my network and extract the formula <em>they</em> define. After several years of trial-and-error, testing everything the hard way — with close guidance from investors and VC funds — I distilled it into one powerful process.
          </p>
          <p className={styles.bio}>
            By following this process, my clients have been able to raise <strong>tens of millions in funding</strong>, as well as securing powerful partners who bring the expertise, finance, connections and guidance they need to grow.
          </p>

          <p className={styles.attribution}>
            — David Pugh, Founder of Scrub the Deck&reg;
          </p>
        </div>

        {/* Right — TV image */}
        <div className={styles.tvWrap}>
          <Image
            src="/images/dave-tv.png"
            alt="David Pugh — Founder of Scrub the Deck"
            width={1165}
            height={787}
            className={styles.tvImg}
            priority={false}
          />
        </div>

      </div>
    </section>
  );
}
