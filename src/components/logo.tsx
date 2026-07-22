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
