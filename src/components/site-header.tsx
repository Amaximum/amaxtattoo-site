"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { mainNav, siteConfig } from "@/content/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#03020a]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2"
        >
          <Image
            src="/logotip.png"
            alt={siteConfig.brand}
            width={80}
            height={80}
            className="h-20 w-20 object-contain transition group-hover:opacity-85"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-wider text-white transition group-hover:text-violet-300 sm:text-lg">
              {siteConfig.brand.split(" ")[0]}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
              Tattoo Studio
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/50 transition hover:text-white hover:bg-white/[0.05]"
              >
                {item.label}
              </Link>
            ))}
          <a
            href="/#booking"
            className="ml-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-center justify-center gap-[5px] p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-6 bg-white/70 transition-all duration-300 origin-center ${menuOpen ? "translate-y-[8.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-px w-6 bg-white/70 transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[8.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#03020a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3.5 text-base font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-center text-base font-bold text-white transition hover:from-violet-500 hover:to-purple-500"
          >
            Request Booking
          </a>
        </nav>
      </div>
    </header>
  );
}
