import type { Metadata } from 'next'
import Link from 'next/link'
import { people } from '@/lib/mock-data'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '人物アーカイブ | 巡拓な生活',
  description: '実践の中で出会った人々の記録。',
}

export default function PeoplePage() {
  return (
    <div>
      <PageHeader
        label="PEOPLE"
        title="人物アーカイブ"
        description="実践の中で出会った人々の記録。それぞれの暮らし方が、問いへの答えのひとつになっている。"
        annotation={`PEOPLE_${String(people.length).padStart(3, '0')}`}
      />

      <div className="border-t border-border">
        {people.map((person, i) => (
          <ScrollReveal key={person.slug} delay={i * 80}>
            <Link
              href={`/people/${person.slug}`}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 border-b border-border px-6 md:px-14 py-10 hover:bg-surface transition-colors"
            >
              <div className="font-mincho text-[28px] leading-[1.3] min-w-[160px] flex-shrink-0 group-hover:text-ink-60 transition-colors">
                {person.name}
              </div>
              <div className="flex-1">
                <div className="font-mono text-[9px] tracking-[0.12em] text-accent mb-1">{person.location}</div>
                <div className="font-mono text-[10px] tracking-[0.08em] text-ink-30 mb-4">{person.role}</div>
                <p className="font-serif text-[16px] text-ink-60 leading-[1.85]">{person.description}</p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
