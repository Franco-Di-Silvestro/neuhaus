"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const images = [
  "/Hero.jpg",
  "/1302Interior1.jpg",
  "/Centenera4.jpeg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // cambia cada 2 segundos
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Fondo dinámico */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Somos
          <span className="block text-white">Neuhaus Real Estate</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Nuestra misión es desarrollar edificios residenciales que combinan excelencia constructiva y diseño innovador,
          a un costo competitivo que potencia la inversión de nuestros clientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-green-700 text-white" onClick={scrollToProjects}>
            Ver Nuestros Proyectos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-300 text-white hover:bg-white hover:text-green-900 bg-transparent"
            onClick={scrollToContact}
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}
