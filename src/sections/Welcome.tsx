import { Phone } from 'lucide-react'

export default function Welcome() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm tracking-[0.25em] text-gold">Welcome to</p>
          <h2 className="mt-2 font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
            Great Junction Dental
          </h2>
          <p className="mt-6 leading-relaxed">
            Our established dental hygiene clinic sits on Great Junction Street
            in Edinburgh, EH6 5LG. Our experienced
            hygienists offer a full range of professional teeth cleaning
            treatments — from a classic scale and polish to advanced airflow
            therapy — removing surface stains and plaque while giving you
            tailored advice to keep gum disease at bay.
          </p>
          <p className="mt-4 leading-relaxed">
            Seeing a hygienist regularly is one of the simplest ways to protect
            your oral health. Call us or book online, and enjoy a comfortable,
            relaxed visit at our modern practice.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:bg-gold-dark"
            >
              REQUEST MY APPOINTMENT
            </a>
            <a
              href="tel:01315548589"
              className="flex items-center gap-3 rounded-full bg-navy px-7 py-3 text-white transition-colors hover:bg-navy-light"
            >
              <Phone className="h-5 w-5" />
              <span className="leading-tight">
                <span className="block text-[11px] tracking-widest text-slate-300">
                  CALL US
                </span>
                <span className="text-lg font-semibold">0131 554 8589</span>
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/building.jpg"
            alt="Great Junction Dental practice"
            className="h-auto w-full rounded-xl shadow-xl sm:h-96 sm:object-cover"
          />
        </div>
      </div>
    </section>
  )
}
