"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({
  error,
  unstable_retry,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="error-state section section--soft" role="alert">
      <div className="shell error-state__inner">
        <p className="eyebrow">Түр саатал</p>
        <h1 className="display">Хуудсыг бүрэн нээж чадсангүй.</h1>
        <p className="lede">
          Дахин оролдоод, асуудал үргэлжилбэл шууд холбоо барина уу.
        </p>
        <div className="button-row">
          <button className="button" type="button" onClick={unstable_retry}>
            <span>Дахин оролдох</span>
            <span className="button__arrow" aria-hidden="true">
              ↻
            </span>
          </button>
          <a className="button button--outline" href="/contact">
            <span>Холбоо барих</span>
            <span className="button__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
