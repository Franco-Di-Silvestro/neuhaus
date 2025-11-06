"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Building, CalendarFold, ChevronLeft, ChevronRight, Hammer } from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Arquitecta Principal",
    image: "/architect-man-hardhat.png",
    bio: "Con más de 15 años de experiencia, Sarah lidera nuestra visión de diseño y asegura que cada proyecto cumpla con los más altos estándares de innovación y sostenibilidad.",
  },
  {
    name: "Michael Rodriguez",
    role: "Gerente Senior de Proyectos",
    image: "/architect-man-hardhat.png",
    bio: "Michael supervisa la ejecución de proyectos desde el concepto hasta la finalización, asegurando que se cumplan los plazos y presupuestos manteniendo la excelencia en calidad.",
  },
  {
    name: "Emily Watson",
    role: "Especialista en Diseño Sostenible",
    image: "/architect-man-hardhat.png",
    bio: "Emily se enfoca en integrar soluciones ecológicas y prácticas sostenibles en todos nuestros diseños arquitectónicos y procesos de planificación.",
  },
]

const stats = [
  { icon: Building, label: "Edificios construidos y entregados", value: "20+" },
  { icon: Users, label: "Miembros del Equipo", value: "20+" },
  { icon: CalendarFold, label: "Años de Experiencia", value: "100+" },
  { icon: Hammer, label: "Metros construidos", value: "50K+" },
]

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Acerca de Neuhaus Real Estate</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos una firma de arquitectura visionaria dedicada a crear espacios que inspiran, funcionan bellamente y
            contribuyen positivamente a sus comunidades.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
        <stat.icon className="h-8 w-8 text-accent-foreground" />
      </div>
      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
      <div className="text-muted-foreground">{stat.label}</div>
    </div>
  ))}
</div>


        {/* Philosophy Section */}
        <div className="mb-16">
          <Card className="bg-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary">Nuestra Filosofía de Trabajo</CardTitle>
              <p className="text-primary">Tradición que inspira, innovación que perdura.</p>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">Tradición</h3>
                  <p className="text-muted-foreground">
                    Más de tres generaciones construyendo diversidad de proyectos con solidez y prestigio en Argentina.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">Innovación</h3>
                  <p className="text-muted-foreground">
                    Adoptamos tecnología de vanguardia y metodologías de diseño para crear espacios que son tanto
                    funcionales como visionarios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Conoce Nuestro Equipo</h3>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-background text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:hidden">
            <div className="relative">
              <Card className="bg-background text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={teamMembers[currentSlide].image || "/placeholder.svg"}
                      alt={teamMembers[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary">{teamMembers[currentSlide].name}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {teamMembers[currentSlide].role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{teamMembers[currentSlide].bio}</p>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
