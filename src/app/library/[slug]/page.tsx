import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { libraryNotes } from '@/lib/mock-data'
import ReadingProgress from '@/components/ui/ReadingProgress'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { parseBodyParagraph } from '@/lib/utils'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return libraryNotes.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = libraryNotes.find((n) => n.slug === params.slug)
  if (!note) return { title: 'NOT FOUND' }
  return { title: note.title, description: note.excerpt }
}

export default function LibraryNotePage({ params }: Props) {
  const note = libraryNotes.find((n) => n.slug === params.slug)
  if (!note) notFound()

  const paragraphs = note.body.split('\n\n').filter(Boolean)

  return (
    <article>
      <ReadingProgress />

      <header className="border-b border-border px-6 md:px-14 py-14">
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[9px] tracking-[0.08em] px-2 py-0.5 border border-ink-30 text-ink-30">
                {note.type}
              </span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-ink-30">{note.date}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <h1 className="font-mincho text-[32px] md:text-[44px] leading-[1.4] mb-5">{note.title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="font-serif text-[16px] text-ink-60 leading-[1.9] mb-6">{note.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((t) => (
                <span key={t} className="font-mono text-[9px] text-ink-30 tracking-[0.06em]">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </header>

      <div className="px-6 md:px-14 py-14">
        <div className="max-w-2xl article-body">
          {paragraphs.map((para, i) => {
            const isHeading = para.startsWith('**') && para.endsWith('**')
            if (isHeading) {
              return <h2 key={i}>{para.replace(/\*\*/g, '')}</h2>
            }
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: parseBodyParagraph(para) }} />
            )
          })}
        </div>
      </div>

      <div className="border-t border-border px-6 md:px-14 py-8">
        <Link href="/library" className="font-mono text-[10px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← 資料室に戻る
        </Link>
      </div>
    </article>
  )
}
