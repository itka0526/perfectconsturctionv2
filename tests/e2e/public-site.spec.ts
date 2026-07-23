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
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });

      expect(response?.ok()).toBe(true);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(
        page.locator('nav[aria-label="Хуудасны зам"], .breadcrumbs'),
      ).toHaveCount(0);
      await expect(
        page.locator(
          ".preview-indicator, .preview-badge, .project-image__status, .contact-panel__notice, .site-footer__preview-note",
        ),
      ).toHaveCount(0);

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

  test("contact panel uses a full-width background band", async ({ page }) => {
    await page.goto("/products/panoramic-elevator");

    const contactSection = page.locator(".section--contact");
    await expect(contactSection.locator(".contact-panel")).toBeVisible();

    const metrics = await contactSection.evaluate((section) => {
      const rect = section.getBoundingClientRect();

      return {
        background: getComputedStyle(section).backgroundColor,
        hasHorizontalOverflow:
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
        left: rect.left,
        viewportWidth: document.documentElement.clientWidth,
        width: rect.width,
      };
    });

    expect(metrics.background).toBe("rgb(7, 29, 51)");
    expect(metrics.left).toBeCloseTo(0, 0);
    expect(metrics.width).toBeCloseTo(metrics.viewportWidth, 0);
    expect(metrics.hasHorizontalOverflow).toBe(false);
  });

  test("contact panel phone hover highlights only the icon", async ({ page }) => {
    await page.goto("/products/panoramic-elevator");

    const phoneGroup = page.locator(".contact-panel__phone-group");
    const phoneIcon = phoneGroup.locator(".contact-panel__icon");
    const firstPhone = phoneGroup.locator(".contact-panel__phone-link").first();
    const phoneColor = await firstPhone.evaluate(
      (link) => getComputedStyle(link).color,
    );

    await firstPhone.hover();

    await expect(phoneIcon).toHaveCSS("color", "rgb(143, 208, 185)");
    await expect(firstPhone).toHaveCSS("color", phoneColor);
  });

  test("panoramic and escalator cards use the same image treatment", async ({
    page,
  }) => {
    await page.goto("/");

    const panoramicCard = page.locator("article.product-card", {
      has: page.locator('a[href="/products/panoramic-elevator"]'),
    });
    const escalatorCard = page.locator("article.product-card", {
      has: page.locator('a[href="/products/escalator-moving-walk"]'),
    });
    const panoramicImage = panoramicCard.locator(".project-image img");
    const escalatorImage = escalatorCard.locator(".project-image img");

    await expect(panoramicImage).toHaveCSS("object-fit", "cover");
    await expect(escalatorImage).toHaveCSS("object-fit", "cover");
    await expect(panoramicImage).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
    await expect(escalatorImage).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  });

  test("footer logo and contact hovers remain legible on the dark background", async ({
    page,
  }) => {
    await page.goto("/products/escalator-moving-walk");

    const footer = page.locator(".site-footer");
    const logoMark = footer.locator(".brand-logo__mark");
    const copyright = footer.locator(".site-footer__bottom");

    await expect(logoMark).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(logoMark).toHaveCSS("border-radius", "50%");
    await expect(copyright).toHaveCSS("justify-content", "center");
    await expect(copyright).toHaveCSS("text-align", "center");

    for (const selector of [
      'a[href^="mailto:"]',
      'a[href*="facebook.com"]',
      'a[href*="maps.google.com"], a[href*="google.com/maps"]',
    ]) {
      const contactLink = footer.locator(selector);
      await contactLink.hover();
      await expect(contactLink.locator("strong")).toHaveCSS(
        "color",
        "rgb(143, 208, 185)",
      );
    }
  });

  test("services hero separates its description and contact action", async ({
    page,
  }) => {
    await page.goto("/services");

    const heroActions = page.locator(".page-hero__copy-actions");
    const descriptionBox = await heroActions.locator(".lede").boundingBox();
    const buttonBox = await heroActions.locator(".button").boundingBox();

    expect(descriptionBox).not.toBeNull();
    expect(buttonBox).not.toBeNull();
    expect(buttonBox!.y - (descriptionBox!.y + descriptionBox!.height)).toBe(24);
  });

  test("services preparation list receives more desktop width", async ({
    page,
  }, testInfo) => {
    await page.goto("/services");

    const grid = page.locator(".detail-grid--service-prep");
    const leftBox = await grid.locator(":scope > :first-child").boundingBox();
    const rightBox = await grid.locator(":scope > :last-child").boundingBox();

    expect(leftBox).not.toBeNull();
    expect(rightBox).not.toBeNull();

    if (testInfo.project.name === "chromium-desktop") {
      const rightShare = rightBox!.width / (leftBox!.width + rightBox!.width);
      expect(rightShare).toBeGreaterThan(0.4);
      expect(rightShare).toBeLessThan(0.45);
    } else {
      expect(rightBox!.x).toBeCloseTo(leftBox!.x, 0);
      expect(rightBox!.width).toBeCloseTo(leftBox!.width, 0);
    }
  });

  test("resources requirement columns split evenly on desktop", async ({
    page,
  }, testInfo) => {
    await page.goto("/resources");

    const grid = page.locator(".detail-grid--resources");
    const leftBox = await grid.locator(":scope > :first-child").boundingBox();
    const rightBox = await grid.locator(":scope > :last-child").boundingBox();

    expect(leftBox).not.toBeNull();
    expect(rightBox).not.toBeNull();
    expect(rightBox!.width).toBeCloseTo(leftBox!.width, 0);

    if (testInfo.project.name === "chromium-desktop") {
      expect(rightBox!.x).toBeGreaterThan(leftBox!.x + leftBox!.width);
    } else {
      expect(rightBox!.x).toBeCloseTo(leftBox!.x, 0);
    }
  });

  test("resources FAQ uses consistent rows and answer spacing", async ({
    page,
  }) => {
    await page.goto("/resources");

    const faq = page.locator(".faq-list");
    const questions = faq.locator("details");

    await expect(questions).toHaveCount(4);
    await expect(questions.first().locator("summary")).toHaveCSS(
      "min-height",
      "64px",
    );

    await questions.first().locator("summary").click();
    await expect(questions.first()).toHaveAttribute("open", "");

    const summaryBox = await questions.first().locator("summary").boundingBox();
    const answerBox = await questions.first().locator("p").boundingBox();

    expect(summaryBox).not.toBeNull();
    expect(answerBox).not.toBeNull();
    expect(answerBox!.y).toBeGreaterThanOrEqual(
      summaryBox!.y + summaryBox!.height - 1,
    );
  });

  test("contact office is balanced and the redundant response section is removed", async ({
    page,
  }, testInfo) => {
    await page.goto("/contact");

    const grid = page.locator(".detail-grid--contact-office");
    const address = grid.locator(".contact-address");
    const leftBox = await grid.locator(":scope > :first-child").boundingBox();
    const rightBox = await grid.locator(":scope > :last-child").boundingBox();

    expect(leftBox).not.toBeNull();
    expect(rightBox).not.toBeNull();
    await expect(address).toBeVisible();
    await expect(page.getByText("Дуудлагад хариу өгөх")).toHaveCount(0);
    await expect(
      page.getByText(
        "Утас, и-мэйл эсвэл Facebook-ээр холбогдож, уулзалтын цагаа товлоорой.",
      ),
    ).toBeVisible();

    if (testInfo.project.name === "chromium-desktop") {
      expect(rightBox!.width).toBeCloseTo(leftBox!.width, 0);
      expect(rightBox!.x).toBeGreaterThan(leftBox!.x + leftBox!.width);
      expect(Number.parseFloat(await address.evaluate((node) =>
        getComputedStyle(node).fontSize,
      ))).toBeLessThanOrEqual(60);
    } else {
      expect(rightBox!.x).toBeCloseTo(leftBox!.x, 0);
      expect(rightBox!.width).toBeCloseTo(leftBox!.width, 0);
    }
  });

  test("contact hero social icons stay clipped behind the copy", async ({
    page,
  }) => {
    await page.goto("/contact");

    const composition = page.locator(".contact-hero-socials");
    const copy = composition.locator(".contact-hero-socials__copy");
    const icons = composition.locator(".contact-hero-socials__icon");

    await expect(composition).toHaveCSS("overflow", "hidden");
    await expect(composition).toHaveCSS("border-top-width", "0px");
    await expect(composition).toHaveCSS("border-bottom-width", "0px");
    await expect(icons).toHaveCount(4);
    await expect(icons.first()).toHaveCSS(
      "animation-name",
      "contact-social-float",
    );
    await expect(copy).toContainText(
      "Утас, и-мэйл эсвэл Facebook-ээр холбогдож",
    );

    await expect
      .poll(() =>
        icons.locator("img").evaluateAll((images) =>
          images.every(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
        ),
      )
      .toBe(true);

    const copyZIndex = Number.parseInt(
      await copy.evaluate((node) => getComputedStyle(node).zIndex),
      10,
    );
    const iconZIndex = Number.parseInt(
      await icons.first().evaluate((node) => getComputedStyle(node).zIndex),
      10,
    );

    expect(copyZIndex).toBeGreaterThan(iconZIndex);

    const positions = await composition.evaluate((container) => {
      const containerRect = container.getBoundingClientRect();
      const rectFor = (selector: string) => {
        const rect = container.querySelector(selector)!.getBoundingClientRect();

        return {
          bottom: containerRect.bottom - rect.bottom,
          left: rect.left - containerRect.left,
          right: containerRect.right - rect.right,
          top: rect.top - containerRect.top,
        };
      };

      return {
        facebook: rectFor(".contact-hero-socials__icon--facebook"),
        gmail: rectFor(".contact-hero-socials__icon--gmail"),
        messenger: rectFor(".contact-hero-socials__icon--messenger"),
      };
    });

    expect(positions.facebook.top).toBeGreaterThan(-12);
    expect(positions.gmail.right).toBeGreaterThan(-12);
    expect(positions.messenger.left).toBeGreaterThan(-4);
    expect(positions.messenger.bottom).toBeGreaterThan(-12);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      ),
    ).toBe(false);
  });

  test("contact hero social icons respect reduced motion", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/contact");

    await expect(
      page.locator(".contact-hero-socials__icon").first(),
    ).toHaveCSS("animation-name", "none");
  });

  test("about history section uses deliberate spacing and alignment", async ({
    page,
  }, testInfo) => {
    await page.goto("/about");

    const summary = page.locator(".about-history__summary");
    const documents = page.locator(".about-history__documents");

    await expect(summary).toHaveCSS("row-gap", "16px");
    await expect(documents).toHaveCSS("row-gap", "12px");

    if (testInfo.project.name === "chromium-desktop") {
      const summaryBox = await summary.boundingBox();
      const documentsBox = await documents.boundingBox();
      const summaryCenter = summaryBox!.y + summaryBox!.height / 2;
      const documentsCenter = documentsBox!.y + documentsBox!.height / 2;

      expect(documentsCenter).toBeCloseTo(summaryCenter, 0);
    }
  });

  test("homepage elevator follows native page scroll", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator(".page-hero--home video")).toHaveCount(0);
    await expect(page.locator(".page-hero--home .hero-video")).toHaveCount(0);
    await expect(page.locator("[data-scroll-elevator]")).toHaveCount(0);
    const elevator = page.locator("[data-home-elevator]");
    await expect(elevator).toBeVisible();
    await expect(elevator).toHaveCSS("pointer-events", "none");
    await expect(
      page.locator(".page-hero > .shell > .page-hero__grid"),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Төслийн талаар ярилцах" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Гүйцэтгэсэн төслүүд" }).first(),
    ).toBeVisible();
    const initialOffset = Number.parseFloat(
      await elevator.evaluate((node) =>
        getComputedStyle(node)
          .getPropertyValue("--hero-elevator-scroll-offset")
          .replace("px", ""),
      ),
    );

    await page.evaluate(() =>
      window.scrollTo({ top: 280, left: 0, behavior: "instant" }),
    );

    await expect
      .poll(() =>
        elevator.evaluate((node) =>
          Number.parseFloat(
            getComputedStyle(node)
              .getPropertyValue("--hero-elevator-scroll-offset")
              .replace("px", ""),
          ),
        ),
      )
      .toBeGreaterThan(initialOffset + 20);
  });

  test("all public routes fit the 360px minimum viewport", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });

    for (const route of publicRoutes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow, `${route} overflows at 360px`).toBe(false);
    }
  });

  test("internal links found on public pages resolve", async ({ page, request }) => {
    test.setTimeout(120_000);
    const internalLinks = new Set<string>();

    for (const route of publicRoutes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
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
