import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { archiveItems } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return archiveItems.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = archiveItems.find((a) => a.slug === slug)
  if (!item) return { title: 'NOT FOUND' }
  return { title: item.title, description: item.description }
}

const typeLabel: Record<string, string> = {
  photo: 'PHOTO',
  document: 'DOCUMENT',
  sketch: 'SKETCH',
  map: 'MAP',
}

export default async function ArchiveDetailPage({ params }: Props) {
  const { slug } = await params
  const item = archiveItems.find((a) => a.slug === slug)
  if (!item) notFound()

  return (
    <div>
      <header className="border-b border-border px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[12px] tracking-[0.3em] text-accent mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            ARCHIVE / {typeLabel[item.type]}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h1 className="font-mincho text-[2.1rem] leading-[1.35] mb-4">{item.title}</h1>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="font-mono text-[12px] tracking-[0.1em] text-ink-30">{item.date}</div>
        </ScrollReveal>
      </header>

      <ImagePlaceholder label={item.placeholder} className="h-[420px]" />

      <div className="px-6 py-12 max-w-2xl">
        <ScrollReveal>
          <p className="font-serif text-[1.13rem] text-ink-60 leading-[1.9]">{item.description}</p>
        </ScrollReveal>
      </div>

      <div className="border-t border-border px-6 py-8">
        <Link href="/archive" className="font-mono text-[12px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← ARCHIVE に戻る
        </Link>
      </div>
    </div>
  )
}
