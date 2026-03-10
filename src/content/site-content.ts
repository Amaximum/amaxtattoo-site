export type ServiceLocation = {
  slug: string;
  name: string;
  distanceKm: number;
  lat: number;
  lng: number;
  intro: string;
};

export const siteConfig = {
  brand: "AMAX Tattoo",
  domain: "https://amaxtattoo.com",
  phone: "+1 (905) 000-0000",
  email: "booking@amaxtattoo.com",
  instagram: "https://www.instagram.com/amaxtattoo/",
  facebook: "https://www.facebook.com/profile.php?id=61584157747508",
  serviceArea: "Aurora, Ontario + mobile tattoo services within ~25 km",
  title: "AMAX Tattoo Services | Aurora, Ontario | By Appointment Only",
  description:
    "Professional tattoo services in Aurora, Ontario by appointment only. No walk-ins. Mobile tattoo sessions available for selected bookings across nearby cities.",
  heroTitle: "Tattoo Services in Aurora — By Appointment Only",
  heroSubtitle:
    "Private studio sessions and mobile tattoo services for approved bookings. No walk-ins. Book your consultation in advance.",
  about:
    "AMAX Tattoo provides custom tattoo services focused on clean technique, clear communication, and professional aftercare. We work strictly by appointment to guarantee dedicated time for every client.",
  bookingNote:
    "Complete the form to request your session. We reply with availability, quote range, and preparation steps.",
  mobileService:
    "Mobile tattoo appointments are available for selected projects and locations within our service radius.",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const faqItems = [
  {
    question: "Do you accept walk-ins?",
    answer:
      "No. We work by appointment only so each client receives a dedicated planning and tattoo session.",
  },
  {
    question: "Do you offer mobile tattoo services?",
    answer:
      "Yes, for selected projects and approved environments. Mention this in your booking request.",
  },
  {
    question: "How do I book?",
    answer:
      "Submit the booking form with your idea, size, placement, and preferred date. We will confirm next steps by email.",
  },
  {
    question: "Can you help with cover-ups?",
    answer:
      "Yes, cover-up consultations are available. Please include clear photos in your request.",
  },
];

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "aurora",
    name: "Aurora",
    distanceKm: 0,
    lat: 44.0065,
    lng: -79.4504,
    intro: "Core service area and primary appointment hub.",
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    distanceKm: 6,
    lat: 44.0592,
    lng: -79.4613,
    intro: "Fast response zone for consultations and tattoo sessions.",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    distanceKm: 12,
    lat: 43.8828,
    lng: -79.4403,
    intro: "Popular location for custom projects and follow-up sessions.",
  },
  {
    slug: "whitchurch-stouffville",
    name: "Whitchurch-Stouffville",
    distanceKm: 18,
    lat: 43.9714,
    lng: -79.2483,
    intro: "Private tattoo studio serving Whitchurch-Stouffville and surrounding areas.",
  },
  {
    slug: "king-city",
    name: "King City",
    distanceKm: 12,
    lat: 43.9292,
    lng: -79.5263,
    intro: "Service available by pre-approved booking slots.",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    distanceKm: 22,
    lat: 43.8361,
    lng: -79.4983,
    intro: "Extended mobile coverage for selected tattoo requests.",
  },
  {
    slug: "nobleton",
    name: "Nobleton",
    distanceKm: 22,
    lat: 43.9258,
    lng: -79.6583,
    intro: "Part of our south-west service radius.",
  },
  {
    slug: "markham",
    name: "Markham",
    distanceKm: 24,
    lat: 43.8561,
    lng: -79.337,
    intro: "North Markham requests are accepted by availability.",
  },
  {
    slug: "stouffville",
    name: "Whitchurch-Stouffville",
    distanceKm: 16,
    lat: 43.9706,
    lng: -79.2456,
    intro: "Covered area for consultations and tattoo sessions.",
  },
  {
    slug: "east-gwillimbury",
    name: "East Gwillimbury",
    distanceKm: 10,
    lat: 44.1402,
    lng: -79.4207,
    intro: "North service zone within the 25 km radius target.",
  },
  {
    slug: "bradford",
    name: "Bradford West Gwillimbury",
    distanceKm: 20,
    lat: 44.1165,
    lng: -79.56,
    intro: "Appointments available based on travel schedule.",
  },
  {
    slug: "gormley",
    name: "Gormley",
    distanceKm: 11,
    lat: 43.8812,
    lng: -79.3065,
    intro: "Frequent request area for by-appointment tattoo services.",
  },
];