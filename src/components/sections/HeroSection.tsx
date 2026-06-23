import Link from 'next/link'
import NetworkGraph from '@/components/ui/NetworkGraph'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'
import SFMark from '@/components/ui/SFMark'
import HighlightText from '@/components/ui/HighlightText'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 border-b border-border min-h-[600px]">
      {/* LEFT */}
      <div className="flex flex-col justify-between p-8 border-b border-border">
        <div>
            <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <SFMark size={52} className="sf-float opacity-70" />
              <div className="code-tag">
                <div>FIELD NOTE / 001</div>
                <div>PROJECT: JUNTAKUNA SEIKATSU 2026–</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
                  STATUS_ACTIVE
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-mincho text-[2.4rem] leading-[1.4] tracking-[0.02em] mb-8">
              未来の暮らしは、<br />
              遠い場所じゃない。<br />
              日々の選択の先にある。
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-serif text-[1.13rem] leading-[1.95] text-ink-60 max-w-md mb-10">
              <HighlightText>農・食・住まい・文化・地域</HighlightText>との関わりを通じて、
              これからの豊かな暮らしを実践し記録するプロジェクト。
              個人の暮らしから、社会のあり方を問い直す。
              <HighlightText delay={300}>小さな実験の積み重ねが、未来をつくる</HighlightText>と信じて。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                プロジェクトを見る <BtnArrow />
              </Link>
              <Link href="/log" className="btn-secondary">
                実践録を読む
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* <ScrollReveal delay={400}>
          <div className="flex gap-10 mt-12 pt-8 border-t border-border">
            {[
              { value: '39.5010°N', label: '観測緯度' },
              { value: '141.0010°E', label: '観測経度' },
              { value: '2026', label: '開始年' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-mono text-[12px] tracking-[0.04em] text-ink">{value}</div>
                <div className="font-mono text-[8px] tracking-[0.12em] text-ink-30 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal> */}
      </div>

    </section>
  )
}
