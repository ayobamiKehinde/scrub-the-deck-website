import GoldButton from "@/components/ui/GoldButton";
import { getAllPosts } from "@/lib/sanity";
import styles from "./blog.module.css";

export const revalidate = 3600;

export const metadata = {
  title: "Pitch Deck Guides & Fundraising Tips | Scrub the Deck",
  description:
    "Free pitch deck guides from a specialist pitch deck agency. Learn how to structure your investor deck, tell your story, and raise funding faster.",
};

export default async function BlogPage() {
  const posts = await getAllPosts().catch(() => []);

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
        author: { "@id": "https://scrubthedeck.com/#david-pugh" },
        publisher: { "@id": "https://scrubthedeck.com/#org" },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.metaDescription,
          url: `https://scrubthedeck.com/blog/${p.slug.current}`,
          author: { "@id": "https://scrubthedeck.com/#david-pugh" },
          publisher: { "@id": "https://scrubthedeck.com/#org" },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://scrubthedeck.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://scrubthedeck.com/blog" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Pitch deck guides</p>
            <h1 className={styles.heading}>
              The fundraising <em>playbook.</em>
            </h1>
            <p className={styles.sub}>
              No-fluff guides on pitch strategy, investor psychology, and how to
              build a deck that closes rounds.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className={styles.posts}>
          <div className={styles.postsInner}>
            {posts.length === 0 ? (
              <p style={{ color: "var(--colour-muted)", fontFamily: "var(--font-body)" }}>
                Guides coming soon.
              </p>
            ) : (
              posts.map((p) => (
                <article key={p._id} className={styles.card}>
                  {p.thumbnailUrl && (
                    <a href={`/blog/${p.slug.current}`} className={styles.cardImgWrap}>
                      <img
                        src={p.thumbnailUrl}
                        alt={`${p.title} — Scrub the Deck`}
                        className={styles.cardImg}
                      />
                    </a>
                  )}
                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <span className={styles.category}>{p.category}</span>
                      <span className={styles.meta}>
                        {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        · {p.readTime} min read
                      </span>
                    </div>
                    <h2 className={styles.cardTitle}>{p.title}</h2>
                    <p className={styles.cardExcerpt}>{p.metaDescription}</p>
                    <a href={`/blog/${p.slug.current}`} className={styles.cardCta}>
                      Read article →
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>
              More guides dropping each month. Want them in your inbox?
            </p>
            <div className={styles.ctaSocials}>
              <a
                href="https://www.linkedin.com/in/scrubthedeck/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn →
              </a>
              <a
                href="https://www.youtube.com/@scrubthedeck"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                YouTube →
              </a>
              <a
                href="https://www.crunchbase.com/organization/scrub-the-deck"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Crunchbase →
              </a>
            </div>
            <GoldButton href="/davecall-q" label="Get in touch" size="lg" />
          </div>
        </section>
      </main>
    </>
  );
}
