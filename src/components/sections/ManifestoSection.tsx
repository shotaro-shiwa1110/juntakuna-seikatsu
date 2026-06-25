import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'

// 3 overlapping circles — outline only, gradient blobs behind
const CIRCLES = [
  { label: '生きる',  cx: 38, cy: 30 },
  { label: '作る',    cx: 62, cy: 30 },
  { label: '繋がる',  cx: 50, cy: 58 },
]

// Label anchor lines
const LABEL_ANCHORS = [
  { fromCx: 38, fromCy: 30, lx: 10,  ly: 10,  textX: 8,  textY: 7,  anchor: 'start' },
  { fromCx: 62, fromCy: 30, lx: 90,  ly: 10,  textX: 92, textY: 7,  anchor: 'end'   },
  { fromCx: 50, fromCy: 58, lx: 50,  ly: 92,  textX: 50, textY: 95, anchor: 'middle'},
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
    <section className="relative border-b border-border overflow-hidden">
      <div className="relative z-10 px-6 py-14">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">CONCEPT</div>
          <h2 className="font-mincho text-[1.45rem] mb-8">活動の構造</h2>
        </ScrollReveal>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Venn diagram — outline circles + gradient blobs behind */}
          <ScrollReveal delay={60}>
            <div style={{ flex: '1 1 220px', maxWidth: 320, position: 'relative' }}>
              <svg
                viewBox="0 0 100 100"
                width="100%"
                aria-label="活動領域の重なりを示す概念図"
                style={{ display: 'block', overflow: 'visible' }}
              >
                <defs>
                  {/* Gradient blobs as radial fills for background effect */}
                  <radialGradient id="blob-a" cx="40%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="rgba(200,100,50,0.55)" />
                    <stop offset="100%" stopColor="rgba(200,100,50,0)" />
                  </radialGradient>
                  <radialGradient id="blob-b" cx="60%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="rgba(74,58,122,0.45)" />
                    <stop offset="100%" stopColor="rgba(74,58,122,0)" />
                  </radialGradient>
                  <radialGradient id="blob-c" cx="50%" cy="65%" r="55%">
                    <stop offset="0%" stopColor="rgba(192,160,0,0.45)" />
                    <stop offset="100%" stopColor="rgba(192,160,0,0)" />
                  </radialGradient>
                </defs>

                {/* Gradient background blobs (behind circles) */}
                <ellipse cx="38" cy="30" rx="30" ry="30" fill="url(#blob-a)" />
                <ellipse cx="62" cy="30" rx="30" ry="30" fill="url(#blob-b)" />
                <ellipse cx="50" cy="58" rx="30" ry="30" fill="url(#blob-c)" />

                {/* Circle outlines — dashed */}
                {CIRCLES.map((c, i) => (
                  <circle
                    key={i}
                    cx={c.cx} cy={c.cy} r={28}
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth={0.5}
                    strokeDasharray="2 2.5"
                    strokeOpacity={0.45}
                  />
                ))}

                {/* Anchor lines + labels */}
                {LABEL_ANCHORS.map((a, i) => (
                  <g key={i}>
                    <line
                      x1={CIRCLES[i].cx} y1={CIRCLES[i].cy}
                      x2={a.lx} y2={a.ly}
                      stroke="var(--color-ink)"
                      strokeWidth={0.4}
                      strokeOpacity={0.4}
                    />
                    <text
                      x={a.textX} y={a.textY}
                      textAnchor={a.anchor as 'start' | 'end' | 'middle'}
                      dominantBaseline="middle"
                      fontSize={4}
                      fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)"
                      opacity={0.7}
                      fontStyle="italic"
                    >
                      {CIRCLES[i].label}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mt-3 text-center">
                3つの領域が重なる実践の場
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
