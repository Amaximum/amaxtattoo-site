import { siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.brand} - professional tattoo services in Aurora, Ontario.`,
  keywords: [
    "about amax tattoo",
    "tattoo artist aurora ontario",
    "appointment only tattoo studio",
    "mobile tattoo services aurora",
    "custom tattoo consultation",
  ],
};

export default function AboutPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 80% 10%, rgba(124,58,237,0.1) 0%, transparent 50%), #03020a",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <header className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            {siteConfig.brand}
          </p>
          <h1 className="font-display mt-3 text-6xl font-bold text-white sm:text-7xl">
            About
          </h1>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-transparent" />
        </header>

        <div className="space-y-8">

          <section className="glass rounded-2xl p-8">
            <p className="leading-relaxed text-white/60">
              AMAX Tattoo provides custom tattoo services focused on clean technique, clear
              communication, and professional aftercare. We specialize in floral tattoos and fine
              line tattoos, with years of professional experience and a strong reputation for client
              satisfaction. We work strictly by appointment to guarantee dedicated time for every
              client. Many clients have found a clean, professional, and talented tattoo studio in
              AMAX Tattoo. In addition to professional aftercare, we also offer laser tattoo removal
              services, emphasizing the precision and cleanliness of our treatments.
            </p>
            <p className="mt-4 leading-relaxed text-white/50">
              Follow us on{" "}
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition">Instagram</a>
              {" "}and{" "}
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition">Facebook</a>
              {" "}where we regularly share posts showcasing our latest work and upcoming promotions.
            </p>
          </section>

          {/* Pricing highlight */}
          <section className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
            <h2 className="font-display mb-4 text-2xl font-bold text-white">
              Affordable Pricing
            </h2>
            <p className="leading-relaxed text-white/60">
              At AMAX Tattoo, we believe quality custom work should be accessible. Our rates start
              at <span className="text-violet-300 font-semibold">$150</span> — noticeably more
              affordable than most tattoo studios in the area, without any compromise on technique,
              hygiene, or artistic quality. You get professional results at a price that makes sense.
            </p>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="font-display mb-4 text-2xl font-bold text-white">
              Appointment-Only Model
            </h2>
            <p className="leading-relaxed text-white/50">
              We operate strictly by appointment to give every client the attention and time their
              project deserves. During your consultation, we work closely with you to ensure the
              tattoo design is the right fit for your vision and chosen placement, carefully adjusting
              and aligning every element to match your expectations. No walk-ins means no rushed
              sessions, no overlapping schedules, and complete focus on your experience.
            </p>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="font-display mb-4 text-2xl font-bold text-white">
              Mobile Tattoo Service
            </h2>
            <p className="leading-relaxed text-white/50">{siteConfig.mobileService}</p>
            <p className="mt-4 leading-relaxed text-white/40">
              Mobile sessions are evaluated case-by-case based on project type, environment
              suitability, and distance. Let us know in your booking request if you&apos;d prefer a
              mobile appointment. Feel free to bring your design ideas or inspiration to help us
              bring your vision to life.
            </p>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="font-display mb-6 text-2xl font-bold text-white">
              Our Approach
            </h2>
            <ul className="space-y-4">
              {[
                "Clean technique and professional equipment standards",
                "Clear communication during consultation and session",
                "Detailed aftercare guidance for optimal healing",
                "Custom design collaboration when requested",
                "Respect for your time and comfort throughout the process",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/50">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="font-display mb-4 text-2xl font-bold text-white">
              Service Area
            </h2>
            <p className="leading-relaxed text-white/50">
              Based in Aurora, Ontario, we serve clients across nearby cities within approximately
              25 km including Newmarket, Richmond Hill, Vaughan, Markham, Stouffville, and more.
              Special events and promotions are often scheduled in March and April — we encourage
              clients to book their appointments during these months.
            </p>
            <a
              href="/locations"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400 transition hover:text-violet-300"
            >
              View All Locations →
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
