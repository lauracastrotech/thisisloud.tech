"use client";

import { useState, useRef } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useSwipe } from "@/hooks/useSwipe";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const goToPrev = () =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goToNext = () =>
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const { onTouchStart, onTouchEnd } = useSwipe(goToNext, goToPrev);

  const handleClose = () => {
    setSelectedProject(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center gap-8"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Card */}
        <div ref={triggerRef} className="w-full max-w-xl mx-auto">
          <ProjectCard
            project={projects[activeIndex]}
            onSelect={setSelectedProject}
          />
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-6">
          <button
            onClick={goToPrev}
            aria-label="Previous project"
            className="text-cream/50 hover:text-cream transition-colors focus:outline-none focus:ring-2 focus:ring-cream/40 rounded p-1"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <ul role="list" className="flex items-center gap-2" aria-label="Project navigation">
            {projects.map((project, i) => (
              <li key={project.id}>
                <button
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to ${project.name}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cream/40 ${
                    i === activeIndex ? "bg-cream w-4" : "bg-cream/30"
                  }`}
                />
              </li>
            ))}
          </ul>

          <button
            onClick={goToNext}
            aria-label="Next project"
            className="text-cream/50 hover:text-cream transition-colors focus:outline-none focus:ring-2 focus:ring-cream/40 rounded p-1"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleClose} />
      )}
    </>
  );
}
