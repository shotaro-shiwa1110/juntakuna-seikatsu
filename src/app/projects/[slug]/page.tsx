import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, logs } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Tag from '@/components/ui/Tag'
import LogCard from '@/components/ui/LogCard'
import StatusBadge from '@/components/ui/StatusBadge'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'NOT FOUND' }
  return {
    title: `${project.title} | 巡拓な生活`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const relatedLogs = logs.filter((l) => project.logs.includes(l.slug))

  return (
    <div>
      {/* Header */}
      <header className="border-b border-border px-6 md:px-14 py-14">
        <div className="font-mono text-[8px] tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-accent inline-block" />
          PROJECT_{project.number}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
          <div>
            <div className="mb-4">
              <StatusBadge status={project.status} />
            </div>
            <h1 className="font-mincho text-[44px] md:text-[52px] leading-[1.3] mb-4">{project.title}</h1>
            <p className="font-mono text-[10px] tracking-[0.1em] text-ink-30 mb-8">{project.subtitle}</p>
            <p className="font-serif text-[17px] text-ink-60 leading-[1.9] mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>
          <div>
            <ImagePlaceholder label={project.imagePlaceholder} className="h-[260px]" />
            <div className="mt-4">
              <div className="code-tag">
                <div>ID: PROJECT_{project.number}</div>
                <div>STATUS: {project.status}</div>
                <div>LOGS: {project.logs.length} records</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Themes */}
      <div className="border-b border-border px-6 md:px-14 py-8">
        <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-5 flex items-center gap-2">
          <span className="w-4 h-px bg-accent inline-block" />
          THEMES
        </div>
        <div className="flex flex-wrap gap-4">
          {project.themes.map((t) => (
            <span key={t} className="font-mincho text-[18px] text-ink-60 border-b border-border pb-1">{t}</span>
          ))}
        </div>
      </div>

      {/* Related Logs */}
      {relatedLogs.length > 0 && (
        <div className="px-6 md:px-14 py-12">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              RELATED LOG
            </div>
            <h2 className="font-mincho text-[26px] mb-8">関連する実践記録</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-y divide-border md:divide-y-0 md:divide-x">
            {relatedLogs.map((entry, i) => (
              <ScrollReveal key={entry.slug} delay={i * 80}>
                <LogCard entry={entry} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="border-t border-border px-6 md:px-14 py-8 flex justify-between items-center">
        <Link href="/projects" className="font-mono text-[10px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PROJECTS に戻る
        </Link>
        <div className="font-mono text-[9px] text-ink-30 tracking-[0.1em]">
          PROJECT_{project.number} / {projects.length}
        </div>
      </div>
    </div>
  )
}
