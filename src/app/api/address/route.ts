import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");
  if (!q || q.length < 3) {
    return NextResponse.json([]);
  }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}, Ontario, Canada&format=json&limit=6&addressdetails=1&countrycodes=ca`;

  const res = await fetch(url, {
    headers: {
      "Accept-Language": "en",
      "User-Agent": "AMAX-Tattoo-Website/1.0",
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
