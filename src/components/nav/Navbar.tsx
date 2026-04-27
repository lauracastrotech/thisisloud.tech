"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/data/navigation";
import type { NavLink } from "@/types";

interface NavLinkItemProps {
  link: NavLink;
  onClick?: () => void;
  scrolled?: boolean;
}

function NavLinkItem({ link, onClick, scrolled }: NavLinkItemProps) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      className={`block font-body text-base tracking-wide py-2 transition-colors ${
        scrolled
          ? "text-forest/80 hover:text-forest"
          : "text-navy/80 hover:text-navy"
      }`}
    >
      {link.label}
    </a>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-md" : "bg-cream"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-cream focus:px-4 focus:py-2 focus:text-charcoal focus:text-sm font-body"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Loud Tech — back to top"
          className="flex items-center gap-3 group shrink-0"
        >
          {/* TODO: swap to green icon when scrolled — replace src with green asset when ready */}
          <Image
            src="/logo/Navy%20Icon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          {/* TODO: swap to green wordmark when scrolled — replace src with green asset when ready */}
          <Image
            src="/logo/Navy%20Wordmark%20Stacked.png"
            alt="Loud Tech"
            width={80}
            height={40}
            className="h-10 w-auto object-contain group-hover:opacity-75 transition-opacity"
          />
        </Link>

        {/* Nav links — desktop and tablet */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLinkItem link={link} scrolled={scrolled} />
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex md:hidden items-center justify-center p-2 transition-colors ${
            scrolled ? "text-forest hover:text-forest/70" : "text-navy hover:text-navy/70"
          }`}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="bg-cream border-t border-forest/10"
        >
          <ul className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLinkItem link={link} scrolled={scrolled} onClick={() => setMenuOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
