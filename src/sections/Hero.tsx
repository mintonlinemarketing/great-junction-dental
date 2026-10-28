import { MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home">
      {/* Announcement bar */}
      <div className="bg-navy-dark px-4 py-1.5 text-center sm:py-3">
        <p className="flex items-center justify-center gap-1.5 px-2 text-xs tracking-wide text-white sm:text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-white" />
          <span className="text-center">
            Located at 163 Great Junction Street, Edinburgh, EH6 5LG — Easy
            Access, Always.
          </span>
        </p>
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/hero.webp"
            alt="Great Junction Dental clinic"
            width="1920"
            height="1014"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="max-w-xl overflow-hidden rounded-2xl bg-white/95 text-center shadow-2xl backdrop-blur">
            <div className="bg-gold px-6 py-3.5">
              <p className="animate-flash text-sm font-bold uppercase tracking-[0.2em] text-white">
                Special Offer — Our Lowest Prices, Limited Period Only
              </p>
            </div>
            <div className="p-6 sm:p-10">
            <p className="text-xs font-medium tracking-[0.3em] text-gold">
              EDINBURGH
            </p>
            <h1 className="mt-3 font-display text-[1.7rem] font-medium leading-tight text-navy sm:text-4xl lg:text-5xl">
              Private Hygienist Appointment
            </h1>

            {/* Price card */}
            <div className="mt-8 rounded-xl bg-navy px-4 py-6 text-white sm:px-8">
              <div className="grid grid-cols-2 divide-x divide-white/15">
                <div className="flex flex-col px-2 sm:px-4">
                  <p className="flex min-h-8 items-start justify-center text-xs font-medium sm:min-h-0 sm:text-sm">
                    Scale &amp; Polish
                  </p>
                  <p className="mt-2 font-display text-3xl text-white sm:text-4xl">
                    £55
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-slate-300 sm:text-xs">
                    Classic clean to remove plaque and tartar
                  </p>
                </div>
                <div className="flex flex-col px-2 sm:px-4">
                  <p className="flex min-h-8 items-start justify-center text-xs font-medium sm:min-h-0 sm:text-sm">
                    Airflow Deep Clean
                  </p>
                  <p className="mt-2 font-display text-3xl text-white sm:text-4xl">
                    £75
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-slate-300 sm:text-xs">
                    Advanced polish for deep stain removal
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#book"
              className="mt-6 inline-block rounded-full bg-gold px-10 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-gold-dark"
            >
              REQUEST YOUR APPOINTMENT
            </a>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-500">
              A small booking deposit will be required to secure your hygiene appointment. This will be deducted from your hygiene appointment fee which will be collected on the day.
            </p>

            <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-6">
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="font-semibold text-navy">4.6</span>
              <span className="text-sm text-slate-500">on</span>
              <span className="text-lg font-bold leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* USP strip */}
      <div className="bg-gold px-4 py-5 text-center">
        <p className="animate-flash text-sm font-bold uppercase tracking-[0.15em] text-white sm:text-lg sm:tracking-[0.25em] lg:text-xl">
          ★ Special Offer — Our Lowest Prices, Limited Period Only ★
        </p>
      </div>
    </section>
  )
}
