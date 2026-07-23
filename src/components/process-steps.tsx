import type { ServiceStep } from "@/content";

interface ProcessStepsProps {
  steps: ServiceStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="process-grid">
      {[...steps]
        .sort((a, b) => a.order - b.order)
        .map((step) => (
          <li key={step.id} className="process-step">
            <span className="process-step__number" aria-hidden="true">
              {String(step.order).padStart(2, "0")}
            </span>
            <div>
              <h3>{step.title.mn}</h3>
              <p>{step.description.mn}</p>
            </div>
          </li>
        ))}
    </ol>
  );
}
