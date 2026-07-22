import type { MetadataRoute } from "next";

import { siteSettings } from "@/content";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === "preview";

  return {
    rules: {
      userAgent: "*",
      ...(isPreview ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${siteSettings.canonicalUrl}/sitemap.xml`,
    host: siteSettings.canonicalUrl,
  };
}
