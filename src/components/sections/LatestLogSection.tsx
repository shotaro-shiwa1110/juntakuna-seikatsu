import Link from 'next/link'
import type { LogEntry } from '@/types'
import LogCard from '@/components/ui/LogCard'

interface Props {
  entries: LogEntry[]
}

export default function LatestLogSection({ entries }: Props) {
  return (
    <section className="px-8 md:px-14 py-10">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-6">LATEST LOG</div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <div>
          <h2 className="font-mincho text-[18px] mb-4">最新の実践記録</h2>
          <p className="font-serif text-[13px] text-ink-60 leading-[2]">
            日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
          </p>
          <Link href="/log" className="block font-mono text-[7px] tracking-[0.1em] text-ink-30 hover:text-ink transition-colors mt-6">
            すべての記事を見る →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
          {entries.map((entry) => (
            <LogCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
