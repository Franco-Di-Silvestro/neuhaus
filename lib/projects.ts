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
      image: string
    }[]
    typologyTypes?: string
  }
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Neuhaus Centenera 740",
    description:
      "Diseñado buscando el equilibrio entre el vivir y el trabajar. Unidades flexibles diseñadas para aprovechar al máximo la totalidad del espacio interior, departamentos de 1 y 3 ambientes. De bajos costos operativos y amigable con el medioambiente. Ademas cuenta con multiples espacios de uso comun para disfrutar y compartir.",
    image: "/CenteneraFrente.jpeg",
    category: "Residencial",
    year: "2022 - 2025",
    status: "Terminado",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "2580 m²",
      features: ["Control de accesos inteligente", "Calefacción por piso radiante", "Aberturas con DVH", "Artefactos enlozados y griferias marca Roca"],
      gallery: ["/Centenera1.jpeg", "/Centenera2.jpeg", "/Centenera3.jpeg", "/Centenera4.jpeg"],
      description:
        "Diseñado buscando el equilibrio entre el vivir y el trabajar. Unidades flexibles diseñadas para aprovechar al máximo la totalidad del espacio interior, departamentos de 1 y 3 ambientes. De bajos costos operativos y amigable con el medioambiente. Ademas cuenta con multiples espacios de uso comun para disfrutar y compartir.",
      stories: "15",
      units: "45",
      amenities: ["SUM interior", "SUM exterior con parrilla", "Solarium", "Cowork", "Laundry"],
      brochure: "/brochures/NEU740 - BROCHURE COMERCIAL.pdf",
      typologies: [
        {
          image: "/tipologias/2amb.jpg"
        },
        {
          image: "/tipologias/3amb.jpg"
        }
      ],
      typologyTypes: "1 y 3 ambientes"
    },
  },
  {
    id: "2",
    title: "Neuhaus Directorio 1290",
    description: "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana. Semipisos premium de 2 ambientes, local comercial en planta baja y un rooftop de 3 ambientes con vistas panorámicas y espacios para disfrutar al aire libre.",
    image: "/12901.jpeg",
    category: "Residencial",
    year: "2025 - 2028",
    status: "Excavación y Fundaciones",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "1550 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/12902.jpeg", "/12904.jpeg"],
      description:
       "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana. Semipisos premium de 2 ambientes, local comercial en planta baja y un rooftop de 3 ambientes con vistas panorámicas y espacios para disfrutar al aire libre.",
      stories: "12",
      units: "24",
      amenities: ["Rooftop con parrilla"],
      brochure: "/brochures/NEU1290 - brochure.pdf",
      typologies: [
        {
          image: "/tipologias/Dir-1290/DIR1290- tipología 1.jpg"
        },
        {
          image: "/tipologias/Dir-1290/DIR1290- tipología 2.jpg"
        },
        {
          image: "/tipologias/Dir-1290/DIR1290- tipología 3.jpg"
        },
        {
          image: "/tipologias/Dir-1290/DIR1290- tipología 4.jpg"
        }
      ],
      typologyTypes: "Semipisos de 2 ambientes"
    },
  },
  {
    id: "3",
    title: "Neuhaus Directorio 1302",
    description: "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad. Este proyecto se ubica en una zona en pleno crecimiento, cercano a espacios verdes, comercios y con excelentes conexiones de transporte. Ofrece unidades hibridas de 1 y 2 ambientes, diseñadas para maximizar el espacio y la funcionalidad. Además, cuenta con multiples amenities pensadas para el bienestar y la convivencia de sus residentes.",
    image: "/1302Exterior3.jpg",
    category: "Residencial",
    year: "2025 - 2028",
    status: "Excavación y Fundaciones",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "2575 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/1302HallEntrada.png", "/1302Interior1.jpg", "/1302Interior2.png", "/1302RoofTop.jpg"],
      description:
        "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad. Este proyecto se ubica en una zona en pleno crecimiento, cercano a espacios verdes, comercios y con excelentes conexiones de transporte. Ofrece unidades hibridas de 1 y 2 ambientes, diseñadas para maximizar el espacio y la funcionalidad. Además, cuenta con multiples amenities pensadas para el bienestar y la convivencia de sus residentes.",
      stories: "12",
      units: "37",
      amenities: ["Coliving", "Meeting room", "Rooftop con parrilleros", "Lockers privados"],
      brochure: "/brochures/NEU1302 - Brochure.pdf",
      typologies: [
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 1.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 2.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 3.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 4.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 5.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR1302- tipología 6.jpg"
        }
      ],
      typologyTypes: "1 y 2 ambientes"
    },
  },
]

export function getProject(id: string): Project | null {
  return projects.find((project) => project.id === id) || null
}

export function getProjects(): Project[] {
  return projects
}
