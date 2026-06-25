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
  const counts = AXES.map(({ radarKey, label }) => ({
    label,
    count: logs.filter(l => l.category === radarKey).length,
  }))
  const maxCount = Math.max(...counts.map(c => c.count), 1)
  // Normalize: max maps to 85, minimum floor at 35 so radar is always visible
  return counts.map(({ label, count }) => ({
    label,
    value: Math.round(35 + (count / maxCount) * 50),
  }))
}

interface Props {
  stats: DashboardStats
  logs: LogEntry[]
}

export default function DashboardSection({ stats, logs }: Props) {
  const radarAxes = buildAxes(logs)

  return (
    <section style={{ padding: '0 1.5rem 2.5rem' }}>
      <div className="card-float" style={{ padding: '1.75rem 1.75rem 2rem' }}>

        {/* タイトル */}
        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
            <div className="section-label" style={{ marginBottom: '0.375rem' }}>DASHBOARD</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h2 className="section-heading">実践ダッシュボード</h2>
              <span className="meta-text">2026.05.24 現在</span>
            </div>
          </div>
        </ScrollReveal>

        {/* FIELD DATA 左 / レーダー 右 — 下揃え */}
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>

          {/* FIELD DATA */}
          <div style={{ flex: '1 1 10rem', minWidth: '9rem' }}>
            <div className="section-label" style={{ marginBottom: '0.875rem' }}>FIELD DATA</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1rem' }}>
              {AXES.map(({ label, sub, statKey }, i) => (
                <ScrollReveal key={label} delay={i * 50}>
                  <div style={{ minWidth: '3.5rem' }}>
                    <div className="stat-number">{stats[statKey]}</div>
                    <div className="stat-label">{label}</div>
                    <div className="stat-sub">{sub}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ACTIVITY RATIO レーダー */}
          <ScrollReveal style={{ flex: '3 1 17.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>ACTIVITY RATIO</div>
            <ActivityRadar axes={radarAxes} />
            <div className="meta-text" style={{ marginTop: '0.25rem' }}>実践録のカテゴリ分布から自動算出</div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
