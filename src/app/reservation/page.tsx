'use client'
import Navbar from "@/app/components/Navbar" // adapte le chemin selon ta structure

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-pink-50">
        <iframe
          src="https://cal.com/wafou/prestation?lang=fr"
          className="w-full min-h-screen h-full border-0"
        ></iframe>
      </main>
    </>
  )
}