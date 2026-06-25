import type { DashboardStats, LogEntry } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ActivityRadar from '@/components/ui/ActivityRadar'

// 5 axes matching radar + stats
const AXES = [
  { key: '食',           radarKey: '食',           label: 'KG',        sub: '収穫した量',     statKey: 'harvestKg' as const },
  { key: '住',           radarKey: '住',           label: 'HOUSES',    sub: '空き家見学',     statKey: 'houses' as const },
  { key: 'コミュニティ', radarKey: 'コミュニティ', label: 'PEOPLE',    sub: '出会った人',     statKey: 'people' as const },
  { key: '文化',         radarKey: '文化',         label: 'ARTICLES',  sub: '書いた記事',     statKey: 'articles' as const },
  { key: '経済',         radarKey: '経済',         label: 'PROJECTS',  sub: '実験したこと',   statKey: 'projects' as const },
]

function buildAxes(logs: LogEntry[]) {
  const total = logs.length || 1
  return AXES.map(({ radarKey, label }) => {
    const count = logs.filter(l => l.category === radarKey).length
    const value = Math.max(Math.round((count / total) * 100), 8)
    return { label, value }
  })
}

interface Props {
  stats: DashboardStats
  logs: LogEntry[]
}

export default function DashboardSection({ stats, logs }: Props) {
  const radarAxes = buildAxes(logs)

  return (
    <section className="relative pb-16 pt-4 px-6">
      {/* Header */}
      <ScrollReveal>
        <div className="mb-8">
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">DASHBOARD</div>
          <h2 className="font-mincho text-[1.45rem]">実践ダッシュボード</h2>
          <div className="font-mono text-[9px] tracking-[0.1em] text-ink-30 mt-1">2026.05.24 現在</div>
        </div>
      </ScrollReveal>

      {/* Layout: stats left 25% / radar right 75% */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* FIELD DATA — left 25% */}
        <div style={{ flex: '1 1 120px', minWidth: 100 }}>
          <div className="font-mono text-[8px] tracking-[0.2em] text-ink-30 mb-4">FIELD DATA</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {AXES.map(({ label, sub, statKey }, i) => (
              <ScrollReveal key={label} delay={i * 60}>
                <div>
                  <div className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mb-0.5 uppercase">{label}</div>
                  <div className="font-mincho leading-none" style={{ fontSize: '2rem' }}>{stats[statKey]}</div>
                  <div className="font-serif text-ink-60 mt-1" style={{ fontSize: '0.78rem' }}>{sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ACTIVITY RATIO radar — right 75% */}
        <ScrollReveal style={{ flex: '3 1 240px', minWidth: 200 }}>
          <div className="font-mono text-[8px] tracking-[0.2em] text-ink-30 mb-4">ACTIVITY RATIO</div>
          <ActivityRadar axes={radarAxes} />
          <div className="mt-2 font-mono text-[7px] tracking-[0.1em] text-ink-30 leading-[1.8]">
            実践録のカテゴリ分布から自動算出
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
