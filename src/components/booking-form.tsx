"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const TIME_SLOTS = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "6:00 PM – 8:00 PM",
  "8:00 PM – 10:00 PM",
];

type AddressSuggestion = {
  id: number;
  label: string;
};

function AddressAutocomplete({
  name,
  inputClass,
}: {
  name: string;
  inputClass: string;
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (value.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/address?q=${encodeURIComponent(value)}`);
        const data: AddressSuggestion[] = await res.json();
        setSuggestions(data);
        setOpen(data.length > 0);
      } catch {
        setSuggestions([]);
      }
    }, 350);
  };

  const handleSelect = (label: string) => {
    setQuery(label);
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <input
        name={name}
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder="Your address (GTA, Ontario)"
        required
        autoComplete="off"
        className={inputClass}
      />
      {open && (
        <ul className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-white/10 bg-[#110e22] shadow-xl">
          {suggestions.map((s) => (
            <li
              key={s.id}
              onMouseDown={() => handleSelect(s.label)}
              className="cursor-pointer px-4 py-2.5 text-sm text-white/80 hover:bg-violet-600/20 hover:text-white"
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setError("Unable to send request. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/thank-you");
  };

  const inputClass =
    "w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/30 focus:border-violet-500/60 focus:bg-white/[0.06] focus:outline-none transition";

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input name="name" placeholder="Full name" required className={inputClass} />
      <input type="email" name="email" placeholder="Email" required className={inputClass} />
      <input name="phone" placeholder="Phone number" required className={inputClass} />

      <AddressAutocomplete name="city" inputClass={inputClass} />

      <select
        name="serviceType"
        required
        defaultValue=""
        className={`${inputClass} appearance-none`}
      >
        <option value="" disabled className="bg-[#0d0b1a] text-white/40">
          Select service type
        </option>
        <option value="new-tattoos" className="bg-[#0d0b1a]">New Tattoos</option>
        <option value="cover-up-tattoos" className="bg-[#0d0b1a]">Cover-Up Tattoos</option>
        <option value="colour-tattoos" className="bg-[#0d0b1a]">Colour Tattoos</option>
      </select>

      <div className="grid gap-3 sm:grid-cols-2">
        <input type="date" name="preferredDate" required className={inputClass} />
        <select
          name="preferredTime"
          required
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled className="bg-[#0d0b1a] text-white/40">
            Select time slot
          </option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot} className="bg-[#0d0b1a]">
              {slot}
            </option>
          ))}
        </select>
      </div>

      <label className={`flex cursor-pointer items-center gap-3 ${inputClass}`}>
        <input type="checkbox" name="mobileRequested" value="yes" className="accent-violet-500" />
        <span className="text-white/60">Mobile service requested</span>
      </label>
      <textarea
        name="details"
        placeholder="Tattoo idea, size, placement, additional notes"
        required
        rows={4}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-1 w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-500 hover:to-purple-500 hover:shadow-violet-700/50 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Request Booking"}
      </button>
      {error && (
        <p className="text-center text-sm text-red-400">{error}</p>
      )}
    </form>
  );
}
