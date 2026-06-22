import type { Metadata } from 'next'
import Link from 'next/link'
import { archiveItems } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'アーカイブ',
  description: '写真・ドキュメント・スケッチ・地図。実践の痕跡を収める場所。',
}

const typeLabel: Record<string, string> = {
  photo: 'PHOTO',
  document: 'DOCUMENT',
  sketch: 'SKETCH',
  map: 'MAP',
}

export default function ArchivePage() {
  return (
    <div>
      <PageHeader
        label="ARCHIVE"
        title="アーカイブ"
        description="写真・ドキュメント・スケッチ・地図。実践の痕跡を収める場所。記録することで、実践は続く。"
        annotation={`ARCHIVE_${String(archiveItems.length).padStart(3, '0')}`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-border">
        {archiveItems.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 80}>
            <Link
              href={`/archive/${item.slug}`}
              className="group block border-b border-border md:border-b-0 md:border-r last:border-r-0 hover:bg-surface transition-colors"
            >
              <ImagePlaceholder label={item.placeholder} className="h-[180px]" />
              <div className="p-6">
                <div className="font-mono text-[9px] tracking-[0.15em] text-accent mb-2">{typeLabel[item.type]}</div>
                <div className="font-mono text-[9px] text-ink-30 mb-3">{item.date}</div>
                <h3 className="font-mincho text-[16px] leading-[1.6] group-hover:text-ink-60 transition-colors">{item.title}</h3>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
