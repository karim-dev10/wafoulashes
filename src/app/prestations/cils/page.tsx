'use client';
import Navbar from "../../components/Navbar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function CilsPage() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-pink-50 pb-18 mt-10 px-4 py-10 md:mt-16 md:p-0">

                <a href="/prestations" className="hidden md:block absolute right-5 top-20 text-black italic z-1">Voir les autres prestations &rsaquo;</a>

                <div className="md:grid md:grid-cols-2 md:gap-5 md:pt-5 md:bg-white md:px-5">
                    <div className="md:mb-6 rounded-xl overflow-hidden shadow-xl" data-aos="fade-down">
                        <img src="/img/cils-2.jpg" alt="Cils" className="w-full h-64 md:h-120 object-cover brightness-90" />
                    </div>

                    <div className="hidden md:block" data-aos="fade-up">
                        <h1 className="font-great text-5xl md:text-5xl font-bold color-text-hp pt-10 px-4">
                            Sublimez votre regard avec nos soins cils professionnels
                        </h1>

                        <div className="text-neutral-700 rounded-xl shadow-xl p-4 space-y-4 max-w-md my-4 mx-auto md:max-w-full md:mx-0 md:text-lg md:col-span-3 md:my-0">
                            <p className="mb-4">
                                Intensifiez votre regard sans maquillage avec notre rehaussement de cils professionnel. Cette technique innovante soulève vos cils depuis la racine pour un effet courbé, allongé et naturel qui dure plusieurs semaines.
                            </p>
                            <p className="mb-4">
                                Nos prestations incluent le rehaussement seul ou combiné à une teinture et un soin fortifiant, idéal pour renforcer vos cils et intensifier leur couleur sans avoir recours à du mascara. Vous gagnez du temps chaque matin avec un regard frais et ouvert dès le réveil.
                            </p>
                            <p className="mb-4">
                                Adapté à toutes les formes d’yeux et à tous les types de cils, notre soin est effectué avec des produits de qualité, sans danger pour vos yeux. Vous profitez d’un résultat durable, élégant et parfaitement exécuté dans un environnement professionnel et relaxant.
                            </p>
                            <p>
                                Réservez votre séance chez Wafoulashes et révélez toute la beauté de votre regard. Pour un effet "waouh" naturel, longue tenue et sans effort, faites confiance à notre expertise en soins du regard.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-5 pt-5 md:px-5" data-aos="zoom-in">
                    <div className="bg-white rounded-xl shadow-xl p-4 space-y-4 max-w-md mx-auto md:max-w-full md:mx-0 md:text-xl">
                        <h3 className="hidden md:block md:text-2xl md:text-neutral-800 md:font-semibold md:border-b">Nos services</h3>
                        <div className="flex justify-between border-b pb-2 relative">
                            <span className="font-medium text-neutral-700">Rehaussement de cils</span>
                            <span className="font-bold text-pink-600">30€</span>
                        </div>

                        <div className="flex justify-between border-b pb-2 relative">
                            <span className="font-medium text-neutral-700">Rehaussement + teinture + soin</span>
                            <span className="font-bold text-pink-600">40€</span>
                            <span className="absolute -top-3 -right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
                                Populaire
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-medium text-neutral-700">Pack duo complet</span>
                            <span className="font-bold text-pink-600">60€</span>
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
                            Offrez-vous un regard naturellement sublimé grâce à nos prestations de rehaussement de cils.
                            Idéal pour ouvrir le regard sans maquillage, cette technique est parfaite pour un effet courbé et soigné pendant plusieurs semaines.
                        </p>
                        <p>
                            Nos soins incluent également la teinture et un soin fortifiant pour des cils visiblement plus sains et éclatants.
                            Chez Wafoulashes, nous utilisons des produits de qualité pour garantir un résultat à la fois naturel et durable.
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
