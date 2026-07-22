import { Mail, Phone } from "lucide-react";
import { siteSettings } from "@/content";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";
import { PlaceholderBadge } from "./placeholder-badge";
import { primaryNavigation } from "./navigation";
import { TrackedLink } from "./tracked-link";

export function SiteHeader() {
  const phone = siteSettings.contacts.find(
    (contact) => contact.kind === "phone",
  );
  const email = siteSettings.contacts.find(
    (contact) => contact.kind === "email",
  );

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <p>Улаанбаатар · Төсөлд тохируулсан лифтний шийдэл</p>
          <ul>
            {phone && (
              <li>
                <TrackedLink
                  href={phone.href}
                  eventName="contact_click"
                  eventContext="utility_phone"
                >
                  <Phone aria-hidden="true" size={15} strokeWidth={1.8} />
                  <span>{phone.value}</span>
                  {phone.verificationStatus === "placeholder" && (
                    <PlaceholderBadge label="Түр" />
                  )}
                </TrackedLink>
              </li>
            )}
            {email && (
              <li>
                <TrackedLink
                  href={email.href}
                  eventName="contact_click"
                  eventContext="utility_email"
                >
                  <Mail aria-hidden="true" size={15} strokeWidth={1.8} />
                  <span>{email.value}</span>
                  {email.verificationStatus === "placeholder" && (
                    <PlaceholderBadge label="Түр" />
                  )}
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
