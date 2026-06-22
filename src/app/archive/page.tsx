import type { Metadata } from 'next'
import Link from 'next/link'
import { archiveItems } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = { title: 'ARCHIVE | 巡拓な生活' }

const typeLabel: Record<string, string> = {
  photo: 'PHOTO',
  document: 'DOCUMENT',
  sketch: 'SKETCH',
  map: 'MAP',
}

export default function ArchivePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">ARCHIVE</div>
      <h1 className="font-mincho text-[32px] mb-3">アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 max-w-lg mb-12">
        写真・ドキュメント・スケッチ・地図。実践の痕跡を収める場所。
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-y divide-border">
        {archiveItems.map((item) => (
          <Link key={item.slug} href={`/archive/${item.slug}`} className="group block hover:bg-surface transition-colors">
            <ImagePlaceholder label={item.placeholder} className="h-[140px]" />
            <div className="p-4">
              <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-1">{typeLabel[item.type]}</div>
              <div className="font-mono text-[7px] text-ink-30 mb-2">{item.date}</div>
              <h3 className="font-mincho text-[12px] leading-[1.6] group-hover:text-ink-60 transition-colors">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
