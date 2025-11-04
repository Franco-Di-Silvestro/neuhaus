import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ScrollToHash } from "@/components/ScrollToHash"

export const metadata: Metadata = {
  title: "Neuhaus Real Estate - Arquitectura Residencial",
  description:
    "Firma de arquitectura especializada en desarrollar edificios residenciales con excelencia constructiva y diseño innovador.",
  // generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <ScrollToHash /> {/* componente cliente */}
        {children}
      </body>
    </html>
  )
}
