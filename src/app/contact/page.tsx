import { BookingForm } from "@/components/booking-form";
import { siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Request your tattoo session with AMAX Tattoo. Submit your project details for availability and quote.",
  keywords: [
    "book tattoo aurora",
    "tattoo consultation aurora",
    "tattoo appointment booking",
    "mobile tattoo request",
    "custom tattoo quote",
  ],
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 30% 10%, rgba(124,58,237,0.1) 0%, transparent 50%), #03020a",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <header className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-6xl font-bold text-white sm:text-7xl">
            Contact
          </h1>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-transparent" />
        </header>

        <div className="space-y-8">

          {/* Contact info */}
          <section className="glass rounded-2xl p-7">
            <p className="leading-relaxed text-white/70">{siteConfig.bookingNote}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-white/80 transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Phone</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="mt-1 block text-white/80 transition hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Service Area</p>
                <p className="mt-1 text-white/65">{siteConfig.serviceArea}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-violet-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                <div>
                  <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider">Instagram</p>
                  <p className="text-sm text-white/75">@amaxtattoo</p>
                </div>
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-violet-400">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider">Facebook</p>
                  <p className="text-sm text-white/75">AMAX Tattoo</p>
                </div>
              </a>
            </div>
          </section>

          {/* Booking form */}
          <section className="glass rounded-2xl p-7">
            <h2 className="font-display mb-6 text-2xl font-bold text-white">
              Request Your Session
            </h2>
            <BookingForm />
          </section>

        </div>
      </div>
    </main>
  );
}
