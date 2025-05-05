'use client';
import Navbar from "../../components/Navbar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function DentsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-pink-50 px-4 py-25 font-ubuntu">
        <div className="mb-6 rounded-xl overflow-hidden shadow-md" data-aos="fade-down">
          <img src="/img/dent-2.jpg" alt="Blanchiment dentaire" className="w-full h-64 object-cover brightness-90" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 space-y-4 max-w-md mx-auto" data-aos="zoom-in">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Blanchiment dentaire</span>
            <span className="font-bold text-pink-600">60€</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Retouche</span>
            <span className="font-bold text-pink-600">30€</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-neutral-700">Strass dentaire</span>
            <span className="font-bold text-pink-600">15€</span>
          </div>
        </div>

        <div className="bg-white text-neutral-700 rounded-xl shadow-md p-4 space-y-4 max-w-md my-4 mx-auto" data-aos="fade-up">
          <p className="mb-4">
            Chez Wafoulashes, notre service de blanchiment dentaire est conçu pour redonner éclat et blancheur à votre sourire en toute sécurité.
            Grâce à des produits professionnels et des techniques douces, vous profitez d&apos;un résultat visible dès la première séance.
          </p>
          <p>
            Nous proposons également des retouches régulières pour maintenir l&apos;éclat de vos dents ainsi que des strass dentaires pour une touche originale et glamour.
            Notre priorité : vous offrir un sourire lumineux et naturel, dans un cadre chaleureux et professionnel.
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
