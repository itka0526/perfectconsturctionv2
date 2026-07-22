import { Mail, Phone } from "lucide-react";
import { siteSettings } from "@/content";
import { TrackedLink } from "./tracked-link";

export function StickyContactBar() {
  const phone = siteSettings.contacts.find(
    (contact) => contact.kind === "phone",
  );
  const email = siteSettings.contacts.find(
    (contact) => contact.kind === "email",
  );

  if (!phone || !email) {
    return null;
  }

  return (
    <nav className="sticky-contact" aria-label="Шуурхай холбоо">
      <TrackedLink
        href={phone.href}
        eventName="contact_click"
        eventContext="sticky_phone"
      >
        <Phone aria-hidden="true" size={20} strokeWidth={1.8} />
        <span>
          Утас
          {phone.verificationStatus === "placeholder" && <small> · Түр</small>}
        </span>
      </TrackedLink>
      <TrackedLink
        href={email.href}
        eventName="contact_click"
        eventContext="sticky_email"
      >
        <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
        <span>
          И-мэйл
          {email.verificationStatus === "placeholder" && <small> · Түр</small>}
        </span>
      </TrackedLink>
    </nav>
  );
}
