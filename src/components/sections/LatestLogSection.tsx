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
    <section className="section">
      <ScrollReveal>
        <div className="section-label" style={{ marginBottom: '0.25rem' }}>LATEST LOG</div>
        <h2 className="section-heading-lg" style={{ marginBottom: '0.75rem' }}>最新の実践記録</h2>
        <p className="body-text" style={{ marginBottom: '2.5rem' }}>
          日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
        </p>
      </ScrollReveal>

      <div className="grid-2col">
        {entries.map((entry, i) => (
          <ScrollReveal key={entry.slug} delay={i * 60}>
            <LogCard entry={entry} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={250}>
        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/log" className="btn-primary">
            すべての記事を読む <BtnArrow />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
