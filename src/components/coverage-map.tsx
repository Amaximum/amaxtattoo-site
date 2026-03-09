import { ServiceLocation } from "@/content/site-content";

type CoverageMapProps = {
  locations: ServiceLocation[];
};

export function CoverageMap({ locations }: CoverageMapProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
        <iframe
          title="AMAX Tattoo Service Area"
          src="https://www.google.com/maps?q=Aurora%20Ontario&z=10&output=embed"
          className="h-[380px] w-full grayscale opacity-60"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {locations.map((location) => (
          <article
            key={location.slug}
            className="glass glass-hover rounded-xl p-4"
          >
            <h3 className="font-semibold text-white/90 text-sm">
              {location.name}
            </h3>
            <p className="mt-1 text-xs text-white/30">
              ~{location.distanceKm} km from Aurora
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
