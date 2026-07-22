import type { TimelineStep } from "@/content";
import { PlaceholderBadge } from "./placeholder-badge";

interface TimelineStripProps {
  steps: TimelineStep[];
}

export function TimelineStrip({ steps }: TimelineStripProps) {
  return (
    <ol className="timeline-grid">
      {steps.map((step, index) => (
        <li key={step.id} className="timeline-step">
          <div className="timeline-step__topline">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step.verificationStatus === "placeholder" && (
              <PlaceholderBadge label="Суурь хугацаа" />
            )}
          </div>
          <strong>{step.duration.mn}</strong>
          <h3>{step.title.mn}</h3>
          <p>{step.startsWhen.mn}</p>
        </li>
      ))}
    </ol>
  );
}
