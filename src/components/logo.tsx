import Link from "next/link";

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
      aria-label="Perfect Construction — Нүүр хуудас"
    >
      <span className="brand-logo__mark" aria-hidden="true">
        <span>P</span>
      </span>
      <span className="brand-logo__wordmark">
        <strong>Perfect Construction</strong>
        {!compact && <span>Лифт, инженерийн шийдэл</span>}
      </span>
    </Link>
  );
}
