import type { DashboardStats, LogEntry } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ActivityRadar from '@/components/ui/ActivityRadar'

const AXES = [
  { radarKey: '食',           label: 'KG',       sub: '収穫した量',   statKey: 'harvestKg' as const },
  { radarKey: '住',           label: 'HOUSES',   sub: '空き家見学',   statKey: 'houses'    as const },
  { radarKey: 'コミュニティ', label: 'PEOPLE',   sub: '出会った人',   statKey: 'people'    as const },
  { radarKey: '文化',         label: 'ARTICLES', sub: '書いた記事',   statKey: 'articles'  as const },
  { radarKey: '経済',         label: 'PROJECTS', sub: '実験したこと', statKey: 'projects'  as const },
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
    <section className="relative pb-20 px-6">
      <div style={{
        background: 'rgba(194, 193, 188, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(168, 167, 162, 0.5)',
        borderRadius: '10px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)',
        padding: '28px 28px 32px',
      }}>
        {/* Title row */}
        <ScrollReveal>
          <div className="mb-7 pb-5 border-b border-border">
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1.5">DASHBOARD</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
              <h2 className="font-mincho text-[1.4rem]">実践ダッシュボード</h2>
              <span className="font-mono text-[9px] tracking-[0.1em] text-ink-30">2026.05.24 現在</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Content: FIELD DATA left narrow / Radar right large — bottom-aligned */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-end', flexWrap: 'wrap' }}>

          {/* FIELD DATA — compact, wrapping horizontal */}
          <div style={{ flex: '1 1 180px', minWidth: 160 }}>
            <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mb-3">FIELD DATA</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 16px' }}>
              {AXES.map(({ label, sub, statKey }, i) => (
                <ScrollReveal key={label} delay={i * 50}>
                  <div style={{ minWidth: 54 }}>
                    <div className="font-mincho" style={{ fontSize: '1.55rem', lineHeight: 1 }}>
                      {stats[statKey]}
                    </div>
                    <div className="font-mono text-[6px] tracking-[0.1em] text-ink-30 uppercase mt-0.5">{label}</div>
                    <div className="font-serif text-ink-60" style={{ fontSize: '0.68rem' }}>{sub}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ACTIVITY RATIO radar — large */}
          <ScrollReveal style={{ flex: '3 1 280px' }}>
            <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mb-2">ACTIVITY RATIO</div>
            <ActivityRadar axes={radarAxes} />
            <div className="mt-1 font-mono text-[6px] tracking-[0.08em] text-ink-30">
              実践録のカテゴリ分布から自動算出
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
