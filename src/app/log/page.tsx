import type { Metadata } from 'next'
import { logs } from '@/lib/mock-data'
import LogCard from '@/components/ui/LogCard'
import type { Category } from '@/types'

export const metadata: Metadata = { title: 'LOG | 巡拓な生活' }

const allCategories: Category[] = ['食', '住', '文化', '経済', 'コミュニティ', '自然']

export default function LogPage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="mb-10">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">LATEST LOG</div>
        <h1 className="font-mincho text-[32px] mb-3">実践記録</h1>
        <p className="font-serif text-body text-ink-60 max-w-lg">
          日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
        </p>
      </div>

      {/* Category filter (静的表示) */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-6">
        <span className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mr-2 self-center">FILTER:</span>
        {allCategories.map((cat) => (
          <span key={cat} className="font-mono text-[8px] tracking-[0.08em] px-3 py-1 border border-border text-ink-30 cursor-pointer hover:border-accent hover:text-ink transition-colors">
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-y divide-border">
        {logs.map((entry) => <LogCard key={entry.slug} entry={entry} />)}
      </div>
    </div>
  )
}
