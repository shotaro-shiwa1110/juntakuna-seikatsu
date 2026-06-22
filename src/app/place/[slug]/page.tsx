import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { places, logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = places.find((p) => p.slug === params.slug)
  if (!place) return { title: 'NOT FOUND' }
  return { title: place.name, description: place.description }
}

export default function PlaceDetailPage({ params }: Props) {
  const place = places.find((p) => p.slug === params.slug)
  if (!place) notFound()

  const relatedLogs = logs.filter((l) => place.relatedLogs.includes(l.slug))

  return (
    <div>
      <header className="border-b border-border px-6 md:px-14 py-14">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.3em] text-accent mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            PLACE / {place.coordinates}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h1 className="font-mincho text-[40px] md:text-[52px] leading-[1.3] mb-3">{place.name}</h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="font-mono text-[10px] tracking-[0.08em] text-ink-30 mb-6">{place.prefecture}</div>
          <p className="font-serif text-[17px] text-ink-60 leading-[1.9] max-w-xl">{place.description}</p>
        </ScrollReveal>
      </header>

      <ImagePlaceholder label="[CULTURAL MAP PLACEHOLDER]" className="h-[320px]" />

      {relatedLogs.length > 0 && (
        <div className="px-6 md:px-14 py-12">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              RELATED LOG
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-y divide-border md:divide-y-0 md:divide-x">
            {relatedLogs.map((l, i) => (
              <ScrollReveal key={l.slug} delay={i * 80}>
                <LogCard entry={l} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-border px-6 md:px-14 py-8">
        <Link href="/place" className="font-mono text-[10px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← PLACE に戻る
        </Link>
      </div>
    </div>
  )
}
