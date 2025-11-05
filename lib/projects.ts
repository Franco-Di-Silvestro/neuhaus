export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  year: string
  status: string
  details?: {
    location: string
    area: string
    features: string[]
    gallery: string[]
    description: string
    stories: string
    units: string
    amenities: string[]
    brochure?: string
    typologies?: {
      title: string
      image: string
    }[]
  }
}

export const projects: Project[] = [
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
      gallery: ["/Centenera1.jpeg", "/Centenera2.jpeg", "/Centenera3.jpeg", "/Centenera4.jpeg"],
      description:
        "Un edificio residencial de diseño contemporáneo implantado en la mejor zona de Caballito, a metros de Pedro Goyena y a tres cuadras del Parque Chacabuco.",
      stories: "15",
      units: "45",
      amenities: ["SUM interior", "SUM exterior con parrilla", "Cowork", "Laundry"],
      brochure: "/brochures/brochure.pdf",
      typologies: [
        {
          title: "Departamento de 2 ambientes",
          image: "/tipologias/2amb.jpg"
        },
        {
          title: "Departamento de 3 ambientes",
          image: "/tipologias/3amb.jpg"
        }
      ]
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
      gallery: ["/12902.jpeg", "/12904.jpeg"],
      description:
        "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana.",
      stories: "12",
      units: "24",
      amenities: ["SUM con parrilla"],
      brochure: "/brochures/brochure.pdf",
      typologies: [
        {
          title: "Departamento de 2 ambientes",
          image: "/tipologias/2amb.jpg"
        },
        {
          title: "Departamento de 3 ambientes",
          image: "/tipologias/3amb.jpg"
        }
      ]
    },
  },
  {
    id: "3",
    title: "Neuhaus Directorio 1302",
    description: "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad.",
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
        "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad.",
      stories: "12",
      units: "33",
      amenities: ["Coliving", "Meeting room", "Rooftop con parrilleros", "Lockers privados"],
      brochure: "/brochures/brochure.pdf",
      typologies: [
        {
          title: "Departamento de 2 ambientes",
          image: "/tipologias/2amb.jpg"
        },
        {
          title: "Departamento de 3 ambientes",
          image: "/tipologias/3amb.jpg"
        }
      ]
    },
  },
]

export function getProject(id: string): Project | null {
  return projects.find((project) => project.id === id) || null
}

export function getProjects(): Project[] {
  return projects
}
