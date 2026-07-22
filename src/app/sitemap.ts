import type { MetadataRoute } from "next";

import { brands, products, projects, siteSettings } from "@/content";

export const staticRoutes = [
  "",
  "/products",
  "/products/customization",
  "/brands",
  "/projects",
  "/services",
  "/about",
  "/about/certificates",
  "/resources",
  "/contact",
  "/privacy",
] as const;

export function getSitemapPaths(): string[] {
  return Array.from(
    new Set([
      ...staticRoutes,
      ...products
        .filter(({ draft }) => !draft)
        .map(({ slug }) => `/products/${slug}`),
      ...brands.filter(({ draft }) => !draft).map(({ slug }) => `/brands/${slug}`),
      ...projects
        .filter(({ draft }) => !draft)
        .map(({ slug }) => `/projects/${slug}`),
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapPaths().map((path) => ({
    url: new URL(path || "/", siteSettings.canonicalUrl).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
  }));
}
