import type { Metadata } from "next";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms of Service – Scrub the Deck",
  description: "Terms and conditions for using the Scrub the Deck website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.intro}>Effective Date: January 1st 2022</p>
        <p className={styles.intro}>
          Welcome to www.scrubthedeck.com. By continuing to browse and use this website, you
          agree to comply with and be bound by the following terms and conditions of use. These
          terms, together with our privacy policy, govern Scrub the Deck&rsquo;s relationship
          with you in relation to this website. If you disagree with any part of these terms and
          conditions, please do not use our website.
        </p>

        <section className={styles.section}>
          <h2 className={styles.h2}>1. Definitions</h2>
          <p>
            The term &lsquo;Scrub the Deck&rsquo;, &lsquo;we&rsquo;, or &lsquo;us&rsquo; refers
            to Scrub the Deck Ltd, a company registered in England and Wales (Company
            No.&nbsp;08327365) with a registered office at 167&ndash;169 Great Portland Street,
            5th Floor, London, W1W&nbsp;5PF. The term &lsquo;you&rsquo; refers to the user or
            viewer of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>2. Use of This Website</h2>
          <p>
            The content on this site is for general information only and subject to change without
            notice.
          </p>
          <p>
            This website uses cookies to monitor browsing preferences. If you allow cookies,
            certain personal data may be processed in accordance with our privacy policy.
          </p>
          <p>
            Your use of any content or materials from this website is entirely at your own risk.
            It is your responsibility to ensure that any services or information available through
            this website meet your requirements.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>3. Intellectual Property</h2>
          <p>
            This website contains material owned or licensed by us, including design, layout,
            appearance and graphics. Reproduction is prohibited except in accordance with our
            copyright notice.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>4. External Links</h2>
          <p>
            We may include links to other websites for your convenience. These links do not imply
            endorsement. We accept no responsibility for the content of external websites.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>5. Accuracy and Liability Disclaimer</h2>
          <p>
            While we aim to provide up-to-date and accurate information, we make no warranties or
            guarantees as to the reliability, completeness, or suitability of the information
            provided. We expressly exclude liability for any inaccuracies or errors to the fullest
            extent permitted by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>6. Unauthorised Use</h2>
          <p>
            Unauthorised use of this website may give rise to a claim for damages and/or be a
            criminal offence.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>7. Financial Conduct and Regulatory Compliance</h2>
          <p>
            Scrub the Deck is not authorised or regulated by the Financial Conduct Authority
            (FCA).
          </p>
          <p>
            The content on this website does not constitute financial advice, investment advice,
            or a financial promotion under section 21 of the Financial Services and Markets Act
            2000.
          </p>
          <p>
            Any reference to investor introductions, fundraising support, or pitch decks is
            provided solely as a general description of non-regulated services.
          </p>
          <p>
            You are solely responsible for ensuring your compliance with all relevant financial
            regulations, including but not limited to those concerning financial promotions and
            securities law.
          </p>
          <p>
            If you require investment advice or services regulated by the FCA, you should consult
            an authorised professional.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>8. Governing Law</h2>
          <p>
            Your use of this website and any dispute arising from such use is subject to the laws
            of England and Wales.
          </p>
        </section>
      </div>
    </main>
  );
}
