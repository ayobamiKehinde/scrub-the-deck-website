"use client";

import { useState } from "react";
import styles from "./BrandsStrip.module.css";

const BRANDS = [
  { name: "BBC",            file: "bbc",          ext: "png" },
  { name: "Mercedes-Benz",  file: "mercedes"     },
  { name: "BMW",            file: "bmw"          },
  { name: "O2",             file: "o2"           },
  { name: "Aston Martin",   file: "aston-martin" },
  { name: "Cisco",          file: "cisco"        },
  { name: "Vodafone",       file: "vodafone"     },
  { name: "Hilton",         file: "hilton"       },
  { name: "MTV",            file: "mtv"          },
  { name: "Petronas",       file: "petronas"     },
  { name: "Adidas",         file: "adidas"       },
  { name: "TBT",            file: "tbt"          },
  { name: "Golf Breaks",    file: "golf-breaks"  },
];

function BrandLogo({ name, file, ext = "jpg" }: { name: string; file: string; ext?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={styles.brandText}>{name}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/brands/${file}.${ext}`}
      alt={name}
      className={styles.brandLogo}
      onError={() => setFailed(true)}
    />
  );
}

export default function BrandsStrip({ label }: { label?: string }) {
  return (
    <div className={styles.wrap}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.marqueeOuter} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className={styles.brandItem}>
              <BrandLogo name={b.name} file={b.file} ext={b.ext} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
