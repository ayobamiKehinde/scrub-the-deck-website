import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/sanity";
import styles from "./post.module.css";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const updatedDate = new Date(post.updatedAt || post.publishedAt).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author?.name ?? "David Pugh",
      url: "https://www.linkedin.com/in/scrubthedeck/",
    },
    publisher: {
      "@type": "Organization",
      name: "Scrub the Deck",
      url: "https://scrubthedeck.com",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `https://scrubthedeck.com/blog/${slug}`,
  };

  const faqJsonLd =
    post.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className={styles.page}>
        <article className={styles.article}>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <span className={styles.author}>
                  By {post.author?.name ?? "David Pugh"},{" "}
                  {post.author?.title ?? "Founder, Scrub the Deck"}
                </span>
                <span className={styles.metaDivider}>·</span>
                <span className={styles.updated}>Last updated: {updatedDate}</span>
                <span className={styles.metaDivider}>·</span>
                <span className={styles.readTime}>{post.readTime} min read</span>
              </div>
              {post.author?.credentials && (
                <p className={styles.credentials}>{post.author.credentials}</p>
              )}
            </div>
          </header>

          <div className={styles.body}>

            {/* TL;DR */}
            {post.tldr?.length > 0 && (
              <aside className={styles.tldr}>
                <p className={styles.tldrLabel}>TL;DR</p>
                <ul className={styles.tldrList}>
                  {post.tldr.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </aside>
            )}

            {/* Body */}
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            {/* FAQ */}
            {post.faq?.length > 0 && (
              <section className={styles.faq}>
                <h2 className={styles.faqHeading}>Frequently asked questions</h2>
                <dl className={styles.faqList}>
                  {post.faq.map((item, i) => (
                    <div key={i} className={styles.faqItem}>
                      <dt className={styles.faqQuestion}>{item.question}</dt>
                      <dd className={styles.faqAnswer}>{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Sources */}
            {post.statSources?.length > 0 && (
              <section className={styles.sources}>
                <h2 className={styles.sourcesHeading}>Sources</h2>
                <ul className={styles.sourcesList}>
                  {post.statSources.map((s, i) => (
                    <li key={i}>
                      {s.claim} —{" "}
                      <a
                        href={s.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.sourceLink}
                      >
                        {s.source}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
