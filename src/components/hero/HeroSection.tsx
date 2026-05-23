"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="main-content"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden bg-[url('/textures/sand.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Forest overlay over sand */}
      <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />
      {/* Hero content — single card */}
      <div className="relative z-10 mx-auto max-w-5xl w-full px-6 py-32 md:py-40">
        <div className="relative rounded-2xl overflow-hidden animate-fade-in bg-navy">

          {/* Card content */}
          <div className="relative z-10 min-h-[520px]">

            {/* Photo — absolute right */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[380px] lg:w-[420px]">
              <div className="relative h-full">
                {/* Left fade + top fade around head stacked */}
                <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,transparent_22%,black_46%)] [mask-type:alpha]">
                  <Image
                    src="/headshot/arm_crossed.jpeg"
                    alt="Laura Castro"
                    fill
                    sizes="(max-width: 1024px) 380px, 420px"
                    className="object-contain object-right [filter:saturate(80%)_hue-rotate(-15deg)]"
                  />
                  {/* Blue gradient to soften yellow cast at top */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-transparent mix-blend-multiply"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="p-8 pb-4 md:p-12 md:pr-[320px] lg:pr-[360px]">
              <p className="font-body text-cream/50 text-xs tracking-widest uppercase mb-4">
                Pronounced: Loud·ah
              </p>

              <h1 className="font-display text-cream text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight mb-3">
                Laura Castro
              </h1>

              <p className="font-body text-cream/75 text-lg md:text-xl tracking-wide mb-8">
                Software Developer
              </p>

              <p className="font-display text-cream text-xl md:text-2xl leading-snug mb-8">
                Let&apos;s make some noise.
              </p>

              {/* Circle photo — mobile only, below tagline */}
              <div className="md:hidden flex justify-center mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cream/30">
                  <Image
                    src="/headshot/arm_crossed.jpeg"
                    alt="Laura Castro"
                    fill
                    sizes="192px"
                    className="object-cover object-top [filter:saturate(80%)_hue-rotate(-15deg)]"
                  />
                </div>
              </div>

              <div className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-2 md:mb-12">
                <p className={expanded ? "mb-4" : ""}>
                  I came to tech on purpose. A communications degree and a winding career full of pivots brought me here. I build full-stack applications and websites, and I start every project with understanding the end user. Community is deeply embedded in how I move through the world, and that shapes everything I build...{!expanded && (
                    <button
                      onClick={() => setExpanded(true)}
                      className="inline ml-1 font-body font-bold text-olive hover:text-olive/80 transition-colors focus:outline-none focus:underline"
                      aria-expanded={false}
                    >
                      read more
                    </button>
                  )}
                </p>

                {expanded && (
                  <div className="flex flex-col gap-4">
                    <p>
                      My background in public relations taught me the most important skill in any room: know your audience. I&apos;ve applied that at every stage of a build. Whether I&apos;m thinking about how to make mental healthcare affordable or pair programming with a peer to debug a nutrient tracker or presenting a demo for an income calculator, I take a human-centered approach to solve problems. I synthesize fast and move to action faster.
                    </p>
                    <p>
                      It&apos;s been the relationships I&apos;ve made and the opportunities people have given me that shaped who I am. DEIA (Diversity, Equity, Inclusion, and Accessibility) programs opened doors I didn&apos;t know existed. Ada Developers Academy led to an AWS apprenticeship that changed my trajectory. Paying it forward looks like organizing a Zumba-thon to raise funds for a local small business. My cohort at Ada nominated me to be the student speaker at graduation, an honor that affirmed my peers recognized the efforts I made to create a collaborative environment.
                    </p>
                    <p>
                      My life outside of work matters just as much to me. My family and community are at the center of everything. We are a pickleball family through and through. We don&apos;t always see eye to eye, but the court is a neutral space where we have fun and stay healthy. I love to travel, to see new landscapes and learn about other cultures and ways of living. As an adult I&apos;ve been able to pursue a childhood dream of being a dancer. I&apos;m Puerto Rican by heritage and deeply proud of it, which is why I chose Salsa. Finding balance is a work in progress, but I&apos;ve given myself grace to be present and patient while my life unfolds.{" "}
                      <button
                        onClick={() => setExpanded(false)}
                        className="inline font-body font-bold text-olive hover:text-olive/80 transition-colors focus:outline-none focus:underline"
                        aria-expanded={true}
                      >
                        read less
                      </button>
                    </p>
                  </div>
                )}
              </div>

              {/* View My Work — desktop only, mobile version lives below photo */}
              <div className="hidden md:flex items-center gap-8 flex-wrap">
                <a
                  href="#projects"
                  className="font-body text-base font-semibold text-cream hover:text-cream/80 tracking-widest uppercase transition-colors animate-bounce"
                >
                  View My Work &darr;
                </a>
              </div>
            </div>

            {/* View My Work — mobile only */}
            <div className="md:hidden flex justify-center pb-8">
              <a
                href="#projects"
                className="font-body text-base font-semibold text-cream hover:text-cream/80 tracking-widest uppercase transition-colors animate-bounce"
              >
                View My Work &darr;
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
