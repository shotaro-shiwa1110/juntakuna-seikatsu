import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { themes, projects, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const theme = themes.find((t) => t.slug === slug)
  if (!theme) return { title: 'NOT FOUND' }
  return {
    title: theme.name,
    description: theme.description,
  }
}

export default async function ThemeDetailPage({ params }: Props) {
  const { slug } = await params
  const theme = themes.find((t) => t.slug === slug)
  if (!theme) notFound()

  const relatedProjects = projects.filter((p) => theme.relatedProjects.includes(p.slug))
  const relatedLogs = logs.filter((l) =>
    theme.relatedTags.some((tag) => l.tags.includes(tag))
  )

  return (
    <div>
      <header className="border-b border-border px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[12px] tracking-[0.3em] text-accent mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            {theme.nameEn}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h1 className="font-mincho text-[60px] leading-[1.2] mb-6">{theme.name}</h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="font-serif text-[1.13rem] text-ink-60 leading-[1.9] max-w-xl">{theme.description}</p>
        </ScrollReveal>
      </header>

      {relatedProjects.length > 0 && (
        <div className="border-b border-border px-6 py-10">
          <div className="font-mono text-[12px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-accent inline-block" />
            RELATED PROJECTS
          </div>
          <div className="space-y-0">
            {relatedProjects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 60}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex items-baseline gap-5 py-5 border-b border-border last:border-0 hover:bg-surface transition-colors -mx-6 md:-mx-14 px-6"
                >
                  <span className="font-mono text-[12px] tracking-[0.15em] text-accent flex-shrink-0">{p.number}</span>
                  <span className="font-mincho text-[1.2rem] leading-[1.5] group-hover:text-ink-60 transition-colors">{p.title}</span>
                  <span className="font-serif text-[0.93rem] text-ink-30 ml-auto">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {relatedLogs.length > 0 && (
        <div className="px-6 py-12">
          <ScrollReveal>
            <div className="font-mono text-[12px] tracking-[0.25em] text-accent mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              RELATED LOG
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 grid-cols-2 border border-border divide-y divide-border">
            {relatedLogs.map((l, i) => (
              <ScrollReveal key={l.slug} delay={i * 80}>
                <LogCard entry={l} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-border px-6 py-8">
        <Link href="/theme" className="font-mono text-[12px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← THEME に戻る
        </Link>
      </div>
    </div>
  )
}
