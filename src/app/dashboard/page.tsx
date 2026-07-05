import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getKeywordPerformance, getArticleIndexStatus, TARGET_KEYWORDS } from "@/lib/gsc";
import { createClient } from "@sanity/client";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "x88tod9f",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("dashboard_auth");
  if (auth?.value !== process.env.DASHBOARD_PASSWORD) {
    redirect("/dashboard/login");
  }

  const [keywords, articles, geoReport] = await Promise.allSettled([
    getKeywordPerformance(),
    getArticleIndexStatus(),
    sanity.fetch(`*[_id == "geo-report-latest"][0]`),
  ]);

  return (
    <DashboardClient
      keywords={keywords.status === "fulfilled" ? keywords.value : []}
      articles={articles.status === "fulfilled" ? articles.value : []}
      geoReport={geoReport.status === "fulfilled" ? geoReport.value : null}
      gscError={keywords.status === "rejected" ? String(keywords.reason) : null}
      perplexityEnabled={!!process.env.PERPLEXITY_API_KEY}
      targetKeywords={TARGET_KEYWORDS}
      password={process.env.DASHBOARD_PASSWORD ?? ""}
    />
  );
}
