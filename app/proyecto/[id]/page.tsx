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

  return <ProjectDetailsClient project={project} />
}
