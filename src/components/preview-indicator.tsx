export function PreviewIndicator() {
  if (process.env.VERCEL_ENV === "production") {
    return null;
  }

  return (
    <div className="preview-indicator" role="status">
      <div className="shell">
        <strong>Урьдчилсан хувилбар</strong>
        <span aria-hidden="true">·</span>
        <span>Зураг, баримт, холбоо барих мэдээллийн хэсэг баталгаажаагүй.</span>
      </div>
    </div>
  );
}
