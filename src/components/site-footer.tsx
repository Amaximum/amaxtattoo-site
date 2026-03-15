import Link from "next/link";
import Image from "next/image";
import { mainNav, siteConfig } from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.08) 0%, transparent 60%), #03020a",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logotip.png"
              alt={siteConfig.brand}
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <span className="font-display text-lg font-bold tracking-wider text-white">
              {siteConfig.brand}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/30">
            Professional tattoo services in Aurora, Ontario. Private studio sessions and mobile bookings by appointment only.
          </p>
          <p className="mt-3 text-xs text-white/20">
            {siteConfig.serviceArea}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            Pages
          </p>
          <ul className="space-y-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            Contact
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/50 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-white/50 transition hover:text-white"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 transition hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 transition hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
          <a
            href="/#booking"
            className="mt-7 inline-block rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-900/30 transition hover:from-violet-500 hover:to-purple-500"
          >
            Request Booking
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-5 text-center text-xs text-white/20">
        <p>
          © 2026 {siteConfig.brand}. All rights reserved.
          <span className="mx-2 text-white/10">·</span>
          Aurora, Ontario, Canada
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-white/15">
          <a
            href="https://amaximumconstruction.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white/35"
          >
            amaximumconstruction.com
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://besttorontodecks.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white/35"
          >
            besttorontodecks.com
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://npak.ca/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white/35"
          >
            npak.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
