'use client'
import Link from 'next/link'

export default function ContactSuccessPage() {
  return (
    <section className="min-h-screen bg-pink-50 flex flex-col justify-center items-center text-center px-4 font-inter">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Message envoyé ✅</h1>
      <p className="text-lg text-neutral-700 max-w-xl mb-6">
        Merci pour ton message ! Nous te répondrons dans les plus brefs délais.
      </p>
      <Link
        href="/"
        className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition"
      >
        Retour à l’accueil
      </Link>
    </section>
  )
}
