import type { DashboardStats, LogEntry } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ActivityRadar from '@/components/ui/ActivityRadar'

const AXES = [
  { radarKey: '食',           label: '食',           desc: '農・食・料理の実践' },
  { radarKey: '住',           label: '住',           desc: '住まい・空間づくり'  },
  { radarKey: 'コミュニティ', label: 'つながり',     desc: '人・地域とのつながり' },
  { radarKey: '文化',         label: '文化',         desc: '伝統・芸術・習慣'    },
  { radarKey: '経済',         label: '経済',         desc: '労働・お金・交換'    },
]

function buildAxes(logs: LogEntry[]) {
  const counts = AXES.map(({ radarKey, label }) => ({
    label,
    count: logs.filter(l => l.category === radarKey).length,
  }))
  const maxCount = Math.max(...counts.map(c => c.count), 1)
  return counts.map(({ label, count }) => ({
    label,
    value: Math.round(35 + (count / maxCount) * 50),
  }))
}

interface Props {
  stats: DashboardStats
  logs: LogEntry[]
}

export default function DashboardSection({ stats: _stats, logs }: Props) {
  const radarAxes = buildAxes(logs)

  return (
    <section style={{ padding: '0 1.5rem 2.5rem' }}>
      <div className="card-float" style={{ padding: '1.75rem 1.75rem 2rem' }}>

        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
            <div className="section-label" style={{ marginBottom: '0.375rem' }}>DASHBOARD</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h2 className="section-heading">実践ダッシュボード</h2>
              <span className="meta-text">実践録のタグから集計</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>ACTIVITY RATIO</div>
          <ActivityRadar axes={radarAxes} />
        </ScrollReveal>

        {/* 軸の説明 */}
        <ScrollReveal delay={160}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
            {AXES.map(({ label, desc }) => (
              <div key={label} style={{ minWidth: '8rem', flex: '1 1 8rem' }}>
                <div style={{ fontFamily: 'var(--font-mincho)', fontSize: '0.9rem', color: 'var(--color-ink)', marginBottom: '0.1rem' }}>{label}</div>
                <div className="meta-text">{desc}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
