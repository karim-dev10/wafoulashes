'use client';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-200/80 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 font-ubuntu">
        <h1 className="text-neutral-700 text-2xl font-bold font-great">Wafoulashes</h1>
        <nav className="hidden md:flex gap-6 text-xl font-medium text-neutral-700">
          <a href="/" className="hover:text-pink-600 transition">Accueil</a>
          <a href="/prestations" className="hover:text-pink-600 transition">Prestations</a>
          <a href="/reservation" className="hover:text-pink-600 transition">Réserver</a>
          <a href="/contact" className="hover:text-pink-600 transition">Contact</a>
        </nav>
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-black">
          <a href="/" className="block">Accueil</a>
          <a href="/prestations" className="block">Prestations</a>
          <a href="/reservation" className="block">Réserver</a>
          <a href="/contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
