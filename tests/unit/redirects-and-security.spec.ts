import { describe, expect, test } from "vitest";

import {
  contentSecurityPolicy,
  legacyRedirects,
  securityHeaders,
} from "../../next.config";

const redirectFor = (source: string) =>
  legacyRedirects.find((redirect) => redirect.source === source);

describe("legacy redirects", () => {
  test.each([
    ["/about_us/:path*", "/about"],
    ["/original_factory/:path*", "/brands/fuji-precision"],
    ["/passenger_elevator/:path*", "/products/passenger-elevator"],
    ["/products/home_elevator/:path*", "/products/home-elevator"],
    ["/cargo_elevator/:path*", "/products/cargo-elevator"],
    ["/hospital_elevator/:path*", "/products/hospital-elevator"],
    ["/panoramic_elevator/:path*", "/products/panoramic-elevator"],
    ["/escalator/:path*", "/products/escalator-moving-walk"],
    ["/dumbwaiter/:path*", "/products/dumbwaiter-service-lift"],
    ["/beautiful_elevators/:path*", "/products/customization"],
    ["/download", "/resources"],
    ["/contact_us", "/contact"],
    ["/news/:path*", "/about"],
  ])("maps %s permanently to %s", (source, destination) => {
    expect(redirectFor(source)).toMatchObject({ destination, permanent: true });
  });

  test("redirects www requests to the canonical apex", () => {
    expect(redirectFor("/:path*")).toMatchObject({
      destination: "https://perfectconstruction.org/:path*",
      permanent: true,
      has: [{ type: "host", value: "www.perfectconstruction.org" }],
    });
  });
});

describe("security headers", () => {
  test("locks down framing, objects, permissions, and referrer leakage", () => {
    expect(contentSecurityPolicy).toContain("object-src 'none'");
    expect(contentSecurityPolicy).toContain("frame-ancestors 'none'");
    expect(contentSecurityPolicy).toContain("base-uri 'self'");
    expect(contentSecurityPolicy).toContain("https://va.vercel-scripts.com");
    expect(contentSecurityPolicy).toContain("https://*.vercel-insights.com");

    expect(securityHeaders).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: "X-Frame-Options", value: "DENY" }),
        expect.objectContaining({ key: "X-Content-Type-Options", value: "nosniff" }),
        expect.objectContaining({
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        }),
      ]),
    );
  });
});
