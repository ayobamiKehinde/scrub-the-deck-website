import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/images/logo-silver.png"
            alt="Scrub the Deck"
            width={180}
            height={46}
            className={styles.footerLogo}
          />
          <p className={styles.tagline}>
            Helping you navigate the rough seas of investment.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.links}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.contactLabel}>Get in touch</p>
          <a
            href="https://www.linkedin.com/in/scrubthedeck/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Scrub the Deck Ltd. All rights reserved.
        </p>
        <p className={styles.registration}>
          Scrub the Deck&reg; is a registered trademark of Scrub the Deck Ltd, founded by David Pugh.
          167&ndash;169 Great Portland Street, 5th Floor, London, W1W 5PF. Company No. 8327365.
        </p>
        <p className={styles.legal}>
          <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
          <span className={styles.sep}>·</span>
          <Link href="/terms" className={styles.legalLink}>Terms</Link>
        </p>
      </div>
    </footer>
  );
}
