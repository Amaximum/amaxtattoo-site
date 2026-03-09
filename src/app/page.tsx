import { BookingForm } from "@/components/booking-form";
import { CoverageMap } from "@/components/coverage-map";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { faqItems, serviceLocations, siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const stats = [
  { value: "500+", label: "Sessions Completed" },
  { value: "12", label: "Cities Covered" },
  { value: "25 km", label: "Mobile Radius" },
  { value: "100%", label: "By Appointment" },
];

const services = [
  {
    num: "01",
    label: "New Tattoos",
    desc: "Custom artwork developed with you, executed with precision. From minimalist line work to full sleeves.",
    icon: "◈",
    bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.40 AM.jpeg",
  },
  {
    num: "02",
    label: "Cover-Up Tattoos",
    desc: "Transform old or unwanted tattoos into fresh custom designs. Expert consultation and skilled execution.",
    icon: "◇",
    bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.41 AM.jpeg",
  },
  {
    num: "03",
    label: "Colour Tattoos",
    desc: "Vibrant colour work from bold traditional styles to photorealistic colour portraits and custom designs.",
    icon: "◎",
    bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (1).jpeg",
  },
];

const allPortfolioWorks = [
  { title: "Dragon Series", style: "Oriental Design", detail: "Leg sleeve · 5 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (2).jpeg" },
  { title: "Floral Watercolor", style: "Artistic Blend", detail: "Shoulder · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM (3).jpeg" },
  { title: "Geometric Mandala", style: "Symmetry Art", detail: "Back piece · 3 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.42 AM.jpeg" },
  { title: "Portrait Master", style: "Black & Grey", detail: "Chest · 6 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.43 AM (1).jpeg" },
  { title: "Minimalist Script", style: "Fine Typography", detail: "Wrist · 1 session", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.43 AM.jpeg" },
  { title: "Ocean Waves", style: "Colour Work", detail: "Full leg · 4 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.44 AM.jpeg" },
  { title: "Japanese Oni", style: "Traditional Style", detail: "Arm sleeve · 5 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.45 AM (1).jpeg" },
  { title: "Abstract Composition", style: "Modern Art", detail: "Forearm · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.45 AM.jpeg" },
  { title: "Rose & Thorn", style: "Classic Design", detail: "Arm · 2 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.46 AM (1).jpeg" },
  { title: "Celestial Map", style: "Blackwork", detail: "Back piece · 4 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.46 AM (2).jpeg" },
  { title: "Botanical Series", style: "Nature Inspired", detail: "Leg plate · 3 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.46 AM.jpeg" },
  { title: "Sacred Geometry", style: "Spiritual Design", detail: "Chest · 3 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.47 AM.jpeg" },
  { title: "Phoenix Rising", style: "Colour Realism", detail: "Full back · 8 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.48 AM (1).jpeg" },
  { title: "Tribal Fusion", style: "Modern Traditional", detail: "Arm band · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.48 AM.jpeg" },
  { title: "Landscape Vista", style: "Scenic Work", detail: "Leg sleeve · 4 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.49 AM (1).jpeg" },
  { title: "Sacred Symbols", style: "Cultural Design", detail: "Forearm · 2 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.49 AM.jpeg" },
  { title: "Mirror Symmetry", style: "Geometric Art", detail: "Chest-back · 5 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.50 AM (1).jpeg" },
  { title: "Ink Splash", style: "Brush Stroke", detail: "Thigh · 3 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.50 AM (2).jpeg" },
  { title: "Stars & Cosmos", style: "Space Inspired", detail: "Full arm · 4 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.50 AM.jpeg" },
  { title: "Lettering Art", style: "Custom Script", detail: "Ribs · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.51 AM (1).jpeg" },
  { title: "Wildlife Portrait", style: "Realism", detail: "Leg piece · 6 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.51 AM.jpeg" },
  { title: "Mosaic Pattern", style: "Tessellation", detail: "Back piece · 3 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.52 AM (1).jpeg" },
  { title: "Dream Catcher", style: "Spiritual Art", detail: "Shoulder · 2 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.52 AM.jpeg" },
  { title: "Linework Sleeve", style: "Precision Ink", detail: "Full arm · 4 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.53 AM (1).jpeg" },
  { title: "Color Explosion", style: "Vibrant Design", detail: "Thigh · 3 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.53 AM.jpeg" },
  { title: "Hidden Message", style: "Secret Ink", detail: "Arm band · 1 session", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.54 AM (1).jpeg" },
  { title: "Nature Fusion", style: "Organic Design", detail: "Full back · 5 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.52.54 AM.jpeg" },
  { title: "Cosmic Journey", style: "Space Theme", detail: "Leg sleeve · 4 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.10 AM.jpeg" },
  { title: "Mythology Scene", style: "Narrative Art", detail: "Chest piece · 6 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.19 AM (1).jpeg" },
  { title: "Watercolor Blend", style: "Artistic Style", detail: "Arm · 3 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.19 AM.jpeg" },
  { title: "Symmetry Design", style: "Perfect Balance", detail: "Back piece · 3 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.21 AM.jpeg" },
  { title: "Cultural Art", style: "Heritage Design", detail: "Full sleeve · 5 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM (1).jpeg" },
  { title: "Abstract Lines", style: "Modern Ink", detail: "Forearm · 2 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM (2).jpeg" },
  { title: "Sacred Script", style: "Spiritual Words", detail: "Arm · 1 session", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM (3).jpeg" },
  { title: "Nature Harmony", style: "Organic Flow", detail: "Leg piece · 4 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM (4).jpeg" },
  { title: "Dragon's Path", style: "Flowing Design", detail: "Full back · 7 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM (5).jpeg" },
  { title: "Ink Evolution", style: "Progress Art", detail: "Arm sleeve · 4 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.23 AM.jpeg" },
  { title: "Portal Design", style: "Cosmic Gateway", detail: "Chest · 3 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM (1).jpeg" },
  { title: "Flowing Energy", style: "Movement Art", detail: "Full leg · 5 sessions", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM (2).jpeg" },
  { title: "Ancient Wisdom", style: "Classic Lines", detail: "Shoulder · 2 sessions", gradient: "from-violet-900/40 to-purple-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM (3).jpeg" },
  { title: "Modern Blend", style: "Contemporary", detail: "Arm · 3 sessions", gradient: "from-indigo-900/40 to-violet-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM (4).jpeg" },
  { title: "Final Masterpiece", style: "Portfolio Closer", detail: "Custom design · Premium work", gradient: "from-purple-900/40 to-fuchsia-900/20", bgImage: "/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM.jpeg" },
];

const featuredPortfolioWorks = allPortfolioWorks.slice(0, 5);
const hiddenPortfolioWorks = allPortfolioWorks.slice(5);

const testimonials = [
  {
    name: "Sarah M.",
    location: "Newmarket",
    text: "Incredible attention to detail. My sleeve came out exactly as I envisioned. Professional from consultation to aftercare — nothing felt rushed.",
  },
  {
    name: "Jason T.",
    location: "Richmond Hill",
    text: "The mobile service was seamless. They arrived fully set up, completely professional. Best tattoo experience I've had — and I've had many.",
  },
  {
    name: "Priya K.",
    location: "Aurora",
    text: "First tattoo, and I couldn't have asked for a better experience. Everything was explained clearly, the environment was calm, and the result exceeded my expectations.",
  },
];

export default function Home() {
  return (
    <main className="w-full">

      {/* ===================== HERO ===================== */}
      <section
        className="hero-mesh relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(3,2,10,0.55), rgba(3,2,10,0.78)), url("/Pic/WhatsApp Image 2023-01-14 at 5.57.24 AM.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Animated glow orbs */}
        <div
          className="glow-pulse pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="glow-pulse pointer-events-none absolute right-1/4 bottom-1/3 h-72 w-72"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            animationDelay: "1.5s",
          }}
        />

        {/* Top gradient line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent hero-line" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="hero-animate inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Aurora, Ontario · By Appointment Only
          </div>

          <div className="hero-animate-2 mt-9 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400/60" />
            <span className="text-lg text-violet-300">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400/60" />
          </div>

          <p className="hero-animate-2 mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Custom tattoo artistry in Aurora and the surrounding area.
            Private studio sessions and selected mobile bookings — crafted for you, not the crowd.
          </p>

          <div className="hero-animate-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#booking"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500 hover:shadow-violet-700/50"
            >
              Request Booking
            </a>
            <a
              href="/about"
              className="rounded-xl border border-white/20 bg-black/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur transition hover:bg-black/35"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-pulse absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/55">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-violet-400">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </section>

      <div className="section-divider" />

      {/* ===================== STATS STRIP ===================== */}
      <section className="sec-mid border-y border-white/[0.05]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`scroll-fade-in flex flex-col items-center justify-center py-9 text-center ${
                i < stats.length - 1 ? "border-r border-white/[0.05]" : ""
              }`}
            >
              <span className="font-display bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
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

      {/* ===================== SERVICES ===================== */}
      <section className="sec-dark mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="scroll-fade-up mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
            What We Do
          </p>
          <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
            Our <span className="gradient-text italic">Services</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.num}
              className="scroll-fade-up group relative overflow-hidden rounded-2xl p-7"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(17,24,39,0.35), rgba(17,24,39,0.65)), url("${service.bgImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <span className="text-2xl text-violet-400 transition group-hover:text-violet-300">
                    {service.icon}
                  </span>
                  <span className="font-display select-none text-5xl font-black leading-none text-white/20 transition group-hover:text-white/30">
                    {service.num}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-white transition group-hover:text-violet-200">
                  {service.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.desc}
                </p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400 transition hover:text-violet-300"
                >
                  Book Session
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ===================== PORTFOLIO ===================== */}
      <section className="sec-mid py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-fade-up mb-14 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
                Select Work
              </p>
              <h2 className="font-display mt-2 text-5xl font-bold text-white sm:text-6xl">
                Portfolio
              </h2>
            </div>
            <p className="hidden text-xs text-white/45 sm:block">
              Curated works · auto-rotating display
            </p>
          </div>

          <PortfolioCarousel items={allPortfolioWorks} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="sec-dark mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="scroll-fade-up grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
              About AMAX
            </p>
            <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
              Crafted for You,
              <br />
              <span className="gradient-text italic">Not the Queue</span>
            </h2>
            <p className="mt-7 leading-relaxed text-white/70">
              {siteConfig.about}
            </p>
            <p className="mt-4 leading-relaxed text-white/55">
              {siteConfig.mobileService}
            </p>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400 transition hover:text-violet-300"
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <ul className="space-y-5">
              {[
                "Clean technique and professional equipment standards",
                "Thorough consultation before every session",
                "Detailed aftercare guidance for optimal healing",
                "Custom design collaboration when requested",
                "Respect for your time and comfort throughout",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="sec-mid py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-fade-up mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
              Client Experiences
            </p>
            <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
              What Clients Say
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="scroll-fade-up glass glass-hover rounded-2xl p-7"
              >
                <div className="flex gap-1 text-violet-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1L1 5.3l4.2-.7L7 1z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/50 to-purple-700/50 text-sm font-bold text-violet-300">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/80">{t.name}</p>
                    <p className="text-xs text-white/55">{t.location}, ON</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===================== BOOKING ===================== */}
      <section id="booking" className="sec-dark mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="scroll-fade-up overflow-hidden rounded-3xl border border-white/[0.07]" style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(124,58,237,0.12) 0%, transparent 50%), rgba(255,255,255,0.02)" }}>
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
                Get Started
              </p>
              <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
                Request Your
                <br />
                <span className="gradient-text italic">Session</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/40">
                {siteConfig.bookingNote}
              </p>
              <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-8 text-sm">
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
      </section>

      <div className="section-divider" />

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="sec-mid py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-fade-up mb-14 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
              Common Questions
            </p>
            <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
              FAQ
            </h2>
          </div>

          <div className="grid gap-4">
            {faqItems.map((item, index) => (
              <article
                key={index}
                className="scroll-fade-up glass glass-hover rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400 transition hover:text-violet-300"
            >
              View All FAQs
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===================== SERVICE AREA ===================== */}
      <section id="locations" className="sec-dark mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="scroll-fade-up mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">
            Where We Serve
          </p>
          <h2 className="font-display mt-3 text-5xl font-bold text-white sm:text-6xl">
            Service Area
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            Based in Aurora, Ontario. Mobile sessions available within ~25 km for approved bookings.
          </p>
        </div>
        <CoverageMap locations={serviceLocations} />
      </section>

    </main>
  );
}
