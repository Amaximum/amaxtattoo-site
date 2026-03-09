import { faqItems } from "@/content/site-content";
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
  ],
};

const allFaqs = [
  ...faqItems,
  {
    question: "What areas do you cover?",
    answer:
      "We serve Aurora and surrounding cities within approximately 25 km including Newmarket, Richmond Hill, Oak Ridges, King City, Vaughan, Maple, Markham, Stouffville, East Gwillimbury, Bradford, and Gormley.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Session length depends on design size, complexity, placement, and your comfort level. We provide time estimates during consultation and work at a pace that suits your project.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, deposits are required to confirm your appointment and are applied to your final session cost. Deposit details are confirmed during booking.",
  },
  {
    question: "What should I bring to my session?",
    answer:
      "Valid ID, comfortable clothing that allows access to the tattoo location, and any reference images if applicable. We'll provide specific preparation steps when confirming your appointment.",
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
          {allFaqs.map((item, index) => (
            <article
              key={index}
              className="glass glass-hover rounded-2xl p-6 sm:p-7"
            >
              <h2 className="font-semibold text-white/90">{item.question}</h2>
              <p className="mt-3 leading-relaxed text-white/40">{item.answer}</p>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
