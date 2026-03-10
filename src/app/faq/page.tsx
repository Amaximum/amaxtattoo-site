import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our tattoo services, booking process, and policies.",
  keywords: [
    "tattoo faq aurora",
    "tattoo booking questions",
    "no walk in tattoo studio",
    "mobile tattoo questions",
    "tattoo aftercare guidance",
    "cover up tattoo consultation",
    "tattoo deposit policy",
  ],
};

const faqs: { question: string; paragraphs: string[] }[] = [
  {
    question: "Do you accept walk-ins?",
    paragraphs: [
      "No. We work by appointment only so each client receives a dedicated planning and tattoo session.",
    ],
  },
  {
    question: "Do your tattoo artists offer mobile tattoo services?",
    paragraphs: [
      "Yes, for selected projects and approved environments. Mention this in your booking request.",
    ],
  },
  {
    question: "How do I book?",
    paragraphs: [
      "Submit the booking form with your idea, size, placement, and preferred date. Including reference images and creative ideas helps the artist understand your vision and plan a successful session. Consulting with your tattoo artist before your appointment is essential to discuss design options and set realistic expectations. We will confirm next steps by email.",
    ],
  },
  {
    question: "Can you help with cover-ups?",
    paragraphs: [
      "Yes, cover-up consultations are available, and a thorough consultation with a skilled artist is essential for a successful result. When requesting a cover-up, please include clear photos of your existing tattoo or scar, as well as any ideas you have for your new tattoo design.",
      "A cover-up tattoo is a new design tattooed over an existing one so the old tattoo is no longer visible or becomes part of the new artwork. The new design is typically the same size or larger than the original to ensure adequate coverage. Detailed designs, heavy shading, and dark inks are often used to effectively cover the old ink and create a seamless result.",
      "The effectiveness of a cover-up depends on factors including the colour, age, and shape of the original design. Older, faded tattoos are generally easier to cover, while newer or darker tattoos may require more planning. In some cases, laser tattoo removal sessions may be recommended to fade the original tattoo before a cover-up. Multiple sessions may be needed for adequate fading.",
      "Cover-up tattoos can conceal scars, outdated designs, or tattoos that are no longer meaningful. Popular styles for cover-ups include bold work, florals, geometric, and mandala patterns. The artist will help create a new design that incorporates or transforms elements of the original for a cohesive result.",
      "Note that not all tattoos are suitable for cover-ups — extremely dark or large tattoos may not be completely coverable. Proper aftercare is essential, and follow-up sessions may be needed to maintain the result. Cover-up tattoos generally cost more than regular tattoos due to the additional skill, time, and ink required.",
    ],
  },
  {
    question: "What areas do you cover?",
    paragraphs: [
      "We serve Aurora and surrounding cities within approximately 25 km including Newmarket, Richmond Hill, King City, Vaughan, Markham, Whitchurch-Stouffville, East Gwillimbury, Bradford, Nobleton, and Gormley.",
    ],
  },
  {
    question: "How long does a session take?",
    paragraphs: [
      "Session length depends on design size, complexity, placement, and your comfort level. Cover-up tattoos often require more time than a fresh tattoo, especially when working with detailed designs. Multiple sessions may be needed to ensure the ink fully saturates the original design and achieves complete concealment. We provide time estimates during consultation and work at a pace that suits your project.",
    ],
  },
  {
    question: "Do you require a deposit?",
    paragraphs: [
      "Yes, deposits are required to confirm your appointment and are applied to your final session cost. Deposit details are confirmed during booking.",
    ],
  },
  {
    question: "What should I bring to my session?",
    paragraphs: [
      "Valid ID, comfortable clothing that allows easy access to the tattoo location, and any reference images or tattoo ideas you may have. Bringing inspiration helps your artist understand your vision, especially for cover-up projects. During your session, the artist will discuss how to create a design that reflects your style and effectively works with your existing ink. We will provide specific preparation steps when confirming your appointment.",
    ],
  },
];

export default function FAQPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.1) 0%, transparent 50%), #03020a",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

        <header className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            AMAX Tattoo
          </p>
          <h1 className="font-display mt-3 text-6xl font-bold text-white sm:text-7xl">
            FAQ
          </h1>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-violet-500/40 via-purple-500/20 to-transparent" />
        </header>

        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <article
              key={index}
              className="glass glass-hover rounded-2xl p-6 sm:p-7"
            >
              <h2 className="font-semibold text-white/90">{item.question}</h2>
              <div className="mt-3 space-y-3">
                {item.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-white/40">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
