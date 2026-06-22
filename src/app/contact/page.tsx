import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'CONTACT | 巡拓な生活' }

export default function ContactPage() {
  return (
    <div className="px-8 md:px-14 py-12 max-w-2xl">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">CONTACT</div>
      <h1 className="font-mincho text-[32px] mb-6">お問い合わせ</h1>
      <p className="font-serif text-body text-ink-60 mb-10">
        実践への参加・コラボレーション・メディア掲載などのお問い合わせはこちらから。
      </p>

      <div className="border border-border p-8 bg-surface">
        <div className="code-tag mb-8">
          <span>CONTACT_FORM / JUNTAKUNA_001</span>
          <br />
          <span>STATUS: ACTIVE</span>
        </div>

        <div className="space-y-6">
          {[
            { label: 'お名前', type: 'text', placeholder: '山田 太郎' },
            { label: 'メールアドレス', type: 'email', placeholder: 'your@email.com' },
            { label: 'お問い合わせ種別', type: 'text', placeholder: '取材依頼 / コラボレーション / その他' },
          ].map(({ label, type, placeholder }) => (
            <div key={label}>
              <label className="font-mono text-[8px] tracking-[0.15em] text-ink-30 block mb-2">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-base border border-border px-4 py-3 font-serif text-[14px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent"
              />
            </div>
          ))}
          <div>
            <label className="font-mono text-[8px] tracking-[0.15em] text-ink-30 block mb-2">メッセージ</label>
            <textarea
              rows={5}
              placeholder="メッセージを入力してください"
              className="w-full bg-base border border-border px-4 py-3 font-serif text-[14px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent resize-none"
            />
          </div>
          <button className="font-mono text-[8px] tracking-[0.2em] text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-surface transition-colors">
            SEND MESSAGE →
          </button>
        </div>
      </div>
    </div>
  )
}
