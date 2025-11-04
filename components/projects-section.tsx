"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import Link from "next/link"

const projects: Project[] = [
  {
    id: "1",
    title: "Neuhaus Centenera 740",
    description:
        "Un edificio residencial de diseño contemporáneo implantado en la mejor zona de Caballito, a metros de Pedro Goyena y a tres cuadras del Parque Chacabuco.",
    image: "/CenteneraFrente.jpeg",
    category: "Residencial",
    year: "2022 - 2025",
    status: "Terminado",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "4000 m²",
      features: ["Control de accesos inteligente", "Calefacción por piso radiante", "Aberturas con DVH", "Artefactos enlozados y griferias marca Roca"],
      gallery: ["Centenera1.jpeg", "Centenera2.jpeg", "Centenera3.jpeg", "Centenera4.jpeg",],
      description:
        "Un edificio residencial de diseño contemporáneo implantado en la mejor zona de Caballito, a metros de Pedro Goyena y a tres cuadras del Parque Chacabuco.",
      stories: "15",
      units: "45",
      amenities: ["SUM interior", "SUM exterior con parrilla", "Cowork", "Laundry"]
    },
  },
  {
    id: "2",
    title: "Neuhaus Directorio 1290",
    description: "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana.",
    image: "/12901.jpeg",
    category: "Residencial",
    year: "2025 - 2028",
    status: "Excavacion y Fundaciones",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "2500 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/12901.jpeg", "/12902.jpeg", "/12903.jpeg", "/12904.jpeg"],
      description:
        "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana.",
      stories: "12",
      units: "24",
      amenities: ["SUM con parrilla"]
    },
  },
  {
    id: "3",
    title: "Neuhaus Directorio 1302",
    description: "En una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad.",
    image: "/1302Exterior3.jpg",
    category: "Residencial",
    year: "2025 - 2028",
    status: "Demolición",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "3000 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/1302HallEntrada.png", "/1302Interior1.jpg", "/1302Interior2.png", "/1302RoofTop.jpg"],
      description:
        "En una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad.",
      stories: "12",
      units: "33",
      amenities: ["Coliving", "Meeting room", "Rooftop con parrilleros", "Lockers privados"]
    },
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explora nuestro portafolio de soluciones arquitectónicas innovadoras que empujan los límites del diseño
            mientras satisfacen las necesidades únicas de nuestros clientes.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow duration-300 bg-emerald-800 border-green-700"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-green-700 text-green-100">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === "Completado" ? "default" : "outline"}
                    className={
                      project.status === "Completado" ? "bg-green-600 text-white" : "border-green-400 text-green-200"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-green-400 transition-colors text-white">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-green-300">{project.year}</span>
                </div>
                <CardDescription className="text-base leading-relaxed text-green-100">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/proyecto/${project.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors text-green-200 hover:bg-green-700"
                  >
                    Ver Detalles
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="group hover:shadow-lg transition-shadow duration-300 bg-emerald-800 border-green-700">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-green-700 text-green-100">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={project.status === "Completado" ? "default" : "outline"}
                          className={
                            project.status === "Completado"
                              ? "bg-green-600 text-white"
                              : "border-green-400 text-green-200"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl group-hover:text-green-400 transition-colors text-white">
                          {project.title}
                        </CardTitle>
                        <span className="text-sm text-green-300">{project.year}</span>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-green-100">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/proyecto/${project.id}`}>
                        <Button
                          variant="ghost"
                          className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors text-green-200 hover:bg-green-700"
                        >
                          Ver Detalles
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-800/80 hover:bg-green-700 text-white p-2 rounded-r-lg transition-colors"
            disabled={projects.length <= 1}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-800/80 hover:bg-green-700 text-white p-2 rounded-l-lg transition-colors"
            disabled={projects.length <= 1}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-500" : "bg-green-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/proyectos">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-900 transition-colors"
            >
              Ver Todos los Proyectos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
