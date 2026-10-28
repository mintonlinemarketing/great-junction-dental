import { useEffect, useState } from 'react'
import { Check, CheckCircle2, Sparkles, Wind, X } from 'lucide-react'

type Treatment = 'standard' | 'airflow'

const TREATMENTS: Record<Treatment, { name: string; price: string }> = {
  standard: { name: 'Standard Clean', price: '£55' },
  airflow: { name: 'Airflow Deep Clean', price: '£75' },
}

export default function BookingFlow({
  detailsPopup = false,
}: {
  notePosition?: 'top' | 'bottom'
  detailsPopup?: boolean
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [treatment, setTreatment] = useState<Treatment>('standard')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const popupOpen = detailsPopup && step > 1

  // Persist gclid from the landing URL so it survives navigation
  useEffect(() => {
    const gclid = new URLSearchParams(window.location.search).get('gclid')
    if (gclid) localStorage.setItem('gclid', gclid)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const gclid =
      new URLSearchParams(window.location.search).get('gclid') ||
      localStorage.getItem('gclid') ||
      ''
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      treatment: selected.name,
      price: selected.price,
      submittedAt: new Date().toISOString(),
      gclid,
      page: window.location.href,
    }

    // Google Tag Manager event
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: 'booking_form_submission', ...payload })

    // Pabbly webhook — sent as a simple request (no-cors) so CORS never blocks it
    fetch(
      'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjUwNTZiMDYzMTA0MzQ1MjZiNTUzNyI_3D_pc/IjU3NjcwNTY4MDYzNzA0M2M1MjY4NTUzMjUxM2Ei_pc',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      }
    ).catch(() => {})

    setStep(3)
  }

  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden'
    } else if (detailsPopup) {
      document.body.style.overflow = ''
    }
    return () => {
      if (detailsPopup) document.body.style.overflow = ''
    }
  }, [popupOpen, detailsPopup])

  const selected = TREATMENTS[treatment]

  const inputCls =
    'w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30'

  const details = (
    <div>
      <p className="text-center text-sm text-slate-500">
        {selected.name} —{' '}
        <span className="font-semibold text-navy">{selected.price}</span>
      </p>

      <form
        className="mx-auto mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">
            First Name
          </label>
          <input
            required
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
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
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
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
  )

  const thankYou = (
    <div className="py-6 text-center">
      <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
      <h3 className="mt-5 font-display text-2xl font-medium text-navy sm:text-3xl">
        Thank You{form.firstName ? `, ${form.firstName}` : ''}!
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Your booking request for a{' '}
        <span className="font-semibold text-navy">{selected.name}</span> (
        {selected.price}) has been received. Our team will be in touch shortly
        to confirm your appointment time.
      </p>
      <p className="mx-auto mt-4 max-w-md rounded-lg bg-cream px-4 py-3 text-sm text-slate-600">
        No payment has been taken — full payment is collected at the clinic on
        the day of your appointment.
      </p>
    </div>
  )

  return (
    <div>
      {step === 1 && (
        <div>
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

        </div>
      )}

      {!detailsPopup && step === 2 && details}
      {!detailsPopup && step === 3 && thankYou}

      {/* Details / thank-you as popup when embedded inline on the page */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
            onClick={() => setStep(1)}
          />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-10">
            <button
              onClick={() => setStep(1)}
              aria-label="Close booking form"
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
            {step === 2 && (
              <h3 className="mb-2 px-8 text-center font-display text-2xl font-medium text-navy">
                Your Details
              </h3>
            )}
            {step === 2 ? details : thankYou}
          </div>
        </div>
      )}
    </div>
  )
}
