import { Clock, MapPin, Phone } from 'lucide-react'

const HOURS = [
  ['Monday', '8.00 am–5.00 pm'],
  ['Tuesday', '8.00 am–5.00 pm'],
  ['Wednesday', '8.00 am–5.00 pm'],
  ['Thursday', '8.00 am–5.00 pm'],
  ['Friday', '8.00 am–5.00 pm'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]

export default function Pricing() {
  return (
    <>
      {/* Fees / hours / location */}
      <section id="fees" className="bg-navy-dark py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[1.65rem] font-medium text-white sm:text-4xl lg:text-5xl">
              Private Hygienist Appointment
            </h2>

            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 overflow-hidden rounded-lg border border-white/15 text-center lg:mx-0">
              <div className="border-r border-white/15 p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-white">
                  SCALE &amp; POLISH
                </p>
                <p className="mt-3 font-display text-4xl text-white">£55</p>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-white">
                  AIRFLOW DEEP CLEAN
                </p>
                <p className="mt-3 font-display text-4xl text-white">£75</p>
              </div>
            </div>
            <p className="animate-flash mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Lowest Hygienist Price in Edinburgh
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="tel:01315548589"
                className="flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-dark"
              >
                <Phone className="h-4 w-4" /> 0131 554 8589
              </a>
              <a
                href="#book"
                className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:bg-gold-dark"
              >
                REQUEST MY APPOINTMENT
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-white" />
              <h3 className="font-display text-[1.65rem] font-medium text-white">
                Opening Hours
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {HOURS.map(([day, time]) => (
                <li
                  key={day}
                  className="flex items-center justify-between text-slate-200"
                >
                  <span>{day}</span>
                  <span className="mx-4 flex-1 border-b border-dotted border-white/15" />
                  <span>{time}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-white" />
              <h3 className="font-display text-[1.65rem] font-medium text-white">
                Location
              </h3>
            </div>
            <p className="mt-4 text-slate-200">
              163 Great Junction Street, Edinburgh, EH6 5LG.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
