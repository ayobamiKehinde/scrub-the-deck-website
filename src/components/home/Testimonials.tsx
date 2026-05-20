"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const BASE = "https://images.squarespace-cdn.com/content/v1/60ae0541a77da37fa06bf963";

const TESTIMONIALS = [
  {
    photo: `${BASE}/3d313772-0df7-45cb-a4de-0cb1f12344bd/Matt.jpg`,
    name: "Matt",
    company: "SaaS Founder",
    result: "Seed round closed in 5 weeks",
    quote:
      "David completely transformed how we told our story. Every investor meeting became a different conversation — they stopped questioning and started committing.",
  },
  {
    photo: `${BASE}/749fc7a9-c557-40b8-88f4-594d29ac6c79/Werner.jpg`,
    name: "Werner",
    company: "Deep Tech Co-Founder",
    result: "£3.2M raised",
    quote:
      "We'd been stuck for months. After one session with David our deck was unrecognisable — and so were the results. Investors were calling us back within days.",
  },
  {
    photo: `${BASE}/e0cd4496-5331-47d4-820c-28fb59c59cf6/anna.jpg`,
    name: "Anna",
    company: "CEO & Founder",
    result: "8 investor meetings — week one",
    quote:
      "The clarity David brought to our pitch was the single biggest unlock in our raise. He made complex financials compelling. Worth every penny.",
  },
  {
    photo: `${BASE}/4ea5b788-0428-46fb-b3af-3897691057b5/kara-dollars.jpg`,
    name: "Kara",
    company: "FinTech Founder",
    result: "Pre-seed oversubscribed",
    quote:
      "I came to David with a deck I thought was good. What he gave me back was something else entirely. We closed the round in three weeks.",
  },
];

const BRANDS = [
  { name: "BBC Worldwide",      file: "bbc" },
  { name: "Mercedes-Benz",      file: "mercedes" },
  { name: "O2",                 file: "o2" },
  { name: "Aston Martin",       file: "aston-martin" },
  { name: "Cisco",              file: "cisco" },
  { name: "100+ Tech Startups", file: "tech-startups" },
  { name: "Vodafone",           file: "vodafone" },
  { name: "Hilton",             file: "hilton" },
  { name: "MTV",                file: "mtv" },
  { name: "Petronas",           file: "petronas" },
  { name: "Adidas",             file: "adidas" },
];

function BrandLogo({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  if (imgFailed) {
    return <span className={styles.brandText}>{name}</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/brands/${file}.jpg`}
      alt={name}
      className={styles.brandLogo}
      onError={() => setImgFailed(true)}
    />
  );
}

const INTERVAL_MS = 5000;

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);

  const [active,    setActive]    = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused,    setPaused]    = useState(false);

  // Refs so interval/goTo always read latest values without recreating
  const activeRef    = useRef(0);
  const animatingRef = useRef(false);

  useEffect(() => { activeRef.current    = active;    }, [active]);
  useEffect(() => { animatingRef.current = animating; }, [animating]);

  const goTo = useCallback((next: number) => {
    if (animatingRef.current || next === activeRef.current) return;
    animatingRef.current = true;
    setAnimating(true);

    // Safety: if GSAP callbacks never fire (e.g. hidden tab), unlock after max anim time
    const unlock = () => { animatingRef.current = false; setAnimating(false); };
    const safetyId = setTimeout(unlock, 1400);

    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.35,
      ease: "power2.in",
      onInterrupt: () => { clearTimeout(safetyId); unlock(); },
      onComplete: () => {
        activeRef.current = next;
        setActive(next);
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            onInterrupt: () => { clearTimeout(safetyId); unlock(); },
            onComplete: () => { clearTimeout(safetyId); unlock(); },
          }
        );
      },
    });
  }, []);

  // Auto-advance — only recreates when paused changes, reads latest index via ref
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => goTo((activeRef.current + 1) % TESTIMONIALS.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [paused, goTo]);

  // Scroll-reveal for heading — replays every time section enters view
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = [`.${styles.eyebrow}`, `.${styles.heading}`];

      const tl = gsap.timeline({ paused: true });
      tl.from(els, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

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

  const prev = useCallback(
    () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [active, goTo]
  );
  const nextSlide = useCallback(
    () => goTo((active + 1) % TESTIMONIALS.length),
    [active, goTo]
  );

  const t = TESTIMONIALS[active];

  return (
    <section ref={sectionRef} className={styles.section}>

      {/* ── Header ── */}
      <div className={styles.headerRow}>
        <div>
          <p className={styles.eyebrow}>Founder results</p>
          <h2 className={styles.heading}>
            Founders who stopped{" "}
            <em>losing rounds.</em>
          </h2>
        </div>
      </div>

      {/* ── Featured quote — pause auto-advance on hover ── */}
      <div
        className={styles.quoteArea}
        ref={quoteRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Result badge */}
        <p className={styles.result}>
          <span className={styles.resultDot}>✦</span>
          {t.result}
        </p>

        {/* Big quote */}
        <blockquote className={styles.quote}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Author + controls row */}
        <div className={styles.bottomRow}>
          <div className={styles.author}>
            <div className={styles.avatar}>
              <Image
                src={t.photo}
                alt={t.name}
                fill
                className={styles.avatarImg}
                sizes="96px"
                unoptimized
              />
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.company}>{t.company}</span>
            </div>
            <span className={styles.verified}>✓ Verified</span>
          </div>

          {/* Dots + arrows */}
          <div className={styles.controls}>
            <button
              className={styles.arrow}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className={styles.dots}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.arrow}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* ── Brand marquee ── */}
      <div className={styles.brandsWrap}>
        <p className={styles.brandsLabel}>Trusted by the world's leading brands</p>
        <div className={styles.marqueeOuter} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={i} className={styles.brandItem}>
                <BrandLogo name={brand.name} file={brand.file} />
                <span className={styles.brandDot}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
