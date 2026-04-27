import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/data/social";

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
          {/* Muted green overlay */}
          <div className="absolute inset-0 bg-forest/75" aria-hidden="true" />

          {/* Card content */}
          <div className="relative z-10 min-h-[520px]">

            {/* Photo — absolute right */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[380px] lg:w-[420px]">
              <div className="relative h-full">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_left,black_60%,transparent_100%)] [mask-type:alpha]">
                  <Image
                    src="/headshot/Laura_iso_V1.png"
                    alt="Laura Castro"
                    fill
                    sizes="(max-width: 1024px) 380px, 420px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="p-8 md:p-12 md:pr-[320px] lg:pr-[360px]">
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

              <p className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-12">
                I came to tech on purpose. 2,000+ hours across community college,
                bootcamp, Ada Developers Academy, and an AWS apprenticeship. I build
                full stack applications, communicate clearly, and make products better.
              </p>

              <div className="flex items-center gap-8 flex-wrap">
                <SocialLinks links={socialLinks} variant="light" />
                <a
                  href="#projects"
                  className="font-body text-base font-semibold text-cream hover:text-cream/80 tracking-widest uppercase transition-colors animate-bounce"
                >
                  View My Work &darr;
                </a>
              </div>
            </div>

            {/* Photo — mobile: below text */}
            <div className="md:hidden w-full">
              <div className="relative w-full h-72">
                <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-type:alpha]">
                  <Image
                    src="/headshot/Laura_iso_V1.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-contain object-bottom"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
