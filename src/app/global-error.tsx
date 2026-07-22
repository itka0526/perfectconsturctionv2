"use client";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  return (
    <html lang="mn">
      <body className="global-error">
        <main className="error-state" role="alert">
          <div className="error-state__inner">
            <p className="eyebrow">Системийн түр саатал</p>
            <h1>Сайтыг нээж чадсангүй.</h1>
            <p>
              Хуудсыг дахин ачаална уу. Алдааны дугаар: {error.digest ?? "—"}
            </p>
            <button className="button" type="button" onClick={unstable_retry}>
              <span>Дахин оролдох</span>
              <span className="button__arrow" aria-hidden="true">
                ↻
              </span>
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
