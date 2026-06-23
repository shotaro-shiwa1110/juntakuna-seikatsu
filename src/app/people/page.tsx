import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: '人と場所',
  description: '実践の中で出会った人々と場所の記録。',
}

export default function PeoplePage() {
  return (
    <div>
      <PageHeader
        label="PEOPLE & PLACE"
        title="人と場所"
        description="実践の中で出会った素敵な人々や場所を記録していきます。"
        annotation="ARCHIVE_PENDING"
      />

      <div className="px-6 py-20 border-t border-border">
        <ScrollReveal>
          <div className="max-w-lg">
            <div className="code-tag mb-8">
              <div>STATUS: PREPARING</div>
              <div>RECORDS: 0 / ∞</div>
            </div>
            <p className="font-mincho text-[1.2rem] leading-[1.8] text-ink mb-6">
              このセクションのコンテンツが入ります。
            </p>
            <div className="space-y-4 font-serif text-[1.07rem] text-ink-60 leading-[1.9]">
              <p>テキストが入ります。テキストが入ります。テキストが入ります。</p>
              <p>テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
