import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { archiveItems } from '@/lib/mock-data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return archiveItems.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = archiveItems.find((a) => a.slug === params.slug)
  return { title: item ? `${item.title} | 巡拓な生活` : 'NOT FOUND' }
}

export default function ArchiveDetailPage({ params }: Props) {
  const item = archiveItems.find((a) => a.slug === params.slug)
  if (!item) notFound()

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          ARCHIVE / {item.type.toUpperCase()}
        </div>
        <h1 className="font-mincho text-[32px] mb-4">{item.title}</h1>
        <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30">{item.date}</div>
      </header>

      <ImagePlaceholder label={item.placeholder} className="h-[400px]" />

      <div className="px-8 md:px-14 py-10 max-w-xl">
        <p className="font-serif text-body text-ink-60">{item.description}</p>
      </div>

      <div className="px-8 md:px-14 pb-12">
        <Link href="/archive" className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors">
          ← ARCHIVE に戻る
        </Link>
      </div>
    </div>
  )
}
