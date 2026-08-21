import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Are you accepting new patients and can you treat children?',
    a: 'Yes — we welcome new patients of all ages, including children. Our new patient introductory prices make it easy to get started with professional hygiene care.',
  },
  {
    q: 'Can I get a hygienist when I am not registered with you?',
    a: 'Absolutely. You do not need to be registered with a dentist here to book a hygiene appointment — simply book online or call us.',
  },
  {
    q: 'What can I expect during my first oral hygiene appointment?',
    a: 'Your hygienist will discuss your oral health, examine your teeth and gums, screen for any abnormalities, then carry out a thorough professional clean with personalised aftercare advice.',
  },
  {
    q: 'Do you remain open late or weekends?',
    a: 'We are open Monday to Friday, 8.00 am to 5.00 pm, and closed on Saturdays and Sundays.',
  },
  {
    q: 'What is the difference between a dentist and a hygienist?',
    a: 'A dentist diagnoses and treats dental disease, while a hygienist specialises in prevention — professional cleaning, gum health and oral hygiene guidance.',
  },
  {
    q: 'How can I find a good dental hygienist in my area?',
    a: 'Look for a well-reviewed, fully qualified hygienist at a reputable clinic, and choose a practice that is convenient to reach so you can attend regularly.',
  },
  {
    q: 'How will I maintain good oral hygiene?',
    a: 'Brush twice daily with fluoride toothpaste, clean between your teeth every day, limit sugary food and drink, and visit your hygienist regularly for professional cleaning.',
  },
  {
    q: 'Why is dental hygiene important?',
    a: 'Good oral hygiene prevents gum disease, tooth decay and bad breath — and growing evidence links healthy gums to better general health too.',
  },
  {
    q: 'Why do I need to see a hygienist?',
    a: 'Even excellent brushing cannot remove hardened tartar. A hygienist removes plaque and tartar build-up, treats early gum disease and helps prevent future problems.',
  },
  {
    q: 'Will I need to do routine checkups?',
    a: 'Yes — routine checkups and hygiene visits let us catch small issues before they become bigger, more costly problems.',
  },
  {
    q: 'Is it possible to eat and drink after dental hygiene method?',
    a: 'You can usually eat and drink straight after a routine clean. After airflow polishing or whitening, we may suggest avoiding strongly coloured food and drink for a short time.',
  },
  {
    q: 'What is plaque?',
    a: 'Plaque is a soft, sticky film of bacteria that constantly forms on your teeth. If it is not removed regularly, it can cause decay and gum disease.',
  },
  {
    q: 'What is tartar?',
    a: 'Tartar (calculus) is plaque that has hardened onto the teeth. It cannot be removed by brushing alone and requires professional scaling.',
  },
  {
    q: 'What is the difference between scale and polish with the dentist and with the hygienist?',
    a: 'Hygienists specialise in this treatment and typically spend longer on it, combining thorough scaling with stain removal and tailored prevention advice.',
  },
  {
    q: 'Why is it necessary to do scale and polish?',
    a: 'Scaling removes tartar your toothbrush cannot reach, and polishing smooths the tooth surface — together they help prevent gum disease and keep your smile bright.',
  },
  {
    q: 'Can the scale and polish method hurt?',
    a: 'Most patients find it comfortable. If you have sensitive teeth or gums, let your hygienist know — we can adjust the treatment to keep you at ease.',
  },
  {
    q: 'What can I expect after deep cleaning?',
    a: 'Your teeth will feel noticeably smoother and cleaner. Mild sensitivity or slight gum tenderness can occur for a day or two and settles quickly.',
  },
  {
    q: 'How often should I clean my teeth professionally?',
    a: 'Most patients benefit from a professional clean every six months, though your hygienist may recommend more frequent visits if you are prone to gum disease.',
  },
  {
    q: 'What can happen if I do not keep my teeth clean?',
    a: 'Plaque build-up can lead to cavities, gum disease, persistent bad breath, staining and — in advanced cases — tooth loss.',
  },
  {
    q: 'How long will it require for a hygienist to clean teeth?',
    a: 'A typical hygiene appointment takes around 30 minutes, depending on the treatment you choose and the condition of your teeth and gums.',
  },
  {
    q: 'How much will be the cost of a dental hygiene appointment?',
    a: 'A scale and polish is £55 and an airflow deep clean is £75 — the lowest hygienist prices in Edinburgh. See the fees section for details.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  const col1 = FAQS.slice(0, Math.ceil(FAQS.length / 2))
  const col2 = FAQS.slice(Math.ceil(FAQS.length / 2))

  const renderItem = (faq: (typeof FAQS)[number], index: number, offset: number) => {
    const i = index + offset
    const isOpen = open === i
    return (
      <div
        key={faq.q}
        className="overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        <button
          onClick={() => setOpen(isOpen ? null : i)}
          className="flex w-full items-center justify-between gap-4 px-7 py-4 text-left"
        >
          <span className="font-display text-[15px] text-navy">{faq.q}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-navy transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <p className="px-7 pb-5 text-sm leading-relaxed text-slate-500">
            {faq.a}
          </p>
        )}
      </div>
    )
  }

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" />

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            {col1.map((f, i) => renderItem(f, i, 0))}
          </div>
          <div className="space-y-5">
            {col2.map((f, i) => renderItem(f, i, col1.length))}
          </div>
        </div>
      </div>
    </section>
  )
}
