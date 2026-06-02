"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MeetFounder.module.css";
import RopeDivider from "@/components/ui/RopeDivider";

gsap.registerPlugin(ScrollTrigger);

const BRANDS = [
  { name: "Mercedes-Benz",      file: "mercedes"     },
  { name: "O2",                 file: "o2"           },
  { name: "Aston Martin",       file: "aston-martin" },
  { name: "Cisco",              file: "cisco"        },
  { name: "Vodafone",           file: "vodafone"     },
  { name: "Hilton",             file: "hilton"       },
  { name: "MTV",                file: "mtv"          },
  { name: "Petronas",           file: "petronas"     },
  { name: "Adidas",             file: "adidas"       },
  { name: "TBT",                file: "tbt"          },
  { name: "Golf Breaks",        file: "golf-breaks"  },
  { name: "Lego",               file: "lego"         },
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

export default function MeetFounder() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.from(`.${styles.eyebrow}`, { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" });
      tl.from(`.${styles.heading}`, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
      tl.from(`.${styles.bio}`,     { y: 20, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.4");
      tl.from(`.${styles.porthole}`,{ x: 40, opacity: 0, duration: 1,   ease: "power3.out" }, "-=1.2");

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
    <>
      <RopeDivider />

      <section ref={sectionRef} className={styles.section}>
        <div className={styles.inner}>

          {/* Left — text */}
          <div className={styles.textCol}>
            <div className={styles.titleGroup}>
              <p className={styles.eyebrow}>STEERING THE SHIP</p>
              <h2 className={styles.heading}>Captain David Pugh</h2>
            </div>

            <p className={styles.bio}>
              Before I created this brand, I saw that founders were really struggling to grab an
              investor&rsquo;s attention. They were constantly rejected — or worse, <strong>ignored.</strong>
            </p>
            <p className={styles.bio}>
              I made it my goal to speak directly to investors in my network and extract the formula
              they define. After several years of trial-and-error, testing everything the hard way —
              with close guidance from investors and VC funds — I distilled it into one powerful process.
            </p>
            <p className={styles.bio}>
              By following this process, my clients have been able to raise <strong>tens of millions
              in funding</strong>, as well as securing powerful partners who bring the expertise, finance,
              connections and guidance they need to grow.
            </p>
            <p className={styles.attribution}>— David Pugh, Founder of Scrub the Deck&reg;</p>
          </div>

          {/* Right — porthole */}
          <div className={styles.porthole}>
            <Image
              src="/images/founder-image-new.png"
              alt="David Pugh — Captain of Scrub the Deck"
              width={560}
              height={560}
              className={styles.portholeImg}
            />
          </div>

        </div>
      </section>

      {/* Brand logos bar — wood background, flush with section above */}
      <div className={styles.brandsWrap}>
        <div className={styles.marqueeOuter} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <span key={i} className={styles.brandItem}>
                <BrandLogo name={brand.name} file={brand.file} />
              </span>
            ))}
          </div>
        </div>
        <p className={styles.brandsLabel}>Billions generated creating decks for global brands</p>
      </div>

      <RopeDivider />
    </>
  );
}
