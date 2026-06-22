import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { themes, projects, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theme = themes.find((t) => t.slug === params.slug)
  return { title: theme ? `${theme.name} | 巡拓な生活` : 'NOT FOUND' }
}

export default function ThemeDetailPage({ params }: Props) {
  const theme = themes.find((t) => t.slug === params.slug)
  if (!theme) notFound()

  const relatedProjects = projects.filter((p) => theme.relatedProjects.includes(p.slug))
  const relatedLogs = logs.filter((l) =>
    theme.relatedTags.some((tag) => l.tags.includes(tag))
  )

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">{theme.nameEn}</div>
        <h1 className="font-mincho text-[48px] mb-4">{theme.name}</h1>
        <p className="font-serif text-body text-ink-60 max-w-xl">{theme.description}</p>
      </header>

      {relatedProjects.length > 0 && (
        <div className="border-b border-border px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-4">RELATED PROJECTS</div>
          {relatedProjects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block font-mincho text-[20px] py-3 border-b border-border hover:text-ink-60 transition-colors last:border-0">
              {p.number} — {p.title} →
            </Link>
          ))}
        </div>
      )}

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">RELATED LOG</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => <LogCard key={l.slug} entry={l} />)}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link href="/theme" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← THEME に戻る
        </Link>
      </div>
    </div>
  )
}
