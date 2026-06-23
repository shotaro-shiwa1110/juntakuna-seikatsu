import ScrollReveal from '@/components/ui/ScrollReveal'
import HighlightText from '@/components/ui/HighlightText'
import SFMark from '@/components/ui/SFMark'

const domains = [
  { id: '01', name: '食', nameEn: 'FOOD', desc: '農・発酵・保存食', x: 50, y: 10 },
  { id: '02', name: '住', nameEn: 'HOME', desc: '空き家・古民家・DIY', x: 90, y: 56 },
  { id: '03', name: '文化', nameEn: 'CULTURE', desc: '祭り・工芸・歳時記', x: 72, y: 96 },
  { id: '04', name: '経済', nameEn: 'ECONOMY', desc: '交換・小商い・朝市', x: 28, y: 96 },
  { id: '05', name: 'つながり', nameEn: 'COMMUNITY', desc: '関係人口・協働', x: 10, y: 56 },
]

const CENTER = { x: 50, y: 53 }

const manifesto: { num: string; before: string; highlight: string; after: string }[] = [
  { num: '01', before: '', highlight: '農・食・住まい', after: 'を、自分の手に取り戻す。' },
  { num: '02', before: '消費ではなく、', highlight: '実践の記録', after: 'を残す。' },
  { num: '03', before: '地域と人を、物語ではなく', highlight: '現場で知る', after: '。' },
  { num: '04', before: '失敗も含めて、', highlight: '実験として捉える', after: '。' },
  { num: '05', before: '', highlight: '小さな選択の積み重ね', after: 'が、未来をつくる。' },
]

export default function ManifestoSection() {
  return (
    <section className="border-b border-border bg-surface overflow-hidden">
      <div className="grid grid-cols-1">

        {/* Left: concept diagram */}
        <div className="relative border-b border-border p-8 md:p-12 flex flex-col">
          <ScrollReveal>
            <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">CONCEPT MAP</div>
            <h2 className="font-mincho text-[1.45rem] mb-6">活動の地図</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {/* SVG fills the remaining space, no clipping */}
            <div className="relative w-full" style={{ paddingBottom: '92%' }}>
              <svg
                viewBox="0 0 100 105"
                className="absolute inset-0 w-full h-full"
                aria-label="活動領域コンセプトマップ"
                style={{ overflow: 'visible' }}
              >
                {/* Background dot grid */}
                {Array.from({ length: 10 }, (_, row) =>
                  Array.from({ length: 11 }, (_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={0 + col * 10}
                      cy={5 + row * 10}
                      r={0.35}
                      fill="var(--color-border)"
                    />
                  ))
                )}

                {/* Edges from center */}
                {domains.map((d) => (
                  <line
                    key={d.id}
                    x1={CENTER.x} y1={CENTER.y}
                    x2={d.x} y2={d.y}
                    stroke="var(--color-border)"
                    strokeWidth={0.5}
                    strokeDasharray="2 2"
                  />
                ))}

                {/* Domain nodes */}
                {domains.map((d) => (
                  <g key={d.id}>
                    <circle
                      cx={d.x} cy={d.y} r={8}
                      fill="var(--color-base)"
                      stroke="var(--color-border)"
                      strokeWidth={0.8}
                    />
                    <text
                      x={d.x} y={d.y - 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={4}
                      fontFamily="'Shippori Mincho', serif"
                      fill="var(--color-ink)"
                    >
                      {d.name}
                    </text>
                    <text
                      x={d.x} y={d.y + 3.8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={2.4}
                      fontFamily="'Space Mono', monospace"
                      fill="var(--color-ink-30)"
                    >
                      {d.nameEn}
                    </text>
                  </g>
                ))}

                {/* Center node */}
                <circle cx={CENTER.x} cy={CENTER.y} r={11} fill="var(--color-accent)" />
                <text
                  x={CENTER.x} y={CENTER.y - 2.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={4.2}
                  fontFamily="'Shippori Mincho', serif"
                  fill="var(--color-ink)"
                >
                  実践する
                </text>
                <text
                  x={CENTER.x} y={CENTER.y + 3.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={4.2}
                  fontFamily="'Shippori Mincho', serif"
                  fill="var(--color-ink)"
                >
                  暮らし
                </text>

                {/* Corner crosshairs */}
                <g stroke="var(--color-accent)" strokeWidth={0.7} opacity={0.5}>
                  <line x1="1" y1="5" x2="5" y2="5" /><line x1="1" y1="5" x2="1" y2="9" />
                  <line x1="99" y1="5" x2="95" y2="5" /><line x1="99" y1="5" x2="99" y2="9" />
                  <line x1="1" y1="103" x2="5" y2="103" /><line x1="1" y1="103" x2="1" y2="99" />
                  <line x1="99" y1="103" x2="95" y2="103" /><line x1="99" y1="103" x2="99" y2="99" />
                </g>

                {/* Coordinate annotation */}
                <text x="2" y="3.5" fontSize="2.2" fontFamily="'Space Mono', monospace" fill="var(--color-ink-30)">
                  39.5°N 141.0°E
                </text>
              </svg>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: manifesto */}
        <div className="p-8 md:p-12">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-1">
              <div>
                <div className="font-mono text-[8px] tracking-[0.25em] text-accent mb-1">MANIFESTO</div>
                <h2 className="font-mincho text-[1.45rem]">このプロジェクトの軸</h2>
              </div>
              <SFMark size={56} className="sf-float opacity-50 ml-auto shrink-0" />
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border border-t border-border">
            {manifesto.map(({ num, before, highlight, after }, i) => (
              <ScrollReveal key={num} delay={i * 60}>
                <div className="flex items-start gap-5 py-5">
                  <div className="font-mono text-[8px] tracking-[0.12em] text-accent mt-1 shrink-0">{num}</div>
                  <div className="font-mincho text-[1.13rem] leading-[1.7] text-ink">
                    {before}<HighlightText delay={i * 60 + 200}>{highlight}</HighlightText>{after}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
