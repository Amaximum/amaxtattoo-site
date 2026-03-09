import { BookingForm } from "@/components/booking-form";
import { serviceLocations, siteConfig } from "@/content/site-content";
import { generateLocalBusinessSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceLocations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = serviceLocations.find((loc) => loc.slug === slug);

  if (!location) return {};

  return {
    title: `Tattoo Services in ${location.name}, Ontario`,
    description: `Professional tattoo services available in ${location.name}. By appointment only. Mobile sessions available. ${location.intro}`,
    keywords: [
      `tattoo ${location.name.toLowerCase()}`,
      `tattoo services ${location.name.toLowerCase()}`,
      `tattoo artist ${location.name.toLowerCase()}`,
      `mobile tattoo ${location.name.toLowerCase()}`,
      "aurora tattoo studio",
      "appointment only tattoo",
    ],
    alternates: {
      canonical: `${siteConfig.domain}/locations/${location.slug}`,
    },
    openGraph: {
      title: `Tattoo Services in ${location.name} | ${siteConfig.brand}`,
      description: `Book your tattoo session in ${location.name}, Ontario. Professional service by appointment.`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = serviceLocations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const localBusinessSchema = generateLocalBusinessSchema(siteConfig.domain, siteConfig.brand, {
    name: location.name,
    lat: location.lat,
    lng: location.lng,
  });

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 70% 0%, rgba(124,58,237,0.12) 0%, transparent 50%), #03020a",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <nav className="mb-8 text-sm text-white/30">
          <Link href="/locations" className="transition hover:text-violet-400">
            ← All Locations
          </Link>
        </nav>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
            Ontario, Canada · ~{location.distanceKm} km from Aurora
          </div>
          <h1 className="font-display mt-4 text-5xl font-bold text-white sm:text-6xl">
            Tattoo in{" "}
            <span className="gradient-text">{location.name}</span>
          </h1>
          <p className="mt-4 text-white/40">{location.intro}</p>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-transparent" />
        </header>

        <div className="space-y-5">

          <div className="grid gap-5 sm:grid-cols-2">
            <section className="glass rounded-2xl p-6">
              <h2 className="font-display mb-3 text-xl font-bold text-white">Service Details</h2>
              <p className="text-sm leading-relaxed text-white/50">
                {siteConfig.brand} provides professional tattoo services in {location.name} by
                appointment only. We work with clients across the Greater Toronto Area including{" "}
                {location.name} and surrounding communities.
              </p>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="font-display mb-3 text-xl font-bold text-white">Appointment-Only</h2>
              <p className="text-sm leading-relaxed text-white/50">
                All sessions are scheduled in advance. No walk-ins — complete focus on your
                experience from consultation to aftercare.
              </p>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="font-display mb-3 text-xl font-bold text-white">Mobile Service</h2>
              <p className="text-sm leading-relaxed text-white/50">
                Mobile sessions may be available for {location.name} residents. Request in your
                booking form to discuss options.
              </p>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="font-display mb-3 text-xl font-bold text-white">What to Expect</h2>
              <ul className="space-y-2">
                {[
                  "Pre-session consultation",
                  "Professional equipment",
                  "Clear communication",
                  "Aftercare instructions",
                  "Flexible scheduling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/40">
                    <span className="text-violet-500">◈</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section
            className="overflow-hidden rounded-2xl border border-white/[0.07]"
            style={{
              background:
                "radial-gradient(ellipse at 0% 0%, rgba(124,58,237,0.1) 0%, transparent 50%), rgba(255,255,255,0.02)",
            }}
          >
            <div className="border-b border-white/[0.06] p-7">
              <h2 className="font-display text-2xl font-bold text-white">
                Request Session in {location.name}
              </h2>
              <p className="mt-2 text-sm text-white/40">
                Complete the form to request an appointment. Include your project details and
                whether you prefer mobile service.
              </p>
            </div>
            <div className="p-7">
              <BookingForm />
            </div>
          </section>

          <section className="glass rounded-2xl p-7">
            <h2 className="font-display mb-5 text-xl font-bold text-white">Nearby Areas</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {serviceLocations
                .filter((loc) => loc.slug !== slug)
                .slice(0, 6)
                .map((nearbyLocation) => (
                  <Link
                    key={nearbyLocation.slug}
                    href={`/locations/${nearbyLocation.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition hover:border-violet-500/30 hover:bg-white/[0.05]"
                  >
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition">
                      {nearbyLocation.name}
                    </span>
                    <span className="text-xs text-white/20 group-hover:text-violet-400 transition">
                      ~{nearbyLocation.distanceKm} km →
                    </span>
                  </Link>
                ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
