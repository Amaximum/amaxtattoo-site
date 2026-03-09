import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | AMAX Tattoo",
  description: "Your booking request has been received. We will contact you soon.",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (1).jpeg"
        alt="AMAX Tattoo work"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Glow orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/40 bg-violet-600/20 backdrop-blur-sm">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-violet-300">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-4">
          AMAX Tattoo
        </p>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          Thank You!
        </h1>

        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet-500/60 to-transparent mb-8" />

        <p className="text-xl text-white/80 leading-relaxed mb-4">
          Your booking request has been received.
        </p>
        <p className="text-white/55 leading-relaxed mb-12">
          We will review your request and get back to you as soon as possible to confirm your session details and discuss your tattoo project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            Submit Another
          </Link>
        </div>
      </div>
    </main>
  );
}
