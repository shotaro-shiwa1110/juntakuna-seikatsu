import type { Metadata } from 'next'
import Link from 'next/link'
import { places } from '@/lib/mock-data'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '場所アーカイブ',
  description: '実践の舞台となった場所の記録。それぞれの土地が持つ文脈を探る。',
}

export default function PlacePage() {
  return (
    <div>
      <PageHeader
        label="PLACE"
        title="場所アーカイブ"
        description="実践の舞台となった場所の記録。それぞれの土地が持つ文脈と、そこで起きた実践を記録する。"
        annotation={`PLACE_${String(places.length).padStart(3, '0')}`}
      />

      <div className="grid grid-cols-1 border-t border-l border-border">
        {places.map((place, i) => (
          <ScrollReveal key={place.slug} delay={i * 80}>
            <Link
              href={`/place/${place.slug}`}
              className="group block p-10 border-b border-r border-border hover:bg-surface transition-colors h-full"
            >
              <div className="font-mono text-[9px] tracking-[0.15em] text-accent mb-3">{place.coordinates}</div>
              <h2 className="font-mincho text-[1.2rem] leading-[1.45] mb-2 group-hover:text-ink-60 transition-colors">
                {place.name}
              </h2>
              <div className="font-mono text-[9px] tracking-[0.08em] text-ink-30 mb-5">{place.prefecture}</div>
              <p className="font-serif text-[1rem] text-ink-60 leading-[1.9]">{place.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
