import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'

const DOMAINS = [
  { label: '食',       angle: -90 },
  { label: '住',       angle: -18 },
  { label: '経済',     angle:  54 },
  { label: 'つながり', angle: 126 },
  { label: '文化',     angle: 198 },
]

const CX = 50
const CY = 50
const R_CIRCLE = 28
const R_ORBIT = 22

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
    <section className="manifesto-section">
      <div className="manifesto-section-inner">

        <ScrollReveal>
          <div className="manifesto-section-intro">
            <div className="section-label">CONCEPT</div>
            <h2 className="section-heading">コンセプト</h2>
          </div>
        </ScrollReveal>

        <div className="manifesto-layout">

          <ScrollReveal delay={60} className="manifesto-diagram">
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

              <ellipse cx="40" cy="38" rx="38" ry="36" fill="url(#venn-blob-a)" />
              <ellipse cx="58" cy="58" rx="36" ry="34" fill="url(#venn-blob-b)" />

              {DOMAINS.map((d, i) => {
                const { cx, cy } = domainCenter(d.angle)
                return (
                  <circle key={i} cx={cx} cy={cy} r={R_CIRCLE}
                    fill="none" stroke="var(--color-ink)" strokeWidth={0.5}
                    strokeDasharray="1.8 2.2" strokeOpacity={0.4}
                  />
                )
              })}

              <circle cx={CX} cy={CY} r={7}
                fill="rgba(218,240,0,0.45)"
                stroke="var(--color-ink)" strokeWidth={0.4} strokeOpacity={0.35}
              />
              <text x={CX} y={CY} textAnchor="middle" dominantBaseline="middle"
                fontSize={3.2} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">
                実践
              </text>

              {DOMAINS.map((d, i) => {
                const { cx, cy } = domainCenter(d.angle)
                const lp = labelPos(d.angle)
                const anchor = lp.x < CX - 5 ? 'end' : lp.x > CX + 5 ? 'start' : 'middle'
                return (
                  <g key={i}>
                    <line x1={cx} y1={cy} x2={lp.x} y2={lp.y}
                      stroke="var(--color-ink)" strokeWidth={0.35} strokeOpacity={0.35}
                    />
                    <text x={lp.x} y={lp.y}
                      textAnchor={anchor as 'start' | 'end' | 'middle'}
                      dominantBaseline="middle"
                      fontSize={4.2} fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)" opacity={0.75}
                    >
                      {d.label}
                    </text>
                  </g>
                )
              })}
            </svg>
            <div className="meta-text manifesto-caption">5つの領域が重なる実践の場</div>
          </ScrollReveal>

          <div className="manifesto-list">
            <div className="manifesto-list-inner">
              {manifesto.map(({ num, before, highlight, after }, i) => (
                <ScrollReveal key={num} delay={i * 60 + 100}>
                  <div className="manifesto-item">
                    <div className="manifesto-num">{num}</div>
                    <div className="manifesto-text">
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
