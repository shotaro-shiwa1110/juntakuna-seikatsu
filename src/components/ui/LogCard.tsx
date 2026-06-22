import Link from 'next/link'
import type { LogEntry } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import CategoryBadge from './CategoryBadge'

interface Props {
  entry: LogEntry
}

export default function LogCard({ entry }: Props) {
  return (
    <Link href={`/log/${entry.slug}`} className="group block bg-surface hover:bg-base transition-colors">
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[140px]" />
      <div className="p-5">
        <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30 mb-2">{entry.date}</div>
        <div className="mb-3"><CategoryBadge category={entry.category} /></div>
        <h3 className="font-mincho text-[16px] leading-[1.65] text-ink group-hover:text-ink-60 transition-colors">
          {entry.title}
        </h3>
      </div>
    </Link>
  )
}
