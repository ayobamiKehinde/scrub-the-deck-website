import { google } from "googleapis";

const SITE_URL = process.env.GSC_SITE_URL ?? "https://www.scrubthedeck.com/";

export const TARGET_KEYWORDS = [
  "how to write a pitch deck",
  "ai pitch deck",
  "investment pitch deck",
  "pitch deck team slide",
];

export const TARGET_ARTICLES = [
  { slug: "how-to-write-a-pitch-deck", title: "How to Write a Pitch Deck That Gets Investment" },
  { slug: "ai-pitch-deck", title: "Why AI-Generated Pitch Decks Are Killing Your Fundraise" },
  { slug: "product-deck-vs-investment-deck", title: "Product Deck vs Investment Deck" },
  { slug: "pitch-deck-team-slide", title: "How to Write the Team Slide" },
];

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

export interface KeywordRow {
  keyword: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface ArticleIndexStatus {
  slug: string;
  title: string;
  url: string;
  indexed: boolean;
  clicks: number;
  impressions: number;
  position: number;
}

export async function getKeywordPerformance(): Promise<KeywordRow[]> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 28);

  const fmt = (d: Date) => d.toISOString().split("T")[0];

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: fmt(start),
      endDate: fmt(end),
      dimensions: ["query"],
      rowLimit: 500,
    },
  });

  const rows = res.data.rows ?? [];

  return TARGET_KEYWORDS.map((kw) => {
    const row = rows.find((r) => r.keys?.[0]?.toLowerCase() === kw.toLowerCase());
    return {
      keyword: kw,
      clicks: row?.clicks ?? 0,
      impressions: row?.impressions ?? 0,
      ctr: row?.ctr ?? 0,
      position: row?.position ?? 0,
    };
  });
}

export async function getArticleIndexStatus(): Promise<ArticleIndexStatus[]> {
  const auth = getAuth();
  const sc = google.searchconsole({ version: "v1", auth });

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 28);

  const fmt = (d: Date) => d.toISOString().split("T")[0];

  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: fmt(start),
      endDate: fmt(end),
      dimensions: ["page"],
      rowLimit: 500,
    },
  });

  const rows = res.data.rows ?? [];

  return TARGET_ARTICLES.map((article) => {
    const url = `https://www.scrubthedeck.com/blog/${article.slug}`;
    const row = rows.find((r) => r.keys?.[0] === url);
    return {
      ...article,
      url,
      indexed: !!row,
      clicks: row?.clicks ?? 0,
      impressions: row?.impressions ?? 0,
      position: row?.position ?? 0,
    };
  });
}
