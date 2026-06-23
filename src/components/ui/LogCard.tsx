import Link from 'next/link'
import type { LogEntry } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import CategoryBadge from './CategoryBadge'
import { readingTime } from '@/lib/utils'

interface Props {
  entry: LogEntry
}

export default function LogCard({ entry }: Props) {
  const minutes = readingTime(entry.body)
  return (
    <Link href={`/log/${entry.slug}`} className="group block bg-surface hover:bg-base transition-colors h-full">
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[150px]" />
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[8px] tracking-[0.08em] text-ink-30">{entry.date}</span>
          <span className="font-mono text-[8px] tracking-[0.06em] text-ink-30">{minutes}分</span>
        </div>
        <div className="mb-3"><CategoryBadge category={entry.category} /></div>
        <h3 className="font-mincho text-[1.07rem] leading-[1.65] text-ink group-hover:text-ink-60 transition-colors line-clamp-3">
          {entry.title}
        </h3>
        <p className="font-serif text-[0.87rem] text-ink-30 leading-[1.8] mt-2 line-clamp-2">
          {entry.excerpt}
        </p>
      </div>
    </Link>
  )
}
