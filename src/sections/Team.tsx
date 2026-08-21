const TEAM = [
  {
    name: 'Jisna Amina',
    role: 'Dental Hygienist',
    img: '/images/jisna-amina.jpg',
  },
  {
    name: 'Ajesh Joseph',
    role: 'Dental Hygienist',
    img: '/images/ajesh-joseph.png',
  },
  {
    name: 'Dr. Fary Johnson',
    role: 'BDS MSc Pg Dip Implantology — Principal Dentist',
    img: '/images/fary-johnson.png',
    noButton: true,
  },
]

export default function Team() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-[1.65rem] font-medium text-white sm:text-4xl lg:text-5xl">
          Meet Our Dental Hygienists
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" />

        <div className="mt-16 space-y-20">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border-4 border-gold/70 shadow-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-[1.65rem] font-medium text-white">
                  {m.name}
                </h3>
                <p className="mt-2 font-medium tracking-wide text-slate-200">
                  {m.role}
                </p>
                <div className="mt-5 h-px w-full max-w-md bg-white/10" />
                {!('noButton' in m && m.noButton) && (
                  <a
                    href="#book"
                    className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold tracking-[0.12em] text-navy transition-colors hover:bg-gold hover:text-white"
                  >
                    REQUEST MY APPOINTMENT
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
