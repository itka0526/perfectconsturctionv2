import AxeBuilder from "@axe-core/playwright";
import { chromium } from "@playwright/test";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000";
const routes = process.argv.slice(2);
const auditedRoutes = routes.length > 0 ? routes : ["/"];

const browser = await chromium.launch({ headless: true });

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();

  for (const route of auditedRoutes) {
    await page.goto(new URL(route, baseUrl).toString(), {
      waitUntil: "networkidle",
    });

    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    const summary = result.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.map((node) => ({
        target: node.target.join(" "),
        summary: node.failureSummary?.replaceAll("\n", " "),
      })),
    }));

    console.log(JSON.stringify({ route, violations: summary }, null, 2));
  }
} finally {
  await browser.close();
}
