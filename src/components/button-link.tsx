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
