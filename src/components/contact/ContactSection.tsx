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
        <div className="mb-16">
          <p className="font-body text-cream/50 text-xs tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-cream text-4xl md:text-5xl tracking-wide">
            Contact
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Photo + social */}
          <div className="flex flex-col items-center gap-6 shrink-0">
            <div className="relative w-56 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden border-4 border-cream/20">
              <Image
                src="/headshot/standing.JPG"
                alt="Laura Castro"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-contain object-bottom"
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
            className="flex-1 flex flex-col gap-6"
            aria-label="Contact form"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-body text-cream/50 text-xs tracking-widest uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="font-body text-cream bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-base placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-cream/40 transition"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-body text-cream/50 text-xs tracking-widest uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="font-body text-cream bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-base placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-cream/40 transition"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-body text-cream/50 text-xs tracking-widest uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="font-body text-cream bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-base placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-cream/40 transition resize-none"
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
