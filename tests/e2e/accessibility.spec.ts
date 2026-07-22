import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const representativeRoutes = [
  "/",
  "/products/passenger-elevator",
  "/brands/fuji-precision",
  "/projects/ulaanbaatar-residence",
  "/services",
  "/about",
  "/contact",
];

test.describe("WCAG 2.2 AA smoke scans", () => {
  test.skip(({ browserName }) => browserName !== "chromium", "Run one deterministic axe pass in Chromium.");

  for (const route of representativeRoutes) {
    test(`${route} has no automated WCAG A/AA violations`, async ({ page }) => {
      await page.goto(route);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
