import { useEffect } from 'react'
import { X } from 'lucide-react'
import BookingFlow from './BookingFlow'

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close booking"
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-10">
          <h2 className="mb-6 px-10 text-center font-display text-2xl font-medium text-navy sm:px-0 sm:text-3xl">
            Request Your Hygienist Appointment
          </h2>
          <BookingFlow notePosition="top" />
        </div>
      </div>
    </div>
  )
}
