"use client";

import {
  forwardRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

type TrackedLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  external?: boolean;
  eventName?: string;
  eventContext?: string;
};

const isExternalProtocol = (href: string) =>
  /^(?:https?:|mailto:|tel:)/i.test(href);

export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink(
    {
      href,
      external = false,
      eventName,
      eventContext,
      onClick,
      children,
      rel,
      target,
      ...props
    },
    ref,
  ) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (eventName) {
      track(eventName, {
        context: eventContext ?? "unspecified",
      });
    }

    onClick?.(event);
  };

  const opensNewWindow = external && /^https?:/i.test(href);
  const sharedProps = {
    ...props,
    onClick: handleClick,
    rel: opensNewWindow ? rel ?? "noopener noreferrer" : rel,
    target: opensNewWindow ? target ?? "_blank" : target,
  };

    if (external || isExternalProtocol(href)) {
      return (
        <a ref={ref} href={href} {...sharedProps}>
          {children}
          {opensNewWindow && (
            <span className="sr-only"> (шинэ цонхонд нээгдэнэ)</span>
          )}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} {...sharedProps}>
        {children}
      </Link>
    );
  },
);
