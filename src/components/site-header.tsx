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
                    {index > 0 ? (
                      <span
                        className="utility-bar__phone-separator"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    ) : null}
                    <TrackedLink
                      href={phone.href}
                      eventName="contact_click"
                      eventContext={`utility_${phone.id}`}
                    >
                      {phone.value}
                    </TrackedLink>
                  </Fragment>
                ))}
              </li>
            )}
            {email && (
              <li>
                <TrackedLink
                  href={email.href}
                  eventName="contact_click"
                  eventContext="utility_email"
                >
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
