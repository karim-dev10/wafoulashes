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

            <section className="min-h-screen mt-10 bg-pink-50 px-4 py-10 pb-18">
                {/* Image de couverture */}
                <div className="mb-6 rounded-xl overflow-hidden shadow-md" data-aos="fade-down">
                    <img src="/img/cils-2.jpg" alt="Rehaussement de cils" className="w-full h-64 object-cover brightness-90" />
                </div>

                {/* Liste des prestations */}
                <div className="bg-white rounded-xl shadow-md p-4 space-y-4 max-w-md mx-auto" data-aos="zoom-in">
                    <div className="flex justify-between border-b pb-2 relative">
                        <span className="font-medium text-neutral-700">Rehaussement de cils</span>
                        <span className="font-bold text-pink-600">30€</span>
                    </div>

                    <div className="flex justify-between border-b pb-2 relative">
                        <span className="font-medium text-neutral-700">Rehaussement + teinture + soin</span>
                        <span className="font-bold text-pink-600">40€</span>
                        {/* Badge */}
                        <span className="absolute -top-3 -right-3 bg-pink-600 text-white text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
                            Populaire
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium text-neutral-700">Pack duo complet</span>
                        <span className="font-bold text-pink-600">60€</span>
                    </div>
                </div>

                {/* Texte SEO */}
                <div className="bg-white text-neutral-700 rounded-xl shadow-md p-4 space-y-4 max-w-md my-4 mx-auto" data-aos="fade-up">
                    <p className="mb-4">
                        Offrez-vous un regard naturellement sublimé grâce à nos prestations de rehaussement de cils.
                        Idéal pour ouvrir le regard sans maquillage, cette technique est parfaite pour un effet courbé et soigné pendant plusieurs semaines.
                    </p>
                    <p>
                        Nos soins incluent également la teinture et un soin fortifiant pour des cils visiblement plus sains et éclatants.
                        Chez Wafoulashes, nous utilisons des produits de qualité pour garantir un résultat à la fois naturel et durable.
                    </p>
                </div>

                {/* Sticky CTA bouton */}
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
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
