import type { Metadata } from 'next'
import Link from 'next/link'
import { themes } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'THEME | 巡拓な生活' }

export default function ThemePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">THEME</div>
      <h1 className="font-mincho text-[32px] mb-3">テーマ</h1>
      <p className="font-serif text-body text-ink-60 max-w-lg mb-12">
        巡拓な生活が探求する、暮らしの6つの領域。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-border divide-y divide-border">
        {themes.map((theme) => (
          <Link
            key={theme.slug}
            href={`/theme/${theme.slug}`}
            className="group p-8 border-b border-border hover:bg-surface transition-colors last:border-b-0"
          >
            <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-2">{theme.nameEn}</div>
            <h2 className="font-mincho text-[28px] mb-3 group-hover:text-ink-60 transition-colors">{theme.name}</h2>
            <p className="font-serif text-body text-ink-60 mb-4">{theme.description}</p>
            <div className="flex flex-wrap gap-1">
              {theme.relatedTags.map((tag) => (
                <span key={tag} className="font-mono text-[7px] tracking-[0.08em] px-2 py-0.5 border border-border text-ink-30">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
