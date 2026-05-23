import { processSteps } from "@/data/process";
import type { ProcessStep } from "@/types";

function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-display text-cream/25 text-5xl leading-none">
        {String(step.step).padStart(2, "0")}
      </span>
      <h3 className="font-display text-cream text-xl tracking-wide">
        {step.title}
      </h3>
      <p className="font-body text-cream/65 text-base leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="My process"
      className="relative py-24 md:py-32 overflow-hidden bg-forest"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <p className="font-body text-cream text-xs tracking-widest uppercase mb-3">
            How I Work
          </p>
          <h2 className="font-display text-cream text-4xl md:text-5xl tracking-wide drop-shadow-md">
            Process
          </h2>
        </div>

        <div className="rounded-xl bg-charcoal">
          <ol
            role="list"
            aria-label="Development process steps"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 p-8 md:p-12"
          >
            {processSteps.map((step) => (
              <li key={step.step}>
                <ProcessCard step={step} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
