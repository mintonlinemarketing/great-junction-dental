import { useState } from 'react'
import { Check, CheckCircle2, Sparkles, Wind } from 'lucide-react'

type Treatment = 'standard' | 'airflow'

const TREATMENTS: Record<Treatment, { name: string; price: string }> = {
  standard: { name: 'Standard Clean', price: '£55' },
  airflow: { name: 'Airflow Deep Clean', price: '£75' },
}

export default function BookingFlow({
  notePosition = 'bottom',
}: {
  notePosition?: 'top' | 'bottom'
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [treatment, setTreatment] = useState<Treatment>('standard')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const selected = TREATMENTS[treatment]

  const inputCls =
    'w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30'

  const note = (
    <p className="rounded-lg bg-cream px-4 py-3 text-center text-sm font-bold text-navy">
      No deposit is required, full payment is collected at the clinic.
    </p>
  )

  return (
    <div>
      {step === 1 && (
        <div>
          {notePosition === 'top' && <div className="mb-8">{note}</div>}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Standard Clean */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl font-semibold text-navy">
                  Standard Clean
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Professional scale &amp; polish to remove plaque and tartar
                buildup
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  'Full mouth examination',
                  'Ultrasonic scaling',
                  'Hand scaling & polish',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <span className="font-display text-3xl font-semibold text-navy">
                  £55
                </span>
                <span className="ml-2 align-middle text-xs text-slate-400">
                  Total Price
                </span>
              </p>
              <button
                onClick={() => {
                  setTreatment('standard')
                  setStep(2)
                }}
                className="mt-5 w-full rounded-lg bg-slate-100 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-slate-200"
              >
                Select Standard
              </button>
            </div>

            {/* Airflow Deep Clean */}
            <div className="relative rounded-2xl border-2 border-navy bg-white p-6 shadow-lg">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-white">
                Recommended
              </span>
              <div className="flex items-center gap-3">
                <Wind className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl font-semibold text-navy">
                  Airflow Deep Clean
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Advanced air polishing for the ultimate clean &amp; stain
                removal
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  'Everything in Standard',
                  'Airflow polishing system',
                  'Deep stain removal',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <span className="font-display text-3xl font-semibold text-navy">
                  £75
                </span>
                <span className="ml-2 align-middle text-xs text-slate-400">
                  Total Price
                </span>
              </p>
              <button
                onClick={() => {
                  setTreatment('airflow')
                  setStep(2)
                }}
                className="mt-5 w-full rounded-lg bg-navy py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                Select Airflow
              </button>
            </div>
          </div>

          {notePosition === 'bottom' && <div className="mt-8">{note}</div>}
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-center text-sm text-slate-500">
            {selected.name} —{' '}
            <span className="font-semibold text-navy">{selected.price}</span>
          </p>

          <form
            className="mx-auto mt-8 max-w-md space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setStep(3)
            }}
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">
                First Name
              </label>
              <input
                required
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={inputCls}
                placeholder="First name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">
                Last Name
              </label>
              <input
                required
                type="text"
                value={form.lastName}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className={inputCls}
                placeholder="Last name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputCls}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">
                Phone
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputCls}
                placeholder="07123 456789"
              />
            </div>

            <p className="rounded-lg bg-cream px-4 py-3 text-center text-sm font-bold text-navy">
              No deposit is required, full payment is collected at the clinic.
            </p>

            <button
              type="submit"
              className="w-full rounded-full bg-gold py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-gold-dark"
            >
              REQUEST MY APPOINTMENT
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-sm text-slate-500 underline-offset-2 hover:underline"
            >
              Back to treatments
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="py-6 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
          <h3 className="mt-5 font-display text-2xl font-medium text-navy sm:text-3xl">
            Thank You{form.firstName ? `, ${form.firstName}` : ''}!
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Your booking request for a{' '}
            <span className="font-semibold text-navy">{selected.name}</span> (
            {selected.price}) has been received. Our team will be in touch
            shortly to confirm your appointment time.
          </p>
          <p className="mx-auto mt-4 max-w-md rounded-lg bg-cream px-4 py-3 text-sm text-slate-600">
            No payment has been taken — full payment is collected at the clinic
            on the day of your appointment.
          </p>
        </div>
      )}
    </div>
  )
}
