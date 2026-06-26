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
    amenitiesInfo?: {
      image: string
      title: string
    }[]
  }
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Neuhaus Centenera 740",
    description:
      "Diseñado buscando el equilibrio entre el vivir y el trabajar. Unidades flexibles diseñadas para aprovechar al máximo la totalidad del espacio interior, departamentos de 1 y 3 ambientes. De bajos costos operativos y amigable con el medioambiente. Ademas cuenta con multiples espacios de uso comun para disfrutar y compartir.",
    image: "/projects/cen740.jpeg",
    category: "Residencial",
    year: "2022 - 2025",
    status: "Terminado",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "2580 m²",
      features: ["Control de accesos inteligente", "Calefacción por piso radiante", "Aberturas con DVH", "Artefactos enlozados y griferias marca Roca"],
      gallery: ["/carrousel/Cen-740/cen1.jpg", "/carrousel/Cen-740/cen2.jpg", "/carrousel/Cen-740/cen3.jpg", "/carrousel/Cen-740/cen4.jpg", "/carrousel/Cen-740/cen5.jpg", "/carrousel/Cen-740/cen6.jpg", "/carrousel/Cen-740/cen7.jpg", "/carrousel/Cen-740/cen8.jpg", "/carrousel/Cen-740/cen9.jpg", "/carrousel/Cen-740/cen10.jpg", "/carrousel/Cen-740/cen11.jpg", "/carrousel/Cen-740/cen12.jpg", "/carrousel/Cen-740/cen13.jpg", "/carrousel/Cen-740/cen14.jpg", "/carrousel/Cen-740/cen15.jpg", "/carrousel/Cen-740/cen16.jpg", "/carrousel/Cen-740/cen17.jpg", "/carrousel/Cen-740/cen18.jpg"],
      description:
        "Diseñado buscando el equilibrio entre el vivir y el trabajar. Unidades flexibles diseñadas para aprovechar al máximo la totalidad del espacio interior, departamentos de 1 y 3 ambientes. De bajos costos operativos y amigable con el medioambiente. Ademas cuenta con multiples espacios de uso comun para disfrutar y compartir.",
      stories: "15",
      units: "45",
      amenities: ["SUM interior", "SUM exterior con parrilla", "Solarium", "Cowork", "Laundry"],
      brochure: "/brochures/NEU740 - BROCHURE COMERCIAL.pdf",
      typologies: [
        {
          image: "/tipologias/Cen-740/CEN740 - tipología 1.jpg"
        },
        {
          image: "/tipologias/Cen-740/CEN740 - tipología 2.jpg"
        },
        {
          image: "/tipologias/Cen-740/CEN740 - tipología 3.jpg"
        },
        {
          image: "/tipologias/Cen-740/CEN740 - tipología 4.jpg"
        },
      ],
      typologyTypes: "1 y 3 ambientes",
      amenitiesInfo: [
        {
          image: "/amenities/Cen-740/cen1.jpg",
          title: "SUM Exterior con parrilla"
        },
        {
          image: "/amenities/Cen-740/cen2.jpg",
          title: "Cowork"
        },
        {
          image: "/amenities/Cen-740/cen3.jpg",
          title: "SUM Interior"
        }
      ]
    },
  },
  {
    id: "2",
    title: "Neuhaus Directorio 1290",
    description: "El edificio combina calidad y bienestar en cada detalle, con ambientes luminosos, materiales nobles y un diseño pensado para la vida cotidiana. Semipisos premium de 2 ambientes, local comercial en planta baja y un rooftop de 3 ambientes con vistas panorámicas y espacios para disfrutar al aire libre.",
    image: "/projects/dir1290.jpeg",
    category: "Residencial",
    year: "2025 - 2027",
    status: "Excavación y Fundaciones",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "1550 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/carrousel/Dir-1290/dir1.jpg", "/carrousel/Dir-1290/dir2.jpg", "/carrousel/Dir-1290/dir3.jpg", "/carrousel/Dir-1290/dir4.jpg", "/carrousel/Dir-1290/dir5.jpg", "/carrousel/Dir-1290/dir6.jpg", "/carrousel/Dir-1290/dir7.jpg", "/carrousel/Dir-1290/dir8.jpg"],
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
      typologyTypes: "Semipisos de 2 ambientes",
      amenitiesInfo: [
        {
          image: "/amenities/Dir-1302/dir1.jpg",
          title: "Rooftop con parrilleros"
        }
      ]
    },
  },
  {
    id: "3",
    title: "Neuhaus Directorio 1302",
    description: "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad. Este proyecto se ubica en una zona en pleno crecimiento, cercano a espacios verdes, comercios y con excelentes conexiones de transporte. Ofrece unidades hibridas de 1 y 2 ambientes, diseñadas para maximizar el espacio y la funcionalidad. Además, cuenta con multiples amenities pensadas para el bienestar y la convivencia de sus residentes.",
    image: "/projects/dir1302.jpg",
    category: "Residencial",
    year: "2025 - 2028",
    status: "Excavación y Fundaciones",
    details: {
      location: "Caballito, Ciudad de Buenos Aires",
      area: "2575 m²",
      features: ["Grupo electrogeno de respaldo", "Recupero de agua de lluvia", "Balcones con vegetación", "Riego automatico", "Paneles fotovoltaicos"],
      gallery: ["/carrousel/Dir-1302/dir1.jpg", "/carrousel/Dir-1302/dir2.jpg", "/carrousel/Dir-1302/dir3.jpg", "/carrousel/Dir-1302/dir4.jpg", "/carrousel/Dir-1302/dir5.jpg", "/carrousel/Dir-1302/dir6.jpg", "/carrousel/Dir-1302/dir7.jpg", "/carrousel/Dir-1302/dir8.jpg", "/carrousel/Dir-1302/dir9.jpg"],
      description:
        "Ubicado en una esquina estratégica, ofrece el equilibrio justo entre confort, conectividad y la tranquilidad de un barrio con identidad. Este proyecto se ubica en una zona en pleno crecimiento, cercano a espacios verdes, comercios y con excelentes conexiones de transporte. Ofrece unidades hibridas de 1 y 2 ambientes, diseñadas para maximizar el espacio y la funcionalidad. Además, cuenta con multiples amenities pensadas para el bienestar y la convivencia de sus residentes.",
      stories: "12",
      units: "37",
      amenities: ["Coliving", "Meeting room", "Rooftop con parrilleros", "Lockers privados"],
      brochure: "/brochures/NEU1302 - Brochure.pdf",
      typologies: [
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 1.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 2.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 3.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 4.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 5.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 6.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 7.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 8.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 9.jpg"
        },
        {
          image: "/tipologias/Dir-1302/DIR 1302 - tipología 10.jpg"
        }
      ],
      typologyTypes: "1 y 2 ambientes",
      amenitiesInfo: [
        {
          image: "/amenities/Dir-1302/dir1.jpg",
          title: "Rooftop con parrilleros"
        },
        {
          image: "/amenities/Dir-1302/dir2.jpg",
          title: "Coliving"
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
