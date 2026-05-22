"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check — bots fill this in, humans don't
    if (data.get("botcheck")) {
      setState("idle");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "bfe59d8f-44d5-44dd-80b9-490b91a4d280",
          subject: "New message from thisisloud.tech",
          name: (data.get("name") as string).trim(),
          email: (data.get("email") as string).trim(),
          message: (data.get("message") as string).trim(),
        }),
      });

      const result = await res.json();
      if (result.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex-1 flex items-center justify-center py-16">
        <p className="font-body text-cream text-xl text-center leading-relaxed">
          Message received. I&apos;ll be in touch within 24 hours!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 w-full flex flex-col gap-6"
      aria-label="Contact form"
    >
      {/* Honeypot — hidden from humans, bots fill it in */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

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
          aria-describedby="name-hint"
          className="font-body font-medium text-cream bg-cream/40 border border-cream/80 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition w-full"
          placeholder="Your name"
        />
        <p id="name-hint" className="font-body text-cream/40 text-xs tracking-wide">
          Enter your first and last name.
        </p>
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
          aria-describedby="email-hint"
          className="font-body font-medium text-cream bg-cream/40 border border-cream/80 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition w-full"
          placeholder="your@email.com"
        />
        <p id="email-hint" className="font-body text-cream/40 text-xs tracking-wide">
          Your email address so I can get back to you.
        </p>
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
          aria-describedby="message-hint"
          className="font-body font-medium text-cream bg-cream/40 border border-cream/80 rounded-lg px-4 py-3 text-base placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/60 transition resize-none w-full"
          placeholder="What's on your mind?"
        />
        <p id="message-hint" className="font-body text-cream/40 text-xs tracking-wide">
          Tell me about your project or what you would like to work on together.
        </p>
      </div>

      {state === "error" && (
        <p role="alert" className="font-body text-red-300 text-sm">
          Something went wrong. Try emailing me directly at thisisloudtech@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="font-body text-sm tracking-widest uppercase bg-forest text-cream px-8 py-4 rounded-lg hover:bg-forest/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cream/40 self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
