"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PitchSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function PitchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from(`.${styles.heading}`, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
      tl.from(`.${styles.sub}`,     { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");
      tl.from(`.${styles.body}`,    { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");
      tl.from(`.${styles.playWrap}`,{ y: 16, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 78%",
        onEnter:     () => tl.restart(),
        onEnterBack: () => tl.restart(),
        onLeave:     () => tl.progress(0).pause(),
        onLeaveBack: () => tl.progress(0).pause(),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.titleGroup}>
            <h2 className={styles.heading}>FUNDRAISING SHOULDN&rsquo;T BE A STRESS</h2>
            <p className={styles.sub}>We&rsquo;ll make it plain sailing</p>
          </div>
          <p className={styles.body}>
            We will take you through the full 6-step raising process, creating the pitch deck
            that gives what investors need to hear, and we will put it in the inboxes of
            1500+ investors who trust us.
          </p>

          <div className={styles.playWrap}>
            <button
              className={styles.playBtn}
              aria-label="Find out how we do it"
              onClick={() => setPlaying(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4l14 8-14 8V4z" />
              </svg>
            </button>
            <p className={styles.playLabel}>Find out how we do it</p>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {playing && (
        <div className={styles.modalBackdrop} onClick={() => setPlaying(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setPlaying(false)} aria-label="Close">✕</button>
            <iframe
              className={styles.modalVideo}
              src="https://www.youtube.com/embed/LQ4SXep3zOs?autoplay=1&rel=0&modestbranding=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Find out how we do it"
            />
          </div>
        </div>
      )}
    </>
  );
}
