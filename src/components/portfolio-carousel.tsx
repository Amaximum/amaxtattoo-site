"use client";

import { useState, useEffect } from "react";

interface PortfolioItem {
  title: string;
  style: string;
  detail: string;
  gradient: string;
  bgImage: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000); // Resume auto-play after 8s
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + items.length) % items.length);
  };

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="space-y-6">
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        <article
          className="group relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br transition"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(17,24,39,0.32), rgba(17,24,39,0.62)), url("${currentItem.bgImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Mesh overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(167,139,250,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Content */}
          <div className="relative border-t border-white/[0.08] bg-black/40 p-8 pt-12 backdrop-blur-sm transition group-hover:bg-black/50">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-400">
              {currentItem.style} &nbsp;·&nbsp; {currentItem.detail}
            </p>
            <h3 className="font-display mt-2 text-3xl font-bold text-white transition group-hover:text-violet-200">
              {currentItem.title}
            </h3>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-white/20"
            aria-label="Previous work"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-white/20"
            aria-label="Next work"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Indicator */}
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? "w-8 bg-violet-400" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to work ${index + 1}`}
              />
            ))}
          </div>
        </article>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-3 backdrop-blur">
        <span className="text-sm text-white/50">
          Viewing <span className="font-bold text-white">{currentIndex + 1}</span> of{" "}
          <span className="font-bold text-white">{items.length}</span> works
        </span>
        <span className="text-xs text-white/30">Auto-rotating every 5s</span>
      </div>
    </div>
  );
}
