"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Book a Call" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className={styles.nav} aria-label="Main navigation">
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
      </nav>

      {/* Full-screen overlay menu */}
      <div
        id="mobile-nav"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
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
