import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/data/social";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-24 md:py-32 overflow-hidden bg-[url('/textures/palms_web.jpg')] bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
    >
      {/* Charcoal overlay */}
      <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center md:text-left">
          <p className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-cream text-4xl md:text-5xl tracking-wide">
            Contact
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center md:items-start">

          {/* Photo + social */}
          <div className="flex flex-col items-center gap-6 shrink-0">
            {/* Circle on mobile, portrait rectangle on desktop */}
            <div className="relative w-48 h-48 rounded-full md:rounded-2xl md:w-72 md:h-auto md:aspect-[3/4] overflow-hidden border-4 border-cream/20">
              <Image
                src="/headshot/hand_on_hip.JPG"
                alt="Laura Castro"
                fill
                sizes="(max-width: 768px) 192px, 288px"
                className="object-cover object-top md:object-contain md:object-bottom [filter:saturate(80%)_hue-rotate(-15deg)]"
              />
            </div>

            <SocialLinks links={socialLinks} />

            <a
              href="mailto:thisisloudtech@gmail.com"
              className="font-body text-sm text-cream/60 hover:text-cream tracking-wide transition-colors"
            >
              thisisloudtech@gmail.com
            </a>
          </div>

          {/* Contact form */}
          <ContactForm />

        </div>
      </div>

      <p className="relative z-10 text-center font-body text-cream/30 text-xs tracking-wide pt-12 pb-2">
        Built by Laura Castro
      </p>
    </section>
  );
}
