'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

function Homepage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="section-hp relative z-0 min-h-screen bg-pink-50 flex flex-col justify-center items-center text-center font-ubuntu overflow-hidden">
            {/* Images de fond animées */}
            <div className="flex md:hidden absolute top-0 left-0 w-full h-full justify-center items-center z-[-1] overflow-hidden slider ">
                <div className="animate-slide-vertical flex flex-col items-center gap-6 opacity-30 slider-track animate-[scroll_60s_linear_infinite]">
                    <>
                        <img src="/img/dent.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/cils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/sourcils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/dent.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/cils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/sourcils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/dent.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/cils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                        <img src="/img/sourcils.jpg" className="w-80 h-80 object-cover rounded-xl" />
                    </>
                </div>
            </div>



            {/* Texte */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 font-great" data-aos="fade-up">
            Wafoulashes
            </h1>
            <p className="font-ubuntu tracking-wide text-lg space- md:text-xl max-w-3xl mb-6 text-black font-semibold" data-aos="fade-up">
                Sublime ton regard et ton sourire avec nos prestations beauté à petit prix.
            </p>

            <div className="flex gap-2" data-aos="fade-up">
                <Link
                    href="/reservation"
                    className="bg-pink-600 text-lg md:text-xl text-white py-1 px-2 md:py-2 md:px-4 rounded-full hover:bg-pink-700 transition"
                >
                    Réserver un créneau
                </Link>
                <Link
                    href="/prestations"
                    className="border border-pink-600 text-lg sm:text-xl py-1 px-2 md:py-2 md:px-4 text-pink-600 rounded-full hover:bg-pink-100 transition"
                >
                    Voir les prestations
                </Link>
            </div>

            <div className="hidden md:grid m-4 grid-cols-3 gap-5 relative" data-aos='zoom-in'>
                <div className='text-pink-600 transform transition-all duration-500 hover:scale-105 hover:text-white'>
                    <Link href='/prestations/dentaire' className=' relative'>
                        <span className='absolute z-10 bottom-2 right-4 text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]'>Blanchiment</span>
                        <img src="/img/dent.jpg" className="w-90 h-80 object-cover rounded-xl brightness-50" />
                    </Link>
                </div>
                <div className='text-pink-600 transform transition-all duration-500 hover:scale-105 hover:text-white'>
                    <Link href='/prestations/cils' className='relative'>
                        <span className='absolute z-10 bottom-2 right-4 text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]'>Cils</span>
                        <img src="/img/cils.jpg" className="w-90 h-80 object-cover rounded-xl brightness-50" />
                    </Link>
                </div>
                <div className='text-pink-600 transform transition-all duration-500 hover:scale-105 hover:text-white'>
                    <Link href='prestations/sourcils' className='relative'>
                        <span className='absolute z-10 bottom-2 right-4 text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]'>Sourcils</span>
                        <img src="/img/sourcils.jpg" className="w-90 h-80 object-cover rounded-xl brightness-50" />
                    </Link>
                    </div>
            </div>


        </section>
    );
}

export default Homepage;
