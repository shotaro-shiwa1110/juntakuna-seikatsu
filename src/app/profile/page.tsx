import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import PageHeader from '@/components/ui/PageHeader'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'プロフィール',
  description: '日本の暮らしを、もう一度自分の手に取り戻す。実践アーカイブメディア「巡拓な生活」について。',
}

export default function ProfilePage() {
  return (
    <div>
      <PageHeader
        label="PROFILE"
        title="このサイトについて"
        annotation="PROFILE_001"
      />

      {/* Vision + About grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              VISION
            </div>
            <h2 className="font-mincho text-[28px] md:text-[34px] leading-[1.55] mb-8">
              日本の暮らしを、<br />もう一度自分の手に<br />取り戻す。
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="space-y-5 font-serif text-[16px] text-ink-60 leading-[1.9]">
              <p>農・食・住まい・文化・地域。これらはかつて、すべて「日常」だった。しかし今、多くの人にとってそれらは「遠いもの」になってしまっている。</p>
              <p>私はそれを嘆くのではなく、実際に手を動かして確かめたい。どこまで自分でできるのか。どこで他者を必要とするのか。その境界線を、実践を通じて探っている。</p>
              <p>このサイトは、その過程の記録である。</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="p-10 md:p-14">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-accent inline-block" />
              ABOUT
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <ImagePlaceholder label="[FIELD PHOTO — プロフィール]" className="h-[220px] mb-8" />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="space-y-4 font-serif text-[16px] text-ink-60 leading-[1.9]">
              <p>1990年代生まれ。東京を拠点に、地方と行き来しながら暮らしの実験を続けている。</p>
              <p>ウェブ制作を生業としながら、農・発酵・空き家・地域コミュニティに関わる実践を記録。「テクノロジーと民藝」の交差点を探ることが、今の問いの中心にある。</p>
            </div>
            <div className="mt-6">
              <div className="code-tag">
                <div>BASE: 東京 / 埼玉</div>
                <div>STATUS: ACTIVE</div>
                <div>SINCE: 2026</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Philosophy */}
      <div className="px-6 md:px-14 py-16 border-b border-border">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-accent inline-block" />
            PHILOSOPHY
          </div>
          <h2 className="font-mincho text-[28px] md:text-[34px] mb-10">サイトの思想</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={80}>
            <div className="space-y-5 font-serif text-[16px] text-ink-60 leading-[1.9]">
              <p>グローバル化と資本主義の加速は、多くの豊かさをもたらした。同時に、失われたものもある。季節の食、地域の祭り、手仕事の時間、隣人との関係。</p>
              <p>しかし私は、それを「取り戻す」と言いたいわけではない。懐古主義でも、政治的な主張でもない。ただ、「もし今の技術と知識を持ちながら、古い知恵と関わったら何が起きるか」を知りたい。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="space-y-5 font-serif text-[16px] text-ink-60 leading-[1.9]">
              <p>思想 → 実践 → 記録 → 考察 → 提案。この流れがこのサイトの骨格だ。</p>
              <p>ノスタルジーとSF的想像力の間で、暮らしを再設計する。過去の知恵と未来の視点を重ね合わせることで、今この瞬間の実践が豊かになると信じている。</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-14 py-14">
        <ScrollReveal>
          <p className="font-serif text-[16px] text-ink-60 leading-[1.9] mb-8 max-w-lg">
            実践への参加・コラボレーション・メディア掲載などのご相談を歓迎します。
          </p>
          <Link href="/contact" className="btn-primary">
            お問い合わせはこちら →
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
