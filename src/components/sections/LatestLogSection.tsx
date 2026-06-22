import Link from 'next/link'
import type { LogEntry } from '@/types'
import LogCard from '@/components/ui/LogCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  entries: LogEntry[]
}

export default function LatestLogSection({ entries }: Props) {
  return (
    <section className="px-6 md:px-14 py-16">
      <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-8">LATEST LOG</div>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        <ScrollReveal>
          <div>
            <h2 className="font-mincho text-[28px] md:text-[32px] mb-5">最新の実践記録</h2>
            <p className="font-serif text-[16px] text-ink-60 leading-[1.9]">
              日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
            </p>
            <div className="mt-8">
              <Link href="/log" className="btn-primary">
                すべての記事を読む ▶
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
          {entries.map((entry, i) => (
            <ScrollReveal key={entry.slug} delay={i * 80}>
              <LogCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
