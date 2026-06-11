"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/welcome", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Welcome page has no nav at all — only a logo + Book a Call
  const hideNav = pathname === "/welcome";
  // Pages with their own logo header don't need the scrolled nav
  const alwaysVisible = pathname !== "/" && !hideNav;

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

  if (hideNav) return null;

  return (
    <>
      {/* Floating hamburger — always visible, merges into navbar on scroll */}
      <button
        className={styles.floatingHamburger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {hamburgerLines}
      </button>

      <nav className={`${styles.nav} ${(scrolled || alwaysVisible) ? styles.navVisible : ""}`} aria-label="Main navigation">
        {/* Left: same GoldButton as hero, smaller */}
        <div className={styles.navLeft}>
          <GoldButton label="Book a Call" href="/contact" size="lg" className={styles.navBtn} />
        </div>

        {/* Centre: silver logo */}
        <Link href="/" className={styles.logoLink} aria-label="Scrub the Deck home">
          <Image
            src="/images/logo-silver.png"
            alt="Scrub the Deck"
            width={200}
            height={52}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Right: placeholder keeps grid balanced */}
        <div className={styles.navRight} />
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
