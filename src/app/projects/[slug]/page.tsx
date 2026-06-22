import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, logs } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Tag from '@/components/ui/Tag'
import LogCard from '@/components/ui/LogCard'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  return { title: project ? `${project.title} | 巡拓な生活` : 'NOT FOUND' }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const relatedLogs = logs.filter((l) => project.logs.includes(l.slug))

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          PROJECT_{project.number}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="font-mincho text-[36px] leading-[1.4] mb-4">{project.title}</h1>
            <p className="font-mono text-[9px] tracking-[0.1em] text-ink-30 mb-6">{project.subtitle}</p>
            <p className="font-serif text-body text-ink-60 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>
          <div>
            <ImagePlaceholder label={project.imagePlaceholder} className="h-[240px]" />
          </div>
        </div>
      </div>

      {/* Themes */}
      <div className="border-b border-border px-8 md:px-14 py-8">
        <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-4">THEMES</div>
        <div className="flex gap-4">
          {project.themes.map((t) => (
            <span key={t} className="font-mincho text-[16px] text-ink-60">{t}</span>
          ))}
        </div>
      </div>

      {/* Related Logs */}
      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">RELATED LOG</div>
          <h2 className="font-mincho text-[20px] mb-6">関連する実践記録</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((entry) => <LogCard key={entry.slug} entry={entry} />)}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="px-8 md:px-14 pb-12">
        <Link href="/projects" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PROJECTS に戻る
        </Link>
      </div>
    </div>
  )
}
