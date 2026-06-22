import ScrollReveal from '@/components/ui/ScrollReveal'

const lines = [
  { num: '01', jp: '農・食・住まいを、自分の手に取り戻す。', en: 'Reclaim food, farming, and shelter.' },
  { num: '02', jp: '消費ではなく、実践の記録を残す。', en: 'Document practice, not consumption.' },
  { num: '03', jp: '地域と人を、物語ではなく現場で知る。', en: 'Know people and places firsthand.' },
  { num: '04', jp: '失敗も含めて、実験として捉える。', en: 'Treat every failure as data.' },
  { num: '05', jp: '小さな選択の積み重ねが、未来をつくる。', en: 'Small choices compound into futures.' },
]

export default function ManifestoSection() {
  return (
    <section className="border-b border-border px-6 md:px-14 py-16 bg-surface">
      <ScrollReveal>
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">MANIFESTO</div>
            <h2 className="font-mincho text-[28px] md:text-[32px]">このプロジェクトの軸</h2>
          </div>
          <div className="code-tag hidden md:block text-right">
            <div>VERSION: 1.0</div>
            <div>UPDATED: 2026.01</div>
          </div>
        </div>
      </ScrollReveal>

      <div className="divide-y divide-border border-t border-border">
        {lines.map(({ num, jp, en }, i) => (
          <ScrollReveal key={num} delay={i * 80}>
            <div className="flex items-start gap-6 md:gap-10 py-6 group">
              <div className="font-mono text-[9px] tracking-[0.15em] text-ink-30 mt-1 w-6 shrink-0">{num}</div>
              <div className="flex-1 min-w-0">
                <div className="font-mincho text-[20px] md:text-[22px] leading-[1.6] text-ink mb-1.5">{jp}</div>
                <div className="font-mono text-[9px] tracking-[0.12em] text-ink-30">{en}</div>
              </div>
              <div className="hidden md:flex shrink-0 w-6 h-6 border border-border items-center justify-center group-hover:border-accent group-hover:bg-accent transition-colors duration-200">
                <span className="font-mono text-[8px] text-ink-30 group-hover:text-on-accent transition-colors duration-200">→</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
