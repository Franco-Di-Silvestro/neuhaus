"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { projects, type Project } from "@/lib/projects"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Nuestros Proyectos</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Conocé cada uno de nuestros desarrollos, diseñados para ofrecer confort, innovación y calidad en cada detalle.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-emerald-900 border-green-700 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Imagen del proyecto */}
                <div className="lg:w-1/2">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-12">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-green-700 text-green-100 text-sm px-3 py-1">
                      {project.category}
                    </Badge>
                    <span className="text-green-300 text-sm">{project.year}</span>
                  </div>

                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </CardTitle>
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
                  </CardHeader>

                  <CardDescription className="text-lg leading-relaxed text-green-100 mb-8">
                    {project.description}
                  </CardDescription>

                  <CardContent className="p-0">
                    <Link href={`/proyecto/${project.id}`}>
                      <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-4 rounded-xl"
                      >
                        Ver Detalles
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
