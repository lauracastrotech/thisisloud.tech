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
                  I am a disruptive developer and I came to tech on purpose. My background in communications gave me the foundation I bring to every project: understand the person with the problem before you write a single line of code. I build full-stack applications in the spaces I care most about, including women&apos;s health, nutrition, mental health, and human connection. The projects I&apos;m most proud of all start with a real person, a real problem, and a question I can&apos;t stop thinking about...{!expanded && (
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
                      A close friend&apos;s newborn was diagnosed with anemia at a routine checkup. Her vegan diet had created a gap in iron absorption that nobody caught until that appointment. I couldn&apos;t let it go. I started researching iron-rich foods and learned that certain food combinations significantly improve how the body absorbs nutrients. At the time I was deep in a bootcamp learning React, so I asked a classmate if she wanted to build a nutrient tracker alongside our coursework to reinforce what we were learning. We wrote user stories together, found an API with real ingredient data, and designed the app for people managing medical conditions through diet. I owned product development and led user testing. That project is still one of my favorites because it shows exactly how I work. I find a real problem in an area I care about, bring the right people in, and build something that actually helps. If you&apos;re working on something in health, wellness, relationships, or travel, I want to hear about it.{" "}
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
      <p className="absolute bottom-3 right-4 z-10 font-body text-cream/30 text-[15px] tracking-wide">
        Built with ♥ by Laura Castro
      </p>
    </section>
  );
}
