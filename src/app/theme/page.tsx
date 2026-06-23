import type { Metadata } from 'next'
import Link from 'next/link'
import { themes, logs } from '@/lib/mock-data'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'テーマ',
  description: '巡拓な生活が探求する、暮らしの6つの領域。',
}

export default function ThemePage() {
  return (
    <div>
      <PageHeader
        label="THEME"
        title="テーマ"
        description="巡拓な生活が探求する、暮らしの6つの領域。それぞれのテーマが、実践の問いとして交差しながら深まっていく。"
        annotation="THEME_006"
      />

      <div className="grid grid-cols-1 border-t border-border">
        {themes.map((theme, i) => {
          const count = logs.filter((l) => l.category === theme.name).length
          return (
            <ScrollReveal key={theme.slug} delay={i * 60}>
              <Link
                href={`/theme/${theme.slug}`}
                className="group block p-10 border-b border-border hover:bg-surface transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-mono text-[8px] tracking-[0.25em] text-accent">{theme.nameEn}</div>
                  {count > 0 && (
                    <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30">{count} LOG</div>
                  )}
                </div>
                <h2 className="font-mincho text-[2.1rem] leading-[1.3] mb-4 group-hover:text-ink-60 transition-colors">
                  {theme.name}
                </h2>
                <p className="font-serif text-[1.07rem] text-ink-60 leading-[1.85] mb-6">{theme.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {theme.relatedTags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] tracking-[0.06em] px-2 py-1 border border-border text-ink-30">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
