import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'PROJECTS | 巡拓な生活',
}

export default function ProjectsPage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="mb-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">PROJECTS</div>
        <h1 className="font-mincho text-[32px] mb-3">進行中のプロジェクト</h1>
        <p className="font-serif text-body text-ink-60 max-w-lg">
          暮らしの5つの領域それぞれで、実践と実験を続けています。
          これらは「答え」ではなく、問いかけの記録です。
        </p>
      </div>

      <div className="space-y-0 border-t border-border">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[100px_1fr_280px] gap-0 border-b border-border py-8 hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[9px] tracking-[0.2em] text-accent pt-1">{project.number}</div>
            <div className="pr-8">
              <div className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mb-2">
                {project.status === 'ACTIVE' ? 'STATUS_ACTIVE' : 'STATUS_PAUSED'}
              </div>
              <h2 className="font-mincho text-[22px] leading-[1.5] mb-2 group-hover:text-ink-60 transition-colors">
                {project.title}
              </h2>
              <p className="font-mono text-[9px] tracking-[0.05em] text-ink-30 mb-4">{project.subtitle}</p>
              <p className="font-serif text-body text-ink-60 max-w-md">{project.description}</p>
            </div>
            <div>
              <ImagePlaceholder label={project.imagePlaceholder} className="h-[140px] mb-4" />
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
