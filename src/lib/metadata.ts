import type { Metadata } from "next";

import { siteSettings } from "@/content";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, siteSettings.canonicalUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "mn-MN": canonical,
      },
    },
    openGraph: {
      type: "website",
      locale: "mn_MN",
      url: canonical,
      siteName: siteSettings.companyName.mn,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
