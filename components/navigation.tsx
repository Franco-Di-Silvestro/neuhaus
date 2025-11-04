"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Cierra el menú móvil al hacer clic
  }

  return (
    <nav className="bg-primary border-primary border-border text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png" // Cambiá por la ruta de tu logo
              alt="Neuhaus Real Estate"
              width={160} // ajustá según tu logo
              height={40}
              className="object-contain h-10 w-auto" // mantiene proporción
            />
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-black transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-black transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-black transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-black transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-primary border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-white hover:text-black transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 text-white hover:text-black transition-colors"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-white hover:text-black transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-white hover:text-black transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
