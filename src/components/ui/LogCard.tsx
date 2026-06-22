import Link from 'next/link'
import type { LogEntry } from '@/types'
import ImagePlaceholder from './ImagePlaceholder'
import CategoryBadge from './CategoryBadge'

interface Props {
  entry: LogEntry
}

export default function LogCard({ entry }: Props) {
  return (
    <Link href={`/log/${entry.slug}`} className="group block border-r border-border last:border-r-0 bg-surface hover:bg-base transition-colors">
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[120px]" />
      <div className="p-4">
        <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mb-1">{entry.date}</div>
        <div className="mb-2"><CategoryBadge category={entry.category} /></div>
        <h3 className="font-mincho text-[13px] leading-[1.7] text-ink group-hover:text-ink-60 transition-colors">
          {entry.title}
        </h3>
      </div>
    </Link>
  )
}
