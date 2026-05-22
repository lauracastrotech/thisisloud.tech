"use client";

import { useState } from "react";
import { services } from "@/data/services";
import type { Service } from "@/types";

function ServiceCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] h-64 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-xl border border-cream/15 bg-navy/60 flex items-center justify-center p-8"
          aria-hidden={flipped}
        >
          <h3 className="font-display text-cream text-3xl md:text-4xl tracking-wide text-center">
            {service.name}
          </h3>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-cream/15 bg-forest/70 flex flex-col justify-center p-8"
          aria-hidden={!flipped}
        >
          <ul role="list" className="flex flex-col gap-3">
            {service.projects.map((project) => (
              <li
                key={project}
                className="font-body text-cream/85 text-base tracking-wide"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative py-24 md:py-32 overflow-hidden bg-[url('/textures/sand.jpg')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="font-body text-cream text-xs tracking-widest uppercase mb-3">
            What I Build
          </p>
          <h2 className="font-display text-cream text-4xl md:text-5xl tracking-wide drop-shadow-md">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        <p className="font-body text-cream/40 text-sm tracking-wide mt-8 text-center">
          Tap a card to learn more
        </p>
      </div>
    </section>
  );
}
