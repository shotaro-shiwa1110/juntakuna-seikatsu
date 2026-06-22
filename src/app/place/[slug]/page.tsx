import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { places, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = places.find((p) => p.slug === params.slug)
  return { title: place ? `${place.name} | 巡拓な生活` : 'NOT FOUND' }
}

export default function PlaceDetailPage({ params }: Props) {
  const place = places.find((p) => p.slug === params.slug)
  if (!place) notFound()

  const relatedLogs = logs.filter((l) => place.relatedLogs.includes(l.slug))

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">{place.coordinates}</div>
        <h1 className="font-mincho text-[40px] mb-2">{place.name}</h1>
        <div className="font-mono text-[9px] tracking-[0.12em] text-ink-30 mb-6">{place.prefecture}</div>
        <p className="font-serif text-body text-ink-60 max-w-lg">{place.description}</p>
      </header>

      <ImagePlaceholder label="[CULTURAL MAP PLACEHOLDER]" className="h-[280px]" />

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">RELATED LOG</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => <LogCard key={l.slug} entry={l} />)}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link href="/place" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PLACE に戻る
        </Link>
      </div>
    </div>
  )
}
