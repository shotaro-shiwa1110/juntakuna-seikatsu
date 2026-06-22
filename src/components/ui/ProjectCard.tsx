import Link from 'next/link'
import type { Project } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import Tag from './Tag'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block bg-base p-5 hover:bg-surface transition-colors">
      <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-3">{project.number}</div>
      <ImagePlaceholder label={project.imagePlaceholder} className="h-[80px] mb-3" />
      <h3 className="font-mincho text-[13px] leading-[1.7] mb-2">{project.title}</h3>
      <p className="font-serif text-[12px] text-ink-60 leading-[1.9] mb-3 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  )
}
