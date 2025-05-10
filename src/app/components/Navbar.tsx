'use client'

import Link from "next/link"
import BurgerMenu from "./ui/BurgerMenu"
import { usePathname } from "next/navigation"

function Navbar() {
  const pathname = usePathname()
  const isReservationPage = pathname === "/reservation"

  return (
    <>
      <header className={`${isReservationPage ? "sticky" : "fixed"} flex justify-between items-center md:block top-0 w-full h-16 z-50 bg-pink-200/80 shadow-md`}>
        <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/img/logo_wafou.png" className="h-8" alt="Logo Wafoulashes" />
            <span className="self-center text-2xl font-great font-semibold whitespace-nowrap text-neutral-700">Wafoulashes</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link href="/prestations" className={`font-semibold block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 text-neutral-700 text-xl transition duration-300 ${pathname === "/prestations" ? "text-pink-600" : "text-neutral-700"}`} >Prestations</Link>
              </li>
              <li>
                <Link href="/reservation" className={`font-semibold block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 text-neutral-700 text-xl transition duration-300 ${pathname === "/reservation" ? "text-pink-600" : "text-neutral-700"}`}>Réserver</Link>
              </li>
              <li>
                <Link href="/contact" className={`font-semibold block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-600 md:p-0 text-neutral-700 text-xl transition duration-300 ${pathname === "/contact" ? "text-pink-600" : "text-neutral-700"}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <BurgerMenu />
    </header>


      
    </>
  )
}

export default Navbar
