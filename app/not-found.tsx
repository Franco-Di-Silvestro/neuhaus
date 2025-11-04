import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-green-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-green-200 mb-4">Proyecto no encontrado</h2>
        <p className="text-green-300 mb-8">El proyecto que buscas no existe o ha sido movido.</p>
        <Link href="/">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}
