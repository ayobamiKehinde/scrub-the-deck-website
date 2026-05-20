import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Scrub the Deck — Pitch Deck Agency",
  description:
    "Pitch decks that raise funding. Scrub the Deck has an 81% success rate helping founders navigate the rough seas of investment.",
  metadataBase: new URL("https://scrubthedeck.com"),
  openGraph: {
    title: "Scrub the Deck — Pitch Deck Agency",
    description: "Pitch decks that raise funding. 81% success rate.",
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
      className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
