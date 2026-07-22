export function PreviewIndicator() {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }

  return (
    <div className="preview-indicator" role="status">
      <div className="shell">
        <strong>Урьдчилсан хувилбар</strong>
        <span aria-hidden="true">·</span>
        <span>Төслийн зураг, зарим баримт, газрын зургийн яг цэг баталгаажаагүй.</span>
      </div>
    </div>
  );
}
