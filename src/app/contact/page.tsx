'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation"
import SocialBar from '../components/SocialBar';

export default function ContactPage() {
    useEffect(() => {
            AOS.init();
        }, []);

        const router = useRouter()
  return (
    <>
    <Navbar/>
    <section data-aos='zoom-in' className="min-h-screen bg-pink-50 flex flex-col justify-center items-center text-center font-inter px-4 py-10">
      <h1 className=" text-2xl md:text-3xl font-bold mb-6 text-neutral-800">Contactez-nous</h1>
      <p className="mb-8 text-lg max-w-xl text-neutral-700">
        Une question, une demande ? Remplis le formulaire ci-dessous ou écris-nous sur Instagram : Wafoulashes
      </p>

      <form
  onSubmit={async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      router.push('/contact/success')
      form.reset()
    } else {
      alert("Erreur lors de l'envoi ❌")
    }
  }}
  className="w-full max-w-md space-y-4 text-neutral-950"
>
  <input
    type="text"
    name="name"
    placeholder="Nom"
    className="w-full p-3 border border-neutral-300 rounded-md"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full p-3 border border-neutral-300 rounded-md"
    required
  />
  <textarea
    name="message"
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
