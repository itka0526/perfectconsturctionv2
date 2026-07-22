import type { NextConfig } from "next";

import { assertContentReadyForProduction } from "./src/content/validation";

export interface LegacyRedirect {
  source: string;
  destination: string;
  permanent: true;
  has?: Array<{
    type: "host";
    value: string;
  }>;
}

const productRedirects = [
  ["passenger_elevator", "passenger-elevator"],
  ["home_elevator", "home-elevator"],
  ["cargo_elevator", "cargo-elevator"],
  ["hospital_elevator", "hospital-elevator"],
  ["panoramic_elevator", "panoramic-elevator"],
  ["escalator", "escalator-moving-walk"],
  ["moving_walk", "escalator-moving-walk"],
  ["dumbwaiter", "dumbwaiter-service-lift"],
  ["service_lift", "dumbwaiter-service-lift"],
] as const;

/**
 * Exported so the redirect contract can be verified without duplicating it in
 * tests. Wildcards intentionally collapse obsolete detail paths onto the
 * corresponding current landing page.
 */
export const legacyRedirects: LegacyRedirect[] = [
  {
    source: "/:path*",
    destination: "https://perfectconstruction.org/:path*",
    permanent: true,
    has: [{ type: "host", value: "www.perfectconstruction.org" }],
  },
  { source: "/about_us/:path*", destination: "/about", permanent: true },
  {
    source: "/original_factory/:path*",
    destination: "/brands/fuji-precision",
    permanent: true,
  },
  ...productRedirects.flatMap(([legacySlug, currentSlug]) => [
    {
      source: `/${legacySlug}/:path*`,
      destination: `/products/${currentSlug}`,
      permanent: true as const,
    },
    {
      source: `/products/${legacySlug}/:path*`,
      destination: `/products/${currentSlug}`,
      permanent: true as const,
    },
  ]),
  {
    source: "/beautiful_elevators/:path*",
    destination: "/products/customization",
    permanent: true,
  },
  { source: "/download", destination: "/resources", permanent: true },
  { source: "/contact_us", destination: "/contact", permanent: true },
  { source: "/news/:path*", destination: "/about", permanent: true },
];

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const scriptSources = [
  "'self'",
  "'unsafe-inline'",
  "https://va.vercel-scripts.com",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
];

const connectSources = [
  "'self'",
  "https://vitals.vercel-insights.com",
  "https://*.vercel-insights.com",
  ...(isDevelopment ? ["ws:", "wss:"] : []),
];

export const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSources.join(" ")}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  `connect-src ${connectSources.join(" ")}`,
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
].join("; ");

export const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
] as const;

if (
  process.env.VERCEL_ENV === "production" ||
  process.env.ENFORCE_VERIFIED_CONTENT === "true"
) {
  assertContentReadyForProduction();
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return legacyRedirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...securityHeaders],
      },
    ];
  },
};

export default nextConfig;
