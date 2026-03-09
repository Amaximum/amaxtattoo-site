export function generateOrganizationSchema(domain: string, brand: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand,
    url: domain,
    logo: `${domain}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aurora",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.0065,
        longitude: -79.4504,
      },
      geoRadius: "25000",
    },
  };
}

export function generateLocalBusinessSchema(
  domain: string,
  brand: string,
  location: { name: string; lat: number; lng: number }
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${brand} - ${location.name}`,
    url: domain,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
  };
}
