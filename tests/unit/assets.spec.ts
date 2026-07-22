import { access } from "node:fs/promises";
import path from "node:path";

import { describe, expect, test } from "vitest";

import { allAssetRefs } from "@/content/assets";

const archivalSourceFiles = [
  "docs/discovery/source-assets/catalogues/asia-fuji-passenger/asia-fuji-passenger-elevator-catalogue.pdf",
  "docs/discovery/source-assets/catalogues/fuji-precision-decoration/fuji-precision-elevator-decoration-catalogue.pdf",
  "docs/discovery/source-assets/catalogues/asia-fuji-escalator/asia-fuji-escalator-moving-walk-catalogue.pdf",
  "docs/discovery/source-assets/company/brochure-profile-products/perfect-construction-profile-products-mn.jpg",
  "docs/discovery/source-assets/company/brochure-services-contact/perfect-construction-services-contact-mn.jpg",
  "docs/discovery/source-assets/certificates/asia-fuji-authorization-2026-2029/asia-fuji-mongolia-exclusive-agent-authorization-2026-2029.jpg",
];

describe("central asset registry", () => {
  test("every referenced preview asset exists under public/assets", async () => {
    const failures: string[] = [];

    await Promise.all(
      allAssetRefs.map(async ({ src }) => {
        try {
          await access(path.join(process.cwd(), "public", src));
        } catch {
          failures.push(src);
        }
      }),
    );

    expect(failures).toEqual([]);
  });

  test("placeholder and verified assets are labelled consistently", () => {
    expect(allAssetRefs.length).toBeGreaterThan(0);
    expect(
      allAssetRefs.some((asset) => asset.verificationStatus === "verified"),
    ).toBe(true);
    expect(
      allAssetRefs.some((asset) => asset.verificationStatus === "placeholder"),
    ).toBe(true);

    allAssetRefs.forEach((asset) => {
      expect(asset.src).toMatch(/^\/assets\//);
      expect(asset.alt.mn.trim().length).toBeGreaterThan(0);

      if (asset.verificationStatus === "placeholder") {
        expect(asset.src).toMatch(/^\/assets\/placeholders\//);
      } else {
        expect(asset.src).not.toMatch(/^\/assets\/placeholders\//);
      }
    });
  });

  test("every supplied source file exists in its discovery folder", async () => {
    const failures: string[] = [];

    await Promise.all(
      archivalSourceFiles.map(async (documentPath) => {
        try {
          await access(path.join(process.cwd(), documentPath));
        } catch {
          failures.push(documentPath);
        }
      }),
    );

    expect(failures).toEqual([]);
  });
});
