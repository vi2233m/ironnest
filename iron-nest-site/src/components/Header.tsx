"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/guide", label: "Guide" },
  { href: "/arsenal", label: "Arsenal" },
  { href: "/systems", label: "Systems" },
  { href: "/regions", label: "Regions" },
  { href: "/tools", label: "Tools" },
  { href: "/news", label: "News" },
  { href: "/calculator", label: "Calculator" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0b0d]/80 backdrop-blur-xl border-b border-[#e9c98f12]"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Iron Nest Wiki home">
          <span className="filter drop-shadow-[0_0_9px_#d8a24a44] transition-transform duration-400 group-hover:rotate-[-4deg] group-hover:scale-105">
            <img src="/favicon-32x32.png" width={36} height={36} alt="Iron Nest Wiki logo" className="h-9 w-9 rounded-md" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-display)] text-2xl font-700 uppercase tracking-wide text-glow">
              Iron Nest
            </span>
            <span className="stencil text-[0.6rem] tracking-[0.3em] text-[var(--color-moon-faint)]">
              Heavy Turret Wiki
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-500 transition-colors text-[var(--color-moon-dim)] hover:text-[var(--color-moon)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-hairline-strong)] text-[var(--color-moon)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--color-hairline)] px-4 pb-4 md:hidden" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-sm font-500 text-[var(--color-moon-dim)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
