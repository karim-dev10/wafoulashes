'use client'
import Navbar from "@/app/components/Navbar"

export default function ReservationPage() {
  return (
    <>
      <main>
      <Navbar />
        <iframe
          src="https://cal.com/wafou/prestation?lang=fr"
          className="w-full min-h-screen h-full border-0"
        ></iframe>
      </main>
    </>
  )
}