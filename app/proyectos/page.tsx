"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { getProjects, type Project } from "@/lib/projects"
import Link from "next/link"

export default function ProyectosPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await getProjects()
        setProjects(fetchedProjects)
      } catch (error) {
        console.error("Error loading projects:", error)
        // Fallback projects
        setProjects([
          {
            id: "1",
            title: "Complejo Residencial Skyline",
            description:
              "Un moderno edificio residencial de 20 pisos con diseño sostenible y vistas panorámicas de la ciudad.",
            image: "/modern-glass-balcony-building.png",
            category: "Residencial",
            year: "2024",
            status: "Completado",
          },
          {
            id: "2",
            title: "Centro de Innovación Tech Campus",
            description:
              "Sede corporativa diseñada para fomentar la creatividad y colaboración con espacios abiertos e iluminación natural.",
            image: "/modern-office-glass-green.png",
            category: "Comercial",
            year: "2023",
            status: "En Progreso",
          },
          {
            id: "3",
            title: "Centro Cultural Riverside",
            description:
              "Un centro cultural comunitario que se integra perfectamente con el paisaje natural y la ribera.",
            image: "/modern-cultural-center.png",
            category: "Cultural",
            year: "2023",
            status: "Completado",
          },
          {
            id: "4",
            title: "Complejo Residencial Moderno",
            description:
              "Desarrollo residencial de lujo con amenidades de primera clase y diseño arquitectónico contemporáneo.",
            image: "/moderno-residencial.png",
            category: "Residencial",
            year: "2024",
            status: "En Progreso",
          },
          {
            id: "5",
            title: "Terraza Panorámica Corporativa",
            description:
              "Espacio corporativo con terraza panorámica que ofrece vistas espectaculares y espacios de trabajo flexibles.",
            image: "/terraza-panoramica.png",
            category: "Comercial",
            year: "2023",
            status: "Completado",
          },
          {
            id: "6",
            title: "Oficina Moderna Colaborativa",
            description:
              "Diseño de oficina que promueve la colaboración y productividad con espacios abiertos y tecnología integrada.",
            image: "/oficina-moderna-colaborativa.png",
            category: "Comercial",
            year: "2024",
            status: "En Progreso",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Todos Nuestros Proyectos</h1>
            <p className="text-xl text-green-200">Cargando proyectos...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-green-800 rounded-lg h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-green-800 mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Todos Nuestros Proyectos</h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Explora nuestro portafolio completo de soluciones arquitectónicas innovadoras que empujan los límites del
            diseño mientras satisfacen las necesidades únicas de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
      <a
        href="https://wa.me/5491150132222?text=¡Hola!%20Quisiera%20más%20información."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
    
  )
}
