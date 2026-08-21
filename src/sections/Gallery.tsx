const CASES = [
  { img: '/images/gallery-1.webp', alt: 'Full smile scale and polish result' },
  { img: '/images/gallery-2.webp', alt: 'Lower teeth deep clean result' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
          Smile Gallery
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={c.img}
                alt={c.alt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-navy">
                BEFORE
              </span>
              <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-navy">
                AFTER
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
