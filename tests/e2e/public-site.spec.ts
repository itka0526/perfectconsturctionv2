import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/products",
  "/products/passenger-elevator",
  "/products/customization",
  "/brands",
  "/brands/fuji-precision",
  "/projects",
  "/projects/ulaanbaatar-residence",
  "/services",
  "/about",
  "/about/certificates",
  "/resources",
  "/contact",
  "/privacy",
];

test.describe("public site", () => {
  for (const route of publicRoutes) {
    test(`${route} renders a semantic page`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response?.ok()).toBe(true);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);

      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBe(false);
    });
  }

  test("contact page exposes direct channels without a form", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator('a[href^="tel:"]:visible').first()).toBeVisible();
    await expect(page.locator('a[href^="mailto:"]:visible').first()).toBeVisible();
    await expect(page.locator('a[href*="facebook.com"]:visible').first()).toBeVisible();
    await expect(
      page
        .locator(
          'a[href*="maps.google.com"]:visible, a[href*="google.com/maps"]:visible',
        )
        .first(),
    ).toBeVisible();
    await expect(page.locator("form")).toHaveCount(0);
  });

  test("primary project links are reachable from site navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('a[href="/products"]:visible').first()).toBeVisible();
    await expect(page.locator('a[href="/projects"]:visible').first()).toBeVisible();
    await expect(page.locator('a[href="/contact"]:visible').first()).toBeVisible();
  });

  test("all public routes fit the 360px minimum viewport", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });

    for (const route of publicRoutes) {
      await page.goto(route);
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow, `${route} overflows at 360px`).toBe(false);
    }
  });

  test("internal links found on public pages resolve", async ({ page, request }) => {
    const internalLinks = new Set<string>();

    for (const route of publicRoutes) {
      await page.goto(route);
      const hrefs = await page.locator("a[href]").evaluateAll((links) =>
        links.map((link) => link.getAttribute("href") ?? ""),
      );

      for (const href of hrefs) {
        if (href.startsWith("/") && !href.startsWith("//")) {
          internalLinks.add(href);
        }
      }
    }

    for (const href of internalLinks) {
      const response = await request.get(href);
      expect(response.status(), `${href} returned ${response.status()}`).toBeLessThan(400);
    }
  });

  test("mobile menu is keyboard-operable", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: /цэс|menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator('a[href="/products"]').last()).toBeVisible();
  });

  test("unknown routes return the accessible 404 page", async ({ page }) => {
    const response = await page.goto("/not-a-perfect-construction-route");

    expect(response?.status()).toBe(404);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
  });
});

test.describe("legacy redirects", () => {
  const redirects: ReadonlyArray<readonly [string, string]> = [
    ["/contact_us", "/contact"],
    ["/download", "/resources"],
    ["/about_us/history", "/about"],
    ["/passenger_elevator", "/products/passenger-elevator"],
    ["/products/home_elevator", "/products/home-elevator"],
    ["/beautiful_elevators/cabins", "/products/customization"],
  ];

  for (const [legacyPath, currentPath] of redirects) {
    test(`${legacyPath} resolves to ${currentPath}`, async ({ page }) => {
      await page.goto(legacyPath);
      await expect(page).toHaveURL(
        new RegExp(`${currentPath.replaceAll("/", "\\/")}/?$`),
      );
    });
  }
});
