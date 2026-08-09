import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Scrub the Deck – Pitch Deck Agency",
  description:
    "Answers from David Pugh on investors, success rates, process timeline, pricing, and guarantees. Scrub the Deck has an 82% fundraising success rate.",
  alternates: { canonical: "https://scrubthedeck.com/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who are the investors in your network?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our network includes 1,500+ active investors across the UK and Europe, spanning angels, VCs, family offices, and corporate investors. Each has been vetted and regularly invests in startup rounds.",
      },
    },
    {
      "@type": "Question",
      name: "What is your success rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fundraising success rate is 82% as of April 2026, increased from 76% the year prior. This means 82% of clients who go through our full six-step process successfully close an investment round.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The full process typically takes 6–8 weeks from initial call to completed pitch deck and investor outreach. Timeline depends on how quickly you can provide source materials and approve drafts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on commission only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We charge an upfront fee for our work. We do not operate on commission only, as this would compromise the quality and independence of what we produce.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a pitch deck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can work with an existing deck. We assess it against our 18-point investor framework and rebuild what needs rebuilding. Many clients come to us after struggling to raise with a deck they already have.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of your service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our fees vary depending on the scope of work. Book a call with David to discuss your round and get a clear quote. We are transparent about pricing from the first conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What guarantees can you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We guarantee our process is built on 22 years of investor feedback and an 82% success rate. We do not guarantee investment — no one honestly can — but we guarantee you will have the strongest possible pitch for your opportunity.",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
