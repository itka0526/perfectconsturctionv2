"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "./navigation";
import { TrackedLink } from "./tracked-link";

interface MobileNavigationProps {
  items: NavigationItem[];
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const focusFrame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-navigation">
      <button
        ref={buttonRef}
        className="mobile-navigation__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X aria-hidden="true" size={23} strokeWidth={1.7} />
        ) : (
          <Menu aria-hidden="true" size={23} strokeWidth={1.7} />
        )}
        <span>{open ? "Хаах" : "Цэс"}</span>
      </button>
      <nav
        id="mobile-primary-navigation"
        className="mobile-navigation__panel"
        data-open={open || undefined}
        aria-label="Гар утасны үндсэн цэс"
      >
        <ul>
          {items.map((item, index) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <TrackedLink
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true">→</span>
                </TrackedLink>
              </li>
            );
          })}
          <li className="mobile-navigation__contact">
            <TrackedLink href="/contact" onClick={() => setOpen(false)}>
              <span>Төслийн талаар ярилцах</span>
              <span aria-hidden="true">→</span>
            </TrackedLink>
          </li>
        </ul>
      </nav>
      {open && (
        <button
          type="button"
          className="mobile-navigation__backdrop"
          aria-label="Цэсийг хаах"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
