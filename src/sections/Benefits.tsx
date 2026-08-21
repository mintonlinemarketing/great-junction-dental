import { ShieldCheck, Wind, Sparkles, Search } from 'lucide-react'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Prevent gum disease',
    text: 'Gum disease is far easier to treat when caught early. Left to develop, it can lead to bleeding, discomfort and even tooth loss. Your hygienist treats the early signs and shows you how to keep your gums healthy at home.',
  },
  {
    icon: Wind,
    title: 'Avoid bad breath',
    text: 'Persistent bad breath (halitosis) usually points to an underlying dental cause — often plaque or bacteria building up around the teeth or beneath the gum line. A professional clean targets the source, not just the symptom.',
  },
  {
    icon: Sparkles,
    title: 'Restore whiter smile',
    text: 'Tea, coffee, red wine and tobacco all leave external stains that brushing alone cannot shift. A hygienist can safely remove these stains and bring back the natural brightness of your teeth.',
  },
  {
    icon: Search,
    title: 'Prevent oral cancer',
    text: 'Alongside your clean, your hygienist checks for the early signs of oral cancer — which is most treatable when detected early — and offers practical advice on reducing your risk factors.',
  },
]

export default function Benefits() {
  return (
    <>
      {/* What to expect */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
            What To Expect During A Dental Hygienist Appointment
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-8 leading-relaxed">
            Your appointment begins with a chat about your oral health, followed
            by a careful look inside your mouth — including a screening for any
            unusual lesions and a check of the skin around your mouth.
          </p>
          <p className="mt-4 leading-relaxed">
            Next, your hygienist examines your gum line for any signs of
            periodontal disease, checks for decay, and flags anything else that
            may need attention.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
            The Benefits Of{' '}
            <span className="tracking-wide">Visiting A Dental Hygienist</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed">
            Regular hygiene visits do far more than keep your smile looking
            good — they protect your long-term health and confidence. Here are
            four reasons to make them part of your routine:
          </p>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-10 sm:grid-cols-2">
              {BENEFITS.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md sm:mx-0">
                    <Icon className="h-7 w-7 text-navy-light" />
                  </span>
                  <h3 className="mt-4 text-center font-display text-xl font-medium text-navy sm:text-left">
                    {title}
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed sm:text-left">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
            Request Your Hygiene Appointment Today
          </h2>
          <p className="mt-4 leading-relaxed">
            for a dental checkup and professional teeth cleaning in Edinburgh.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:01315548589"
              className="rounded-full bg-navy px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-navy-light"
            >
              0131 554 8589
            </a>
            <a
              href="#book"
              className="rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:bg-gold-dark"
            >
              REQUEST MY APPOINTMENT
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
