import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
      className="relative cursor-pointer border border-cream/10 rounded-lg overflow-hidden bg-[url('/textures/sand.jpg')] bg-cover bg-center hover:border-cream/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cream/40 select-none"
    >
      {/* Sand texture overlay */}
      <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />

      {/* Card content */}
      <div className="relative z-10 p-8 flex flex-col gap-6">
      {/* Media placeholder */}
      <div className="relative w-full aspect-video bg-forest/30 rounded overflow-hidden border border-cream/10 flex items-center justify-center">
        {project.mediaType === "embed" && project.thumbnailSrc ? (
          <>
            <Image
              src={project.thumbnailSrc}
              alt={`${project.name} thumbnail`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 576px"
            />
            <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
          </>
        ) : project.mediaType === "video" && project.mediaSrc ? (
          <video
            src={project.mediaSrc}
            className="w-full h-full object-cover"
            muted
            playsInline
            aria-label={`${project.name} demo video`}
          />
        ) : project.mediaType === "image" && project.mediaSrc ? (
          <Image
            src={project.mediaSrc}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 576px"
          />
        ) : (
          <p className="font-body text-cream/30 text-sm tracking-wide">
            {project.mediaType === "video" ? "Video coming soon" : "Screenshot coming soon"}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-display text-cream text-2xl tracking-wide">
          {project.name}
        </h3>

        <ul role="list" className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="font-body text-xs text-cream/60 border border-cream/20 rounded-full px-3 py-1 tracking-wide"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-body text-cream/50 text-sm tracking-wide">
        Tap to view details &rarr;
      </p>
      </div>
    </article>
  );
}
