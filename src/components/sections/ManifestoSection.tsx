import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'
import GradientBlob from '@/components/ui/GradientBlob'

const domains = [
  { id: '01', name: '食', nameEn: 'FOOD', x: 50, y: 10 },
  { id: '02', name: '住', nameEn: 'HOME', x: 90, y: 56 },
  { id: '03', name: '文化', nameEn: 'CULTURE', x: 72, y: 96 },
  { id: '04', name: '経済', nameEn: 'ECONOMY', x: 28, y: 96 },
  { id: '05', name: 'つながり', nameEn: 'COMMUNITY', x: 10, y: 56 },
]

const manifesto: { num: string; before: string; highlight: string; after: string }[] = [
  { num: '01', before: '', highlight: '農・食・住まい', after: 'を、自分の手に取り戻す。' },
  { num: '02', before: '消費ではなく、', highlight: '実践の記録', after: 'を残す。' },
  { num: '03', before: '地域と人を、物語ではなく', highlight: '現場で知る', after: '。' },
  { num: '04', before: '失敗も含めて、', highlight: '実験として捉える', after: '。' },
  { num: '05', before: '', highlight: '小さな選択の積み重ね', after: 'が、未来をつくる。' },
]

const CENTER = { x: 50, y: 53 }

export default function ManifestoSection() {
  return (
    <section className="relative border-b border-border bg-surface overflow-hidden">
      <GradientBlob
        blobs={[
          { color: '#e8643a', size: 320, top: -60, left: -80, opacity: 0.2, blur: 90 },
          { color: '#4a6fa5', size: 260, bottom: -40, right: -60, opacity: 0.18, blur: 80 },
        ]}
      />

      <div className="relative z-10 px-6 py-14 md:px-12">
        <ScrollReveal>
          <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">CONCEPT</div>
          <h2 className="font-mincho text-[1.45rem] mb-2">活動の構造</h2>
          <p className="font-serif text-[0.875rem] text-ink-60 mb-10">
            5つの領域を軸に、暮らしを実践・記録・発信する。
          </p>
        </ScrollReveal>

        {/* Concept diagram */}
        <ScrollReveal delay={80}>
          <div className="relative w-full mx-auto" style={{ maxWidth: 340, paddingBottom: '90%' }}>
            <svg
              viewBox="0 0 100 105"
              className="absolute inset-0 w-full h-full"
              aria-label="活動領域コンセプトマップ"
              style={{ overflow: 'visible' }}
            >
              {/* Dot grid */}
              {Array.from({ length: 10 }, (_, row) =>
                Array.from({ length: 11 }, (_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 10} cy={5 + row * 10} r={0.3} fill="var(--color-border)" />
                ))
              )}

              {/* Spokes */}
              {domains.map((d) => (
                <line
                  key={d.id}
                  x1={CENTER.x} y1={CENTER.y} x2={d.x} y2={d.y}
                  stroke="var(--color-border)" strokeWidth={0.5} strokeDasharray="2 2"
                />
              ))}

              {/* Domain nodes */}
              {domains.map((d) => (
                <g key={d.id}>
                  <circle cx={d.x} cy={d.y} r={9} fill="var(--color-base)" stroke="var(--color-border)" strokeWidth={0.7} />
                  <text x={d.x} y={d.y - 1.5} textAnchor="middle" dominantBaseline="middle"
                    fontSize={4} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">
                    {d.name}
                  </text>
                  <text x={d.x} y={d.y + 4} textAnchor="middle" dominantBaseline="middle"
                    fontSize={2.2} fontFamily="'Space Mono', monospace" fill="var(--color-ink-30)">
                    {d.nameEn}
                  </text>
                </g>
              ))}

              {/* Center */}
              <circle cx={CENTER.x} cy={CENTER.y} r={12} fill="var(--color-accent)" />
              <text x={CENTER.x} y={CENTER.y - 3} textAnchor="middle" dominantBaseline="middle"
                fontSize={3.8} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">実践する
              </text>
              <text x={CENTER.x} y={CENTER.y + 3.5} textAnchor="middle" dominantBaseline="middle"
                fontSize={3.8} fontFamily="'Shippori Mincho', serif" fill="var(--color-ink)">暮らし
              </text>

              {/* Corner marks */}
              <g stroke="var(--color-accent)" strokeWidth={0.6} opacity={0.4}>
                <line x1="1" y1="5" x2="5" y2="5" /><line x1="1" y1="5" x2="1" y2="9" />
                <line x1="99" y1="5" x2="95" y2="5" /><line x1="99" y1="5" x2="99" y2="9" />
                <line x1="1" y1="103" x2="5" y2="103" /><line x1="1" y1="103" x2="1" y2="99" />
                <line x1="99" y1="103" x2="95" y2="103" /><line x1="99" y1="103" x2="99" y2="99" />
              </g>

              <text x="2" y="3.5" fontSize="2" fontFamily="'Space Mono', monospace" fill="var(--color-ink-30)">
                39.5°N 141.0°E
              </text>
            </svg>
          </div>
        </ScrollReveal>

        {/* Manifesto list */}
        <div className="mt-10 divide-y divide-border border-t border-border">
          {manifesto.map(({ num, before, highlight, after }, i) => (
            <ScrollReveal key={num} delay={i * 60}>
              <div className="flex items-start gap-5 py-5">
                <div className="font-mono text-[8px] tracking-[0.12em] text-accent mt-1 shrink-0">{num}</div>
                <div className="font-mincho text-[1.1rem] leading-[1.7] text-ink">
                  {before}<HighlightText delay={i * 60 + 200}>{highlight}</HighlightText>{after}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
