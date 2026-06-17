import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display, Caveat } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Bebas Neue — matches the condensed all-caps logo baked into the hero video
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scrubthedeck.com/#org",
      name: "Scrub the Deck",
      url: "https://scrubthedeck.com",
      logo: "https://scrubthedeck.com/images/og-default.jpg",
      description:
        "Specialist pitch deck agency with an 81% fundraising success rate. Founded by David Pugh.",
      founder: {
        "@type": "Person",
        name: "David Pugh",
        jobTitle: "Founder and Pitch Deck Consultant",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "pitch deck design",
        "investor pitch decks",
        "fundraising strategy",
        "startup investment",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://scrubthedeck.com/#website",
      url: "https://scrubthedeck.com",
      name: "Scrub the Deck",
      publisher: { "@id": "https://scrubthedeck.com/#org" },
    },
  ],
};

export const metadata: Metadata = {
  title: "Scrub the Deck | Pitch Deck Agency | Investor Pitch Decks That Raise",
  description:
    "Scrub the Deck is a specialist pitch deck agency with an 81% fundraising success rate. We design investor pitch decks for seed, Series A and Series B startups. Trusted by BBC, Aston Martin, Cisco and 100+ tech founders.",
  metadataBase: new URL("https://scrubthedeck.com"),
  keywords: [
    "pitch deck agency",
    "investor pitch deck",
    "pitch deck design",
    "startup pitch deck",
    "fundraising pitch deck",
    "seed round pitch deck",
    "Series A pitch deck",
    "pitch deck consultant",
  ],
  openGraph: {
    title: "Scrub the Deck | Pitch Deck Agency | 81% Raise Success Rate",
    description: "Specialist pitch deck agency. We design investor decks that close rounds. Trusted by BBC, Aston Martin, Cisco and 100+ tech founders.",
    url: "https://scrubthedeck.com",
    siteName: "Scrub the Deck",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
