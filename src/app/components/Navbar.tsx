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

                <li className="relative group">
                  <div className="cursor-pointer font-semibold block rounded-sm text-xl text-neutral-700 hover:text-pink-600">
                    Prestations
                  </div>

                  <div
                    className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 
               transition-all duration-200 z-50"
                  >
                    <Link href="/prestations/sourcils" className="block px-4 py-2 hover:bg-pink-50 text-neutral-700">
                      Sourcils
                    </Link>
                    <Link href="/prestations/cils" className="block px-4 py-2 hover:bg-pink-50 text-neutral-700">
                      Cils
                    </Link>
                    <Link href="/prestations/dentaire" className="block px-4 py-2 hover:bg-pink-50 text-neutral-700">
                      Dentaire
                    </Link>
                  </div>
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
