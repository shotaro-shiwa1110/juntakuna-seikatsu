import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { logs, projects } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import CategoryBadge from '@/components/ui/CategoryBadge'
import Tag from '@/components/ui/Tag'
import LogCard from '@/components/ui/LogCard'
import ReadingProgress from '@/components/ui/ReadingProgress'
import { parseBodyParagraph, readingTime } from '@/lib/utils'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return logs.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = logs.find((l) => l.slug === params.slug)
  if (!entry) return { title: 'NOT FOUND' }
  return {
    title: entry.title,
    description: entry.excerpt,
  }
}

export default function LogDetailPage({ params }: Props) {
  const idx = logs.findIndex((l) => l.slug === params.slug)
  if (idx === -1) notFound()
  const entry = logs[idx]
  const prev = idx > 0 ? logs[idx - 1] : null
  const next = idx < logs.length - 1 ? logs[idx + 1] : null
  const relatedProject = projects.find((p) => p.logs.includes(entry.slug))
  const minutes = readingTime(entry.body)
  const paragraphs = entry.body.split('\n\n').filter(Boolean)

  return (
    <article>
      <ReadingProgress />
      {/* Header */}
      <header className="border-b border-border px-6 md:px-14 py-14">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <CategoryBadge category={entry.category} />
            <span className="font-mono text-[9px] tracking-[0.15em] text-ink-30">{entry.date}</span>
            <span className="font-mono text-[9px] tracking-[0.12em] text-ink-30">読了 {minutes}分</span>
          </div>
          <h1 className="font-mincho text-[36px] md:text-[48px] leading-[1.4] mb-6">
            {entry.title}
          </h1>
          <p className="font-serif text-[17px] text-ink-60 leading-[1.9]">{entry.excerpt}</p>
        </div>
      </header>

      {/* Main image */}
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[300px] md:h-[440px]" />

      {/* Body */}
      <div className="px-6 md:px-14 py-14">
        <div className="max-w-2xl article-body">
          {paragraphs.map((para, i) => {
            const isHeading = para.startsWith('**') && para.endsWith('**')
            if (isHeading) {
              return (
                <h2 key={i}>
                  {para.replace(/\*\*/g, '')}
                </h2>
              )
            }
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: parseBodyParagraph(para) }}
              />
            )
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 md:px-14 pb-8 border-t border-border pt-8">
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
      </div>

      {/* Related Project */}
      {relatedProject && (
        <div className="border-t border-border px-6 md:px-14 py-10 bg-surface">
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-accent inline-block" />
            RELATED PROJECT
          </div>
          <Link
            href={`/projects/${relatedProject.slug}`}
            className="group flex items-baseline gap-4 hover:opacity-80 transition-opacity"
          >
            <span className="font-mono text-[9px] tracking-[0.15em] text-ink-30">{relatedProject.number}</span>
            <span className="font-mincho text-[22px] leading-[1.5] group-hover:text-ink-60 transition-colors">
              {relatedProject.title} →
            </span>
          </Link>
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="border-t border-border px-6 md:px-14 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prev && (
            <Link href={`/log/${prev.slug}`} className="group flex flex-col gap-1 hover:opacity-80 transition-opacity">
              <span className="font-mono text-[8px] tracking-[0.15em] text-ink-30">← PREV</span>
              <span className="font-mincho text-[16px] leading-[1.6] text-ink group-hover:text-ink-60 transition-colors line-clamp-2">
                {prev.title}
              </span>
            </Link>
          )}
          {next && (
            <Link href={`/log/${next.slug}`} className="group flex flex-col gap-1 text-right ml-auto hover:opacity-80 transition-opacity">
              <span className="font-mono text-[8px] tracking-[0.15em] text-ink-30">NEXT →</span>
              <span className="font-mincho text-[16px] leading-[1.6] text-ink group-hover:text-ink-60 transition-colors line-clamp-2">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* More logs */}
      <div className="border-t border-border px-6 md:px-14 py-10">
        <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
          <span className="w-4 h-px bg-accent inline-block" />
          MORE LOGS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-y divide-border md:divide-y-0 md:divide-x">
          {logs
            .filter((l) => l.slug !== entry.slug)
            .slice(0, 4)
            .map((l) => <LogCard key={l.slug} entry={l} />)}
        </div>
        <div className="mt-8">
          <Link href="/log" className="btn-secondary">実践録をすべて見る →</Link>
        </div>
      </div>
    </article>
  )
}
