import { MapPin, Phone } from 'lucide-react'
import BookingFlow from '../components/BookingFlow'

const HOURS_STRIP = [
  ['Monday', '8am to 5pm'],
  ['Tuesday', '8am to 5pm'],
  ['Wednesday', '8am to 5pm'],
  ['Thursday', '8am to 5pm'],
  ['Friday', '8am to 5pm'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]

export default function Contact() {
  return (
    <section id="edinburgh">
      {/* Map */}
      <div className="bg-slate-200">
        <iframe
          title="Clinic location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.6300429083876!2d-3.176231!3d55.973113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b8062a9662d5%3A0x948d87ee227f0b54!2sGreat%20Junction%20Dental!5e0!3m2!1sen!2suk!4v1787222351606!5m2!1sen!2suk"
          className="h-[450px] w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Opening hours strip */}
      <div className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
            <div className="flex items-center justify-center bg-navy px-10 py-8">
              <h3 className="text-center font-display text-[1.65rem] font-medium leading-tight text-white">
                OPENING
                <br />
                HOURS
              </h3>
            </div>
            <div className="grid flex-1 grid-cols-2 divide-x divide-slate-100 bg-white sm:grid-cols-4 lg:grid-cols-7">
              {HOURS_STRIP.map(([day, time]) => (
                <div key={day} className="px-4 py-8 text-center">
                  <p className="font-display text-lg text-navy">{day}</p>
                  <div className="mx-auto mt-2 h-px w-8 bg-slate-200" />
                  <p className="mt-2 text-sm italic text-gold">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact cards */}
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="flex gap-4">
              <MapPin className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.2} />
              <div>
                <h4 className="font-display text-2xl text-navy">Address</h4>
                <p className="mt-2 font-semibold text-navy">
                  163 Great Junction Street, Edinburgh, EH6 5LG.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.2} />
              <div>
                <h4 className="font-display text-2xl text-navy">Phone</h4>
                <a
                  href="tel:01315548589"
                  className="mt-2 block font-display text-2xl font-semibold text-navy hover:text-gold"
                >
                  0131 554 8589
                </a>
              </div>
            </div>
          </div>

          {/* Inline booking */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="text-center font-display text-[1.65rem] font-medium text-navy sm:text-3xl lg:text-4xl">
              Request Your Hygienist Appointment
            </h3>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mt-4 text-center text-sm text-slate-500">
              Choose your treatment — no payment required today.
            </p>
            <div className="mt-10">
              <BookingFlow detailsPopup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
