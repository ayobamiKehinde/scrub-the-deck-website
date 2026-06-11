import type { Metadata } from "next";
import TVPageHero from "@/components/shared/TVPageHero";
import FAQAccordion from "@/components/shared/FAQAccordion";
import GoldButton from "@/components/ui/GoldButton";
import RopeDivider from "@/components/ui/RopeDivider";
import styles from "./process.module.css";

export const metadata: Metadata = {
  title: "How David Pugh Gets Startups Funded: The Scrub the Deck Process",
  description:
    "A 6-step investment consulting process used by David Pugh to help startups secure funding, from pitch deck creation to investor outreach across a network of 1,500+ investors.",
};

const BOOK_URL = "https://www.scrubthedeck.com/bookacall-t-form";

const FAQ = [
  {
    q: "How long does it take to raise investment?",
    a: "The pitch deck can be completed in as little as a week, but the full process from strategy session to money in your account typically takes around three months. This varies depending on how investor-ready you are at the start, and how quickly momentum builds. It is important not to rush. Investors can sense desperation, and it weakens your negotiating position significantly.",
  },
  {
    q: "What is Scrub the Deck's success rate?",
    a: "As of early 2026, 82% of completed Scrub the Deck projects resulted in the client receiving investment, one of the highest rates in the industry. This is partly because David is selective about who he works with and only takes on founders he genuinely believes have a strong chance of raising.",
  },
  {
    q: "Who are the investors in David's network?",
    a: "The network currently has over 1,500 connections. Roughly half are high-net-worth individuals and angel investors. The other half are individuals from VC firms, family offices, and institutional investors. These are warm connections, not a database. David is not a broker and makes no guarantees about introductions, but the network is an active part of the outreach process.",
  },
  {
    q: "What if I already have a pitch deck?",
    a: "Most clients come to David with an existing deck. If it is not getting results, or you are not fully confident in it, David can audit it, revamp it, and get it in front of his investor network. The strategy session is the best place to assess whether a full rebuild or a targeted revamp is the right call.",
  },
  {
    q: "How much does Scrub the Deck cost?",
    a: "There are three packages ranging from £2,000 to £12,000. The right package depends on your stage, what you need, and what you are trying to raise. This is determined during the free strategy session so you are never committed before you know exactly what you are getting.",
  },
  {
    q: "Is there a guarantee?",
    a: "There are no guarantees of receiving investment. No one can ethically promise that. What David does guarantee is a full refund of any payment made if you are not 100% satisfied after the very first consultation. If it is not the right fit, you will not be out of pocket.",
  },
  {
    q: "Does David Pugh work with every startup that approaches him?",
    a: "No. David personally selects the clients he works with and only takes on founders he believes have a genuine chance of raising. The free strategy session is how both parties assess fit. You will get real value from the session regardless of whether you move forward together.",
  },
  {
    q: "What is the 18-point pitch deck structure?",
    a: "It is David's proprietary framework for building pitch decks, developed and refined through years of direct feedback from investors. It covers everything from the opening hook and problem statement through to financials, team storytelling, and the ask, structured in the exact order that keeps investors engaged. The full framework is covered in the Scrub the Deck e-book.",
  },
  {
    q: "Is the strategy session really free?",
    a: "Yes, completely free, no obligation. It is a genuine 30-minute working session with David personally, not a sales call. You will leave with real insights and a clearer picture of your fundraising position, whether you decide to work together or not.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How David Pugh Gets Startups Funded: The Scrub the Deck Process",
  description:
    "A 6-step investment consulting process used by David Pugh to help startups secure funding, from pitch deck creation to investor outreach across a network of 1,500+ investors.",
  dateModified: "2026-06-01",
  author: {
    "@type": "Person",
    name: "David Pugh",
    jobTitle: "Founder & Pitch Deck Consultant",
    worksFor: { "@type": "Organization", name: "Scrub the Deck" },
    url: "https://scrubthedeck.com/about",
  },
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <TVPageHero
          headline="THE PROCESS"
          subtitle="How we get you funded!"
          tvSrc="/images/Process-TV.png"
          tvAlt="The Scrub the Deck 6-step road to investment process"
          ctaHref={BOOK_URL}
        />

        <article className={styles.content}>

          {/* ── Intro on wood board ── */}
          <div className={styles.woodPanel}>
            <RopeDivider />
            <div className={styles.woodPanelInner}>
              <h1 className={styles.pageH1}>How Does Scrub the Deck Get You Funded?</h1>
              <p className={styles.intro}>
                Scrub the Deck is an investment consulting service founded by David Pugh that takes
                startups through a structured 6-step process, from initial strategy session to
                negotiating final investment terms. Every stage is designed to get founders
                investor-ready, pitch-perfect, and in front of the right people at the right moment.
              </p>
            </div>
            <RopeDivider />
          </div>

          {/* ── Steps 1–3 ── */}
          <div className={styles.seaSection}>
          <div className={styles.inner}>

            <section className={styles.step}>
              <p className={styles.stepNumber}>01</p>
              <h2 className={styles.stepH2}>What Happens in the Free Strategy Session?</h2>
              <p>
                The process begins with a completely free 30-minute investment strategy session
                with David Pugh personally. This is a genuine working session, not a sales call.
                David assesses where you are, where you need to be, and whether the timing is
                right to approach investors.
              </p>
              <p>
                David only takes on clients he believes in. During this session he evaluates
                your current traction, funding readiness, and the strength of your founding story.
                You&rsquo;ll leave with real ideas and tactics whether or not you move forward together.
              </p>
              <p className={styles.bridgeLink}>
                <a href={BOOK_URL}>Book your free strategy session</a>:{" "}
                <em>&ldquo;You have absolutely nothing to lose, and you will get real value. That I promise.&rdquo;</em>
              </p>
            </section>

            <section className={styles.step}>
              <p className={styles.stepNumber}>02</p>
              <h2 className={styles.stepH2}>Why Do You Need a Traction Spike Before Approaching Investors?</h2>
              <p>
                Timing is everything in fundraising. Investors don&rsquo;t just buy into your
                business; they buy into momentum. Before outreach begins, Scrub the Deck works
                with founders to identify or create a &ldquo;traction spike&rdquo;: a recent,
                verifiable signal that something exciting is happening in the business right now.
              </p>
              <p>
                A traction spike could be a revenue uptick, a new partnership, a product
                milestone, or a major customer win. The goal is to make investors feel that{" "}
                <em>now</em> is the moment to get involved, not in six months. If you
                don&rsquo;t have a recent spike, David will show you how to create one.
              </p>
            </section>

            <section className={styles.step}>
              <p className={styles.stepNumber}>03</p>
              <h2 className={styles.stepH2}>What Makes a Pitch Deck Actually Get You Meetings?</h2>
              <p>
                A great pitch deck takes a cold investor who knows nothing about your business
                and turns them into someone eager to meet you. David Pugh personally consults,
                writes, and designs every deck, using an 18-point structure developed and
                stress-tested with investors over more than a decade.
              </p>
              <p>
                The deck is built to be quickly and emotionally digested. David crafts compelling
                narrative, persuasive language, infographics, and team storytelling, all
                structured to answer the questions investors ask before they&rsquo;ll take a meeting.
                Most clients continue using the work from this stage for years: sales meetings,
                presentations, and winning new clients.
              </p>
              <p className={styles.bridgeLink}>
                Want to understand the structure before you start?{" "}
                <a href="https://www.scrubthedeck.com/e-book-download">Download the pitch deck e-book</a>:{" "}
                <em>&ldquo;A step-by-step breakdown of what goes into a deck that actually gets funded.&rdquo;</em>
              </p>
            </section>

          </div>
          </div>

          {/* ── Mid-page wood break ── */}
          <div className={styles.woodBreak}>
            <RopeDivider />
            <div className={styles.woodBreakInner}>
              <p className={styles.woodBreakText}>THREE STEPS COMPLETE</p>
              <p className={styles.woodBreakSub}>Now we take you from investor-ready to investment received.</p>
            </div>
            <RopeDivider />
          </div>

          {/* ── Steps 4–6 ── */}
          <div className={styles.seaSection}>
          <div className={styles.inner}>

            <section className={styles.step}>
              <p className={styles.stepNumber}>04</p>
              <h2 className={styles.stepH2}>How Does Scrub the Deck Get Your Pitch Deck in Front of Investors?</h2>
              <p>
                Once the deck is built, the next challenge is distribution. Scrub the Deck gives
                founders a direct launch pad into a warm, personal investor network, not a
                generic database. According to David Pugh&rsquo;s own network data, the current
                network spans over 1,500 active investors across sectors and geographies.
              </p>
              <p>
                These are investors who know and trust David. They expect to see early-stage
                deals from him, which means they&rsquo;re incentivised to act fast. Even if a
                deal isn&rsquo;t right for them, warm network members often forward it to their
                own contacts, giving founders indirect access to a much wider pool.
              </p>
              <p>
                David&rsquo;s investor network has grown from 650 to over 1,500 connections since
                Scrub the Deck was founded, according to the firm&rsquo;s own network tracking.
              </p>
            </section>

            <section className={styles.step}>
              <p className={styles.stepNumber}>05</p>
              <h2 className={styles.stepH2}>How Does Scrub the Deck Prepare You for Investor Due Diligence?</h2>
              <p>
                Reaching due diligence is a major milestone, and also where many deals fall
                apart. Scrub the Deck prepares founders for every document, question, and request
                an investor is likely to raise during this stage, ensuring you look professional
                and fully prepared when it matters most.
              </p>
              <p>
                Investors are judging you continuously. Walking into due diligence underprepared
                can erode confidence built across every earlier stage. David provides a
                comprehensive briefing so you know exactly what&rsquo;s coming and how to handle it.
              </p>
            </section>

            <section className={styles.step}>
              <p className={styles.stepNumber}>06</p>
              <h2 className={styles.stepH2}>How Do You Negotiate the Best Investment Terms?</h2>
              <p>
                Reaching the negotiation stage means you&rsquo;ve done everything right. When
                multiple investors are at the table, you&rsquo;re in a position of strength.
                David Pugh consults on what the best terms look like for your specific business
                and helps you decide whether any given offer is the right one to take.
              </p>
              <p>
                Not every investment offer is the right one. David provides honest counsel on
                valuation, equity, control terms, and whether a particular investor is the right
                long-term partner for your business.
              </p>
              <p className={styles.bridgeLink}>
                <a href={BOOK_URL}>Book your free strategy session</a>: ready to start?
              </p>
            </section>

          </div>
          </div>

          {/* ── Sea texture FAQ + CTA ── */}
          <div className={styles.woodFaq}>
            <div className={styles.woodFaqInner}>
              <h2 className={styles.faqH2}>
                Frequently Asked Questions About Getting Startup Investment
              </h2>
              <FAQAccordion items={FAQ} />
              <div className={styles.finalCta}>
                <GoldButton href={BOOK_URL} label="BOOK A CALL" size="lg" />
              </div>
            </div>
          </div>

        </article>
      </main>
    </>
  );
}
