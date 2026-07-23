import { describe, expect, test, vi } from "vitest";

import {
  validateContent,
  warnAboutUnverifiedContent,
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
      ]),
    );
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-asset");
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-contact");
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-proof");
    expect(issues.map(({ code }) => code)).not.toContain("placeholder-timeline");
    expect(issues.map(({ path }) => path)).toEqual(
      expect.arrayContaining([
        "products.passenger-elevator",
        "products.home-elevator",
        "products.cargo-elevator",
        "products.hospital-elevator",
        "products.panoramic-elevator",
      ]),
    );
  });

  test("production content issues are reported without throwing", () => {
    const warning = vi.spyOn(console, "warn").mockImplementation(() => {});

    expect(() => warnAboutUnverifiedContent()).not.toThrow();
    expect(warning).toHaveBeenCalledWith(
      expect.stringContaining("[content-validation]"),
    );
    expect(warning).toHaveBeenCalledWith(
      expect.stringContaining("products.passenger-elevator"),
    );
  });

  test("the Next config reports preview content without rejecting it", async () => {
    const warning = vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.resetModules();

    await expect(import("../../next.config")).resolves.toBeDefined();
    expect(warning).toHaveBeenCalledWith(
      expect.stringContaining("[content-validation]"),
    );
  });
});
