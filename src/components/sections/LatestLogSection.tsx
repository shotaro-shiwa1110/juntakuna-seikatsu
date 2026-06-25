import Link from 'next/link'
import type { LogEntry } from '@/types'
import LogCard from '@/components/ui/LogCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'

interface Props {
  entries: LogEntry[]
}

export default function LatestLogSection({ entries }: Props) {
  return (
    <section className="px-6 py-16">
      <ScrollReveal>
        <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-3">LATEST LOG</div>
        <h2 className="font-mincho text-[1.6rem] mb-3">最新の実践記録</h2>
        <p className="font-serif text-ink-60 leading-[1.9] mb-10" style={{ fontSize: '1.05rem' }}>
          日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
        </p>
      </ScrollReveal>

      {/* 2-col on desktop, 1-col on mobile */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {entries.map((entry, i) => (
          <ScrollReveal key={entry.slug} delay={i * 60} style={{ flex: '1 1 calc(50% - 6px)', minWidth: 260 }}>
            <LogCard entry={entry} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={250}>
        <div className="mt-10">
          <Link href="/log" className="btn-primary">
            すべての記事を読む <BtnArrow />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
