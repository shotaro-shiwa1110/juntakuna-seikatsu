import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BtnArrow from '@/components/ui/BtnArrow'
import HighlightText from '@/components/ui/HighlightText'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">

        <ScrollReveal delay={0}>
          <h1 className="hero-h1">
            <span className="hero-h1-line1">
              <span className="hero-h1-big">未来</span>
              <span className="hero-h1-small">の豊かさを</span>
            </span>
            <span className="hero-h1-line2">
              <span className="hero-h1-prefix">今の</span>
              <span className="hero-h1-box">暮らしからつくる</span>
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="body-text hero-lead">
            <HighlightText>農・食・住まい・文化・地域</HighlightText>との関わりを通じて、
            これからの豊かな暮らし方を考え、実践・発信するメディアサイト。
            <HighlightText delay={300}>小さな暮らしのアクションが、日本の未来をつくる</HighlightText>。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={360}>
          <div className="hero-btns">
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
