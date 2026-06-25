import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'

// 5 domains — pentagon arrangement matching the site's 5 axes
const DOMAINS = [
  { label: '食',           angle: -90 },
  { label: '住',           angle: -18 },
  { label: '経済',         angle:  54 },
  { label: 'つながり',     angle: 126 },
  { label: '文化',         angle: 198 },
]

const CX = 50
const CY = 50
const R_CIRCLE = 28   // radius of each domain circle
const R_ORBIT = 22    // distance from center to each circle center

function domainCenter(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    cx: CX + R_ORBIT * Math.cos(rad),
    cy: CY + R_ORBIT * Math.sin(rad),
  }
}

function labelPos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  const dist = R_ORBIT + R_CIRCLE + 7
  return {
    x: CX + dist * Math.cos(rad),
    y: CY + dist * Math.sin(rad),
  }
}

const manifesto = [
  { num: '01', before: '', highlight: '農・食・住まい', after: 'を、自分の手に取り戻す。' },
  { num: '02', before: '消費ではなく、', highlight: '実践の記録', after: 'を残す。' },
  { num: '03', before: '地域と人を、物語ではなく', highlight: '現場で知る', after: '。' },
  { num: '04', before: '失敗も含めて、', highlight: '実験として捉える', after: '。' },
  { num: '05', before: '', highlight: '小さな選択の積み重ね', after: 'が、未来をつくる。' },
]

export default function ManifestoSection() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="relative z-10 px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">CONCEPT</div>
          <h2 className="font-mincho text-[1.45rem] mb-8">コンセプト</h2>
        </ScrollReveal>

        {/* 40% diagram / 60% text */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Venn diagram — 5 domains, dashed outlines, gradient blobs behind */}
          <ScrollReveal delay={60} style={{ flex: '2 1 200px', maxWidth: '42%', minWidth: 180 }}>
            <svg
              viewBox="0 0 100 100"
              width="100%"
              aria-label="5つの活動領域の重なりを示す概念図"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <defs>
                <radialGradient id="venn-blob-a" cx="45%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="rgba(200,100,50,0.5)" />
                  <stop offset="100%" stopColor="rgba(200,100,50,0)" />
                </radialGradient>
                <radialGradient id="venn-blob-b" cx="60%" cy="60%" r="60%">
                  <stop offset="0%" stopColor="rgba(74,58,122,0.4)" />
                  <stop offset="100%" stopColor="rgba(74,58,122,0)" />
                </radialGradient>
              </defs>

              {/* Soft gradient blobs in the background */}
              <ellipse cx="40" cy="38" rx="38" ry="36" fill="url(#venn-blob-a)" />
              <ellipse cx="58" cy="58" rx="36" ry="34" fill="url(#venn-blob-b)" />

              {/* 5 domain circles — dashed outline only */}
              {DOMAINS.map((d, i) => {
                const { cx, cy } = domainCenter(d.angle)
                return (
                  <circle
                    key={i}
                    cx={cx} cy={cy} r={R_CIRCLE}
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth={0.5}
                    strokeDasharray="1.8 2.2"
                    strokeOpacity={0.4}
                  />
                )
              })}

              {/* Center circle — where all domains meet */}
              <circle cx={CX} cy={CY} r={7}
                fill="rgba(218,240,0,0.45)"
                stroke="var(--color-ink)"
                strokeWidth={0.4}
                strokeOpacity={0.35}
              />
              <text x={CX} y={CY} textAnchor="middle" dominantBaseline="middle"
                fontSize={3.2} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">
                実践
              </text>

              {/* Domain labels with leader lines */}
              {DOMAINS.map((d, i) => {
                const { cx, cy } = domainCenter(d.angle)
                const lp = labelPos(d.angle)
                const anchor = lp.x < CX - 5 ? 'end' : lp.x > CX + 5 ? 'start' : 'middle'
                return (
                  <g key={i}>
                    <line
                      x1={cx} y1={cy}
                      x2={lp.x} y2={lp.y}
                      stroke="var(--color-ink)"
                      strokeWidth={0.35}
                      strokeOpacity={0.35}
                    />
                    <text
                      x={lp.x} y={lp.y}
                      textAnchor={anchor as 'start'|'end'|'middle'}
                      dominantBaseline="middle"
                      fontSize={4.2}
                      fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)"
                      opacity={0.75}
                    >
                      {d.label}
                    </text>
                  </g>
                )
              })}
            </svg>
            <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mt-2 text-center">
              5つの領域が重なる実践の場
            </div>
          </ScrollReveal>

          {/* Manifesto list — 60% */}
          <div style={{ flex: '3 1 240px' }}>
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
