import { useEffect, useState } from 'react'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Welcome from '../sections/Welcome'
import Team from '../sections/Team'
import Gallery from '../sections/Gallery'
import Pricing from '../sections/Pricing'
import Benefits from '../sections/Benefits'
import Reviews from '../sections/Reviews'
import Faq from '../sections/Faq'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import BookingModal from '../components/BookingModal'

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)

  // Any "book" link/button opens the booking flow
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a[href="#book"]')
      if (el) {
        e.preventDefault()
        setBookingOpen(true)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Team />
        <Gallery />
        <Pricing />
        <Benefits />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
