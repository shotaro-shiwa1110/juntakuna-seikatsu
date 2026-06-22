import type { Metadata } from 'next'
import Link from 'next/link'
import { people } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'PEOPLE | 巡拓な生活' }

export default function PeoplePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">PEOPLE</div>
      <h1 className="font-mincho text-[32px] mb-3">人物アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 max-w-lg mb-12">
        実践の中で出会った人々の記録。それぞれの暮らし方が、問いへの答えのひとつになっている。
      </p>

      <div className="space-y-0 border-t border-border">
        {people.map((person) => (
          <Link
            key={person.slug}
            href={`/people/${person.slug}`}
            className="group flex flex-col md:flex-row gap-4 md:gap-8 border-b border-border py-8 hover:bg-surface transition-colors"
          >
            <div className="font-mincho text-[22px] min-w-[120px]">{person.name}</div>
            <div>
              <div className="font-mono text-[8px] tracking-[0.12em] text-accent mb-2">{person.location}</div>
              <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30 mb-2">{person.role}</div>
              <p className="font-serif text-body text-ink-60">{person.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
