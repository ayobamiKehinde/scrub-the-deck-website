"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";
import type { KeywordRow, ArticleIndexStatus } from "@/lib/gsc";

interface GeoReport {
  runDate: string;
  citedCount: number;
  keywordCount: number;
  results: { keyword: string; cited: boolean | null; sources: string[]; error: string | null }[];
}

interface Props {
  keywords: KeywordRow[];
  articles: ArticleIndexStatus[];
  geoReport: GeoReport | null;
  gscError: string | null;
  perplexityEnabled: boolean;
  targetKeywords: string[];
  password: string;
}

export default function DashboardClient({ keywords, articles, geoReport, gscError, perplexityEnabled, targetKeywords, password }: Props) {
  const [running, setRunning] = useState(false);
  const [runResult, setRunResult] = useState<string | null>(null);

  async function runPerplexityCheck() {
    setRunning(true);
    setRunResult(null);
    try {
      const res = await fetch("/api/dashboard/perplexity-check", {
        method: "POST",
        headers: { Authorization: `Bearer ${password}` },
      });
      const data = await res.json();
      if (data.ok) {
        setRunResult(`Done: ${data.citedCount}/${targetKeywords.length} keywords cited. Refresh to see results.`);
      } else {
        setRunResult(`Error: ${data.error}`);
      }
    } catch {
      setRunResult("Network error");
    }
    setRunning(false);
  }

  const indexedCount = articles.filter((a) => a.indexed).length;
  const totalImpressions = keywords.reduce((s, k) => s + k.impressions, 0);
  const totalClicks = keywords.reduce((s, k) => s + k.clicks, 0);
  const avgPosition = keywords.filter((k) => k.position > 0).length
    ? (keywords.filter((k) => k.position > 0).reduce((s, k) => s + k.position, 0) / keywords.filter((k) => k.position > 0).length).toFixed(1)
    : "—";

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Scrub the Deck</p>
          <h1 className={styles.title}>GEO Dashboard</h1>
          <p className={styles.sub}>Share of model across search and AI. Last 28 days.</p>
        </div>
      </header>

      <div className={styles.content}>

        {/* Top stats */}
        <section className={styles.statsRow}>
          <div className={styles.stat}>
            <p className={styles.statValue}>{totalImpressions.toLocaleString()}</p>
            <p className={styles.statLabel}>Google Impressions</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{totalClicks.toLocaleString()}</p>
            <p className={styles.statLabel}>Google Clicks</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{avgPosition}</p>
            <p className={styles.statLabel}>Avg. Position</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>{indexedCount}/{articles.length}</p>
            <p className={styles.statLabel}>Articles Indexed</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>
              {geoReport ? `${geoReport.citedCount}/${geoReport.keywordCount}` : "—"}
            </p>
            <p className={styles.statLabel}>Perplexity Citations</p>
          </div>
        </section>

        {/* Google keyword performance */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Google Search Performance</h2>
          {gscError ? (
            <p className={styles.error}>GSC error: {gscError}</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Impressions</th>
                    <th>Clicks</th>
                    <th>CTR</th>
                    <th>Avg Position</th>
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((k) => (
                    <tr key={k.keyword}>
                      <td>{k.keyword}</td>
                      <td>{k.impressions.toLocaleString()}</td>
                      <td>{k.clicks.toLocaleString()}</td>
                      <td>{k.impressions > 0 ? `${(k.ctr * 100).toFixed(1)}%` : "—"}</td>
                      <td>
                        <span className={k.position > 0 && k.position <= 10 ? styles.posGood : k.position > 10 ? styles.posMid : styles.posNone}>
                          {k.position > 0 ? k.position.toFixed(1) : "Not ranking"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Article index status */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Article Index Status</h2>
          <div className={styles.articleGrid}>
            {articles.map((a) => (
              <div key={a.slug} className={styles.articleCard}>
                <div className={styles.articleTop}>
                  <span className={a.indexed ? styles.badgeGreen : styles.badgeGrey}>
                    {a.indexed ? "Indexed" : "Not yet indexed"}
                  </span>
                </div>
                <p className={styles.articleTitle}>{a.title}</p>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className={styles.articleUrl}>
                  {a.url.replace("https://www.scrubthedeck.com", "")} →
                </a>
                {a.indexed && (
                  <div className={styles.articleStats}>
                    <span>{a.impressions.toLocaleString()} impressions</span>
                    <span>{a.clicks} clicks</span>
                    {a.position > 0 && <span>pos {a.position.toFixed(1)}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Perplexity citations */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Perplexity Citations</h2>
            {perplexityEnabled ? (
              <button onClick={runPerplexityCheck} disabled={running} className={styles.runBtn}>
                {running ? "Running..." : "Run check now"}
              </button>
            ) : (
              <span className={styles.disabled}>Add PERPLEXITY_API_KEY to enable</span>
            )}
          </div>
          {runResult && <p className={styles.runResult}>{runResult}</p>}
          {geoReport ? (
            <>
              <p className={styles.reportDate}>
                Last run: {new Date(geoReport.runDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
              </p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Cited</th>
                      <th>Sources found</th>
                    </tr>
                  </thead>
                  <tbody>
                    {geoReport.results.map((r) => (
                      <tr key={r.keyword}>
                        <td>{r.keyword}</td>
                        <td>
                          {r.cited === null ? (
                            <span className={styles.badgeGrey}>No data</span>
                          ) : r.cited ? (
                            <span className={styles.badgeGreen}>Yes</span>
                          ) : (
                            <span className={styles.badgeRed}>No</span>
                          )}
                        </td>
                        <td className={styles.sources}>
                          {r.sources.filter((s) => s.includes("scrubthedeck")).map((s, i) => (
                            <a key={i} href={s} target="_blank" rel="noopener noreferrer">{s}</a>
                          ))}
                          {r.sources.filter((s) => s.includes("scrubthedeck")).length === 0 && (
                            <span className={styles.muted}>—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p className={styles.muted}>No report run yet. {perplexityEnabled ? "Click \"Run check now\" to start." : "Add a Perplexity API key first."}</p>
          )}
        </section>

      </div>
    </main>
  );
}
