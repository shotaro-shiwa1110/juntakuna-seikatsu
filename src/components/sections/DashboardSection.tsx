import Link from 'next/link'
import type { DashboardStats, LogEntry } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ActivityRadar from '@/components/ui/ActivityRadar'

const statDefs = [
  { key: 'places' as const, label: 'PLACES', sub: '訪れた場所' },
  { key: 'people' as const, label: 'PEOPLE', sub: '出会った人' },
  { key: 'houses' as const, label: 'HOUSES', sub: '空き家見学' },
  { key: 'harvestKg' as const, label: 'KG', sub: '収穫した量' },
  { key: 'projects' as const, label: 'PROJECTS', sub: '実験したこと' },
  { key: 'articles' as const, label: 'ARTICLES', sub: '書いた記事' },
]

const RADAR_AXES: { key: string; label: string }[] = [
  { key: '食', label: '食' },
  { key: 'コミュニティ', label: 'つながり' },
  { key: '経済', label: '経済' },
  { key: '文化', label: '文化' },
  { key: '住', label: '住' },
]

function buildRadarAxes(logs: LogEntry[]) {
  const total = logs.length || 1
  return RADAR_AXES.map(({ key, label }) => {
    const count = logs.filter((l) => l.category === key).length
    // Minimum 8% so every axis is visible
    const value = Math.max(Math.round((count / total) * 100), 8)
    return { label, value }
  })
}

interface Props {
  stats: DashboardStats
  logs: LogEntry[]
}

export default function DashboardSection({ stats, logs }: Props) {
  const radarAxes = buildRadarAxes(logs)

  return (
    <section className="border-b border-border bg-surface">
      <div className="px-6 md:px-14 py-14">
        <ScrollReveal>
          <div className="mb-10">
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">DASHBOARD</div>
            <h2 className="font-mincho text-[26px] md:text-[30px]">実践ダッシュボード</h2>
            <div className="font-mono text-[9px] tracking-[0.1em] text-ink-30 mt-1">2026.05.24 現在</div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start">
          {/* Radar chart */}
          <ScrollReveal>
            <div>
              <div className="font-mono text-[8px] tracking-[0.2em] text-ink-30 mb-5">ACTIVITY RATIO</div>
              <ActivityRadar axes={radarAxes} />
              <div className="mt-3 font-mono text-[7px] tracking-[0.12em] text-ink-30 leading-[1.8]">
                実践録のカテゴリ分布から自動算出
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
              {statDefs.map(({ key, label, sub }, i) => (
                <ScrollReveal key={key} delay={i * 50}>
                  <div>
                    <div className="font-mono text-[8px] tracking-[0.15em] text-ink-30 mb-1.5 uppercase">{label}</div>
                    <div className="font-mincho text-[42px] md:text-[48px] leading-none">{stats[key]}</div>
                    <div className="font-serif text-[14px] text-ink-60 mt-2">{sub}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={330}>
              <div className="mt-10 pt-8 border-t border-border">
                <Link href="/archive" className="btn-secondary">
                  すべてのデータを見る ▶
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
