import { describe, expect, test, vi } from "vitest";

import {
  assertContentReadyForProduction,
  validateContent,
} from "@/content/validation";
import { catalogues } from "@/content/catalogues";

describe("content validation", () => {
  test("preview content is structurally valid", () => {
    expect(validateContent()).toEqual([]);
  });

  test("approved catalogue downloads use public asset paths", () => {
    catalogues.forEach((catalogue) => {
      expect(catalogue.publicationAuthorized).toBe(true);
      expect(catalogue.downloadAuthorized).toBe(true);
      expect(catalogue.downloadPath).toMatch(/^\/assets\/catalogs\/.+\.pdf$/);
    });
  });

  test("production validation identifies unverified public content", () => {
    const issues = validateContent({ production: true });

    expect(issues.length).toBeGreaterThan(0);
    expect(issues.map(({ code }) => code)).toEqual(
      expect.arrayContaining([
        "placeholder-record",
        "placeholder-asset",
        "placeholder-contact",
      ]),
    );
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-proof");
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-timeline");
    expect(issues.map(({ path }) => path)).toEqual(
      expect.arrayContaining([
        "site.logo",
        "site.address",
        "site.contacts.phone-primary",
        "site.contacts.phone-secondary",
        "site.contacts.phone-mobile",
        "site.contacts.email-primary",
        "site.contacts.facebook-primary",
        "site.contacts.map-primary",
      ]),
    );
    expect(() => assertContentReadyForProduction()).toThrow(
      "Production content validation failed",
    );
  });

  test("the Next config production gate rejects the preview dataset", async () => {
    vi.stubEnv("ENFORCE_VERIFIED_CONTENT", "true");
    vi.resetModules();

    await expect(import("../../next.config")).rejects.toThrow(
      "Production content validation failed",
    );
  });
});
