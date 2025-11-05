import { notFound } from "next/navigation"
import { getProject } from "@/lib/projects"
import { ProjectDetailsClient } from "@/components/project-details-client"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (<><ProjectDetailsClient project={project} /><a
        href="https://wa.me/5491150132222?text=¡Hola!%20Quisiera%20más%20información."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a></>)
}
