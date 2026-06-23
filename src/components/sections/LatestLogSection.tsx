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
      <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-8">LATEST LOG</div>
      <div className="grid grid-cols-1 gap-10">
        <ScrollReveal>
          <div>
            <h2 className="font-mincho text-[1.6rem] mb-5">最新の実践記録</h2>
            <p className="font-serif text-[1.07rem] text-ink-60 leading-[1.9]">
              日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
            </p>
            <div className="mt-8">
              <Link href="/log" className="btn-primary">
                すべての記事を読む <BtnArrow />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
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
