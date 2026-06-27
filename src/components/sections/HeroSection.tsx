import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'
import HighlightText from '@/components/ui/HighlightText'

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'relative', zIndex: 10, padding: '5rem 3rem 4rem' }}>

        <ScrollReveal delay={0}>
          <h1 style={{ fontFamily: 'var(--font-mincho)', lineHeight: 1.2, marginBottom: '2rem' }}>
            <span style={{ display: 'block', lineHeight: 1.05 }}>
              <span style={{ fontSize: '3.6rem', fontWeight: 400 }}>未来</span>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-ink-60)', verticalAlign: 'middle' }}>
                の豊かさを
              </span>
            </span>
            <span style={{ display: 'block', marginTop: '0.6em', lineHeight: 1.2 }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--color-ink-60)', marginRight: '0.2em' }}>
                今の
              </span>
              <span style={{
                fontSize: 'calc(1.8rem + 4px)',
                fontWeight: 400,
                border: '1px solid var(--color-ink)',
                padding: '0.05em 0.25em',
                display: 'inline-block',
                lineHeight: 1.25,
                background: 'rgba(255,255,255,0.18)',
              }}>
                暮らしからつくる
              </span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="body-text" style={{ maxWidth: '28rem', marginBottom: '2.5rem' }}>
            <HighlightText>農・食・住まい・文化・地域</HighlightText>との関わりを通じて、
            これからの豊かな暮らし方を考え、実践・発信するメディアサイト。
            <HighlightText delay={300}>小さな暮らしのアクションが、日本の未来をつくる</HighlightText>。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={360}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
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
