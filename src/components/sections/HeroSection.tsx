import Link from 'next/link'
import NetworkGraph from '@/components/ui/NetworkGraph'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border min-h-[600px]">
      {/* LEFT */}
      <div className="flex flex-col justify-between p-8 md:p-14 border-b md:border-b-0 md:border-r border-border">
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
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
            <h1 className="font-mincho text-[40px] md:text-[54px] leading-[1.4] tracking-[0.02em] mb-8">
              未来の暮らしは、<br />
              遠い場所じゃない。<br />
              日々の選択の先にある。
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-serif text-[17px] leading-[1.95] text-ink-60 max-w-md mb-10">
              農・食・住まい・文化・地域との関わりを通じて、
              これからの豊かな暮らしを実践し記録するプロジェクト。
              個人の暮らしから、社会のあり方を問い直す。
              小さな実験の積み重ねが、未来をつくると信じて。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                プロジェクトを見る →
              </Link>
              <Link href="/log" className="btn-secondary">
                実践録を読む
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
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
        </ScrollReveal>
      </div>

      {/* RIGHT — Network Graph */}
      <div className="relative flex items-center justify-center p-6 md:p-10 bg-surface min-h-[400px]">
        {/* Corner annotation — top right */}
        <div className="absolute top-5 right-5 text-right z-10">
          <div className="code-tag text-right">
            <div>ID: JUNTAKUNA_001</div>
            <div>LAT: 39.5010°N</div>
            <div>LNG: 141.0010°E</div>
          </div>
          <div className="font-mono text-[6px] tracking-[0.12em] text-ink-30 mt-3 leading-[2.2] text-right">
            PROJECT<br />JUNTAKUNA<br />SEIKATSU<br />2026–
          </div>
        </div>

        {/* Network graph */}
        <div className="w-full max-w-[320px] aspect-square">
          <NetworkGraph />
        </div>
      </div>
    </section>
  )
}
