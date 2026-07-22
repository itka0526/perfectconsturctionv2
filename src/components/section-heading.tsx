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
        <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </header>
  );
}
