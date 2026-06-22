import Link from 'next/link'
import type { DashboardStats } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

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
    <section className="border-b border-border bg-surface px-6 md:px-14 py-16">
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-2">DASHBOARD</div>
            <h2 className="font-mincho text-[28px] md:text-[32px]">実践ダッシュボード</h2>
            <div className="font-mono text-[9px] tracking-[0.1em] text-ink-30 mt-2">2026.05.24 現在</div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
        {statDefs.map(({ key, icon, label, sub }, i) => (
          <ScrollReveal key={key} delay={i * 60}>
            <div className="text-center">
              <div className="font-mono text-[18px] text-border mb-3">{icon}</div>
              <div className="font-mincho text-[40px] leading-none">{stats[key]}</div>
              <div className="font-mono text-[8px] tracking-[0.15em] text-ink-30 mt-3 uppercase">{label}</div>
              <div className="font-serif text-[12px] text-ink-30 mt-1">{sub}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="flex justify-end mt-12">
          <Link href="/archive" className="btn-secondary">
            すべてのデータを見る →
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
