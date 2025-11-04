"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", description: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para comenzar tu próximo proyecto arquitectónico? Nos encantaría escucharte. Hablemos sobre cómo
            podemos hacer realidad tu visión.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - reduced height by making textarea smaller and adjusting spacing */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos en menos de 24 horas.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Número de Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu.correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
                    Breve descripción
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="“¿Contanos qué unidad estás buscando, pozo o terminado?"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information - same height as form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Información de Contacto</CardTitle>
              <CardDescription>Contáctanos a través de cualquiera de estos canales.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                {/* <div className="flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div> 
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Dirección de Oficina</h3>
                  <p className="text-muted-foreground text-sm">
                    Jose Marmol 865 
                    <br />
                    Buenos Aires
                    <br />
                    Argentina
                  </p>
                </div> */}
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Teléfono</h3>
                  <p className="text-muted-foreground text-sm">+11 5013 2222</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Correo</h3>
                  <p className="text-muted-foreground text-sm">info@neuhausrealestate.com.ar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Horario de Atención</h3>
                  <p className="text-muted-foreground text-sm">
                    Lunes - Viernes: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
