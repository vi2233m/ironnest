import type { Metadata, Viewport } from "next";
import { Inter, Oswald, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironnest.wiki"),
  title: {
    default: "IRON NEST Wiki — Guides, Calculator & Shell Tier List",
    template: "%s — IRON NEST Wiki",
  },
  description:
    "Complete IRON NEST: Heavy Turret Simulator resource — ballistic calculator, shell tier list, full walkthrough, gold medal guides, mission tips & more.",
  keywords:
    "iron nest, heavy turret simulator, iron nest guide, iron nest calculator, iron nest best shells, iron nest walkthrough, iron nest gold medal, iron nest tips, iron nest missions, iron nest endings, iron nest demo, iron nest coop, iron nest mods, iron nest key, siege of cartagena, phantom battery, ballistic calculator, dieselpunk artillery",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "IRON NEST Wiki — Guides, Calculator & Shell Tier List",
    description:
      "Complete IRON NEST: Heavy Turret Simulator resource — ballistic calculator, shell tier list, full walkthrough, gold medal guides & more.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "IRON NEST Heavy Turret Simulator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRON NEST Wiki — Guides, Calculator & Shell Tier List",
    description:
      "Complete IRON NEST: Heavy Turret Simulator resource — ballistic calculator, shell tier list, full walkthrough & more.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IRON NEST Wiki — Guides, Calculator & Shells",
    url: "https://ironnest.wiki",
    description:
      "Complete IRON NEST: Heavy Turret Simulator resource — ballistic calculator, shell tier list, full walkthrough, gold medal guides & more.",
    about: {
      "@type": "VideoGame",
      name: "IRON NEST: Heavy Turret Simulator",
      genre: ["Simulation", "Action", "Indie"],
      gamePlatform: "PC (Steam)",
      applicationCategory: "Game",
      operatingSystem: "Windows",
      datePublished: "2026-08-06",
      developer: {
        "@type": "Organization",
        name: "Nick Nieuwoudt & Dominik Latos",
      },
      publisher: {
        "@type": "Organization",
        name: "Nick Nieuwoudt & Dominik Latos",
      },
      offers: {
        "@type": "Offer",
        price: "15.99",
        priceCurrency: "USD",
        url: "https://store.steampowered.com/app/2950790/",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "98",
        ratingCount: "7651",
        bestRating: "100",
      },
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google 搜索 favicon 要求：48x48 倍数尺寸，PNG 优先 */}
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-144x144.png" sizes="144x144" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
