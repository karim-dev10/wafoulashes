"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./sheet"

export default function BurgerMenu() {
  const [openSubmenu, setOpenSubmenu] = useState(false)

  return (
    <div className="md:hidden relative">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="border-r border-pink-100 bg-gradient-to-b from-white to-pink-50 p-0">
          <SheetHeader className="p-4 border-b border-pink-100">
            <SheetTitle className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Remplacez par votre logo */}
                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">
                  <img src={"./../../img/logo_wafou.png"} />
                </div>
                <span className="ml-3 font-serif text-xl text-pink-800 font-great">Wafoulashes</span>
              </div>
              <SheetClose className="rounded-full p-1  hover:bg-pink-100">
                <X size={18} className="text-pink-600" />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>

          <nav className="py-6 px-4">
            <div className="space-y-5">
              <a
                href="/reservation"
                className="flex items-center py-2 px-3 rounded-lg bg-pink-100 text-pink-800 font-medium shadow-sm"
              >
                <span className="mr-2 w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center text-white text-xs">
                  R
                </span>
                Réserver
              </a>

              <div className="space-y-2">
                <button
                  onClick={() => setOpenSubmenu(!openSubmenu)}
                  className="flex items-center justify-between w-full py-2 px-3 rounded-lg hover:bg-pink-50 text-gray-800 font-medium transition-colors"
                >
                  <div className="flex items-center">
                    <span className="mr-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs">
                      P
                    </span>
                    Prestations
                  </div>
                  {openSubmenu ? (
                    <ChevronDown size={18} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={18} className="text-gray-500" />
                  )}
                </button>

                {openSubmenu && (
                  <div className="ml-8 pl-2 border-l-2 border-pink-200 space-y-3 py-2">
                    <a
                      href="/prestations/sourcils"
                      className="flex items-center py-1.5 px-3 rounded-md hover:bg-pink-50 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></div>
                      Sourcils
                    </a>
                    <a
                      href="/prestations/cils"
                      className="flex items-center py-1.5 px-3 rounded-md hover:bg-pink-50 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></div>
                      Cils
                    </a>
                    <a
                      href="/prestations/dentaire"
                      className="flex items-center py-1.5 px-3 rounded-md hover:bg-pink-50 text-gray-700 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></div>
                      Dentaire
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="flex items-center py-2 px-3 rounded-lg hover:bg-pink-50 text-gray-800 font-medium transition-colors"
              >
                <span className="mr-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs">
                  C
                </span>
                Contact
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
        </div>
  )
}
