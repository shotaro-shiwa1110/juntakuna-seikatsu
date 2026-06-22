import type { Metadata } from 'next'
import Link from 'next/link'
import { libraryNotes } from '@/lib/mock-data'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '資料室',
  description: '読書メモ・学習メモ・アイデアの保管庫。完成された記事ではない、知識の断片を蓄積する場所。',
}

const typeColor: Record<string, string> = {
  '読書メモ': 'text-ink border-ink-30',
  '学習メモ': 'text-accent border-accent',
  'アイデア': 'text-ink border-ink-30',
  '調査メモ': 'text-ink border-ink-30',
  '思考の断片': 'text-ink border-ink-30',
}

export default function LibraryPage() {
  return (
    <div>
      <PageHeader
        label="LIBRARY"
        title="資料室"
        description="読書メモ・学習メモ・アイデア・思考の断片を蓄積する保管庫。完成された記事ではなく、知識の過程を記録する場所です。"
        annotation={`NOTE_${String(libraryNotes.length).padStart(3, '0')}`}
      />

      <div className="border-t border-border divide-y divide-border">
        {libraryNotes.map((note, i) => (
          <ScrollReveal key={note.slug} delay={i * 60}>
            <Link
              href={`/library/${note.slug}`}
              className="group flex flex-col md:flex-row gap-4 md:gap-10 px-6 md:px-14 py-8 hover:bg-surface transition-colors"
            >
              {/* Meta */}
              <div className="flex md:flex-col gap-4 md:gap-2 md:w-44 shrink-0">
                <div className="font-mono text-[9px] tracking-[0.1em] text-ink-30">{note.date}</div>
                <span className={`font-mono text-[9px] tracking-[0.08em] px-2 py-0.5 border self-start ${typeColor[note.type] ?? 'text-ink-30 border-border'}`}>
                  {note.type}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="font-mincho text-[20px] leading-[1.5] mb-2 group-hover:text-ink-60 transition-colors">
                  {note.title}
                </h2>
                <p className="font-serif text-[15px] text-ink-60 leading-[1.85] mb-3 line-clamp-2">
                  {note.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {note.tags.map((t) => (
                    <span key={t} className="font-mono text-[9px] text-ink-30 tracking-[0.06em]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center shrink-0">
                <span className="font-mono text-[10px] text-ink-30 group-hover:text-ink transition-colors">▶</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
