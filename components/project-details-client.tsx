"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Layers2,
  Key,
  BookmarkPlus,
} from "lucide-react"
import type { Project } from "@/lib/projects"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectDetailsClientProps {
  project: Project
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const gallery = project.details?.gallery || [project.image]

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % gallery.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Navigation */}
      <nav className="bg-primary border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/#projects">
              <Button variant="ghost" className="text-white hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Proyectos
              </Button>
            </Link>
            <div className="text-xl font-bold text-white">Neuhaus Real Estate</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={gallery[currentImageIndex] || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          {gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-emerald-800 text-white">{project.category}</Badge>
              <Badge
                variant={project.status === "Completado" ? "default" : "outline"}
                className={
                  project.status === "Completado" ? "bg-green-600 text-white" : "border-green-400 text-green-200"
                }
              >
                {project.status}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Tabs Section (Left Side) */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="resumen" className="text-white">
                {/* Barra blanca */}
                <TabsList className="bg-white mb-6 rounded-xl p-1">
                  <TabsTrigger
                    value="resumen"
                    className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white text-primary rounded-lg px-4 py-2 transition-colors"
                  >
                    Resumen
                  </TabsTrigger>
                  <TabsTrigger
                    value="tipologias"
                    className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white text-primary rounded-lg px-4 py-2 transition-colors"
                  >
                    Tipologías
                  </TabsTrigger>
                  <TabsTrigger
                    value="amenities"
                    className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white text-primary rounded-lg px-4 py-2 transition-colors"
                  >
                    Amenities
                  </TabsTrigger>
                  <TabsTrigger
                    value="brochure"
                    className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white text-primary rounded-lg px-4 py-2 transition-colors"
                  >
                    Brochure
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="resumen">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Descripción del Proyecto</h2>
                    <p className="text-lg text-green-200 leading-relaxed">
                      {project.details?.description || project.description}
                    </p>
                  </div>

                  {project.details?.features && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">Características Principales</h3>
                      <ul className="space-y-2">
                        {project.details.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-green-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="tipologias">
                  <div className="text-green-200 italic">Contenido de tipologías próximamente...</div>
                </TabsContent>

                <TabsContent value="amenities">
                  <div className="text-green-200 italic">Contenido de amenities próximamente...</div>
                </TabsContent>

                <TabsContent value="brochure">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="text-2xl font-bold text-white">Brochure del Proyecto</h3>

                    {project.details?.brochure ? (
                      <a
                        href={project.details.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-white text-primary hover:bg-emerald-700 hover:text-white cursor-pointer">
                          Ver Brochure
                        </Button>
                      </a>
                    ) : (
                      <p className="text-gray-300 italic">
                        Este proyecto aún no tiene brochure disponible.
                      </p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>

            </div>

            {/* Sidebar (Right Side) */}
            <div className="lg:col-span-1">
              <Card className="bg-emerald-800 border-green-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Información del Proyecto</h3>

                  <div className="space-y-4">
                    {project.details?.location && (
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-300">Ubicación</div>
                          <div className="text-white">{project.details.location}</div>
                        </div>
                      </div>
                    )}

                    {project.details?.area && (
                      <div className="flex items-start">
                        <Ruler className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-300">Área</div>
                          <div className="text-white">{project.details.area}</div>
                        </div>
                      </div>
                    )}

                    {project.details?.stories && (
                      <div className="flex items-start">
                        <Layers2 className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-300">Pisos</div>
                          <div className="text-white">{project.details.stories}</div>
                        </div>
                      </div>
                    )}

                    {project.details?.units && (
                      <div className="flex items-start">
                        <Key className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-300">Unidades</div>
                          <div className="text-white">{project.details.units}</div>
                        </div>
                      </div>
                    )}

                    {project.details?.amenities && (
                      <div className="flex items-start">
                        <BookmarkPlus className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="text-sm text-green-300">Amenities</div>
                          <ul>
                            {project.details.amenities.map((a, index) => (
                              <li className="text-white" key={index}>
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-green-300">Plazo de ejecución</div>
                        <div className="text-white">{project.year}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
