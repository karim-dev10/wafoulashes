'use client';
import Navbar from "../components/Navbar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialBar from "../components/SocialBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Link from "next/link";

export default function PrestationsPage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section data-aos="zoom-in" className="h-[calc(100vh-150px)] mt-20 bg-pink-50 px-4 font-inter flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-5 text-neutral-800">
          Découvrez nos prestations
        </h1>

       <div className="flex-grow gap-5 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 w-full">

          {/* SOURCILS */}
          <Link href="/prestations/sourcils" className="relative border border-pink-600 font-great text-pink-600 bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:text-white">
            <img src="/img/sourcils-3.png" className="w-full h-full brightness-30 object-cover rounded-xl" alt="Sourcils" />
            <span className="absolute bottom-2 left-3 text-2xl md:text-3xl">à partir de 20€</span>
            <span className="absolute bottom-2 right-3 text-4xl md:text-5xl">Sourcils</span>
          </Link>

          {/* CILS */}
          <Link href="/prestations/cils" className="relative border border-pink-600 font-great text-pink-600 bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:text-white">
            <img src="/img/cils-3.png" className="w-full h-full brightness-30 object-cover rounded-xl" alt="Cils" />
            <span className="absolute bottom-2 left-3 text-2xl md:text-3xl">à partir de 30€</span>
            <span className="absolute bottom-2 right-3 text-4xl md:text-5xl">Cils</span>
            
          </Link>

          {/* DENTS */}
          <Link href="/prestations/dentaire" className="relative border border-pink-600 font-great text-pink-600 bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:text-white">
            <img src="/img/dent-3.png" className="w-full h-full brightness-30 object-cover rounded-xl" alt="Dentaire" />
            <span className="absolute bottom-2 left-3 text-2xl md:text-3xl">à partir de 15€</span>
            <span className="absolute bottom-2 right-3 text-4xl md:text-5xl">Dentaire</span>
          </Link>
        </div>

        {/* SECTION AVIS CLIENTS EN CAROUSEL */}
        <div className="hidden md:block max-w-3xl mx-auto px-4 pt-15">
          <h2 className="text-2xl font-semibold text-center mb-8 text-neutral-800">Elles nous font confiance :</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              { name: "Sarah", text: "Super accueil et résultat magnifique pour mes sourcils ! Je recommande à 100%." },
              { name: "Inès", text: "Rehaussement de cils parfait, résultat naturel et durable, je suis fan !" },
              { name: "Léa", text: "Blanchiment dentaire très efficace, le sourire est éclatant sans douleur." },
              { name: "Camille", text: "Ambiance chaleureuse et prestation de qualité, merci pour vos conseils !" },
              { name: "Nadia", text: "Résultat incroyable pour mes cils, j’ai eu plein de compliments ! ❤️" },
            ].map((avis, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 rounded-xl shadow text-lg text-neutral-700 min-h-[180px] h-full flex flex-col justify-between">
                  <p>“{avis.text}”</p>
                  <span className="mt-2 font-semibold text-pink-600">— {avis.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <SocialBar />
    </>
  );
}
