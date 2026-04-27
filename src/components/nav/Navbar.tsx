"use client";

import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/data/navigation";
import type { NavLink } from "@/types";

interface NavLinkItemProps {
  link: NavLink;
  onClick?: () => void;
}

function NavLinkItem({ link, onClick }: NavLinkItemProps) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      className="block font-body text-cream/70 hover:text-cream text-sm tracking-wide py-2 transition-colors"
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
        scrolled ? "bg-charcoal/95 backdrop-blur-sm shadow-md" : "bg-transparent"
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
        <a
          href="#"
          aria-label="Loud Tech — back to top"
          className="flex items-center gap-3 group"
        >
          <div className="h-9 w-9 rounded-full bg-forest flex items-center justify-center shrink-0">
            <span className="font-display text-cream text-sm tracking-widest">LT</span>
          </div>
          <span className="font-display text-cream text-lg tracking-wide group-hover:text-cream/80 transition-colors">
            Loud Tech
          </span>
        </a>

        {/* Desktop links — before scroll only */}
        {!scrolled && (
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLinkItem link={link} />
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger — mobile always, desktop after scroll */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`${
            scrolled ? "flex" : "flex md:hidden"
          } items-center justify-center p-2 text-cream hover:text-cream/80 transition-colors`}
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
          className="bg-charcoal/95 backdrop-blur-sm border-t border-cream/10"
        >
          <ul className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLinkItem link={link} onClick={() => setMenuOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
