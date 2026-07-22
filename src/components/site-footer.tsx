import { siteSettings } from "@/content";
import { Logo } from "./logo";
import {
  primaryNavigation,
  secondaryNavigation,
} from "./navigation";
import { PlaceholderBadge } from "./placeholder-badge";
import { TrackedLink } from "./tracked-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>
            Монголын барилгын төсөлд тохирсон лифтний сонголт, нийлүүлэлт,
            угсралтыг нэг урсгалаар зохион байгуулна.
          </p>
          {siteSettings.addressVerificationStatus === "placeholder" && (
            <p className="site-footer__preview-note">
              <PlaceholderBadge label="Preview" />
              Хаяг болон холбоо барих мэдээллийг нийтлэхээс өмнө баталгаажуулна.
            </p>
          )}
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
            {siteSettings.contacts.map((contact) => (
              <li key={contact.id}>
                <TrackedLink
                  href={contact.href}
                  external={contact.external}
                  eventName="contact_click"
                  eventContext={`footer_${contact.kind}`}
                >
                  <span>{contact.label.mn}</span>
                  <strong>{contact.value}</strong>
                  {contact.verificationStatus === "placeholder" && (
                    <PlaceholderBadge label="Түр" />
                  )}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteSettings.companyName.mn}. Бүх эрх
          хуулиар хамгаалагдсан.
        </p>
        <p>Төслийн үзүүлэлт бүрийг талбайн нөхцөлд тулгуурлан баталгаажуулна.</p>
      </div>
    </footer>
  );
}
