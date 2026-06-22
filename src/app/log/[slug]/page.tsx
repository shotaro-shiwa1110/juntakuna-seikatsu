import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { logs, projects } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import CategoryBadge from '@/components/ui/CategoryBadge'
import Tag from '@/components/ui/Tag'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return logs.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = logs.find((l) => l.slug === params.slug)
  return { title: entry ? `${entry.title} | 巡拓な生活` : 'NOT FOUND' }
}

export default function LogDetailPage({ params }: Props) {
  const entry = logs.find((l) => l.slug === params.slug)
  if (!entry) notFound()

  const relatedProject = projects.find((p) => p.logs.includes(entry.slug))

  return (
    <article>
      {/* Header */}
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mb-2">{entry.date}</div>
        <div className="mb-4"><CategoryBadge category={entry.category} /></div>
        <h1 className="font-mincho text-[32px] md:text-[40px] leading-[1.45] max-w-2xl mb-6">{entry.title}</h1>
        <p className="font-serif text-body text-ink-60 max-w-xl">{entry.excerpt}</p>
      </header>

      {/* Main image */}
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[280px] md:h-[400px]" />

      {/* Body */}
      <div className="px-8 md:px-14 py-12 max-w-2xl">
        {entry.body.split('\n\n').map((para, i) => (
          <p key={i} className="font-serif text-body text-ink mb-6 whitespace-pre-line">{para}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="px-8 md:px-14 pb-8 flex flex-wrap gap-2 border-t border-border pt-6">
        {entry.tags.map((tag) => <Tag key={tag} label={tag} />)}
      </div>

      {/* Related Project */}
      {relatedProject && (
        <div className="border-t border-border px-8 md:px-14 py-8 bg-surface">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-3">RELATED PROJECT</div>
          <Link href={`/projects/${relatedProject.slug}`} className="font-mincho text-[18px] hover:text-ink-60 transition-colors">
            {relatedProject.title} →
          </Link>
        </div>
      )}

      {/* Back */}
      <div className="px-8 md:px-14 py-8">
        <Link href="/log" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← LOG に戻る
        </Link>
      </div>
    </article>
  )
}
