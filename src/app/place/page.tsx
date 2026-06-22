import type { Metadata } from 'next'
import Link from 'next/link'
import { places } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'PLACE | 巡拓な生活' }

export default function PlacePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">PLACE</div>
      <h1 className="font-mincho text-[32px] mb-3">場所アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 max-w-lg mb-12">
        実践の舞台となった場所の記録。それぞれの土地が持つ文脈を探る。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {places.map((place) => (
          <Link
            key={place.slug}
            href={`/place/${place.slug}`}
            className="group p-8 hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-2">{place.coordinates}</div>
            <h2 className="font-mincho text-[18px] leading-[1.5] mb-2 group-hover:text-ink-60 transition-colors">{place.name}</h2>
            <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mb-3">{place.prefecture}</div>
            <p className="font-serif text-[13px] text-ink-60 leading-[1.9]">{place.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
