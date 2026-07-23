import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { siteSettings, type ContactChannelKind } from "@/content";
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
  return (
    <section className={`contact-panel ${className}`.trim()}>
      <div className="contact-panel__intro">
        <p className="eyebrow">Шууд холбоо</p>
        <h2>{title}</h2>
        <p>{description}</p>
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
