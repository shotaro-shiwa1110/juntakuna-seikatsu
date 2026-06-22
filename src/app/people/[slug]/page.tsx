import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { people, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = people.find((p) => p.slug === params.slug)
  return { title: person ? `${person.name} | 巡拓な生活` : 'NOT FOUND' }
}

export default function PersonDetailPage({ params }: Props) {
  const person = people.find((p) => p.slug === params.slug)
  if (!person) notFound()

  const relatedLogs = logs.filter((l) => person.relatedLogs.includes(l.slug))

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-4">{person.location}</div>
        <h1 className="font-mincho text-[40px] mb-2">{person.name}</h1>
        <div className="font-mono text-[9px] tracking-[0.12em] text-ink-30 mb-6">{person.role}</div>
        <p className="font-serif text-body text-ink-60 max-w-lg">{person.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <ImagePlaceholder label="[ARCHIVE PHOTO PLACEHOLDER]" className="h-[280px]" />
        <div className="p-10 flex items-center">
          <div className="code-tag">
            <div>NAME: {person.name}</div>
            <div>LOCATION: {person.location}</div>
            <div>ROLE: {person.role}</div>
            <div>STATUS: ACTIVE</div>
          </div>
        </div>
      </div>

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">RELATED LOG</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => <LogCard key={l.slug} entry={l} />)}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link href="/people" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PEOPLE に戻る
        </Link>
      </div>
    </div>
  )
}
