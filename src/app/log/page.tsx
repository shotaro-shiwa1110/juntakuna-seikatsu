import type { Metadata } from 'next'
import { logs } from '@/lib/mock-data'
import PageHeader from '@/components/ui/PageHeader'
import LogPageClient from './LogPageClient'

export const metadata: Metadata = {
  title: '実践録',
  description: '日々の実践と思考の記録。農・食・住まい・文化・地域との関わりを綴るフィールドノート。',
}

export default function LogPage() {
  return (
    <div>
      <PageHeader
        label="FIELD LOG"
        title="実践録"
        description="日々の実践と思考の記録。暮らしを通して見えてきたことを、フィールドノートとして綴っています。"
        annotation={`LOG_${String(logs.length).padStart(3, '0')}`}
      />

      <div className="px-6 md:px-14 py-12">
        <LogPageClient logs={logs} />
      </div>
    </div>
  )
}
