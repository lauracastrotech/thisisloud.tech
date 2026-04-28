import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="main-content"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden bg-[url('/textures/sand.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Hero content — single card */}
      <div className="relative z-10 mx-auto max-w-5xl w-full px-6 py-32 md:py-40">
        <div className="relative rounded-2xl overflow-hidden animate-fade-in">
          {/* Binary code background */}
          <div className="absolute inset-0 bg-[url('/textures/binaryCode_blue.jpg')] bg-cover bg-center" aria-hidden="true" />
          {/* Navy overlay */}
          <div className="absolute inset-0 bg-navy/75" aria-hidden="true" />

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
                I build things that work well and look good.
              </p>

              <p className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-2 md:mb-12">
                I came to tech on purpose. 2,000+ hours across community college,
                bootcamp, Ada Developers Academy, and an AWS apprenticeship. I build
                full stack applications, communicate clearly, and make products better.
              </p>

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

            {/* View My Work + Photo — mobile only */}
            <div className="md:hidden flex flex-col items-center gap-4 pb-8">
              <a
                href="#projects"
                className="font-body text-base font-semibold text-cream hover:text-cream/80 tracking-widest uppercase transition-colors animate-bounce"
              >
                View My Work &darr;
              </a>
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

          </div>
        </div>
      </div>
    </section>
  );
}
