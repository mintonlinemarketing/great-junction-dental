import { Star } from 'lucide-react'

const REVIEWS = [
  {
    initial: 'S',
    name: 'Shay Amber Davies',
    text: 'Dare I say it, this was a pleasant trip to the dentist. The most thorough and yet gentle exam, scale and polish I’ve ever had. Every team member from reception to treatments was polite, and explained every step thoroughly. My teeth are visibly whiter (which has never happened before) and there was no pain! I just cannot recommend these guys enough!',
  },
  {
    initial: 'J',
    name: 'Joanna Harding',
    text: 'Great dental practice! Very professional and friendly staff. Thorough examination and follow up treatment. I am very pleased with my whole experience and friendliness of the Great Junction Street Dental Practice.',
  },
  {
    initial: 'E',
    name: 'Eesha Marine',
    text: 'Great dental practice! The staff here are so friendly and make you feel at ease. Everything is always explained really clearly and they go the extra mile to make sure you’re comfortable. Honestly can’t recommend them enough!',
  },
]

export default function Reviews() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-[1.65rem] font-medium text-navy sm:text-4xl lg:text-5xl">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-slate-500">Real reviews from our valued patients</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-xl bg-white p-6 text-center shadow-md"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-400 font-semibold text-white">
                  {r.initial}
                </span>
                <p className="font-semibold text-navy">{r.name}</p>
                <span className="text-lg font-bold">
                  <span className="text-[#4285F4]">G</span>
                </span>
              </div>
              <div className="mt-3 flex justify-center text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400">
          <span className="font-semibold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>{' '}
          Reviews
        </p>
      </div>
    </section>
  )
}
