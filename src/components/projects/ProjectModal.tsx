"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Move focus to close button when modal opens
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 bg-charcoal border border-cream/15 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-charcoal border-b border-cream/10 flex items-center justify-between px-6 py-4">
          <h2
            id="modal-title"
            className="font-display text-cream text-2xl tracking-wide"
          >
            {project.name}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project details"
            className="text-cream/50 hover:text-cream transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-cream/40 rounded"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 flex flex-col gap-8">

          {/* Media */}
          <div className="relative w-full aspect-video bg-forest/30 rounded overflow-hidden border border-cream/10 flex items-center justify-center">
            {project.mediaSrc ? (
              project.mediaType === "video" ? (
                <video
                  src={project.mediaSrc}
                  controls
                  className="w-full h-full object-cover"
                  aria-label={`${project.name} demo video`}
                />
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              )
            ) : (
              <p className="font-body text-cream/30 text-sm tracking-wide">
                {project.mediaType === "video" ? "Video coming soon" : "Screenshot coming soon"}
              </p>
            )}
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
              Tech Stack
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

          {/* Description */}
          <div>
            <h3 className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
              About
            </h3>
            <p className="font-body text-cream/75 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role */}
          <div>
            <h3 className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
              What I Built
            </h3>
            <p className="font-body text-cream/75 text-base leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* AI usage */}
          <div>
            <h3 className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
              How I Used AI
            </h3>
            <p className="font-body text-cream/75 text-base leading-relaxed">
              {project.aiUsage}
            </p>
          </div>

          {/* GitHub link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub — opens in new tab`}
            className="inline-flex items-center gap-2 font-body text-sm text-cream/60 hover:text-cream tracking-wide transition-colors self-start"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
