import { BookingForm } from "@/components/booking-form";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { siteConfig, serviceLocations } from "@/content/site-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Services in Aurora: AMAX Tattoo Studio — Private Tattoo Experience",
  description:
    "AMAX Tattoo Studio in Aurora, Ontario. Custom tattoo designs, cover-ups, and professional tattoo services. Private appointment-based studio serving the GTA.",
  keywords: [
    "tattoo aurora ontario",
    "tattoo studio aurora",
    "custom tattoo aurora",
    "tattoo shop aurora",
    "amax tattoo aurora",
    "private tattoo studio aurora",
    "tattoo appointment aurora ontario",
  ],
  alternates: { canonical: `${siteConfig.domain}/locations/aurora` },
  openGraph: {
    title: "Tattoo Services in Aurora | AMAX Tattoo Studio",
    description: "Private tattoo studio in Aurora, Ontario. Custom designs, cover-ups, and fine line work. By appointment only.",
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

export default function AuroraPage() {
  const nearbyLocations = serviceLocations.filter((l) => l.slug !== "aurora").slice(0, 6);

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
            Ontario, Canada · Core Service Area
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
            Tattoo Services in{" "}
            <span className="gradient-text italic">Aurora</span>
          </h1>
          <p className="mt-3 text-lg text-white/60">Private Tattoo Experience</p>

          <p className="mt-6 mx-auto max-w-2xl leading-relaxed text-white/75">
            AMAX Tattoo Studio stands as a premier art studio in the heart of Ontario, Canada,
            dedicated to collaborating with you to develop your initial idea into a custom tattoo
            design and transforming it into a meaningful work of art.
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

      {/* ── STATS STRIP ── */}
      <section className="sec-mid border-y border-white/[0.05]">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-2 md:grid-cols-4">
          {[
            { value: "$150+", label: "Starting Price" },
            { value: "Aurora", label: "Primary Hub" },
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

      {/* ── INTRO ── */}
      <section className="sec-dark mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">About the Studio</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Introduction to{" "}
              <span className="gradient-text italic">AMAX Tattoo</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/65">
              AMAX Tattoo Studio stands as a premier art studio in the heart of Ontario, Canada,
              dedicated to collaborating with you to develop your initial idea into a custom tattoo
              design and transforming it into a meaningful work of art. Our tattoo studio is designed
              to provide a clean and welcoming environment where clients can feel comfortable
              expressing their vision.
            </p>
            <p className="mt-4 leading-relaxed text-white/50">
              With a talented team of artists, we specialize in a wide variety of styles, from fine
              line tattoos and realism to custom designs that truly reflect your personal style and
              life story. Artistry and precision are at the core of everything we do.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <ul className="space-y-4">
              {[
                "Custom designs that reflect your personal story",
                "Fine line tattoos, realism, blackwork & more",
                "Clean and welcoming studio environment",
                "Meticulous attention to detail in every piece",
                "Any tattoo, no matter how complex or unique",
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

      {/* ── SERVICES ── */}
      <section id="services" className="sec-mid py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">What We Offer</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Custom Tattoos &{" "}
              <span className="gradient-text italic">Professional Services</span>
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/55">
              At AMAX Tattoo Studio, our goal is to create meaningful, high-quality tattoos that
              reflect your personality and vision. Our private tattoo studio focuses on custom work,
              artistic precision, and a comfortable one-on-one experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Custom Tattoo Designs",
                desc: "Every tattoo is carefully designed to match your ideas, style, and placement. Whether fine line, blackwork, custom sleeve, or minimalist design — our artists work closely with you to bring your concept to life.",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Cover-Up Tattoos",
                desc: "Old or unwanted tattoos can become something new and beautiful. With careful planning and creative design, we transform faded or outdated work into fresh, stunning artwork.",
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-violet-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                title: "Colour Tattoos",
                desc: "Vibrant, lasting colour work crafted with precision. Our artists use premium pigments and proven techniques to ensure your colour tattoo stays vivid and beautiful for years to come.",
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
              Aurora offers a variety of reputable tattoo styles. Common artistic styles available
              include <span className="text-violet-300">fine line tattoos</span>,{" "}
              <span className="text-violet-300">blackwork</span>,{" "}
              <span className="text-violet-300">realism</span>,{" "}
              <span className="text-violet-300">custom sleeves</span>,{" "}
              <span className="text-violet-300">minimalist designs</span>, and{" "}
              <span className="text-violet-300">detailed artistic pieces</span>. We prioritize unique,
              client-driven designs that truly reflect your personal story.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PORTFOLIO ── */}
      <section className="sec-dark py-24">
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

      {/* ── OUR TEAM ── */}
      <section className="sec-mid mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400">Our Team</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white sm:text-5xl">
              Team and
              <br />
              <span className="gradient-text italic">Expertise</span>
            </h2>
            <p className="mt-6 leading-relaxed text-white/65">
              At AMAX Tattoo Studio, our team is the heart of our art studio experience. Each artist
              brings a wealth of expertise, creativity, and dedication to every session, ensuring that
              our clients receive not only exceptional artistry but also attentive, personalized care.
            </p>
            <p className="mt-4 leading-relaxed text-white/50">
              Our team takes the time to listen to your ideas, answer your questions, and guide you
              through the process from initial consultation to the final session. Conveniently located
              on Yonge St in Aurora, Ontario, our studio is easily accessible for clients across the GTA.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <ul className="space-y-4">
              {[
                "Years of professional tattooing experience",
                "Specialists in fine line, realism, and custom designs",
                "Personalized consultation from start to finish",
                "Expert advice and creative collaboration",
                "Clean, welcoming environment for every client",
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

      {/* ── PRIVATE STUDIO ── */}
      <section className="sec-dark py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="glass rounded-2xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Private Studio</p>
              <h2 className="font-display text-xl font-bold text-white mb-5">Private Tattoo Studio in Aurora</h2>
              <p className="text-sm leading-relaxed text-white/60 mb-5">
                AMAX Tattoo Studio operates as a private appointment-based studio in Aurora, allowing
                us to focus on quality, comfort, and personalized service. Each session is designed to
                give clients a relaxed environment and the time needed to create tattoos that truly
                stand out.
              </p>
              <div className="grid grid-cols-1 gap-2">
                {["Private, focused one-on-one sessions", "Relaxed and comfortable environment", "Quality over quantity approach", "Full consultation included"].map((item) => (
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Appointments</p>
              <h2 className="font-display text-xl font-bold text-white mb-5">By Appointment Only</h2>
              <p className="text-sm leading-relaxed text-white/60 mb-5">
                To ensure the best possible experience and proper consultation time with your artist,
                we recommend scheduling your tattoo session in advance. While AMAX is primarily
                appointment-based, you are also welcome to walk in for inquiries when possible.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-session consultation included",
                  "Proper dedicated time with your artist",
                  "No rush — your experience comes first",
                  "Walk-ins welcome for inquiries",
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
        </div>
      </section>

      <div className="section-divider" />

      {/* ── AFTERCARE ── */}
      <section className="sec-mid mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Post-Session</p>
            <h2 className="font-display text-xl font-bold text-white mb-5">Aftercare & Maintenance</h2>
            <ul className="space-y-3">
              {[
                "Keep your tattoo clean and moisturized",
                "Avoid soaking in water for extended periods",
                "Minimize sun exposure during healing",
                "Use all-natural aftercare products (e.g. CURE Aftercare ointment)",
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
              All equipment and work areas are thoroughly sanitized. We adhere to all professional
              guidelines and public health requirements to ensure a safe experience for every client.
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
                  Complete the form to request your session. We reply with availability, quote range,
                  and preparation steps. Let&apos;s create something meaningful together.
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
        <div className="glass rounded-2xl p-8 mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-400 mb-2">Aurora Studio</p>
          <h2 className="font-display text-2xl font-bold text-white mb-5">Conveniently Located on Yonge St</h2>
          <p className="leading-relaxed text-white/65">
            Our Aurora studio on Yonge St is easily accessible for clients across the Greater Toronto
            Area. Whether you are visiting for your first tattoo or adding to your collection, our team
            is here to help. Contact us by email or phone to schedule a consultation, and discover how
            our commitment to artistry, care, and your personal vision sets us apart as Aurora&apos;s
            premier private tattoo studio.
          </p>
        </div>

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
