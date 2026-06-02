"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hamburgerLines = (
    <>
      <span className={`${styles.line} ${open ? styles.lineTop : ""}`} />
      <span className={`${styles.line} ${open ? styles.lineHide : ""}`} />
      <span className={`${styles.line} ${open ? styles.lineBottom : ""}`} />
    </>
  );

  return (
    <>
      {/* Mobile-only: floating hamburger visible from page load */}
      <button
        className={styles.floatingHamburger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {hamburgerLines}
      </button>

      <nav className={`${styles.nav} ${scrolled ? styles.navVisible : ""}`} aria-label="Main navigation">
        {/* Left: gold Book a Call button */}
        <div className={styles.navLeft}>
          <Link href="/contact" className={styles.bookBtn}>
            <span className={styles.bookLabel}>Book a Call</span>
          </Link>
        </div>

        {/* Centre: silver logo */}
        <Link href="/" className={styles.logoLink} aria-label="Scrub the Deck — home">
          <Image
            src="/images/logo-silver.png"
            alt="Scrub the Deck"
            width={200}
            height={52}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Right: hamburger — desktop only, mobile uses floatingHamburger */}
        <div className={styles.navRight}>
          <button
            className={styles.hamburger}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {hamburgerLines}
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
