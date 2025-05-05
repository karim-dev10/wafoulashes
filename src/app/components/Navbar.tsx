'use client';
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pink-200/80 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 font-ubuntu">
        <h1 className="text-neutral-700 text-2xl font-bold font-great">Wafoulashes</h1>
        <nav className="hidden md:flex gap-6 text-xl font-medium text-neutral-700">
          <Link href="/" className="hover:text-pink-600 transition">Accueil</Link>
          <Link href="/prestations" className="hover:text-pink-600 transition">Prestations</Link>
          <Link href="/reservation" className="hover:text-pink-600 transition">Réserver</Link>
          <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
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
          <Link href="/" className="block">Accueil</Link>
          <Link href="/prestations" className="block">Prestations</Link>
          <Link href="/reservation" className="block">Réserver</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
