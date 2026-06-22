import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '実践への参加・コラボレーション・メディア掲載などのお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        label="CONTACT"
        title="お問い合わせ"
        description="実践への参加・コラボレーション・メディア掲載などのご相談はこちらから。通常3営業日以内にご返答します。"
      />

      <div className="px-6 md:px-14 py-14">
        <ScrollReveal>
          <div className="max-w-xl">
            <div className="code-tag mb-10">
              <div>CONTACT_FORM / JUNTAKUNA_001</div>
              <div>STATUS: ACTIVE</div>
              <div>RESPONSE: 3 BUSINESS DAYS</div>
            </div>

            <div className="space-y-8">
              {[
                { label: 'お名前', type: 'text', placeholder: '山田 太郎', id: 'name' },
                { label: 'メールアドレス', type: 'email', placeholder: 'your@email.com', id: 'email' },
                { label: 'お問い合わせ種別', type: 'text', placeholder: '取材依頼 / コラボレーション / 実践参加 / その他', id: 'type' },
              ].map(({ label, type, placeholder, id }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="font-mono text-[10px] tracking-[0.15em] text-ink-30 block mb-3"
                  >
                    {label.toUpperCase()}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-base border border-border px-5 py-4 font-serif text-[15px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent transition-colors h-[52px]"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] tracking-[0.15em] text-ink-30 block mb-3"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full bg-base border border-border px-5 py-4 font-serif text-[15px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                送信する →
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
