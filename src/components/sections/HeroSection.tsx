import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'
import SFMark from '@/components/ui/SFMark'
import HighlightText from '@/components/ui/HighlightText'
import GradientBlob from '@/components/ui/GradientBlob'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <GradientBlob
        blobs={[
          { color: '#e8643a', size: 380, top: -120, right: -80, opacity: 0.32, blur: 90 },
          { color: '#c0a000', size: 280, bottom: -60, left: -60, opacity: 0.28, blur: 80 },
          { color: '#4a6fa5', size: 220, top: '40%', left: '30%', opacity: 0.2, blur: 70 },
        ]}
      />

      <div className="relative z-10 p-8">
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
          <h1 className="font-mincho mb-8" style={{ lineHeight: 1.2 }}>
            <span style={{ display: 'block', lineHeight: 1.05 }}>
              <span style={{ fontSize: '3.6rem', fontWeight: 400 }}>未来</span>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-ink-60)', verticalAlign: 'middle' }}>
                の豊かさを
              </span>
            </span>
            <span style={{ display: 'block', marginTop: '0.15em', lineHeight: 1.15 }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-ink-60)', verticalAlign: 'baseline' }}>
                今の
              </span>
              <span style={{
                fontSize: 'calc(2rem + 6px)',
                fontWeight: 400,
                verticalAlign: 'baseline',
                border: '1px solid var(--color-ink)',
                padding: '0.05em 0.25em',
                display: 'inline-block',
                lineHeight: 1.25,
              }}>
                暮らしからつくる
              </span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-serif text-[1.1rem] leading-[1.95] text-ink-60 max-w-md mb-10">
            <HighlightText>農・食・住まい・文化・地域</HighlightText>との関わりを通じて、
            これからの豊かな暮らし方を考え、実践・発信するメディアサイト。
            <HighlightText delay={300}>小さな暮らしのアクションが、日本の未来をつくる</HighlightText>。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="btn-primary">
              プロジェクトを見る <BtnArrow />
            </Link>
            <Link href="/log" className="btn-secondary">
              実践録を読む <BtnArrow />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
