import type { Project } from "@/content";
import { ButtonLink } from "./button-link";
import { ProjectImage } from "./project-image";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const asset = project.assets[0];

  return (
    <article className="card project-card" data-featured={featured || undefined}>
      {asset && (
        <div className="card__media">
          <ProjectImage
            asset={asset}
            sizes={
              featured
                ? "(max-width: 900px) 100vw, 66vw"
                : "(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
            }
            aspect={featured ? "16 / 10" : "4 / 3"}
          />
        </div>
      )}
      <div className="card__body">
        <div className="card__meta">
          <span>{project.buildingType.mn}</span>
          <span>{project.location.mn}</span>
        </div>
        <h3>{project.title.mn}</h3>
        <p>{project.summary.mn}</p>
        <ButtonLink
          href={`/projects/${project.slug}`}
          variant="text"
          eventName="project_click"
          eventContext={project.slug}
        >
          Төслийг үзэх
        </ButtonLink>
      </div>
    </article>
  );
}
