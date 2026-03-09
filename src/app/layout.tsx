import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/content/site-content";
import { generateOrganizationSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logotip.png",
    apple: "/logotip.png",
  },
  keywords: [
    "tattoo aurora",
    "tattoo studio aurora ontario",
    "tattoo artist aurora",
    "custom tattoos aurora",
    "cover up tattoos aurora",
    "colour tattoos aurora",
    "tattoo services ontario",
    "mobile tattoo",
    "mobile tattoo aurora",
    "mobile tattoo ontario",
    "aurora tattoo artist",
    "by appointment tattoo",
    "custom tattoo aurora",
    "no walk in tattoo studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.domain,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema(siteConfig.domain, siteConfig.brand);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable} text-zinc-50 antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
