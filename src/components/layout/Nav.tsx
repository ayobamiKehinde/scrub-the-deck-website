"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

const LOGO = "https://images.squarespace-cdn.com/content/v1/60ae0541a77da37fa06bf963/8a1e4ae1-498f-4f74-94bb-f5111442f074/logo-on-trans-PNG2.png?format=300w";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo — top left */}
        <Link href="/" className={styles.logoLink} aria-label="Scrub the Deck — home">
          <Image
            src={LOGO}
            alt="Scrub the Deck"
            width={140}
            height={48}
            className={styles.logo}
            unoptimized
            priority
          />
        </Link>

        {/* Right side: Book a Call + hamburger */}
        <div className={styles.navRight}>
          <Link href="/contact" className={styles.bookBtn}>
            Book a Call
          </Link>
          <button
            className={styles.hamburger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.line} ${open ? styles.lineTop : ""}`} />
            <span className={`${styles.line} ${open ? styles.lineHide : ""}`} />
            <span className={`${styles.line} ${open ? styles.lineBottom : ""}`} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        id="mobile-nav"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.links} role="list">
          {[...NAV_LINKS, { href: "/contact", label: "Book a Call" }].map(({ href, label }) => (
            <li key={href + label}>
              <Link
                href={href}
                className={styles.link}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.overlayTagline}>
          Helping you navigate the rough seas of investment
        </p>
      </div>
    </>
  );
}
