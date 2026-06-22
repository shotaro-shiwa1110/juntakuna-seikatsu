import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Tag from '@/components/ui/Tag'
import StatusBadge from '@/components/ui/StatusBadge'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'プロジェクト | 巡拓な生活',
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
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_260px] border-b border-border hover:bg-surface transition-colors"
            >
              {/* Number column */}
              <div className="flex items-start pt-10 px-6 md:px-8 pb-4 md:pb-10">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{project.number}</span>
              </div>

              {/* Content column */}
              <div className="px-6 md:px-0 pb-10 md:py-10 md:pr-12">
                <div className="mb-3">
                  <StatusBadge status={project.status as 'ACTIVE' | 'PAUSED' | 'COMPLETED'} />
                </div>
                <h2 className="font-mincho text-[26px] md:text-[30px] leading-[1.45] mb-2 group-hover:text-ink-60 transition-colors">
                  {project.title}
                </h2>
                <p className="font-mono text-[10px] tracking-[0.08em] text-ink-30 mb-5">{project.subtitle}</p>
                <p className="font-serif text-[16px] text-ink-60 leading-[1.9] max-w-xl">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
              </div>

              {/* Image column */}
              <div className="px-6 md:px-0 pb-10 md:py-10 md:pr-8">
                <ImagePlaceholder label={project.imagePlaceholder} className="h-[160px]" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
