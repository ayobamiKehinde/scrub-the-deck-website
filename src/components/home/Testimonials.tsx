"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";

gsap.registerPlugin(ScrollTrigger);

const RESULTS = [
  { name: "Matt",   company: "SaaS Founder",          result: "Seed round in 5 weeks"   },
  { name: "Werner", company: "Deep Tech Co-Founder",   result: "£3.2M raised"                  },
  { name: "Anna",   company: "CEO & Founder",          result: "8 investor meetings"  },
  { name: "Kara",   company: "FinTech Founder",        result: "Pre-seed oversubscribed"        },
  { name: "James",  company: "PropTech Founder",       result: "Over £900K raised"              },
  { name: "Philip", company: "Marketing SaaS",         result: "£650K raised so far"            },
  { name: "Sam",    company: "B2B Founder",            result: "Investor meetings secured"      },
  { name: "Chris",  company: "E-Commerce Founder",     result: "£1.28M raised"                 },
];

const BRANDS: { name: string; file: string }[] = [
  { name: "Mercedes-Benz", file: "mercedes"     },
  { name: "O2",            file: "o2"           },
  { name: "Aston Martin",  file: "aston-martin" },
  { name: "Cisco",         file: "cisco"        },
  { name: "Vodafone",      file: "vodafone"     },
  { name: "Hilton",        file: "hilton"       },
  { name: "MTV",           file: "mtv"          },
  { name: "Petronas",      file: "petronas"     },
  { name: "Adidas",        file: "adidas"       },
];

function BrandLogo({ name, file }: { name: string; file: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  if (imgFailed) return <span className={styles.brandText}>{name}</span>;
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

function VideoCard({ name, company, result }: { name: string; company: string; result: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Show first frame on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const show = () => { v.currentTime = 0.001; };
    v.addEventListener("loadedmetadata", show, { once: true });
    return () => v.removeEventListener("loadedmetadata", show);
  }, []);

  const handleMouseEnter = () => { videoRef.current?.play(); };
  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0.001; }
  };

  return (
    <article className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Video thumbnail */}
      <div className={styles.cardThumb}>
        <video
          ref={videoRef}
          className={styles.cardVideo}
          src="/media/boat-rocks.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        />
        {/* Play button */}
        <div className={styles.playBtn} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5 3l11 6-11 6V3z" />
          </svg>
        </div>
      </div>

      {/* Info below video */}
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardCompany}>{company}</p>
        <p className={styles.cardResult}>{result}</p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from([`.${styles.eyebrow}`, `.${styles.heading}`], {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
      });
      tl.from(`.${styles.card}`, {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
      }, "-=0.4");

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
    <section ref={sectionRef} className={styles.section}>

      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Founder results</p>
        <h2 className={styles.heading}>
          A wall of <em>results.</em>
        </h2>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {RESULTS.map((r) => (
          <VideoCard key={r.name} {...r} />
        ))}
      </div>

      {/* Brand marquee */}
      <div className={styles.brandsWrap}>
        <p className={styles.brandsLabel}>Trusted by the world&apos;s leading brands</p>
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
