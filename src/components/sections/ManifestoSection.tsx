import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'

const domains = [
  { name: '食',       color: 'rgba(220, 90, 50, 0.38)',  cx: 50, cy: 22 },
  { name: '住',       color: 'rgba(60, 100, 180, 0.38)', cx: 82, cy: 50 },
  { name: '文化',     color: 'rgba(180, 145, 20, 0.36)', cx: 68, cy: 82 },
  { name: 'つながり', color: 'rgba(110, 70, 170, 0.36)', cx: 32, cy: 82 },
  { name: '経済',     color: 'rgba(30, 140, 120, 0.36)', cx: 18, cy: 50 },
]

const manifesto = [
  { num: '01', before: '', highlight: '農・食・住まい', after: 'を、自分の手に取り戻す。' },
  { num: '02', before: '消費ではなく、', highlight: '実践の記録', after: 'を残す。' },
  { num: '03', before: '地域と人を、物語ではなく', highlight: '現場で知る', after: '。' },
  { num: '04', before: '失敗も含めて、', highlight: '実験として捉える', after: '。' },
  { num: '05', before: '', highlight: '小さな選択の積み重ね', after: 'が、未来をつくる。' },
]

export default function ManifestoSection() {
  return (
    <section className="relative border-b border-border bg-surface overflow-hidden">
      <div className="relative z-10 px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">CONCEPT</div>
          <h2 className="font-mincho text-[1.45rem] mb-8">活動の構造</h2>
        </ScrollReveal>

        {/* Two-column on desktop: diagram left, manifesto right */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Venn diagram */}
          <ScrollReveal delay={60}>
            <div style={{ flex: '1 1 220px', maxWidth: 320 }}>
              <svg
                viewBox="0 0 100 100"
                width="100%"
                aria-label="活動領域の重なりを示す概念図"
                style={{ overflow: 'visible', display: 'block' }}
              >
                <defs>
                  {domains.map((d, i) => (
                    <radialGradient key={i} id={`grad-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={d.color.replace(/[\d.]+\)$/, '0.55)')} />
                      <stop offset="100%" stopColor={d.color.replace(/[\d.]+\)$/, '0.15)')} />
                    </radialGradient>
                  ))}
                </defs>

                {/* Domain circles — overlapping, semi-transparent */}
                {domains.map((d, i) => (
                  <circle
                    key={i}
                    cx={d.cx}
                    cy={d.cy}
                    r={28}
                    fill={`url(#grad-${i})`}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                ))}

                {/* Domain labels */}
                {domains.map((d, i) => {
                  // Position label toward outside
                  const angle = (i / domains.length) * 2 * Math.PI - Math.PI / 2
                  const lx = 50 + 44 * Math.cos(angle)
                  const ly = 50 + 44 * Math.sin(angle)
                  return (
                    <text
                      key={i}
                      x={lx} y={ly}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={5}
                      fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)"
                      opacity={0.8}
                    >
                      {d.name}
                    </text>
                  )
                })}

                {/* Center label */}
                <circle cx={50} cy={50} r={12}
                  fill="rgba(218, 240, 0, 0.5)"
                  stroke="var(--color-ink)"
                  strokeWidth={0.5}
                  strokeOpacity={0.3}
                />
                <text x={50} y={48} textAnchor="middle" dominantBaseline="middle"
                  fontSize={3.8} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">
                  実践する
                </text>
                <text x={50} y={53.5} textAnchor="middle" dominantBaseline="middle"
                  fontSize={3.8} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">
                  暮らし
                </text>
              </svg>
              <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mt-3 text-center">
                5つの領域が重なり合う実践の場
              </div>
            </div>
          </ScrollReveal>

          {/* Manifesto list */}
          <div style={{ flex: '2 1 220px' }}>
            <div className="divide-y divide-border border-t border-border">
              {manifesto.map(({ num, before, highlight, after }, i) => (
                <ScrollReveal key={num} delay={i * 60 + 100}>
                  <div className="flex items-start gap-4 py-4">
                    <div className="font-mono text-[8px] tracking-[0.12em] text-accent mt-1 shrink-0">{num}</div>
                    <div className="font-mincho leading-[1.75]" style={{ fontSize: '1.05rem' }}>
                      {before}<HighlightText delay={i * 60 + 250}>{highlight}</HighlightText>{after}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
