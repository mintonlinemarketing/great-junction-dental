import { useEffect, useState } from 'react'
import { MapPin, Phone, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SMILE GALLERY', href: '#gallery' },
  { label: 'FEES', href: '#fees' },
  { label: 'EDINBURGH', href: '#edinburgh' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top info bar */}
      <div className="hidden border-b border-slate-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-2 text-[13px] text-slate-500">
          <a href="#edinburgh" className="flex items-center gap-1.5 hover:text-navy">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            163 Great Junction Street, Edinburgh, EH6 5LG
          </a>
          <a href="tel:01315548589" className="flex items-center gap-1.5 hover:text-navy">
            <Phone className="h-3.5 w-3.5 text-gold" />
            0131 554 8589
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 leading-none">
          <img
            src="/images/great-junction-logo.png"
            alt="Great Junction Dental"
            className="h-14 w-14 rounded-full"
          />
          <span className="hidden font-sans text-xl font-semibold tracking-tight text-navy sm:block">
            Dental Hygienist Edinburgh
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[13px] font-medium tracking-[0.18em] transition-colors hover:text-gold ${
                i === 0 && !scrolled ? 'text-gold' : 'text-navy'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-gold px-7 py-3 text-[13px] font-semibold tracking-[0.12em] text-white transition-colors hover:bg-gold-dark"
          >
            REQUEST MY APPOINTMENT
          </a>
        </nav>

        {/* Mobile phone number */}
        <a
          href="tel:01315548589"
          className="flex flex-1 items-center justify-center gap-1.5 text-sm font-semibold text-navy lg:hidden"
        >
          <Phone className="h-4 w-4 text-gold" />
          0131 554 8589
        </a>

        <button
          className="text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium tracking-[0.18em] text-navy"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold tracking-[0.12em] text-white"
          >
            REQUEST MY APPOINTMENT
          </a>
        </nav>
      )}
    </header>
  )
}
