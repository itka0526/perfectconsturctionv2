import { access } from "node:fs/promises";
import path from "node:path";

import { describe, expect, test } from "vitest";

import { allAssetRefs } from "@/content/assets";
import { catalogues } from "@/content/catalogues";

const archivalSourceFiles = [
  "docs/discovery/source-assets/catalogues/asia-fuji-passenger/asia-fuji-passenger-elevator-catalogue.pdf",
  "docs/discovery/source-assets/catalogues/fuji-precision-decoration/fuji-precision-elevator-decoration-catalogue.pdf",
  "docs/discovery/source-assets/catalogues/asia-fuji-escalator/asia-fuji-escalator-moving-walk-catalogue.pdf",
  "docs/discovery/source-assets/company/brochure-profile-products/perfect-construction-profile-products-mn.jpg",
  "docs/discovery/source-assets/company/brochure-services-contact/perfect-construction-services-contact-mn.jpg",
  "docs/discovery/source-assets/certificates/asia-fuji-authorization-2026-2029/asia-fuji-mongolia-exclusive-agent-authorization-2026-2029.jpg",
  "docs/discovery/source-assets/company/logo/perfect-construction-mark-source.svg",
  "docs/discovery/source-assets/company/office/perfect-construction-office-exterior-original.jpg",
  "docs/discovery/source-assets/manufacturer-logos/fuji-precision/fuji-precision-logo-source.svg",
  "docs/discovery/source-assets/manufacturer-logos/asia-fuji/asia-fuji-logo-source.svg",
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

  test("layout aids stay unverified and verified assets are never layout aids", () => {
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

      if (asset.src.startsWith("/assets/placeholders/")) {
        expect(asset.verificationStatus).toBe("placeholder");
      }

      if (asset.verificationStatus === "verified") {
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

  test("every approved catalogue download exists under public assets", async () => {
    const failures: string[] = [];

    await Promise.all(
      catalogues.map(async ({ downloadAuthorized, downloadPath }) => {
        if (!downloadAuthorized || !downloadPath) {
          failures.push(downloadPath ?? "missing-download-path");
          return;
        }

        try {
          await access(path.join(process.cwd(), "public", downloadPath));
        } catch {
          failures.push(downloadPath);
        }
      }),
    );

    expect(failures).toEqual([]);
  });
});
