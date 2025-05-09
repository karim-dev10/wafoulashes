'use client';
import Link from "next/link";
import BurgerMenu from "./ui/BurgerMenu";

function Navbar() {

  return (
    <>
    <header className="bg-pink-200/80 shadow-md sticky top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 font-inter">
        <h1 className="text-neutral-700 text-2xl font-bold font-great"><Link href="/">Wafoulashes</Link></h1>
        <nav className="hidden md:flex gap-6 text-xl font-medium text-neutral-700">
          <Link href="/prestations" className="hover:text-pink-600 transition">Prestations</Link>
          <Link href="/reservation" className="hover:text-pink-600 transition">Réserver</Link>
          <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
        </nav>
        <BurgerMenu />
      </div>
    </header>
    </>
  );
}

export default Navbar;
