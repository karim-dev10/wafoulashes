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

      <section className="min-h-screen bg-pink-50 pb-18 mt-10 px-4 py-10 md:mt-16 md:p-0">

        <Link href="/prestations" className="hidden md:block absolute right-5 top-20 text-black italic z-1"> Voir les autres prestations &rsaquo;</Link>

        <div className="md:grid md:grid-cols-2 md:gap-5 md:pt-5 md:bg-white md:px-5">
          <div className="md:mb-6 rounded-xl overflow-hidden shadow-xl" data-aos="fade-down">
            <img src="/img/dent-2.jpg" alt="Blanchiment dentaire" className="w-full h-64 md:h-120 object-cover brightness-90" />
          </div>

          <div className="hidden md:block" data-aos="fade-up">
            <h1 className="font-great text-5xl md:text-5xl font-bold color-text-hp pt-10 px-4">Un sourire éclatant avec nos soins dentaires esthétiques</h1>

            <div className="text-neutral-700 rounded-xl shadow-xl p-4 space-y-4 max-w-md my-4 mx-auto md:max-w-full md:mx-0 md:text-lg md:col-span-3 md:my-0">
              <p className="mb-4">
                Redonnez éclat et confiance à votre sourire grâce à notre service professionnel de blanchiment dentaire. Chez Wafoulashes, nous utilisons des techniques sûres, douces et efficaces pour éclaircir visiblement vos dents sans douleur ni sensibilité excessive.
              </p>
              <p className="mb-4">
                Notre soin s’adapte à tous les types de dentition et assure un résultat naturel dès la première séance. En seulement 30 minutes, profitez d’un sourire plus blanc, plus lumineux et plus éclatant. Que ce soit pour un mariage, une séance photo ou simplement pour vous sentir mieux au quotidien, notre traitement est la solution idéale.
              </p>
              <p className="mb-4">
                Nous proposons également des retouches pour entretenir la blancheur durablement, ainsi que des strass dentaires pour ajouter une touche d’originalité à votre sourire. Réalisé dans un cadre chaleureux par des professionnels à l’écoute, notre blanchiment est une invitation à rayonner avec assurance.
              </p>
              <p>
                Réservez votre créneau en ligne dès maintenant et découvrez une expérience beauté qui vous rendra le sourire. Wafoulashes, votre allié pour un sourire naturel, éclatant et tendance.
              </p>

            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-5 pt-5 md:px-5" data-aos="zoom-in">

          <div className="bg-white rounded-xl shadow-xl p-4 space-y-4 max-w-md mx-auto md:max-w-full md:mx-0 md:text-xl">
            <h3 className="hidden md:block md:text-2xl md:text-neutral-800 md:font-semibold md:border-b">Nos services</h3>
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

          <div className="hidden md:grid grid-rows-2 items-center bg-white rounded-xl shadow-xl">
            <div className="flex justify-center items-center w-fit gap-10 bg-white m-auto p-4 h-16">
              <Link href="https://www.snapchat.com/add/wafou_t">
                <img className="w-15 hover:scale-110 transition" src="/img/snapchat.png" alt="Snapchat" />
              </Link>
              <Link href="https://www.instagram.com/wafouaesthetic">
                <img className="w-15 hover:scale-110 transition" src="/img/instagram.png" alt="Instagram" />
              </Link>
              <Link href="https://wa.me/33698403669">
                <img className="w-15 hover:scale-110 transition" src="/img/whatsapp.png" alt="Whatsapp" />
              </Link>
            </div>

            <Link
              href="/reservation"
              className="w-fit m-auto text-center bg-pink-600 md:text-xl text-white md:py-4 md:px-8 rounded-full hover:bg-pink-700 transition h-16"
            >
              Réserver un créneau
            </Link>
          </div>

          <div className="block md:hidden bg-white text-neutral-700 rounded-xl shadow-xl p-4 space-y-4 max-w-md my-4 mx-auto md:max-w-full md:mx-0 md:text-xl md:col-span-3 md:my-0" data-aos="fade-up">
            <p className="mb-4">
              Chez Wafoulashes, notre service de blanchiment dentaire est conçu pour redonner éclat et blancheur à votre sourire en toute sécurité. Grâce à des produits professionnels et des techniques douces, vous profitez d’un résultat visible dès la première séance.
            </p>
            <p>
              Nous proposons également des retouches régulières pour maintenir l’éclat de vos dents ainsi que des strass dentaires pour une touche originale et glamour. Notre priorité : vous offrir un sourire lumineux et naturel, dans un cadre chaleureux et professionnel.
            </p>
          </div>
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
