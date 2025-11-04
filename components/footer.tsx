import { Building, Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Neuhaus Real Estate</h3>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Tradición que inspira, innovación que perdura.
            </p>
            <div className="space-y-2">
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Jose Marmol 865, Buenos Aires, Argentina</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@NeuhausRealEstate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+11 5013 2222</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@neuhausrealestate.com.ar</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li>Desarrollo Inmobiliario</li>
              <li>Escaneo de rentabilidad</li>
              <li>Análisis de lotes</li>
              <li>Comercialización de inmuebles</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Neuhaus Real Estate. Todos los derechos reservados. | Diseñado con precisión y pasión.
          </p>
        </div>
      </div>
    </footer>
  )
}
