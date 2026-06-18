import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy – Scrub the Deck",
  description: "How Scrub the Deck collects, uses, and protects your personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.intro}>
          This Privacy Policy describes how your personal information is collected, used, and shared
          when you visit or make a payment through www.scrubthedeck.com (the &ldquo;Site&rdquo;),
          under the Limited company name Scrub the Deck Ltd.
        </p>

        <section className={styles.section}>
          <h2 className={styles.h2}>Personal Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device,
            including information about your web browser, IP address, time zone, and some of the
            cookies that are installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that you view, what
            websites or search terms referred you to the Site, and information about how you
            interact with the Site. We refer to this automatically-collected information as
            &ldquo;Device Information.&rdquo;
          </p>
          <p>We collect Device Information using the following technologies:</p>
          <ul className={styles.list}>
            <li>
              <strong>Cookies</strong> are data files that are placed on your device or computer
              and often include an anonymous unique identifier. For more information about cookies,
              and how to disable cookies, visit{" "}
              <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className={styles.link}>
                allaboutcookies.org
              </a>.
            </li>
            <li>
              <strong>Log files</strong> track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service provider,
              referring/exit pages, and date/time stamps.
            </li>
            <li>
              <strong>Web beacons, tags, and pixels</strong> are electronic files used to record
              information about how you browse the Site.
            </li>
          </ul>
          <p>
            Additionally when you make a payment through the Site, we collect certain information
            from you, including your name, billing address, shipping address, payment information
            (including credit card numbers, email address, and phone number). We refer to this
            information as &ldquo;Order Information.&rdquo;
          </p>
          <p>
            When we talk about &ldquo;Personal Information&rdquo; in this Privacy Policy, we are
            talking both about Device Information and Payment Information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>How Do We Use Your Personal Information?</h2>
          <p>
            We use the Payment Information that we collect generally to fulfil any invoices paid
            through the Site (including processing your payment information and providing you with
            invoices and/or receipts). Additionally, we use this Order Information to communicate
            with you.
          </p>
          <p>
            We use the Device Information that we collect to help us screen for potential risk and
            fraud, and more generally to improve and optimise our Site (for example, by generating
            analytics about how our customers browse and interact with the Site, and to assess the
            success of our marketing and advertising campaigns).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Sharing Your Personal Information</h2>
          <p>
            We use Google Analytics to help us understand how our customers use the Site. You can
            read more about how Google uses your Personal Information{" "}
            <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              here
            </a>. You can also opt-out of Google Analytics{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={styles.link}>
              here
            </a>.
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with applicable laws
            and regulations, to respond to a subpoena, search warrant or other lawful request for
            information we receive, or to otherwise protect our rights.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Do Not Track</h2>
          <p>
            Please note that we do not alter our Site&rsquo;s data collection and use practices
            when we see a Do Not Track signal from your browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access personal information we
            hold about you and to ask that your personal information be corrected, updated, or
            deleted. If you would like to exercise this right, please contact us through the
            contact information below.
          </p>
          <p>
            Additionally, if you are a European resident we note that we are processing your
            information in order to fulfil invoices we might have with you (for example if you
            make a payment through the Site), or otherwise to pursue our legitimate business
            interests listed above. Please note that your information will be transferred outside
            of Europe, including to Canada and the United States.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Data Retention</h2>
          <p>
            When you place a payment through the Site, we will maintain your Invoice Information
            for our records unless and until you ask us to delete this information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Changes</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect, for example,
            changes to our practices or for other operational, legal or regulatory reasons.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Contact Us</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you
            would like to make a complaint, please contact us by email at{" "}
            <a href="mailto:hello@scrubthedeck.com" className={styles.link}>
              hello@scrubthedeck.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
