import type { DashboardStats } from '@/types'

const statDefs = [
  { key: 'places' as const, icon: '◎', label: 'PLACES', sub: '訪れた場所' },
  { key: 'people' as const, icon: '⊙', label: 'PEOPLE', sub: '出会った人' },
  { key: 'houses' as const, icon: '⊞', label: 'HOUSES', sub: '空き家見学' },
  { key: 'harvestKg' as const, icon: '⊿', label: 'KG', sub: '収穫した量' },
  { key: 'projects' as const, icon: '◈', label: 'PROJECTS', sub: '実験したこと' },
  { key: 'articles' as const, icon: '▣', label: 'ARTICLES', sub: '書いた記事' },
]

interface Props {
  stats: DashboardStats
}

export default function DashboardSection({ stats }: Props) {
  return (
    <section className="border-b border-border bg-surface px-8 md:px-14 py-10">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-1">DASHBOARD</div>
          <h2 className="font-mincho text-[18px]">実践ダッシュボード</h2>
          <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30 mt-1">2026.05.24 現在</div>
        </div>
        <div className="font-mono text-[20px] text-border">+</div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {statDefs.map(({ key, icon, label, sub }) => (
          <div key={key} className="text-center">
            <div className="font-mono text-[16px] text-border mb-2">{icon}</div>
            <div className="font-mincho text-[36px] leading-none">{stats[key]}</div>
            <div className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mt-2 uppercase">{label}</div>
            <div className="font-mono text-[7px] text-ink-30 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <span className="font-mono text-[8px] tracking-[0.15em] text-ink-30">VIEW ALL DATA →</span>
      </div>
    </section>
  )
}
