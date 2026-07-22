import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  PreviewIndicator,
  SiteFooter,
  SiteHeader,
  StickyContactBar,
} from "@/components";
import { siteSettings } from "@/content";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const canonicalUrl = siteSettings.canonicalUrl;
const socialImage = `${canonicalUrl}/og.png`;
const description =
  "Монголын барилгын төсөлд тохирсон лифтний сонголт, нийлүүлэлт, угсралтын инженерийн шийдэл.";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Perfect Construction | Лифтний төслийн шийдэл",
    template: "%s | Perfect Construction",
  },
  description,
  applicationName: "Perfect Construction",
  alternates: {
    canonical: "/",
    languages: {
      "mn-MN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: canonicalUrl,
    siteName: "Perfect Construction",
    title: "Perfect Construction | Лифтний төслийн шийдэл",
    description,
    images: [
      {
        url: socialImage,
        width: 1728,
        height: 911,
        alt: "Perfect Construction — Монголын барилгын төсөлд тохирсон лифтний шийдэл",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Construction | Лифтний төслийн шийдэл",
    description,
    images: [socialImage],
  },
  robots:
    process.env.VERCEL_ENV === "production"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${canonicalUrl}/#organization`,
  name: siteSettings.companyName.mn,
  legalName: siteSettings.legalName.mn,
  url: canonicalUrl,
  areaServed: {
    "@type": "Country",
    name: "Mongolia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Үндсэн агуулга руу шилжих
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <PreviewIndicator />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
        <StickyContactBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
