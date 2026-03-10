import { BookingForm } from "@/components/booking-form";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { siteConfig, serviceLocations } from "@/content/site-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitchurch-Stouffville's Trusted Tattoo Studio | Custom Tattoos | AMAX Tattoo",
  description:
    "Private tattoo studio serving Whitchurch-Stouffville, Ontario. Custom tattoos, fine line, black and grey, realism, and sleeve tattoos. Book your appointment today.",
  keywords: [
    "tattoo whitchurch-stouffville",
    "tattoo studio stouffville",
    "custom tattoo stouffville",
    "fine line tattoo stouffville",
    "black and grey tattoo stouffville",
    "tattoo appointment stouffville ontario",
    "whitchurch stouffville tattoo artist",
  ],
  alternates: { canonical: `${siteConfig.domain}/locations/whitchurch-stouffville` },
  openGraph: {
    title: "Tattoo Studio in Whitchurch-Stouffville | AMAX Tattoo",
    description: "Custom tattoos, fine line, realism, and sleeve tattoos serving Whitchurch-Stouffville. Private studio, by appointment.",
  },
};

const portfolioItems = [
  { title: "Dragon Series", style: "Oriental Design", detail: "Leg sleeve · 5 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (2).jpeg" },
  { title: "Portrait Master", style: "Black & Grey", detail: "Chest · 6 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.43 AM (1).jpeg" },
  { title: "Minimalist Script", style: "Fine Typography", detail: "Wrist · 1 session", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.43 AM.jpeg" },
  { title: "Japanese Oni", style: "Traditional Style", detail: "Arm sleeve · 5 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.45 AM (1).jpeg" },
  { title: "Rose & Thorn", style: "Classic Design", detail: "Arm · 2 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.46 AM (1).jpeg" },
  { title: "Phoenix Rising", style: "Colour Realism", detail: "Full back · 8 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.48 AM (1).jpeg" },
  { title: "Celestial Map", style: "Blackwork", detail: "Back piece · 4 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.46 AM (2).jpeg" },
  { title: "Floral Watercolor", style: "Artistic Blend", detail: "Shoulder · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (3).jpeg" },
];

export default function WhitchurchStouffvillePage() {
  const nearbyLocations = serviceLocations.filter((l) => l.slug !== "whitchurch-stouffville").slice(0, 6);

  return (
    <main className="w-full">

      {/* ── HERO ── */}
      <section
        className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(3,2,10,0.45), rgba(3,2,10,0.80)), url("/Pic/WhatsApp Image 2023-01-14 at 5.52.40 AM.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.18) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/locations"
            className="mb-6 inline-flex items-center gap-2 text-xs text-white/40 transition hover:text-violet-400"
          >
            ← All Locations
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Ontario, Canada · ~18 km from Aurora
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            Trusted Tattoo Studio in{" "}
            <span className="gradient-text italic">Whitchurch-Stouffville</span>
          </h1>
          <p className="mt-3 text-lg text-white/60">Custom Tattoos & Professional Services</p>

          <p className="mt-6 mx-auto max-w-2xl leading-relaxed text-white/75">
            A private tattoo studio built around a simple idea — combine creativity, artistic
            precision, and professional craftsmanship to create tattoos that truly reflect each
            client&apos;s story and vision.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500"
            >
              Book Your Appointment
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/20 bg-black/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur transition hover:bg-black/35"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </section>

      <div className="section-divider" />

      {/* ── STATS ── */}
      <section className="sec-mid border-y border-white/[0.05]">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 md:grid-cols-4">
          {[
            { value: "$150+", label: "Starting Price" },
            { value: "~18 km", label: "From Aurora" },
            { value: "100%", label: "By Appointment" },
            { value: "5+", label: "Tattoo Styles" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-9 text-center ${i < 3 ? "border-r border-white/[0.05]" : ""}`}
            >
              <span className="font-display bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                {stat.value}
              </span>
              <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── INTRO ── */}
      <section id="services" className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Custom Work</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Tattoo in{" "}
              <span className="gradient-text italic">Whitchurch-Stouffville</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/65">
              AMAX Tattoo Studio offers professional tattoo services in Whitchurch-Stouffville for
              clients looking for unique tattoos created with attention to detail and artistic
              precision. Our artists specialize in custom tattoos, working closely with each client
              to develop artwork that reflects personal style and vision.
            </p>
            <p className="mt-4 leading-relaxed text-white/50">
              Our team includes a professional tattoo artist experienced in multiple styles — whether
              you want a fine line tattoo, black and grey, realism, minimalist, or a custom sleeve
              tattoo in Whitchurch-Stouffville. Every tattoo is carefully designed and professionally
              executed. If you already have a concept or need help developing a design, we guide you
              through the process from consultation to the final session.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-4">Tattoo Styles We Offer</p>
            <ul className="space-y-3">
              {[
                "Fine line tattoos",
                "Black and grey tattoos",
                "Realism tattoos",
                "Minimalist tattoos",
                "Custom sleeve tattoos",
                "Custom tattoo designs",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PORTFOLIO ── */}
      <section className="sec-mid py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Select Work</p>
              <h2 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">Portfolio</h2>
            </div>
            <p className="hidden text-xs text-white/40 sm:block">Curated works · rotating display</p>
          </div>
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SERVICES ── */}
      <section className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Services</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
            Professional Tattoo Services in{" "}
            <span className="gradient-text italic">Whitchurch-Stouffville</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/55">
            Clients searching for a tattoo studio in Whitchurch-Stouffville choose AMAX Tattoo Studio
            for custom artwork, professional tattoo techniques, and a focused tattoo experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Fine Line & Minimalist",
              desc: "Delicate, precise fine line tattoos and minimalist designs crafted with exceptional attention to detail. Subtle and elegant — perfect for timeless body art.",
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Black & Grey Realism",
              desc: "Stunning black and grey realism tattoos with incredible depth and precision. From portraits to nature — lifelike artwork crafted to last a lifetime.",
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              title: "Custom Sleeves",
              desc: "Full and half sleeve tattoos planned and crafted as a unified work of art. Every element flows naturally to tell your personal story.",
            },
          ].map((s) => (
            <article key={s.title} className="glass glass-hover rounded-2xl p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
              <a href="#booking" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 transition hover:text-violet-300">
                Book Now
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PRIVATE EXPERIENCE + CONSULTATION ── */}
      <section className="sec-mid mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Private Studio</p>
            <h2 className="font-display text-xl font-bold text-white mb-5">Private Tattoo Experience</h2>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Our goal is to provide a relaxed and professional studio environment where each client
              receives the time and attention needed to create high-quality tattoos. Every appointment
              is designed to focus on creativity, comfort, and precision.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Relaxed and comfortable environment",
                "Focused one-on-one sessions",
                "Creativity and precision in every piece",
                "No rush — your experience comes first",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-violet-400 shrink-0">
                    <path d="M13 4L6 12 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Consultation</p>
            <h2 className="font-display text-xl font-bold text-white mb-5">Tattoo Consultation</h2>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Every tattoo begins with a consultation to discuss design ideas, size, placement, and
              style. This helps ensure the final result is carefully planned and professionally executed.
            </p>
            <ul className="space-y-3">
              {[
                "Discuss your design concept and vision",
                "Refine placement, size, and style",
                "Get a detailed quote for your project",
                "Prepare for your tattoo session",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs text-violet-400 font-bold">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── BOOKING ── */}
      <section id="booking" className="sec-dark py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="overflow-hidden rounded-3xl border border-white/[0.07]"
            style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(124,58,237,0.12) 0%, transparent 50%), rgba(255,255,255,0.02)" }}
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Booking & Scheduling</p>
                <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
                  Request Your
                  <br />
                  <span className="gradient-text italic">Session</span>
                </h2>
                <p className="mt-6 leading-relaxed text-white/55">
                  To schedule your tattoo consultation or appointment, complete the form and we will
                  reply with availability, a quote range, and preparation steps.
                </p>
                <div className="mt-8 space-y-4 border-t border-white/[0.06] pt-7 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/30">Email</p>
                    <p className="mt-1 text-white/50">{siteConfig.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/30">Phone</p>
                    <p className="mt-1 text-white/50">{siteConfig.phone}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.06] p-8 sm:border-l sm:border-t-0 sm:p-12">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── NEARBY ── */}
      <section className="sec-mid mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-7">
          <h2 className="font-display mb-5 text-xl font-bold text-white">Nearby Areas We Serve</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {nearbyLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition hover:border-violet-500/30 hover:bg-white/[0.05]"
              >
                <span className="text-sm font-medium text-white/60 transition group-hover:text-white">{loc.name}</span>
                <span className="text-xs text-white/20 transition group-hover:text-violet-400">~{loc.distanceKm} km →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
