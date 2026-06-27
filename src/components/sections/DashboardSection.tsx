import type { DashboardStats, LogEntry } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ActivityRadar from '@/components/ui/ActivityRadar'

const AXES = [
  { radarKey: '食',           label: '食',       desc: '農・食・料理の実践' },
  { radarKey: '住',           label: '住',       desc: '住まい・空間づくり'  },
  { radarKey: 'コミュニティ', label: 'つながり', desc: '人・地域とのつながり' },
  { radarKey: '文化',         label: '文化',     desc: '伝統・芸術・習慣'    },
  { radarKey: '経済',         label: '経済',     desc: '労働・お金・交換'    },
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
    <section className="dashboard-section">
      <div className="card-float dashboard-card">

        <ScrollReveal>
          <div className="dashboard-header">
            <div className="section-label">DASHBOARD</div>
            <h2 className="section-heading">私は今どんな割合で生活しているのか</h2>
          </div>
        </ScrollReveal>

        <div className="dashboard-body">

          <ScrollReveal delay={80} className="dashboard-radar-col">
            <div className="section-label">ACTIVITY RATIO</div>
            <ActivityRadar axes={radarAxes} />
          </ScrollReveal>

          <ScrollReveal delay={160} className="dashboard-axis-col">
            <div className="section-label">各軸について</div>
            <div className="dashboard-axis-list">
              {AXES.map(({ label, desc }) => (
                <div key={label} className="dashboard-axis-item">
                  <div className="dashboard-axis-label">{label}</div>
                  <div className="meta-text dashboard-axis-desc">{desc}</div>
                </div>
              ))}
            </div>
            <div className="meta-text dashboard-auto-note">
              実践録に記録したエントリのカテゴリ比率から自動算出
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}
