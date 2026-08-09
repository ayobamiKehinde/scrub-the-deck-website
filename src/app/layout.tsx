import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display, Caveat } from "next/font/google";
import Script from "next/script";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
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
        "Specialist pitch deck agency with an 82% fundraising success rate. Founded by David Pugh.",
      founder: { "@id": "https://scrubthedeck.com/#david-pugh" },
      sameAs: [
        "https://www.linkedin.com/in/scrubthedeck/",
        "https://www.linkedin.com/company/scrub-the-deck",
      ],
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
    {
      "@type": "LocalBusiness",
      "@id": "https://scrubthedeck.com/#business",
      name: "Scrub the Deck",
      url: "https://scrubthedeck.com",
      description:
        "Specialist pitch deck agency with an 82% fundraising success rate. Helping founders raise seed, Series A, and Series B investment.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "167–169 Great Portland Street, 5th Floor",
        addressLocality: "London",
        postalCode: "W1W 5PF",
        addressCountry: "GB",
      },
      areaServed: "Worldwide",
      priceRange: "££££",
      parentOrganization: { "@id": "https://scrubthedeck.com/#org" },
    },
    {
      "@type": "Person",
      "@id": "https://scrubthedeck.com/#david-pugh",
      name: "David Pugh",
      jobTitle: "Founder and Pitch Deck Consultant",
      description:
        "Pitch deck consultant with 22 years of experience. Founder of Scrub the Deck. Has helped founders raise over £30M across 100+ investor pitch decks.",
      url: "https://scrubthedeck.com/about",
      sameAs: [
        "https://www.linkedin.com/in/scrubthedeck/",
        "https://www.linkedin.com/company/scrub-the-deck",
      ],
      worksFor: { "@id": "https://scrubthedeck.com/#org" },
    },
    {
      "@type": "Service",
      "@id": "https://scrubthedeck.com/#service-pitch-deck",
      name: "Pitch Deck Design",
      description:
        "End-to-end investor pitch deck design following an 18-point structure developed over 22 years. Includes narrative, visual design, and investor distribution to 1,500+ active investors.",
      provider: { "@id": "https://scrubthedeck.com/#org" },
      serviceType: "Pitch Deck Design",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      "@id": "https://scrubthedeck.com/#service-fundraising",
      name: "Fundraising Consulting",
      description:
        "Full fundraising support including investor narrative, pitch deck creation, and direct distribution to 1,500+ investors. 82% success rate across seed, Series A, and Series B rounds.",
      provider: { "@id": "https://scrubthedeck.com/#org" },
      serviceType: "Fundraising Consulting",
      areaServed: "Worldwide",
    },
  ],
};

export const metadata: Metadata = {
  title: "Scrub the Deck | Pitch Deck Agency | Investor Pitch Decks That Raise",
  description:
    "Scrub the Deck is a specialist pitch deck agency with an 82% fundraising success rate. We design investor pitch decks for seed, Series A and Series B startups. Trusted by BBC, Aston Martin, Cisco and 100+ tech founders.",
  metadataBase: new URL("https://scrubthedeck.com"),
  verification: {
    google: "BpvpCC-IFfMhhXj_m7Q7Ht2uad_NqbziyH11tCrIvc0",
  },
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
    title: "Scrub the Deck | Pitch Deck Agency | 82% Raise Success Rate",
    description: "We design decks that close rounds, backed by 1500+ active investors.",
    url: "https://scrubthedeck.com",
    siteName: "Scrub the Deck",
    type: "website",
    images: [
      {
        url: "/images/parrot-icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Scrub the Deck – Pitch Deck Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrub the Deck | Pitch Deck Agency | 82% Raise Success Rate",
    description: "We design decks that close rounds, backed by 1500+ active investors.",
    images: ["/images/parrot-icon.jpeg"],
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
        <ConditionalChrome>
          {children}
        </ConditionalChrome>
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
