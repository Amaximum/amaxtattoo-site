import { BookingForm } from "@/components/booking-form";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { siteConfig, serviceLocations } from "@/content/site-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Services in Richmond Hill: Tattoo and Piercing Studio | AMAX Tattoo",
  description:
    "Professional tattoo and piercing services in Richmond Hill, Ontario. Custom designs, cover-ups, and body piercing by skilled artists. Book your appointment today.",
  keywords: [
    "tattoo richmond hill",
    "piercing richmond hill",
    "tattoo studio richmond hill",
    "custom tattoo richmond hill",
    "cover up tattoo richmond hill",
    "mobile tattoo richmond hill",
    "tattoo appointment richmond hill ontario",
  ],
  alternates: { canonical: `${siteConfig.domain}/locations/richmond-hill` },
  openGraph: {
    title: "Tattoo Services in Richmond Hill | AMAX Tattoo",
    description: "Custom tattoos, cover-ups, and piercings in Richmond Hill. Professional artists, clean studio, by appointment.",
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

export default function RichmondHillPage() {
  const nearbyLocations = serviceLocations.filter((l) => l.slug !== "richmond-hill").slice(0, 6);

  return (
    <main className="w-full">

      {/* ── HERO with background image ── */}
      <section
        className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(3,2,10,0.45), rgba(3,2,10,0.80)), url("/Pic/WhatsApp Image 2023-01-14 at 5.52.40 AM.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Glow orb */}
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
            Ontario, Canada · ~12 km from Aurora
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            Tattoo Services in{" "}
            <span className="gradient-text italic">Richmond Hill</span>
          </h1>
          <p className="mt-3 text-lg text-white/60">Tattoo and Piercing Studio</p>

          <p className="mt-6 mx-auto max-w-2xl leading-relaxed text-white/75">
            Book your appointment today. Our studio provides a comfortable, professional, and
            welcoming environment for every client — friendly staff, skilled artists, and a space
            you will always feel at home in.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500"
            >
              Book Session
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

      {/* ── INTRO STRIP ── */}
      <section className="sec-mid border-y border-white/[0.05]">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 md:grid-cols-4">
          {[
            { value: "$150+", label: "Starting Price" },
            { value: "12 km", label: "From Aurora" },
            { value: "100%", label: "By Appointment" },
            { value: "3+", label: "Services" },
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

      {/* ── SERVICES ── */}
      <section id="services" className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">What We Offer</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
            Our <span className="gradient-text italic">Services</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Custom Tattoo Designs",
              desc: "Every tattoo should be unique. Our artists work closely with each client to create designs that reflect personal stories, ideas, and style — from bold traditional to delicate fine-line work.",
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Tattoo Cover-Ups",
              desc: "Old or unwanted tattoos can become something new and beautiful. With careful planning and creative design, we transform faded or outdated work into fresh artwork.",
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              title: "Piercing Services",
              desc: "A full range of piercings in a safe, clean, and welcoming space. Sterile equipment, skilled hands, and detailed aftercare instructions for proper healing.",
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

        <div className="mt-8 glass rounded-2xl p-6">
          <p className="text-sm leading-relaxed text-white/60">
            Richmond Hill offers a variety of reputable tattoo styles. Common artistic styles available
            include <span className="text-violet-300">black and grey</span>,{" "}
            <span className="text-violet-300">traditional</span>,{" "}
            <span className="text-violet-300">fine line</span>,{" "}
            <span className="text-violet-300">illustrative</span>,{" "}
            <span className="text-violet-300">realism</span>, and{" "}
            <span className="text-violet-300">Japanese</span>. Most studios prioritize unique,
            client-driven designs over standardized flash art.
          </p>
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

      {/* ── ARTIST QUALIFICATIONS ── */}
      <section className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Our Team</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Artist Qualifications
              <br />
              <span className="gradient-text italic">and Experience</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/65">
              Our Richmond Hill tattoo artists are recognized for their exceptional skill, creativity,
              and dedication to the craft. Each artist brings years of experience and a passion for
              turning your ideas into a final piece that truly reflects your vision and style.
            </p>
            <p className="mt-4 leading-relaxed text-white/50">
              We take pride in our diverse team, specializing in a wide range of styles. Our artists
              listen carefully to your ideas, offering expert advice and creative input to ensure your
              tattoo is a masterpiece you will love for life.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <ul className="space-y-4">
              {[
                "Years of professional tattooing experience",
                "Wide range of artistic styles mastered",
                "Clear communication throughout the process",
                "Expert advice and creative collaboration",
                "Focus on detail, safety, and aftercare",
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

      {/* ── WHAT CLIENTS SAY ── */}
      <section className="sec-mid py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Reviews</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">What Clients Say</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="glass glass-hover rounded-2xl p-7">
              <div className="flex gap-1 text-violet-300 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1L1 5.3l4.2-.7L7 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/65">
                &ldquo;Many visitors appreciate the welcoming atmosphere and professional approach.
                The studio focuses on quality work, attention to detail, and a clean environment where
                clients feel comfortable throughout the entire process.&rdquo;
              </p>
            </article>
            <article className="glass glass-hover rounded-2xl p-7">
              <div className="flex gap-1 text-violet-300 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1L1 5.3l4.2-.7L7 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/65">
                &ldquo;People often mention how carefully each tattoo is designed and how much
                attention is given to safety and proper aftercare. Clients enjoy the relaxed
                atmosphere and friendly communication during their sessions.&rdquo;
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── AFTERCARE + SAFETY ── */}
      <section className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Post-Session</p>
            <h2 className="font-display text-xl font-bold text-white mb-5">Aftercare & Maintenance</h2>
            <ul className="space-y-3">
              {[
                "Gently wash with mild soap — pat dry, never rub",
                "Avoid direct sunlight and swimming pools while healing",
                "Moisturize with fragrance-free lotion daily",
                "Follow all aftercare instructions provided after your session",
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

          <div className="glass rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Safety</p>
            <h2 className="font-display text-xl font-bold text-white mb-5">Clean Environment</h2>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              All equipment and work areas are thoroughly sanitized. Strict protocols are followed for
              cleaning and sterilizing all reusable equipment. We adhere to all professional guidelines
              and public health requirements.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {["Sterilized equipment for every session", "Single-use disposable needles", "Health authority compliant", "Full aftercare documentation"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-violet-400 shrink-0">
                    <path d="M13 4L6 12 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── BOOKING ── */}
      <section id="booking" className="sec-mid py-24">
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
                  Booking your next tattoo or piercing in Richmond Hill is simple and stress-free. Our
                  team is always ready to help you find the perfect slot. Don&apos;t wait — connect with us
                  and let&apos;s turn your ideas into reality.
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

      {/* ── COMMUNITY ── */}
      <section className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Local</p>
          <h2 className="font-display text-2xl font-bold text-white mb-5">Community Involvement</h2>
          <p className="leading-relaxed text-white/65">
            At our Richmond Hill studio, we believe in the power of art to bring people together. Our
            shop is more than just a place for tattoos and piercings — it is a creative hub where
            clients, artists, and the community connect. We regularly participate in local events,
            sponsor art initiatives, and host workshops that celebrate creativity and self-expression.
          </p>
        </div>

        {/* Nearby Areas */}
        <div className="mt-8 glass rounded-2xl p-7">
          <h2 className="font-display mb-5 text-xl font-bold text-white">Nearby Areas</h2>
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
