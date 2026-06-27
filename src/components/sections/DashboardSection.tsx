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
    <section style={{ padding: '0 2.5rem 2.5rem' }}>
      <div className="card-float" style={{ padding: '2.75rem 2.75rem 2rem' }}>

        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
            <div className="section-label" style={{ marginBottom: '0.375rem' }}>DASHBOARD</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h2 className="section-heading">私は今どんな割合で動いているのか？</h2>
            </div>
          </div>
        </ScrollReveal>

        {/* チャート + 軸説明を横並びに（PC時）*/}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          <ScrollReveal delay={80} style={{ flex: '0 0 auto', width: 'min(100%, 280px)' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>ACTIVITY RATIO</div>
            <ActivityRadar axes={radarAxes} />
          </ScrollReveal>

          {/* 軸の説明 */}
          <ScrollReveal delay={160} style={{ flex: '1 1 200px', alignSelf: 'center' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>各軸について</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {AXES.map(({ label, desc }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-mincho)', fontSize: '1rem', color: 'var(--color-ink)', flexShrink: 0, minWidth: '3rem' }}>{label}</div>
                  <div className="meta-text" style={{ fontSize: '10px', lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}
