import { NextRequest, NextResponse } from "next/server";

type PhotonFeature = {
  properties: {
    name?: string;
    housenumber?: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
    osm_id?: number;
  };
};

type PhotonResponse = {
  features: PhotonFeature[];
};

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");
  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  // Photon API — location bias centered on GTA (Toronto)
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=6&lat=43.75&lon=-79.4&lang=en`;

  const res = await fetch(url, {
    headers: { "Accept-Language": "en" },
  });

  const data: PhotonResponse = await res.json();

  const results = (data.features ?? [])
    .filter((f) => {
      const p = f.properties;
      // Only include results from Ontario, Canada — GTA area
      return (
        p.country === "Canada" &&
        (p.state === "Ontario" || p.state === "ON")
      );
    })
    .map((f) => {
      const p = f.properties;
      // Build short address: "23 Yonge St, Aurora" or "Aurora, ON"
      const parts: string[] = [];
      if (p.housenumber && p.street) {
        parts.push(`${p.housenumber} ${p.street}`);
      } else if (p.street) {
        parts.push(p.street);
      } else if (p.name) {
        parts.push(p.name);
      }
      if (p.city) parts.push(p.city);
      parts.push("ON");
      return {
        id: p.osm_id ?? Math.random(),
        label: parts.join(", "),
      };
    })
    .filter((r, i, arr) => arr.findIndex((x) => x.label === r.label) === i); // deduplicate

  return NextResponse.json(results);
}
