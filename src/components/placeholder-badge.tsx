interface PlaceholderBadgeProps {
  label?: string;
}

export function PlaceholderBadge({
  label = "Баталгаажуулна",
}: PlaceholderBadgeProps) {
  return <span className="preview-badge">{label}</span>;
}
