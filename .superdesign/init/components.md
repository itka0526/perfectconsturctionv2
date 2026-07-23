# Shared UI components

Framework primitives are custom React components styled through
`src/app/globals.css`. The contact-page design depends most directly on the
following shared components.

## Logo

- Source: `src/components/logo.tsx`
- Purpose: responsive company mark and bilingual wordmark.

```tsx
import Image from "next/image";
import Link from "next/link";
import { assets, siteSettings } from "@/content";

interface LogoProps {
  compact?: boolean;
  inverse?: boolean;
}

export function Logo({ compact = false, inverse = false }: LogoProps) {
  return (
    <Link
      className="brand-logo"
      data-compact={compact || undefined}
      data-inverse={inverse || undefined}
      href="/"
      aria-label={`${siteSettings.companyName.mn} — Нүүр хуудас`}
    >
      <span className="brand-logo__mark" aria-hidden="true">
        <Image
          src={assets.company.logo.src}
          alt=""
          width={assets.company.logo.width}
          height={assets.company.logo.height}
        />
      </span>
      <span className="brand-logo__wordmark">
        <strong>PERFECT CONSTRUCTION</strong>
        {!compact && <span>{siteSettings.companyName.mn}</span>}
      </span>
    </Link>
  );
}
```

## SectionHeading

- Source: `src/components/section-heading.tsx`
- Purpose: shared editorial section heading with eyebrow, description and action.

```tsx
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  inverse?: boolean;
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  inverse = false,
  action,
}: SectionHeadingProps) {
  return (
    <header
      className="section-heading"
      data-align={align}
      data-inverse={inverse || undefined}
    >
      <div className="section-heading__copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        {description && <p>{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </header>
  );
}
```

## ButtonLink

- Source: `src/components/button-link.tsx`
- Purpose: primary, outline, text and light CTA links.

```tsx
import type { ReactNode } from "react";
import { TrackedLink } from "./tracked-link";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text" | "light";
  external?: boolean;
  eventName?: string;
  eventContext?: string;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  eventName,
  eventContext,
  className = "",
}: ButtonLinkProps) {
  const variantClass =
    variant === "text"
      ? "link-arrow"
      : `button${variant === "primary" ? "" : ` button--${variant}`}`;

  return (
    <TrackedLink
      className={`${variantClass} ${className}`.trim()}
      href={href}
      external={external}
      eventName={eventName}
      eventContext={eventContext}
    >
      <span>{children}</span>
      <span className="button__arrow" aria-hidden="true">
        →
      </span>
    </TrackedLink>
  );
}
```

## PlaceholderBadge

- Source: `src/components/placeholder-badge.tsx`
- Purpose: preview-only verification label.

```tsx
interface PlaceholderBadgeProps {
  label?: string;
}

export function PlaceholderBadge({
  label = "Баталгаажуулна",
}: PlaceholderBadgeProps) {
  return <span className="preview-badge">{label}</span>;
}
```

## ContactPanel

- Source: `src/components/contact-panel.tsx`
- Purpose: reusable direct-contact band with grouped telephone links and other
  channels.

```tsx
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { siteSettings, type ContactChannelKind } from "@/content";
import { PlaceholderBadge } from "./placeholder-badge";
import { TrackedLink } from "./tracked-link";

interface ContactPanelProps {
  title?: string;
  description?: string;
  className?: string;
}

const channelIcons: Partial<Record<ContactChannelKind, LucideIcon>> = {
  phone: Phone,
  email: Mail,
  facebook: MessageCircle,
  map: MapPin,
  office: MapPin,
};

export function ContactPanel({
  title = "Төслийн талаар ярилцах",
  description = "Барилгын зориулалт, ажлын явц, шахтын хэмжээ болон хэрэгцээгээ ярилцаж, тохирох лифтээ сонгоорой.",
  className = "",
}: ContactPanelProps) {
  const phones = siteSettings.contacts.filter(
    (contact) => contact.kind === "phone",
  );
  const otherContacts = siteSettings.contacts.filter(
    (contact) => contact.kind !== "phone",
  );
  const containsPlaceholder = siteSettings.contacts.some(
    (contact) => contact.verificationStatus === "placeholder",
  );

  return (
    <section className={`contact-panel ${className}`.trim()}>
      <div className="contact-panel__intro">
        <p className="eyebrow">Шууд холбоо</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {containsPlaceholder && (
          <p className="contact-panel__notice">
            <PlaceholderBadge label="Preview" />
            Түр тэмдэглэгээтэй холбоо барих мэдээллийг нийтлэхээс өмнө
            баталгаажуулна.
          </p>
        )}
      </div>
      <ul className="contact-panel__channels">
        {phones.length > 0 && (
          <li className="contact-panel__phone-group">
            <span className="contact-panel__icon" aria-hidden="true">
              <Phone size={21} strokeWidth={1.7} />
            </span>
            <div className="contact-panel__phone-content">
              <small>Утас</small>
              <div className="contact-panel__phone-list">
                {phones.map((phone) => (
                  <TrackedLink
                    className="contact-panel__phone-link"
                    href={phone.href}
                    eventName="contact_click"
                    eventContext={`panel_${phone.id}`}
                    key={phone.id}
                  >
                    {phone.value}
                  </TrackedLink>
                ))}
              </div>
            </div>
          </li>
        )}
        {otherContacts.map((contact) => {
          const Icon = channelIcons[contact.kind] ?? MapPin;

          return (
            <li key={contact.id}>
              <TrackedLink
                className="contact-panel__channel"
                href={contact.href}
                external={contact.external}
                eventName="contact_click"
                eventContext={`panel_${contact.kind}`}
              >
                <span className="contact-panel__icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <span>
                  <small>{contact.label.mn}</small>
                  <strong>{contact.value}</strong>
                </span>
                <span className="contact-panel__arrow" aria-hidden="true">
                  →
                </span>
              </TrackedLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
```

