'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import SocialBar from '../components/SocialBar';

export default function ContactPage() {
    useEffect(() => {
            AOS.init();
        }, []);
  return (
    <>
    <Navbar/>
    <section data-aos='zoom-in' className="min-h-screen bg-pink-50 flex flex-col justify-center items-center text-center font-ubuntu px-4 py-10">
      <h1 className=" text-2xl md:text-3xl font-bold mb-6 text-neutral-800">Contactez-nous</h1>
      <p className="mb-8 text-lg max-w-xl text-neutral-700">
        Une question, une demande ? Remplis le formulaire ci-dessous ou écris-nous sur Instagram : Wafoulashes
      </p>

      <form className="w-full max-w-md space-y-4 text-neutral-950">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-3 border border-neutral-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-neutral-300 rounded-md"
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full p-3 border border-neutral-300 rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-semibold py-3 rounded-md hover:bg-pink-700 transition cursor-pointer"
        >
          Envoyer
        </button>
      </form>
      <SocialBar/>
    </section>
    </>
  );
}
