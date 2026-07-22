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
  description = "Барилгын зориулалт, явц, шахтын мэдээллээ ярилцаад дараагийн техникийн алхмаа тодорхойлоорой.",
  className = "",
}: ContactPanelProps) {
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
            Холбоо барих мэдээллийг нийтлэхээс өмнө баталгаажуулна.
          </p>
        )}
      </div>
      <ul className="contact-panel__channels">
        {siteSettings.contacts.map((contact) => {
          const Icon = channelIcons[contact.kind] ?? MapPin;

          return (
            <li key={contact.id}>
              <TrackedLink
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
                {contact.verificationStatus === "placeholder" && (
                  <PlaceholderBadge label="Түр" />
                )}
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
