'use client'
import { useState } from 'react'
import type { LogEntry, Category } from '@/types'
import LogCard from '@/components/ui/LogCard'

const ALL_CATEGORIES: Category[] = ['食', '住', '文化', '経済', 'コミュニティ', '自然']

interface Props {
  logs: LogEntry[]
}

export default function LogPageClient({ logs }: Props) {
  const [active, setActive] = useState<Category | null>(null)

  // ALL view: one article per category (most recent); filtered view: all in category
  const filtered = active
    ? logs.filter((l) => l.category === active)
    : logs.filter((l, i, arr) => arr.findIndex((x) => x.category === l.category) === i)

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-border">
        <span className="font-mono text-[8px] tracking-[0.2em] text-ink-30 mr-1">FILTER:</span>
        <button
          onClick={() => setActive(null)}
          className={`font-mono text-[11px] tracking-[0.08em] px-3 py-1.5 border transition-colors min-h-[36px] ${
            active === null
              ? 'border-accent text-ink bg-accent/10'
              : 'border-border text-ink-30 hover:border-accent hover:text-ink'
          }`}
        >
          ALL ({logs.length})
        </button>
        {ALL_CATEGORIES.map((cat) => {
          const count = logs.filter((l) => l.category === cat).length
          if (count === 0) return null
          return (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`font-mono text-[11px] tracking-[0.08em] px-3 py-1.5 border transition-colors min-h-[36px] ${
                active === cat
                  ? 'border-accent text-ink bg-accent/10'
                  : 'border-border text-ink-30 hover:border-accent hover:text-ink'
              }`}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      {/* Log grid */}
      {filtered.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filtered.map((entry) => (
            <LogCard key={entry.slug} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-ink-30 font-mono text-[11px] tracking-[0.1em]">
          NO RECORDS FOUND
        </div>
      )}
    </>
  )
}
