import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { people, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const person = people.find((p) => p.slug === slug)
  if (!person) return { title: 'NOT FOUND' }
  return { title: person.name, description: person.description }
}

export default async function PersonDetailPage({ params }: Props) {
  const { slug } = await params
  const person = people.find((p) => p.slug === slug)
  if (!person) notFound()

  const relatedLogs = logs.filter((l) => person.relatedLogs.includes(l.slug))

  return (
    <div>
      <header className="border-b border-border px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[12px] tracking-[0.3em] text-accent mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            PEOPLE / {person.location}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h1 className="font-mincho text-[2.9rem] leading-[1.25] mb-4">{person.name}</h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="font-mono text-[12px] tracking-[0.1em] text-ink-30 mb-6">{person.role}</div>
          <p className="font-serif text-[1.13rem] text-ink-60 leading-[1.9] max-w-xl">{person.description}</p>
        </ScrollReveal>
      </header>

      <div className="grid grid-cols-1 border-b border-border">
        <ImagePlaceholder label="[FIELD PHOTO — ポートレート]" className="h-[300px]" />
        <div className="p-10 flex items-center">
          <div>
            <div className="font-mono text-[12px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              FIELD DATA
            </div>
            <div className="code-tag">
              <div>NAME: {person.name}</div>
              <div>LOCATION: {person.location}</div>
              <div>ROLE: {person.role}</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                STATUS: ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <Link href="/people" className="font-mono text-[12px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PEOPLE に戻る
        </Link>
      </div>
    </div>
  )
}
