import ProjectGallery from "./ProjectGallery";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative py-24 md:py-32 bg-charcoal overflow-hidden bg-[url('/textures/binaryCode_blue.jpg')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-cream text-4xl md:text-5xl tracking-wide">
            Work
          </h2>
        </div>

        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
