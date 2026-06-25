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
    <Link href={`/projects/${project.slug}`} className="group block bg-base p-6 hover:bg-surface transition-colors h-full" style={{ position: 'relative' }}>
      {isPlanned && (
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          fontFamily: 'var(--font-mono)', fontSize: '7px', letterSpacing: '0.15em',
          color: 'var(--color-ink-30)', border: '1px solid var(--color-border)',
          padding: '3px 7px', borderRadius: '2px',
        }}>
          PLANNED
        </div>
      )}
      <div className="section-label" style={{ marginBottom: '1rem' }}>{project.number}</div>
      <ImagePlaceholder label={project.imagePlaceholder} className="h-[90px] mb-4" />
      <h3 style={{ fontFamily: 'var(--font-mincho)', fontSize: '1.07rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{project.title}</h3>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.93rem', color: 'var(--color-ink-60)', lineHeight: 1.85, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  )
}
