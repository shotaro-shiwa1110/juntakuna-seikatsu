import Link from 'next/link'
import type { Project } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import Tag from './Tag'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block bg-base p-6 hover:bg-surface transition-colors h-full">
      <div className="font-mono text-[8px] tracking-[0.15em] text-accent mb-4">{project.number}</div>
      <ImagePlaceholder label={project.imagePlaceholder} className="h-[90px] mb-4" />
      <h3 className="font-mincho text-[1.07rem] leading-[1.6] mb-3">{project.title}</h3>
      <p className="font-serif text-[0.93rem] text-ink-60 leading-[1.85] mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  )
}
