import { expect, test } from "@playwright/test";

const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-portrait", width: 768, height: 1024 },
  { name: "tablet-landscape", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 1000 },
] as const;

test.describe("homepage visual regression", () => {
  test.skip(
    ({ browserName }) => browserName !== "chromium",
    "Keep canonical visual baselines in Chromium; cross-browser behavior is covered separately.",
  );

  for (const viewport of viewports) {
    test(`${viewport.name} remains visually stable`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto("/");
      await page.evaluate(() => document.fonts.ready);

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBe(false);

      await expect(page).toHaveScreenshot(`home-${viewport.name}.png`, {
        fullPage: true,
      });
    });
  }
});
