import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { socialLinks } from "@/data/social";

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
          <form
            className="flex-1 w-full flex flex-col gap-6"
            aria-label="Contact form"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-body text-cream/70 text-xs tracking-widest uppercase font-semibold"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="font-body font-medium text-cream bg-cream/15 border border-cream/40 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition w-full"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-body text-cream/70 text-xs tracking-widest uppercase font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="font-body font-medium text-cream bg-cream/15 border border-cream/40 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition w-full"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-body text-cream/70 text-xs tracking-widest uppercase font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="font-body font-medium text-cream bg-cream/15 border border-cream/40 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition resize-none w-full"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="font-body text-sm tracking-widest uppercase bg-forest text-cream px-8 py-4 rounded-lg hover:bg-forest/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cream/40 self-start"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
