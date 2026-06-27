import Link from 'next/link'
import type { Project } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import Tag from './Tag'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const isPlanned = project.status === 'PLANNED'

  return (
    <Link href={`/projects/${project.slug}`} className={`project-card${isPlanned ? ' is-planned' : ''}`}>
      {isPlanned && (
        <div className="project-card-planned-badge">PLANNED</div>
      )}
      <div className="section-label project-card-num">{project.number}</div>
      <ImagePlaceholder label={project.imagePlaceholder} className="h-[90px] mb-4" />
      <h3 className="project-card-title">
        {project.themes?.[0] && (
          <span className="project-card-domain">{project.themes[0]}</span>
        )}
        <span className="project-card-title-rest">
          {project.title.replace(new RegExp(`^${project.themes?.[0] ?? ''}`), '')}
        </span>
      </h3>
      <p className="project-card-body">{project.description}</p>
      <div className="project-card-tags">
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  )
}
