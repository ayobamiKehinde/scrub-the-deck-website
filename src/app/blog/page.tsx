import GoldButton from "@/components/ui/GoldButton";
import styles from "./blog.module.css";

export const metadata = {
  title: "Pitch Deck Guides & Fundraising Tips | Scrub the Deck",
  description: "Free pitch deck guides from a specialist pitch deck agency. Learn how to structure your investor deck, tell your story, and raise funding faster.",
};

const POSTS = [
  {
    category: "Pitch Strategy",
    title: "The 10-Slide Structure Every Investor Expects to See",
    excerpt:
      "Most founders get the order wrong. Here's the exact sequence that keeps investors engaged from cover slide to ask.",
    date: "May 2025",
    readTime: "6 min read",
    slug: "10-slide-pitch-deck-structure",
  },
  {
    category: "Fundraising",
    title: "Why 'We Have No Competition' Kills Your Round",
    excerpt:
      "Saying you have no competitors doesn't signal opportunity. It signals you haven't done your homework. Here's what to say instead.",
    date: "April 2025",
    readTime: "4 min read",
    slug: "no-competition-slide-mistake",
  },
  {
    category: "Financial Storytelling",
    title: "How to Present Financials Without Losing the Room",
    excerpt:
      "Numbers without narrative are noise. We walk through the three financial slides that actually move investors.",
    date: "March 2025",
    readTime: "7 min read",
    slug: "financial-slides-pitch-deck",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://scrubthedeck.com/blog/#blog",
      name: "Pitch Deck Guides & Fundraising Tips",
      url: "https://scrubthedeck.com/blog",
      description:
        "No-fluff guides on pitch strategy, investor psychology, and how to build a deck that closes rounds. Written by David Pugh, founder of Scrub the Deck.",
      author: {
        "@type": "Person",
        name: "David Pugh",
        url: "https://scrubthedeck.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Scrub the Deck",
        url: "https://scrubthedeck.com",
      },
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        url: `https://scrubthedeck.com/blog/${p.slug}`,
        author: { "@type": "Person", name: "David Pugh" },
        publisher: { "@type": "Organization", name: "Scrub the Deck" },
      })),
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Pitch deck guides</p>
          <h1 className={styles.heading}>
            The fundraising <em>playbook.</em>
          </h1>
          <p className={styles.sub}>
            No-fluff guides on pitch strategy, investor psychology, and how to build a deck that closes rounds.
          </p>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section className={styles.posts}>
        <div className={styles.postsInner}>
          {POSTS.map((p) => (
            <article key={p.slug} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{p.category}</span>
                <span className={styles.meta}>{p.date} · {p.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardExcerpt}>{p.excerpt}</p>
              <a href={`/blog/${p.slug}`} className={styles.cardCta}>
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaText}>
            More guides dropping each month. Want them in your inbox?
          </p>
          <div className={styles.ctaSocials}>
            <a href="https://www.linkedin.com/in/scrubthedeck/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn →</a>
            <a href="https://www.youtube.com/@scrubthedeck" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>YouTube →</a>
            <a href="https://www.crunchbase.com/organization/scrub-the-deck" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Crunchbase →</a>
          </div>
          <GoldButton href="/davecall-q" label="Get in touch" size="lg" />
        </div>
      </section>

    </main>
    </>
  );
}
