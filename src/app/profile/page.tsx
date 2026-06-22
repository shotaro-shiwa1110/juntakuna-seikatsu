import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = { title: 'PROFILE | 巡拓な生活' }

export default function ProfilePage() {
  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">PROFILE</div>
        <h1 className="font-mincho text-[36px] mb-2">このサイトについて</h1>
        <div className="font-mono text-[8px] tracking-[0.12em] text-ink-30">FIELD_NOTE / PROFILE_001</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">VISION</div>
          <h2 className="font-mincho text-[24px] leading-[1.6] mb-6">
            日本の暮らしを、<br />もう一度自分の手に取り戻す。
          </h2>
          <div className="space-y-6 font-serif text-body text-ink-60">
            <p>農・食・住まい・文化・地域。これらはかつて、すべて「日常」だった。しかし今、多くの人にとってそれらは「遠いもの」になってしまっている。</p>
            <p>私はそれを嘆くのではなく、実際に手を動かして確かめたい。どこまで自分でできるのか。どこで他者を必要とするのか。その境界線を、実践を通じて探っている。</p>
            <p>このサイトは、その過程の記録である。</p>
          </div>
        </div>
        <div className="p-10 md:p-14">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">ABOUT</div>
          <ImagePlaceholder label="[ARCHIVE PHOTO PLACEHOLDER — プロフィール写真]" className="h-[200px] mb-6" />
          <div className="space-y-4 font-serif text-body text-ink-60">
            <p>1990年代生まれ。都市と地方を行き来しながら、暮らしの実験を続けている。</p>
            <p>ウェブ制作を生業としながら、農・発酵・空き家・地域コミュニティに関わる実践を記録している。</p>
          </div>
        </div>
      </div>

      {/* なぜこの活動をするか */}
      <div className="px-8 md:px-14 py-12 max-w-2xl">
        <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">WHY</div>
        <h2 className="font-mincho text-[24px] mb-6">サイトの思想</h2>
        <div className="space-y-6 font-serif text-body text-ink-60">
          <p>グローバル化と資本主義の加速は、多くの豊かさをもたらした。同時に、失われたものもある。季節の食、地域の祭り、手仕事の時間、隣人との関係。</p>
          <p>しかし私は、それを「取り戻す」と言いたいわけではない。懐古主義でも、政治的な主張でもない。ただ、「もし今の技術と知識を持ちながら、古い知恵と関わったら何が起きるか」を知りたい。</p>
          <p>思想 → 実践 → 記録 → 考察 → 提案。この流れがこのサイトの骨格だ。</p>
        </div>
      </div>

      <div className="border-t border-border px-8 md:px-14 py-8">
        <Link href="/contact" className="font-mono text-[8px] tracking-[0.15em] text-ink hover:text-accent transition-colors border border-ink px-6 py-3 inline-block hover:border-accent">
          CONTACT →
        </Link>
      </div>
    </div>
  )
}
