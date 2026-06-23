import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Tag from '@/components/ui/Tag'
import StatusBadge from '@/components/ui/StatusBadge'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'プロジェクト',
  description: '暮らしの5つの領域それぞれで、実践と実験を続けています。',
}

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        label="PROJECTS"
        title="進行中のプロジェクト"
        description="暮らしの5つの領域それぞれで、実践と実験を続けています。これらは「答え」ではなく、問いかけの記録です。"
        annotation={`PROJECT_00${projects.length}`}
      />

      <div className="border-t border-border">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 border-b border-border hover:bg-surface transition-colors"
            >
              {/* Number column */}
              <div className="flex items-start pt-10 px-6 pb-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{project.number}</span>
              </div>

              {/* Content column */}
              <div className="px-6 pb-10">
                <div className="mb-3">
                  <StatusBadge status={project.status as 'ACTIVE' | 'PAUSED' | 'COMPLETED'} />
                </div>
                <h2 className="font-mincho text-[1.45rem] leading-[1.45] mb-2 group-hover:text-ink-60 transition-colors">
                  {project.title}
                </h2>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink-30 mb-5">{project.subtitle}</p>
                <p className="font-serif text-[1.07rem] text-ink-60 leading-[1.9] max-w-xl">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
              </div>

              {/* Image column */}
              <div className="px-6 pb-10">
                <ImagePlaceholder label={project.imagePlaceholder} className="h-[160px]" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
