# Shared layouts

## Root layout

- Source: `src/app/layout.tsx`
- Renders the preview notice, sticky header, page content, footer, mobile
  contact bar and Vercel measurements.

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  PreviewIndicator,
  SiteFooter,
  SiteHeader,
  StickyContactBar,
} from "@/components";
import { siteSettings } from "@/content";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="mn"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Үндсэн агуулга руу шилжих
        </a>
        <PreviewIndicator />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
        <StickyContactBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Site header

- Source: `src/components/site-header.tsx`
- Sticky utility/contact bar plus desktop and mobile navigation.

```tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { Fragment } from "react";
import { siteSettings } from "@/content";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";
import { primaryNavigation } from "./navigation";
import { TrackedLink } from "./tracked-link";

export function SiteHeader() {
  const phones = siteSettings.contacts.filter(
    (contact) => contact.kind === "phone",
  );
  const email = siteSettings.contacts.find(
    (contact) => contact.kind === "email",
  );

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <p title={siteSettings.address.mn}>
            <MapPin aria-hidden="true" size={14} strokeWidth={1.8} />
            <span className="sr-only">Оффис:</span>
            <span>{siteSettings.shortAddress.mn}</span>
          </p>
          <ul>
            {phones.length > 0 && (
              <li className="utility-bar__phones">
                <Phone aria-hidden="true" size={14} strokeWidth={1.8} />
                <span className="sr-only">Утас:</span>
                {phones.map((phone, index) => (
                  <Fragment key={phone.id}>
                    {index > 0 && (
                      <span
                        className="utility-bar__phone-separator"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}
                    <TrackedLink href={phone.href}>{phone.value}</TrackedLink>
                  </Fragment>
                ))}
              </li>
            )}
            {email && (
              <li>
                <TrackedLink href={email.href}>
                  <Mail aria-hidden="true" size={14} strokeWidth={1.8} />
                  <span>{email.value}</span>
                </TrackedLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="site-header__main">
        <div className="shell site-header__inner">
          <Logo />
          <nav className="desktop-navigation" aria-label="Үндсэн цэс">
            <ul>
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <TrackedLink href={item.href}>{item.label}</TrackedLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__cta">
            <ButtonLink href="/contact" variant="outline">
              Төслийн талаар ярилцах
            </ButtonLink>
          </div>
          <MobileNavigation
            items={[
              ...primaryNavigation,
              { href: "/contact", label: "Холбоо барих" },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
```

## Site footer

- Source: `src/components/site-footer.tsx`
- Four-column corporate footer with brand, two navigation lists and direct
  contact channels.

```tsx
import { siteSettings } from "@/content";
import { Logo } from "./logo";
import { primaryNavigation, secondaryNavigation } from "./navigation";
import { PlaceholderBadge } from "./placeholder-badge";
import { TrackedLink } from "./tracked-link";

export function SiteFooter() {
  const phones = siteSettings.contacts.filter(
    (contact) => contact.kind === "phone",
  );
  const otherContacts = siteSettings.contacts.filter(
    (contact) => contact.kind !== "phone",
  );

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>
            Шинэ барилгын лифтний сонголт, үйлдвэрийн захиалга, тээвэр,
            угсралт, суурилуулалтыг зохион байгуулна.
          </p>
        </div>
        <nav aria-label="Доод цэс">
          <p className="site-footer__label">Үндсэн</p>
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <TrackedLink href={item.href}>{item.label}</TrackedLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Нэмэлт цэс">
          <p className="site-footer__label">Мэдээлэл</p>
          <ul>
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <TrackedLink href={item.href}>{item.label}</TrackedLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer__contact">
          <p className="site-footer__label">Шууд холбоо</p>
          <ul>
            {phones.map((phone) => (
              <li key={phone.id}>
                <TrackedLink href={phone.href}>{phone.value}</TrackedLink>
              </li>
            ))}
            {otherContacts.map((contact) => (
              <li key={contact.id}>
                <TrackedLink href={contact.href} external={contact.external}>
                  <span>{contact.label.mn}</span>
                  <strong>{contact.value}</strong>
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Төгс Бүтээн Босголт.</p>
      </div>
    </footer>
  );
}
```

