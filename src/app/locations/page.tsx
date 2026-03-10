import Link from "next/link";
import { serviceLocations, siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Locations",
  description: `Tattoo services available in Aurora and nearby cities within 25 km. View all covered areas.`,
};

export default function LocationsPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 60% 10%, rgba(124,58,237,0.1) 0%, transparent 50%), #03020a",
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

        <header className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-6xl font-bold text-white sm:text-7xl">
            Locations
          </h1>
          <p className="mt-4 max-w-xl text-white/40">
            Serving Aurora and surrounding cities within approximately 25 km. Mobile tattoo
            services available for approved bookings.
          </p>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-transparent" />
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2 lg:[&>*:last-child:nth-child(3n+2)]:col-start-2">
          {serviceLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="glass glass-hover group rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-white/90 transition group-hover:text-violet-300">
                  {location.name}
                </h2>
                <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">
                  ~{location.distanceKm} km
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/40">{location.intro}</p>
              <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-violet-500/60 transition group-hover:text-violet-400">
                View details
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-14 glass rounded-2xl p-8">
          <p className="text-white/40">
            {siteConfig.brand} operates by appointment only across the Greater Toronto Area with a
            primary focus on Aurora, Ontario and surrounding municipalities. Mobile sessions are
            evaluated based on project requirements and location suitability.
          </p>
        </section>

      </div>
    </main>
  );
}
