'use client';
import Navbar from "../../components/Navbar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import SocialBar from "@/app/components/SocialBar";

export default function SourcilsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-pink-50 pb-18 mt-10 px-4 py-10 md:mt-16 md:p-0">


        <a href="/prestations" className="hidden md:block absolute right-5 top-20 text-black italic z-1"> Voir les autres prestations &rsaquo;</a>

        <div className="md:grid md:grid-cols-2 md:gap-5 md:pt-5 md:bg-white md:px-5">
          <div className="md:mb-6 rounded-xl overflow-hidden shadow-xl" data-aos="fade-down">
            <img src="/img/sourcils-2.jpg" alt="Sourcils" className="w-full h-64 md:h-120 object-cover brightness-90" />
          </div>

          <div className="hidden md:block" data-aos="fade-up">
            <h1 className="font-great text-5xl md:text-5xl font-bold color-text-hp pt-10 px-4">Des sourcils parfaits pour sublimer votre visage</h1>

            <div className="text-neutral-700 rounded-xl shadow-xl p-4 space-y-4 max-w-md my-4 mx-auto md:max-w-full md:mx-0 md:text-lg md:col-span-3 md:my-0">
              <p className="mb-4"> Offrez à votre regard une véritable transformation avec nos prestations expertes dédiées aux sourcils. Que vous souhaitiez restructurer votre ligne, intensifier votre regard ou obtenir un effet lifté naturel, nos soins sourcils sont conçus pour s’adapter à chaque morphologie et sublimer chaque visage. </p> <p className="mb-4"> Nos techniques incluent le browlift, la teinture, la restructuration et l'airbrush, permettant de redonner forme, volume et définition à vos sourcils. Chaque prestation est réalisée avec précision et dans le respect de votre peau pour un résultat harmonieux et longue tenue. </p> <p> Spécialistes des soins du regard, nous mettons un point d’honneur à offrir des services personnalisés, adaptés à vos besoins et à vos envies. Confiez-nous vos sourcils et révélez toute l’intensité de votre regard avec un fini professionnel, naturel et durable. </p>
            </div>
          </div>
        </div>


        <div className="md:grid md:grid-cols-2 md:gap-5 pt-5 md:px-5" data-aos="zoom-in">

          <div className="bg-white rounded-xl shadow-xl p-4 space-y-4 max-w-md mx-auto md:max-w-full md:mx-0 md:text-xl" > {/*data-aos remettre zoom-in*/}
            <h3 className="hidden md:block md:text-2xl md:text-neutral-800 md:font-semibold md:border-b">Nos services</h3>
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

          <div className="hidden md:grid grid-rows-2  items-center bg-white rounded-xl shadow-xl">

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
              Sublimez votre regard avec nos soins sourcils, pensés pour redéfinir votre ligne de sourcils tout en douceur.
              Grâce à nos techniques comme le browlift ou la teinture, vos sourcils gagnent en densité, en structure et en éclat.
            </p>
            <p>
              Chaque prestation est réalisée avec minutie pour un résultat naturel, harmonieux et longue durée. Faites confiance à notre savoir-faire pour des sourcils qui rehaussent votre beauté.
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