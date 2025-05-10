'use client';
import Navbar from "../../components/Navbar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function SourcilsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <section className="h-[calc(100vh-150px)] mt-10 bg-pink-50 px-4 py-10">
        <div className="mb-6 rounded-xl overflow-hidden shadow-md" data-aos="fade-down">
          <img src="/img/sourcils-2.jpg" alt="Sourcils" className="w-full h-64 object-cover brightness-90" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 space-y-4 max-w-md mx-auto" data-aos="zoom-in">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Browlift</span>
            <span className="font-bold text-pink-600">30€</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Restructuration + teinture</span>
            <span className="font-bold text-pink-600">20€</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Airbrush</span>
            <span className="font-bold text-pink-600">20€</span>
          </div>
        </div>

        <div className="bg-white text-neutral-700 rounded-xl shadow-md p-4 space-y-4 max-w-md my-4 mx-auto" data-aos="fade-up">
          <p className="mb-4">
            Sublimez votre regard avec nos soins sourcils, pensés pour redéfinir votre ligne de sourcils tout en douceur.
            Grâce à nos techniques comme le browlift ou la teinture, vos sourcils gagnent en densité, en structure et en éclat.
          </p>
          <p>
            Chaque prestation est réalisée avec minutie pour un résultat naturel, harmonieux et longue durée. Faites confiance à notre savoir-faire pour des sourcils qui rehaussent votre beauté.
          </p>
        </div>

        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden">
          <Link
            href="./../reservation"
            className="block text-center bg-pink-600 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </>
  );
}