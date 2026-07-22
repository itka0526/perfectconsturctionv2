import { describe, expect, test, vi } from "vitest";

import robots from "@/app/robots";
import sitemap, { getSitemapPaths, staticRoutes } from "@/app/sitemap";
import { activeLocales, brands, products, projects, siteSettings } from "@/content";

describe("locale and route generation", () => {
  test("only Mongolian is active at launch", () => {
    expect(activeLocales).toEqual(["mn"]);
    expect(siteSettings.defaultLocale).toBe("mn");
    expect(activeLocales).not.toContain("en");
  });

  test("every non-draft dynamic record receives a canonical route", () => {
    const generated = new Set(getSitemapPaths());

    for (const product of products) {
      expect(generated.has(`/products/${product.slug}`)).toBe(!product.draft);
    }
    for (const brand of brands) {
      expect(generated.has(`/brands/${brand.slug}`)).toBe(!brand.draft);
    }
    for (const project of projects) {
      expect(generated.has(`/projects/${project.slug}`)).toBe(!project.draft);
    }
    staticRoutes.forEach((route) => expect(generated).toContain(route));
  });

  test("sitemap entries use the canonical apex and contain no duplicate URLs", () => {
    const entries = sitemap();
    const urls = entries.map(({ url }) => url);

    expect(new Set(urls).size).toBe(urls.length);
    urls.forEach((url) => expect(url).toMatch(/^https:\/\/perfectconstruction\.org\//));
  });

  test("Vercel previews are not crawlable while production remains crawlable", () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    expect(robots().rules).toMatchObject({ userAgent: "*", disallow: "/" });

    vi.stubEnv("VERCEL_ENV", "production");
    expect(robots().rules).toMatchObject({ userAgent: "*", allow: "/" });
  });
});
