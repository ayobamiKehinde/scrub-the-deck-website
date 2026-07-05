import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { TARGET_KEYWORDS } from "@/lib/gsc";

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "x88tod9f",
  dataset: "production",
  apiVersion: "2021-10-21",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const SITE_DOMAIN = "scrubthedeck.com";

async function checkPerplexity(keyword: string) {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) return { keyword, cited: null, sources: [], error: "No API key" };

  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-large-128k-online",
        messages: [{ role: "user", content: keyword }],
        return_citations: true,
      }),
    });

    const data = await res.json();
    const citations: string[] = data.citations ?? [];
    const cited = citations.some((c) => c.includes(SITE_DOMAIN));

    return { keyword, cited, sources: citations, error: null };
  } catch (err) {
    return { keyword, cited: null, sources: [], error: String(err) };
  }
}

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.DASHBOARD_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = await Promise.all(TARGET_KEYWORDS.map(checkPerplexity));
  const citedCount = results.filter((r) => r.cited === true).length;

  const doc = {
    _id: "geo-report-latest",
    _type: "geoReport",
    runDate: new Date().toISOString(),
    results,
    citedCount,
    keywordCount: TARGET_KEYWORDS.length,
  };

  await sanity.createOrReplace(doc);

  return NextResponse.json({ ok: true, citedCount, results });
}
