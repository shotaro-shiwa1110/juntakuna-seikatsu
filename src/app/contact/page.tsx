import BtnArrow from '@/components/ui/BtnArrow'
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

      <div className="px-6 py-14">
        <ScrollReveal>
          <div className="max-w-xl">
            <div className="code-tag mb-10">
              <div>CONTACT_FORM / JUNTAKUNA_001</div>
              <div>STATUS: ACTIVE</div>
              <div>RESPONSE: 3 BUSINESS DAYS</div>
            </div>

            <form className="space-y-8">
              {[
                { label: 'お名前', type: 'text', placeholder: '山田 太郎', id: 'name', required: true },
                { label: 'メールアドレス', type: 'email', placeholder: 'your@email.com', id: 'email', required: true },
              ].map(({ label, type, placeholder, id, required }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="font-mono text-[12px] tracking-[0.15em] text-ink-30 block mb-3"
                  >
                    {label.toUpperCase()} {required && <span className="text-accent">*</span>}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className="w-full bg-base border border-border px-5 py-4 font-serif text-[1rem] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent transition-colors h-[52px]"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="inquiry-type"
                  className="font-mono text-[12px] tracking-[0.15em] text-ink-30 block mb-3"
                >
                  お問い合わせ種別 <span className="text-accent">*</span>
                </label>
                <select
                  id="inquiry-type"
                  name="type"
                  required
                  className="w-full bg-base border border-border px-5 py-4 font-serif text-[1rem] text-ink focus:outline-none focus:border-accent transition-colors h-[52px] cursor-pointer"
                >
                  <option value="" disabled selected>選択してください</option>
                  <option value="media">取材・メディア掲載</option>
                  <option value="collab">コラボレーション</option>
                  <option value="join">実践参加・見学</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[12px] tracking-[0.15em] text-ink-30 block mb-3"
                >
                  MESSAGE <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full bg-base border border-border px-5 py-4 font-serif text-[1rem] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                送信する <BtnArrow />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
